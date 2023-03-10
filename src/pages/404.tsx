import Head from "next/head";
import { Box, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <main className={styles.main}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "0em 1em",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            404 - Page Not Found
          </Typography>
        </Box>
      </main>
    </>
  );
}
