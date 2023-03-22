import ImageBox from "../components/ImageBox";
import { Grid, Card, SxProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import downloadIosApp from "../images/feature/download_ios_app.webp";
import { VMAGINE_APP_STORE } from "../utils/const";

function WrapperFeature(props: {
  firstChild: JSX.Element;
  secondChild: JSX.Element;
  sx?: SxProps;
}) {
  const { firstChild, secondChild, sx } = props;
  return (
    <Grid container spacing={5} sx={{ ...sx }}>
      <Grid
        id="first-child"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          alignSelf: "center",
          textAlign: ["center", "center", "start", "start"],
        }}
      >
        {firstChild}
      </Grid>
      <Grid
        id="second-child"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          alignSelf: "center",
          textAlign: ["center", "center", "start", "start"],
        }}
      >
        {secondChild}
      </Grid>
    </Grid>
  );
}

function TypographyGradient(props: {
  text: string;
  linearGradient?: string;
  gutterBottom?: boolean | undefined;
  sx?: SxProps;
}) {
  return (
    <Typography
      variant="h2"
      gutterBottom={props.gutterBottom ?? true}
      sx={{
        fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
        fontWeight: 700,
        backgroundImage:
          props.linearGradient ?? "linear-gradient(45deg, #F09819, #FFB458)",
        backgroundSize: "100%",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent",
        ...props.sx,
      }}
    >
      {props.text}
    </Typography>
  );
}

function CardContent(props: {
  children: JSX.Element | JSX.Element[];
  sx?: SxProps;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        border: "1px solid #40454F",
        borderRadius: 2,
        margin: ["0 auto", "0 auto", "unset", "unset"],
        maxWidth: ["450px", "450px", "unset", "unset"],
        py: "20px",
        px: ["10px", "10px", 0, 0],
        ...props.sx,
      }}
    >
      {props.children}
    </Card>
  );
}

const BoxWithLink = styled("a")({
  position: "relative",
  maxWidth: 200,
  display: "block",
  width: "100%",
  height: "100%",
  aspectRatio: "3",
  textDecoration: "none",
});

function AppStoreContainer(props: { sx?: SxProps }) {
  return (
    <>
      <BoxWithLink
        href={VMAGINE_APP_STORE}
        aria-label="Vmagine link to instagram"
        sx={{
          ...props.sx,
        }}
      >
        <ImageBox src={downloadIosApp} alt="" />
      </BoxWithLink>
      <Typography
        variant="caption"
        sx={{
          pt: "5px",
          fontWeight: 200,
          color: "grey.200",
          fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
        }}
      >
        Download Free Today
      </Typography>
    </>
  );
}

export { WrapperFeature, TypographyGradient, CardContent, AppStoreContainer };
