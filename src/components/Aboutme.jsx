export const Aboutme = ({ setIsOpen }) => {
  return (
    <section
      id="about-me"
      className="w-h-[40rem] h-[40rem] flex justify-center gap-24 items-center flex-col select-none"
    >
      <h1 className="font-extrabold tracking-wide text-4xl md:text-6xl z-50">
        Who am I?
      </h1>
      <div className="grid items-center">
        <div className="p-3 flex items-start justify-start flex-col">
          <p className="text-lg font-medium tracking-wide max-w-6xl z-50 text-justify">
            I am an 18-year-old frontend software engineer based in Denmark,
            Jylland. I am not comfortable with settling, and I’m always looking
            for an opportunity to learn more and increase my skill set.
            <br />
            <br />
            Currently, I am working on solving difficult engineering problems by
            designing, building, and deploying websites that deliver a fantastic
            user experience.
            <br />
            <br />I work on personal and commercial projects every day to
            improve my comprehension of difficult programming concepts such as
            responsive website development, CSS layout, Promises, and API
            requests.
          </p>
        </div>
      </div>
    </section>
  );
};
