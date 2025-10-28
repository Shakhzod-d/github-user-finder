import { Container, Typography } from "@mui/material";
import { useSearchStore } from "../store/useSearchStore";
import {
  SearchBar,
  CustomGrid,
  Loader,
  ProfileCard,
  UserTabs,
} from "../components";

import { useGithubUser } from "../hooks/useGithubQuery";

export const Home = () => {
  const username = useSearchStore((s) => s.username);
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGithubUser(username);

  return (
    <Container sx={{ py: 4 }}>
      <CustomGrid columns={{ xs: "1fr" }} sx={{ mb: 4 }}>
        <SearchBar />
      </CustomGrid>

      {userLoading && <Loader />}

      {!!user && user?.message && (
        <Typography
          color="error"
          sx={{ textAlign: "center", mt: 2, fontWeight: 500 }}
        >
          {user.message}
        </Typography>
      )}

      {!!user && !user?.message && (
        <CustomGrid columns={{ xs: "1fr", md: "350px 1fr" }} gap={3}>
          <ProfileCard user={user} />
          <UserTabs
            user={user}
            isLoading={userLoading}
            error={userError as Error}
          />
        </CustomGrid>
      )}
    </Container>
  );
};
