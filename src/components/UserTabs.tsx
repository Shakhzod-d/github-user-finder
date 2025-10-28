import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import type { IUser } from "../types";
import { InfiniteRepoList } from "./InfiniteRepoList";

interface UserTabsProps {
  user: IUser;
  isLoading?: boolean;
  error?: Error | null;
}

export const UserTabs = ({ user, isLoading, error }: UserTabsProps) => {
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="GitHub user tabs"
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        <Tab label="Repositories" />
        <Tab label="About" />
      </Tabs>

      {tab === 0 && (
        <Box>
          {isLoading ? (
            <Typography>Loading repositories...</Typography>
          ) : error ? (
            <Typography color="error">{error.message}</Typography>
          ) : (
            <InfiniteRepoList username={user.login} />
          )}
        </Box>
      )}

      {tab === 1 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            About {user.name || user.login}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {user.bio || "No bio provided."}
          </Typography>
          <Typography variant="body2">
            Location: {user.location || "-"}
          </Typography>
          <Typography variant="body2">
            Company: {user.company || "-"}
          </Typography>
          <Typography variant="body2">Followers: {user.followers}</Typography>
          <Typography variant="body2">Following: {user.following}</Typography>
        </Box>
      )}
    </Box>
  );
};
