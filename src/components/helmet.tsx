import Head from "next/head";
export default function Helmet(props: { title?: string }) {
  const description =
    "Vmagine AI Art generator app transforms text prompts and images into fantastic AI-generated artworks using AI power.";

  return (
    <Head>
      <title>{props.title ?? ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} key="desc" />

      {/*  ------- Open Graph --------*/}
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:type" content="https://example.com:website" /> */}

      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Vmagine AI Art generator" />

      {/*  ------- image thumbnail-------*/}
      <meta
        property="og:image"
        content="https://example.com/images/cool-page.jpg"
      />
      {/* <meta property="og:image" content="https://example.com/ogp.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta property="og:image:alt" content="A shiny red apple with a bite taken out" /> */}

      {/* ------- twitter ------- */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="http://www.yourdomain.com/image-name.jpg"
      />
    </Head>
  );
}
