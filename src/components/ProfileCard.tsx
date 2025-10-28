import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import type { IUser } from "../types";

interface IProfileCard {
  user: IUser;
}

export const ProfileCard = ({ user }: IProfileCard) => (
  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src={user.avatar_url}
          alt={user.name}
          sx={{ width: 80, height: 80 }}
        />
        <div>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="h6">
            Public repositories: {user.public_repos || 0}
          </Typography>
          <Typography color="text.secondary">@{user.login}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {user.bio}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Followers: {user.followers} • Following: {user.following}
          </Typography>
          <Link href={user.html_url} target="_blank" rel="noopener">
            View on GitHub
          </Link>
        </div>
      </Stack>
    </CardContent>
  </Card>
);
