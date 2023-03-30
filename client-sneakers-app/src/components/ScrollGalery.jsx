import exempleImage from "../assets/image-new-balance.jpg";
import Box from "@mui/material/Box";

import "../styles/ScrollGalery.css"

const ScrollGalery = () => {
  return (
    <Box sx={{ display: "flex", gap: 6, mb: 8 }} className="scroll-menu">
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
      <img src={exempleImage} height="250" alt="Une jolie image" />
    </Box>
  );
};

export default ScrollGalery;
