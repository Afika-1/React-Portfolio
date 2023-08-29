import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";

const MyBackgound = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <Particles
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#fbdb04",
            animation: {
              enable: true,
              speed: 10
            }
          },
          move: {
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              enable: true,
              generator: polygonPathName,
              options: {
                sides: 6, // Hexagon has 6 sides
                turnSteps: 20,
                angle: 60 // 360 degrees / 6 sides = 60 degrees per side
              }
            },
            speed: 3,
            straight: true
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100 // Number of particles
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#000"
        },
        fullScreen: {
          zIndex: -1
        },
        detectRetina: true,
        emitters: {
          rate: {
            quantity: 1,
            delay: 0.1
          },
          position: {
            x: 50,
            y: 50
          }
        }
      }}
      init={particlesInit}
    />
  );
};

export default MyBackgound;
