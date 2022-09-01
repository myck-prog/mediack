import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {

  const [videos, setVideos] = useState('');
  const {searchTerm} = useParams();
  console.log(searchTerm)

  // useEffect is a lifecycle hooks that gets called when components is initially loads
  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
  //     setVideos(data.items));
  // }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result For:
        <span
          style={{
            color: "#F31503",
          }}
        >
          {searchTerm}
        </span>
        Videos
      </Typography>

      {/* VIDEO PART OF THE  */}
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
