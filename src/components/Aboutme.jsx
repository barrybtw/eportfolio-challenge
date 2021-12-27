export const Aboutme = () => {
  return (
    <section
      id="about-me"
      className="w-h-[40rem] h-[40rem] flex justify-center gap-24 items-center flex-col"
    >
      <h1 className="font-extrabold tracking-wide text-4xl md:text-6xl z-50">
        Who am I?
      </h1>
      <div className="grid items-center">
        <div className="p-3 flex items-start justify-start flex-col">
          <p className="text-lg font-medium tracking-wide max-w-6xl z-50">
            Hi! I am an 18 year old Danish man located in Denmark, Jylland, I
            wake up every day with the power and will to create new innovative
            things, and to keep learning! I am in this world to make awesome
            connections, and live a happy life doing what I love doing. Every
            day I strive to accomplish something, today it was this portfolio,
            <a
              className="text-orange-400 ml-0.5"
              href="#contactme"
              title="Click to contact me!"
            >
              will you be part of my next accomplishment?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
