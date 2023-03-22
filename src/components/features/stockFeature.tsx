import { Box, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import VideoBox from "../videoBox";

const videoMega = require("../../images/video/mega.mp4");

export default function StockFeature() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(56,28,90,1) 100%)",
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(56,28,90,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(56,28,90,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(56,28,90,1) 100%)",
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
              <TypographyGradient
                text="Mega Library"
                linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
              />
              <Typography variant="body2" gutterBottom sx={{ fontWeight: 400 }}>
                of free-stock contents
              </Typography>

              <Typography variant="body1" gutterBottom sx={{}}>
                We provide various content at your fingertips, including
                backgrounds, photos, cutout stocks, elements, texts, and more.
                for your unlimited creation
              </Typography>
            </Box>
          </>
        }
        secondChild={
          <>
            <VideoBox videoPath={videoMega} />
          </>
        }
      />
    </CardContent>
  );
}
