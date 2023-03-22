import { Box, Typography, Card, Divider } from "@mui/material";
import ImageBox from "./ImageBox";
import instagramIcon from "../images/feature/Instagram_icon.webp";
import logoBrand from "../../public/logo.svg";
import { PRIVACY_URL, TERM_URL, IG_WEB_URL } from "../utils/const";
import { AppStoreContainer } from "../styles";
import VideoBox from "./videoBox";

const videoArt = require("../images/video/art.mp4");

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: "6em",
        mb: 4,
        display: "flex",
        flexDirection: "column",
        minHeight: 350,
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          border: "1px solid #52565F",
          backgroundColor: "#000",
          maxWidth: 80,
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            padding: "8px",
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
            <ImageBox src={logoBrand} alt="" />
          </Box>
        </Box>
      </Card>
      <Box
        sx={{
          maxWidth: "200px",
          width: "100%",
          alignItems: "center",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppStoreContainer />
      </Box>

      <>
        <VideoBox videoPath={videoArt} />
      </>
      <FollowUs />

      <Divider variant="middle" sx={{ width: "40%" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <LinkBox text="Terms of use" url={TERM_URL} />
        <LinkBox text="Privacy policy" url={PRIVACY_URL} />
      </Box>
    </Box>
  );
}

function LinkBox(props: { text: string; url: string }) {
  return (
    <a href={props.url} aria-label={props.text} target="_blank">
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontWeight: 300,
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
          color: "grey.400",
          "&:hover": {
            color: "grey.100",
            textDecoration: "underline",
          },
        }}
      >
        {props.text}
      </Typography>
    </a>
  );
}

function FollowUs() {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        padding: "0px 5px",
      }}
    >
      <a
        href={IG_WEB_URL}
        aria-label="Vmagine link to instagram"
        target="_blank"
        style={{
          textDecoration: "none",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          border: "1px solid #898D94",
          borderRadius: "10px",
          padding: "10px 10px",
          maxWidth: "330px",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: 60,
            width: "100%",
            height: "100%",
            aspectRatio: "1.2",
          }}
        >
          <ImageBox src={instagramIcon} alt="" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: "clamp(1rem, 2.5vw, 1rem)",
              color: "#fff",
            }}
          >
            Follow us @aiart_vmagine
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 200,
              fontSize: "clamp(0.7rem, 2.5vw, 0.7rem)",
              color: "#fff",
            }}
          >
            Tag us on Instagram to show your works
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 300,
              color: "#42a5f5",
            }}
          >
            @aiart_vmagine #aiart_vmagine
          </Typography>
        </Box>
      </a>
    </Box>
  );
}
