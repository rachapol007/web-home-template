import { Box, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import VideoBox from "../videoBox";

const videoAdvance = require("../../images/video/advance.mp4");

export default function AIArtOtherContent() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(9,48,24,1) 100%)",
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(9,48,24,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(9,48,24,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(9,48,24,1) 100%)",
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
                Create <strong style={{ fontWeight: 600 }}>AI Art</strong>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "5px",
                  justifyContent: ["center", "center", "start", "start"],
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  Like
                </Typography>
                <TypographyGradient
                  text="No Other"
                  linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
                />
              </Box>
              <Typography variant="body1" gutterBottom>
                Go for more advanced image creation with AI Recreate and
                complete editing tools
              </Typography>
            </Box>
          </>
        }
        secondChild={
          <>
            <VideoBox videoPath={videoAdvance} />
          </>
        }
      />
    </CardContent>
  );
}
