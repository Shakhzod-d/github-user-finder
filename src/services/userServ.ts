import {
  GITHUB_REPOS_CACHE_KEY,
  GITHUB_USER_CACHE_KEY,
  ITEMS_PER_PAGE,
  setCache,
} from "../utils";

const BASE_URL = "https://api.github.com/users";

export const getUserProfile = async (username: string) => {
  const data = await (await fetch(`${BASE_URL}/${username}`)).json();
  setCache(`${GITHUB_USER_CACHE_KEY}${username}`, data);
  return data;
};

export const getUserRepos = async (username: string, page_counter: number) => {
  const cacheKey = `${GITHUB_REPOS_CACHE_KEY}${username}_page${page_counter}`;

  const fullUrl = `${BASE_URL}/${username}/repos${
    !!page_counter
      ? `?per_page=${ITEMS_PER_PAGE.SMALL}&page=${page_counter}`
      : ""
  }`;

  const data = await (await fetch(fullUrl)).json();

  setCache(cacheKey, data);

  return data;
};
