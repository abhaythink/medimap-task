import React, { useCallback, useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import { SearchContext } from "./SearchContext";

export const SearchBar = () => {
  const { search } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleInputChanged = useCallback((evt) => {
    const { value } = evt.target;
    setInput(value);
  }, []);

  const handleKeyPress = useCallback(
    (evt) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        search(input);
      }
    },
    [search, input]
  );

  const handleSearchClicked = useCallback(
    (evt) => {
      evt.preventDefault();
      search(input);
    },
    [search, input]
  );

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "480px",
        maxWidth: "100%",
        marginTop: "24px",
      }}
    >
      <TextField
        id="query"
        variant="outlined"
        placeholder="TV Show Query"
        value={input}
        onChange={handleInputChanged}
        onKeyPress={handleKeyPress}
        style={{ flex: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClicked}>
        Search
      </Button>
    </Box>
  );
};

