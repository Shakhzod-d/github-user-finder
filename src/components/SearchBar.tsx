import { TextField } from "@mui/material";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { useSearchStore } from "../store";

export const SearchBar = () => {
  const { setUsername } = useSearchStore();
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input);

  useEffect(() => {
    setUsername(debouncedInput.trim());
  }, [debouncedInput, setUsername]);

  return (
    <TextField
      label="Enter GitHub username"
      variant="outlined"
      fullWidth
      value={input}
      onChange={(e) => setInput(e.target.value)}
      sx={{ mb: 4 }}
    />
  );
};
