import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { IRepo } from "../types";

interface IRepoList {
  repos: IRepo[];
}

export const RepoList = ({ repos }: IRepoList) => {
  if (!repos || repos.length === 0) {
    return <Typography>No repositories found.</Typography>;
  }

  return (
    <Box>
      <List>
        {repos.map((r) => (
          <div key={r.id}>
            <ListItem
              component="a"
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <ListItemText
                primary={<Typography variant="subtitle1">{r.name}</Typography>}
                secondary={r.description ?? "No description"}
              />
              <ListItemSecondaryAction
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <StarIcon fontSize="small" />
                <Typography variant="body2">{r.stargazers_count}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};
