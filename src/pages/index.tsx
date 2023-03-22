import { Box, SxProps } from "@mui/material";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import {
  AmazingArtContent,
  AIArtContent,
  AIArtDrawingContentContent,
  AIArtOtherContent,
} from "../components/contents";
import {
  BGRemoveFeature,
  StockFeature,
  AnimatedFeature,
} from "../components/features";
import { FeatureTitle, RecreateTitle } from "../components/title";
import Footer from "../components/footer";
import SEO from "../components/SEO";

function WrapperContainer(props: { children: JSX.Element; sx?: SxProps }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 900,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
}

export default function Home() {
  const contents = [
    <AmazingArtContent key="amazing-art" />,
    <RecreateTitle key="title-recreate" />,
    <AIArtContent key="ai-art" />,
    <AIArtDrawingContentContent key="ai-art-draw" />,
    <>
      <AIArtOtherContent key="ai-art-other" />
      <FeatureTitle />
    </>,
  ];

  const features = [
    <BGRemoveFeature key="feature-bg-remove" />,
    <StockFeature key="feature-stock" />,
    <AnimatedFeature key="feature-animate" />,
  ];

  return (
    <>
      <SEO title="Vmagine AI Art generator" />
      <main className={styles.main}>
        <WrapperContainer sx={{ mt: 5 }}>
          <Banner />
        </WrapperContainer>

        {/* contents ----- */}
        {contents.map((e, index) => (
          <WrapperContainer key={index}>{e}</WrapperContainer>
        ))}

        {/* features ----- */}
        {features.map((e, index) => (
          <WrapperContainer key={index}>{e}</WrapperContainer>
        ))}
      </main>
      <Footer />
    </>
  );
}
