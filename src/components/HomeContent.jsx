import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { SearchContext } from "./SearchContext";

export const HomeContent = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1">
        Medimap TVMaze Coding Exercise
      </Typography>
      <SearchBar />
      <div style={{ marginTop: "120px" }} />
      {searchResults?.length ? <SearchResults tvShows={searchResults} /> : null}
    </Box>
  );
};
