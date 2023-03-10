import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { TypographyGradient, WrapperFeature, CardContent } from "../../styles";

export default function AnimatedFeature() {
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
              pl: [0, 0, "40px", "40px"],
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 200 }}>
              Create
            </Typography>

            <TypographyGradient
              text="Animated"
              gutterBottom={false}
              linearGradient="linear-gradient(45deg, #F09819, #FFB458)"
            />
            <Typography variant="body1" gutterBottom sx={{ fontWeight: 200 }}>
              AI Art
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: 100,
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              }}
            >
              Animate your creation and bring it to life with
            </Typography>

            <List
              sx={{
                width: "100%",
                maxWidth: "200px",
                margin: ["0 auto", "0 auto", 0, 0],
              }}
            >
              {["Animation Feature", "VDO Elements", "VDO Effect"].map(
                (value) => (
                  <ListItem key={value} sx={{ padding: 0 }} disableGutters>
                    <Box sx={{ pr: "10px" }}>•</Box>
                    <ListItemText primary={`${value}`} />
                  </ListItem>
                )
              )}
            </List>
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
