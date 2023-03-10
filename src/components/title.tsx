import { Box, Card, Typography, Divider } from "@mui/material";
import ImageBox from "./ImageBox";
import iconRecreate from "../images/feature/icon_recreate.png";
import { TypographyGradient, AppStoreContainer } from "../styles";
import cutIcon from "../images/feature/cut_icon.webp";
import shapeIcon from "../images/feature/shape_icon.webp";
import fontIcon from "../images/feature/font_icon.webp";
import starIcon from "../images/feature/star_icon.webp";
import animateIcon from "../images/feature/animate_icon.webp";

export function RecreateTitle() {
  return (
    <>
      <Divider variant="middle" sx={{ mb: 3 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardIcon>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              aspectRatio: "1",
            }}
          >
            <ImageBox src={iconRecreate} alt="" />
          </Box>
        </CardIcon>

        <TypographyGradient
          text="AI Recreate"
          linearGradient="linear-gradient(130deg, rgba(103,46,253,1) 0%, rgba(64,140,230,1) 70%, rgba(37,193,219,1) 100%)"
        />
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontWeight: 100,
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "grey.400",
          }}
        >
          take your AI Art to{" "}
          <strong style={{ fontWeight: 300, color: "#fff" }}>
            the next level
          </strong>
        </Typography>
      </Box>
    </>
  );
}

export function FeatureTitle() {
  const iconName = [cutIcon, shapeIcon, fontIcon, starIcon, animateIcon];
  return (
    <>
      <Box sx={{ mt: 5 }} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <AppStoreContainer />
      </Box>
      <Divider variant="middle" sx={{ my: 3 }} />

      <Box
        sx={{
          textAlign: "center",
          px: 0.5,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            fontSize: "clamp(1.4rem, 3vw, 1.5rem)",
          }}
        >
          Other
        </Typography>
        <TypographyGradient
          text="Key Features"
          linearGradient="linear-gradient(130deg, rgba(103,46,253,1) 30%, rgba(64,140,230,1) 60%, rgba(37,193,219,1) 100%)"
          sx={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
        />
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontWeight: 100,
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "grey.400",
          }}
        >
          give you{" "}
          <strong style={{ fontWeight: 300, color: "#fff" }}>
            absolute freedom
          </strong>{" "}
          in your creation
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            px: 1,
            mt: 2,
          }}
        >
          {iconName.map((e, index) => (
            <CardIcon key={index} maxWidth={65}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                  padding: ["15px", "17px", "17px", "17px"],
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                  }}
                >
                  <ImageBox src={e} alt="" />
                </Box>
              </Box>
            </CardIcon>
          ))}
        </Box>
      </Box>
    </>
  );
}

function CardIcon(props: {
  children: JSX.Element | JSX.Element[];
  maxWidth?: string | number;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: props.maxWidth ?? 100,
        width: "100%",
        borderRadius: "10px",
        mb: "10px",
      }}
    >
      {props.children}
    </Card>
  );
}
