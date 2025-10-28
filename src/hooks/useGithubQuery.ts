import { useQuery } from "@tanstack/react-query";

import { getUserProfile, getUserRepos } from "../services";
import type { IRepo, IUser } from "../types";
import {
  CACHE_EXPIRATION_MS_5_MIN,
  getCache,
  GITHUB_REPOS_CACHE_KEY,
  GITHUB_USER_CACHE_KEY,
} from "../utils";

export const useGithubUser = (username: string) =>
  useQuery<IUser, Error>({
    queryKey: ["github-user", username],
    queryFn: () => getUserProfile(username),
    enabled: !!username,
    staleTime: CACHE_EXPIRATION_MS_5_MIN,
    gcTime: CACHE_EXPIRATION_MS_5_MIN,
    initialData: () => getCache<IUser>(`${GITHUB_USER_CACHE_KEY}${username}`),
  });

export const useGithubRepos = (username: string, page_counter: number = 1) =>
  useQuery<IRepo[], Error>({
    queryKey: ["github-repos", username, page_counter],
    queryFn: () => getUserRepos(username, page_counter),
    enabled: !!username,
    staleTime: CACHE_EXPIRATION_MS_5_MIN,
    gcTime: CACHE_EXPIRATION_MS_5_MIN,
    initialData: () =>
      getCache<IRepo[]>(
        `${GITHUB_REPOS_CACHE_KEY}${username}_page${page_counter}`
      ),
  });
