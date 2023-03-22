import { Box, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import VideoBox from "../../components/videoBox";

const videoPrompt = require("../../images/video/prompt.mp4");

export default function AmazingArtContent() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(0deg, rgba(51,8,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(0deg, rgba(51,8,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(132deg, rgba(51,8,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
          "linear-gradient(132deg, rgba(51,8,86,1) 0%, rgba(23,23,23,1) 50%, rgba(21,21,21,1) 100%)",
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
              Turn <strong style={{ fontWeight: 600 }}>Prompt</strong> into
            </Typography>

            <TypographyGradient
              text="Amazing Art"
              linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
            />

            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 200, color: "grey.500" }}
            >
              We made it simple and fun for you to <br /> create high-quality AI
              Art.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ fontWeight: 200 }}>
              Get inspired by our{" "}
              <strong style={{ fontWeight: 600 }}>prompt builder</strong> and
              <br />
              <strong style={{ fontWeight: 600 }}>prompt ideas</strong> in the
              showcase. Add styles
              <br />
              to visualize your imagination the way you want.
            </Typography>
          </Box>
        }
        secondChild={
          <>
            <VideoBox videoPath={videoPrompt} />
          </>
        }
      />
    </CardContent>
  );
}
