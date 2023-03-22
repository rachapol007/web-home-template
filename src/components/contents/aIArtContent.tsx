import { Box, Card, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import VideoBox from "../videoBox";

const videoCompose = require("../../images/video/compose.mp4");

export default function AIArtContent() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(0deg, rgba(8,15,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(0deg, rgba(8,15,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(130deg, rgba(8,15,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(130deg, rgba(8,15,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
        ],
      }}
    >
      <WrapperFeature
        sx={{
          "& #first-child": {
            order: [0, 0, "1 !important", "1 !important"],
            paddingLeft: ["40px", "40px", 0, 0],
            paddingRight: [0, 0, "40px", "40px"],
          },
        }}
        firstChild={
          <>
            <Box>
              <Typography variant="body2" gutterBottom>
                Turn <strong style={{ fontWeight: 600 }}>Image</strong> into
              </Typography>

              <TypographyGradient
                text="AI Art"
                linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
              />

              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 300,
                  color: "grey.500",
                }}
              >
                Compose any desired images with our complete editing tools and
                assets and use AI Recreate to turn a part or a whole image into
                awesome art
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 300,
                }}
              >
                Image colors and compositions will guide AI work. Giving you
                more control and flexibility in your creation
              </Typography>
            </Box>
          </>
        }
        secondChild={
          <>
            <VideoBox videoPath={videoCompose} />
          </>
        }
      />
    </CardContent>
  );
}
