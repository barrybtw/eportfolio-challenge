import Particles from "react-tsparticles";

export const ParticleBackground = ({ children }) => {
  return (
    <div className="-z-10">
      <Particles
        options={
          ({ background: "#fff" },
          {
            fpsLimit: 144,
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },

            particles: {
              color: {
                value: "fff",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                limit: 0,
                value: 300,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.4,
                  speed: 5,
                  sync: false,
                  opacity_min: 1,
                },
                random: {
                  enable: true,
                  minimumValue: 0.05,
                },
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
              },
              move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                random: false,
                drift: {
                  max: 0.005,
                  min: 0,
                },
              },
            },
          })
        }
        className="-z-10"
      />
      {children}
    </div>
  );
};
