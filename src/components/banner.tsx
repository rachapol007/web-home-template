import { Box, Typography } from "@mui/material";
import ImageBox from "./ImageBox";
import logoName from "../images/vmagine_name_logo.png";
import framePhone from "../images/banner/frame_phone.webp";
import element from "../images/banner/element.webp";
import { WrapperFeature, AppStoreContainer } from "../styles";

export default function Banner() {
  return (
    <>
      <WrapperFeature
        firstChild={
          <Box
            sx={{
              margin: "0 auto",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              maxWidth: 500,
              aspectRatio: "1",
              "&:before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "10%",
                zIndex: 1,
                bottom: 0,
                background:
                  "linear-gradient(0deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.5) 30%, rgba(31,31,31,0) 100%)",
              },
            }}
          >
            <ImageBox src={element} alt="" />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                transform: [
                  "scale(1) translate(0px,0px)",
                  "scale(1) translate(0px,0px)",
                  "scale(1.2) translate(0px,60px)",
                  "scale(1.2) translate(0px,60px)",
                ],
              }}
            >
              <ImageBox src={framePhone} alt="" />
            </Box>
          </Box>
        }
        secondChild={
          <>
            <Box
              sx={{
                margin: ["0 auto", "0 auto", "unset", "unset"],
                position: "relative",
                maxWidth: 250,
                width: "100%",
                height: "100%",
                aspectRatio: "3.5",
              }}
            >
              <ImageBox src={logoName} alt="" />
            </Box>
            <Box>
              <Typography variant="h1" gutterBottom>
                AI Art Generator App
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontWeight: 200 }}>
                We love <strong style={{ fontWeight: 600 }}>AI & Art</strong>
                <br /> We built
                <strong style={{ fontWeight: 600 }}>
                  {" "}
                  State-of-the-Art AI
                </strong>
              </Typography>

              <Typography variant="body1" gutterBottom sx={{ fontWeight: 200 }}>
                So, you can{" "}
                <strong style={{ fontWeight: 600 }}>Create & Edit</strong>
                <br />
                your AI artwork with <br />
                <strong style={{ fontWeight: 600 }}>
                  Freedom & Flexibility
                </strong>
              </Typography>
            </Box>
            <Box sx={{ pt: "5px" }}>
              <AppStoreContainer
                sx={{ margin: ["0 auto", "0 auto", "unset", "unset"] }}
              />
            </Box>
          </>
        }
      />
    </>
  );
}
