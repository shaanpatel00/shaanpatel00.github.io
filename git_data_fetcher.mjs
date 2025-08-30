import fetch from "node-fetch";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const query_pr = {
  query: `
	query {
	  user(login: "${openSource.githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query{

		user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

	}`,
};

const query_org = {
  query: `query{
	user(login: "${openSource.githubUserName}") {
	    repositoriesContributedTo(last: 100){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
};

const query_pinned_projects = {
  query: `
	query { 
	  user(login: "${openSource.githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};
async function fetchGitHubAPI(query, description) {
  console.log(`Fetching ${description}...`);
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(
        `GitHub API HTTP Error for ${description}: ${response.status} ${response.statusText}`
      );
      console.error("Response body:", JSON.stringify(data, null, 2));
      return null;
    }

    if (data.errors) {
      console.error(
        `GitHub API GraphQL Error for ${description}:`,
        JSON.stringify(data.errors, null, 2)
      );
      return null;
    }

    console.log(`Successfully fetched ${description}.`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch or parse ${description}:`, error);
    return null;
  }
}

async function fetchAndProcessPRs() {
  const prResponse = await fetchGitHubAPI(query_pr, "Pull Request Data");
  if (prResponse && prResponse.data.user) {
    const cropped = { data: [] };
    cropped["data"] = prResponse.data.user.pullRequests.nodes;

    let open = 0,
      closed = 0,
      merged = 0;
    for (const pr of cropped.data) {
      if (pr.state === "OPEN") open++;
      else if (pr.state === "MERGED") merged++;
      else closed++;
    }

    cropped.open = open;
    cropped.closed = closed;
    cropped.merged = merged;
    cropped.totalCount = cropped.data.length;

    try {
      await fs.writeFile(
        "./src/shared/opensource/pull_requests.json",
        JSON.stringify(cropped, null, 2)
      );
      console.log("pull_requests.json successfully written.\n");
    } catch (err) {
      console.error("Error writing pull_requests.json:", err);
    }
  }
}

async function fetchAndProcessIssues() {
  const issueResponse = await fetchGitHubAPI(query_issue, "Issues Data");
  if (issueResponse && issueResponse.data.user) {
    const cropped = { data: [] };
    cropped["data"] = issueResponse.data.user.issues.nodes;

    let open = 0,
      closed = 0;
    for (const issue of cropped.data) {
      if (issue.closed === false) open++;
      else closed++;
    }

    cropped.open = open;
    cropped.closed = closed;
    cropped.totalCount = cropped.data.length;

    try {
      await fs.writeFile(
        "./src/shared/opensource/issues.json",
        JSON.stringify(cropped, null, 2)
      );
      console.log("issues.json successfully written.\n");
    } catch (err) {
      console.error("Error writing issues.json:", err);
    }
  }
}

async function fetchAndProcessOrgs() {
  const orgResponse = await fetchGitHubAPI(
    query_org,
    "Contributed Organization Data"
  );
  if (orgResponse && orgResponse.data.user) {
    const orgs = orgResponse.data.user.repositoriesContributedTo.nodes;
    const newOrgs = { data: [] };
    const seenOrgs = new Set();

    for (const org of orgs) {
      const owner = org.owner;
      if (owner.__typename === "Organization" && !seenOrgs.has(owner.login)) {
        newOrgs.data.push(owner);
        seenOrgs.add(owner.login);
      }
    }

    try {
      await fs.writeFile(
        "./src/shared/opensource/organizations.json",
        JSON.stringify(newOrgs, null, 2)
      );
      console.log("organizations.json successfully written.\n");
    } catch (err) {
      console.error("Error writing organizations.json:", err);
    }
  }
}

async function fetchAndProcessPinnedProjects() {
  const pinnedResponse = await fetchGitHubAPI(
    query_pinned_projects,
    "Pinned Projects Data"
  );
  if (pinnedResponse && pinnedResponse.data.user) {
    const projects = pinnedResponse.data.user.pinnedItems.nodes;
    const newProjects = { data: [] };

    for (const project of projects) {
      const langobjs = project.languages.nodes;
      const newLangobjs = [];
      for (const lang of langobjs) {
        if (lang.name in languages_icons) {
          newLangobjs.push({
            name: lang.name,
            iconifyClass: languages_icons[lang.name],
          });
        }
      }
      project.languages = newLangobjs;
      newProjects.data.push(project);
    }

    try {
      await fs.writeFile(
        "./src/shared/opensource/projects.json",
        JSON.stringify(newProjects, null, 2)
      );
      console.log("projects.json successfully written.\n");
    } catch (err) {
      console.error("Error writing projects.json:", err);
    }
  }
}

async function main() {
  if (!openSource.githubConvertedToken || !openSource.githubUserName) {
    console.error(
      "Error: GITHUB_TOKEN and GITHUB_USERNAME environment variables are not set."
    );
    console.error(
      "Please create a .env file in the root directory with these values."
    );
    return;
  }

  try {
    await fs.mkdir("./src/shared/opensource", { recursive: true });
  } catch (err) {
    console.error("Error creating directory ./src/shared/opensource:", err);
    return;
  }

  await Promise.all([
    fetchAndProcessPRs(),
    fetchAndProcessIssues(),
    fetchAndProcessOrgs(),
    fetchAndProcessPinnedProjects(),
  ]);
}

main();
