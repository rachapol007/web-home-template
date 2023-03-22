import { useEffect, useRef } from "react";
import { Box, SxProps } from "@mui/material";

export default function VideoBox(props: {
  videoPath: String;
  sx?: SxProps;
  width?: String;
  borderRadius?: String;
}) {
  const { videoPath, width, borderRadius, sx } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoObserver = new IntersectionObserver((entries, videoObserver) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {
          const target = video.target as HTMLVideoElement;
          for (var source in target.children) {
            const videoSource = target.children[source] as HTMLVideoElement;
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src as string;
            }
          }
          target.load();
          target.setAttribute(
            "style",
            `opacity: 1; display: block; width: ${
              width ?? "100%"
            };  margin: 0 auto;  height: 100%; border-radius: ${
              borderRadius ?? "10px"
            };`
          );
          videoObserver.unobserve(video.target);
        }
      });
    });

    if (videoRef.current) videoObserver.observe(videoRef.current);
    return () => {
      videoObserver.disconnect();
    };
  }, [width, borderRadius]);

  return (
    <Box sx={{ maxWidth: 350, width: "100%", margin: "0 auto", ...sx }}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "100%",
          "& #frame": {
            opacity: 0,
            transition: "opacity 0.7s ease-in",
          },
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
          }}
        >
          <video
            ref={videoRef}
            id="frame"
            autoPlay
            muted
            loop
            playsInline
            style={{
              display: "block",
              width: "100%",
              margin: "0 auto",
              height: "100%",
            }}
          >
            <source data-src={videoPath} type="video/mp4" />
          </video>
        </Box>
      </Box>
    </Box>
  );
}
