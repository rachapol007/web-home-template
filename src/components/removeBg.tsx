import { useState, useRef, useEffect } from "react";
import { Box, SxProps } from "@mui/material";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import { StaticImageData } from "next/image";

export default function RemoveBgAction(props: {
  sx?: SxProps;
  imageForeground: StaticImageData;
  imageBackground: StaticImageData;
}) {
  const { sx, imageForeground, imageBackground } = props;

  const [sizes, setSizes] = useState(0.5);
  const dragElement = useRef<HTMLInputElement>();

  useEffect(() => {
    if (dragElement.current == null) {
      return;
    }
  }, []);

  const slide = (xPosition: number) => {
    const containerBoundingRect = dragElement.current?.getBoundingClientRect();

    if (containerBoundingRect === undefined) {
      return;
    }

    setSizes(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (e: any) => {
    e.preventDefault();
    slide(e.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault();
    slide(e.touches[0].clientX);
  };
  const handleTouchUp = () => {
    window.ontouchmove = null;
    window.ontouchend = null;
  };

  const handleTouchStart = () => {
    window.ontouchmove = handleTouchMove;
    window.ontouchend = handleTouchUp;
  };

  return (
    <Box
      sx={{
        maxWidth: 350,
        height: "100%",
        aspectRatio: "1",
        width: "100%",
        margin: "0 auto",
        ...sx,
      }}
    >
      <Box
        ref={dragElement}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            userSelect: "none",
            backgroundImage: `url(${imageBackground.src})`,
            backgroundSize: "contain",
          }}
        />
        <Box
          id="my-img"
          sx={{
            clipPath: `polygon(0 0, ${sizes * 100}% 0, ${
              sizes * 100
            }% 100%, 0 100%)`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            backgroundImage: `url(${imageForeground.src})`,
            backgroundSize: "contain",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${sizes * 100}%`,
          }}
        >
          <Box
            style={{
              height: "100%",
              position: "relative",
              backgroundColor: "#fff",
              width: 2,
              marginLeft: -1.5,
            }}
          >
            <Box
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              sx={{
                textAlign: "center",
                position: "absolute",
                zIndex: 9,
                cursor: "ew-resize",
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                borderRadius: "50%",
                top: "50%",
                marginLeft: "-14.5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <ArrowLeft
                  sx={{
                    color: "#000",
                    width: "100%",
                    height: "100%",
                    maxWidth: 30,
                    transform: "translateX(-5px)",
                  }}
                />
                <ArrowRight
                  sx={{
                    color: "#000",
                    width: "100%",
                    height: "100%",
                    maxWidth: 30,
                    transform: "translateX(-25px)",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
