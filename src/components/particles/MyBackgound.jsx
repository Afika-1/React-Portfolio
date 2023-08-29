import Particles from "react-tsparticles";


function MyBackgound() {
  return (
    <div>
      <Particles
        options={
          {
            background: {
              color: "#543543",
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true
              },

            },
            particles: {
              color: {
                value: "9fafca"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 110,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 20,
                  sync: false

                },
                random: {
                  enable: true,
                  minimumValue: 0.05,

                },
                value: 1
              },
              shape: {
                type: "triangle",

              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1,
              }

            }
          }
        }

      />

    </div>
  )
}

export default MyBackgound