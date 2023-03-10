import { Box, Card, Typography } from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";

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
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 200 }}>
                of free-stock contents
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 100,
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                }}
              >
                We provide various content at your fingertips, including
                backgrounds, photos, cutout stocks, elements, texts, and more.
                for your unlimited creation
              </Typography>
            </Box>
          </>
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
