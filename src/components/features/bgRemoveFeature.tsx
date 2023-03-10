import { Box, Card, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";

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

            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 100, fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
            >
              Automatically erase background
              <br />
              in a single tap
            </Typography>
          </Box>
        }
        secondChild={
          <>
            <Box
              sx={{
                margin: "0 auto",
                position: "relative",
                maxWidth: 300,
                width: "100%",
                height: "100%",
                aspectRatio: "1",
                backgroundColor: "#fff",
              }}
            />
          </>
        }
      />
    </CardContent>
  );
}
