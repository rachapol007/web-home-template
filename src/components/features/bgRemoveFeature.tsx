import { Box, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";
import RemoveBgAction from "../removeBg";
import bgImage from "../../images/feature/bg_Image.webp";
import removeImage from "../../images/feature/remove_bg.webp";

export default function BGRemoveFeature() {
  return (
    <CardContent
      sx={{
        background: [
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(28,67,90,1) 100%)",
          "linear-gradient(180deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(28,67,90,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(28,67,90,1) 100%)",
          "linear-gradient(290deg, rgba(21,21,21,1) 0%, rgba(23,23,23,1) 50%, rgba(28,67,90,1) 100%)",
        ],
      }}
    >
      <WrapperFeature
        firstChild={
          <Box
            sx={{
              pl: [0, 0, "40px", "40px"],
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 600,
              }}
            >
              AI
            </Typography>

            <TypographyGradient
              text="Background Removal"
              linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
            />

            <Typography variant="body1" gutterBottom>
              Automatically erase background
              <br />
              in a single tap
            </Typography>
          </Box>
        }
        secondChild={
          <>
            <RemoveBgAction
              imageForeground={removeImage}
              imageBackground={bgImage}
            />
          </>
        }
      />
    </CardContent>
  );
}
