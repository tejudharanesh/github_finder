const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export async function searchUser(text) {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  return items;
}

export async function getUser(login) {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 4000) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
}

export async function getUserRepos(login) {
  const params = new URLSearchParams({
    per_page: 10,
    sort: "created",
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
}
