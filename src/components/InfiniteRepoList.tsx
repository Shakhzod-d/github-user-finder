import { useState, useEffect, useRef, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import { RepoList } from "./RepoList";
import { useGithubRepos } from "../hooks/useGithubQuery";
import type { IRepo } from "../types";
import { Loader } from "./Loader";

interface InfiniteRepoListProps {
  username: string;
}

export const InfiniteRepoList = ({ username }: InfiniteRepoListProps) => {
  const [page, setPage] = useState(1);
  const [allRepos, setAllRepos] = useState<IRepo[]>([]);

  const {
    data: repos = [],
    isFetching,
    error,
  } = useGithubRepos(username, page);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (repos.length > 0) {
      setAllRepos((prev) => {
        const existingIds = new Set(prev.map((r) => r.id));
        const newOnes = repos.filter((r) => !existingIds.has(r.id));
        return [...prev, ...newOnes];
      });
    }
  }, [repos]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && repos.length > 0) {
        setPage((prev) => prev + 1);
      }
    },
    [isFetching, repos.length]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    });
    const current = loaderRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [handleObserver]);

  if (error)
    return (
      <Typography color="error">
        Failed to load repositories: {error.message}
      </Typography>
    );

  return (
    <Box>
      <RepoList repos={allRepos} />
      <div ref={loaderRef} />
      {isFetching && <Loader />}
    </Box>
  );
};
