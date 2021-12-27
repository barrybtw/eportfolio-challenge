import { Nav } from ".";
import { Watermark } from "./Watermark";

export const Landing = ({ setIsOpen, isOpen }) => {
  const one = "Front End Website Developer";
  const two = "Let's Get In Touch!";
  return (
    <div className="z-10 flex items-center justify-center relative overflow-hidden">
      <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="h-screen">
        <div className="flex items-center justify-center flex-col gap-8 z-50 h-full">
          <p className="tracking-wide md:tracking-widest relative after:content-['}'] after:-right-4 after:absolute after:text-orange-500 before:content-['{'] before:-left-4 before:absolute before:text-orange-500 select-none">
            {one}
          </p>
          <h1 className="font-extrabold tracking-wide text-4xl md:text-6xl">
            Nicolai Bernhard
          </h1>
          <a
            href="#contact-me"
            className="tracking-wide md:tracking-widest relative after:content-['}'] after:-right-4 after:absolute after:text-orange-500 before:content-['{'] before:-left-4 before:absolute before:text-orange-500 select-none"
          >
            {two}
          </a>
        </div>
      </div>
      <Watermark h1={"NICOLAI"} h2={"BERNHARD"} />
    </div>
  );
};
