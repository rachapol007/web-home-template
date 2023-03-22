import { Box, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import VideoBox from "../videoBox";

const videoDraw = require("../../images/video/draw.mp4");

export default function AIArtDrawingContentContent() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(65,15,15,1) 100%)",
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(65,15,15,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(65,15,15,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(65,15,15,1) 100%)",
        ],
      }}
    >
      <WrapperFeature
        firstChild={
          <Box
            sx={{
              pl: ["0", "0", "40px", "40px"],
            }}
          >
            <Typography variant="body2" gutterBottom>
              Turn <strong style={{ fontWeight: 600 }}>Drawing</strong> into
            </Typography>

            <TypographyGradient
              text="AI Art"
              linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
            />

            <Typography variant="body1" gutterBottom sx={{ color: "grey.500" }}>
              Draw a simple image with our drawing tools
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ fontWeight: 300 }}>
              and use AI Recreate to turn a part or a whole image into awesome
              art
            </Typography>
          </Box>
        }
        secondChild={
          <>
            <VideoBox videoPath={videoDraw} />
          </>
        }
      />
    </CardContent>
  );
}
