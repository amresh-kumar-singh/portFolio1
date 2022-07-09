import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import circularData from "../Data/circularData";
import "./circle.css";
const Circle = () => {
  const [rotate, setRotate] = useState(-60);
  const timerRef = useRef();
  const ref = useRef();
  const animation = () => {
    setRotate((prev) => {
      if (prev === -360) {
        ref.current.style.removeProperty("transform");
        ref.current.style.transitionDuration = "0ms";
        ref.current.style.transform = "rotate(0deg)";
        return 0;
      } else {
        ref.current.style.transform = `rotate(${prev - 60}deg)`;
        ref.current.style.transitionDuration = "700ms";
        return prev - 60;
      }
    });
  };
  useEffect(() => {
    timerRef.current = setInterval(animation, 2000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  // useEffect(() => {
  //   if (rotate === -360) ref.current.style.transform = "rotate(0deg)";
  // }, [rotate]);
  return (
    <div className="wrapper">
      <div
        className="slider"
        ref={ref}
        style={{
          transitionDuration: "700ms",
          height: "522px",
          width: "522px",
          marginTop: " 39px",
        }}
      >
        {circularData.map((data, i) => {
          return (
            <div
              className="item"
              key={data.item}
              style={{
                transform: `translate(${
                  261 * Math.sin(i * 60 * (Math.PI / 180))
                }px, ${-261 * Math.cos(i * 60 * (Math.PI / 180))}px) rotate(${
                  i * 60
                }deg)`,
                backgroundImage: `url(Icons/${data.image}.svg)`,
                backgroundRepeat: "round",
                backgroundSize: "cover",
                cursor: "pointer",
                ...(Math.abs(rotate) === i * 60
                  ? {
                      height: "90px",
                      width: "90px",
                      filter: "brightness(100%)",
                    }
                  : {
                      height: "78px",
                      width: "78px",
                      filter: "brightness(80%)",
                    }),
              }}
              onMouseOver={() => clearInterval(timerRef.current)}
              onClick={() => {
                clearInterval(timerRef.current);
                ref.current.style.transitionDuration = "700ms";
                ref.current.style.transform = `rotate(-${i * 60}deg)`;
                setRotate(-i * 60);
              }}
              // onMouseLeave={() => {
              //   clearInterval(timerRef.current);
              //   timerRef.current = setInterval(animation, 2000);
              // }}
            ></div>
          );
        })}
      </div>
      <div className="description">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#fdf5a6",
          }}
        >
          {
            circularData[
              Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)
            ].item
          }
        </Typography>
        <Typography
          textAlign="justify"
          component="blockquote"
          fontStyle="italic"
          fontSize="1.1rem"
          sx={{
            letterSpacing: "0.06",
            position: "relative",
            "&:after": {
              content: "'\\201C'",
              position: "absolute",
              left: "-24px",
              top: "-20px",
              fontSize: "52px",
            },
          }}
        >
          {
            circularData[
              Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)
            ].desc
          }
        </Typography>
        <Typography
          textAlign="right"
          component="cite"
          display="block"
          sx={{
            color: "#fdf5a6",
            "&:before": { content: "'\\2014'", marginRight: "10px" },
          }}
        >
          {
            circularData[
              Math.abs(rotate / 60) === 6 ? 0 : Math.abs(rotate / 60)
            ].author
          }
        </Typography>
      </div>
    </div>
  );
};

export default Circle;
