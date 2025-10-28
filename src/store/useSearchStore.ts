import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  username: string;
  setUsername: (name: string) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (name) => set({ username: name }),
    }),
    {
      name: "user-search-storage",
    }
  )
);
