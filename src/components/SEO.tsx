import Head from "next/head";
import thumbnail from "../../public/thumbnail_web.jpg";
export default function SEO(props: { title?: string }) {
  const description =
    "Vmagine AI Art generator app transforms text prompts and images into fantastic AI-generated artworks using AI power.";

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <Head>
      <title>{props.title ?? ""}</title>
      <meta name="theme-color" content="#1e1e1e" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} key="desc" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={origin} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${origin}${thumbnail.src}`} />

      <meta property="og:site_name" content="Vmagine AI Art generator" />

      {/* ------- twitter ------- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={origin} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${origin}${thumbnail.src}`} />
    </Head>
  );
}
