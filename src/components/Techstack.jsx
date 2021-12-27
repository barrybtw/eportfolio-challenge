import { ScrollingWatermark } from "./ScrollingWatermark";
import Watermark from "./../assets/watermark.svg";

export const Techstack = () => {
  const technologies =
    "HTML5, CSS, SCSS, TAILWIND, JAVASCRIPT, TYPESCRIPT, REACT JS, GIT, FIREBASE ";
  return (
    <div
      id="techstack"
      className="h-screen w-screen flex justify-center gap-24 flex-col items-center relative overflow-x-hidden"
    >
      <ScrollingWatermark />
      <img
        src={Watermark}
        alt=""
        className="absolute w-2/4 -right-52 top-0 -z-0 opacity-25 hidden md:flex"
      />
      <div className="">
        <h1 className="font-extrabold tracking-widest text-xl md:text-4xl">
          <span className="after:absolute relative after:content-[''] after:w-full after:h-[2px] after:bg-orange-400 after:-bottom-2 after:left-0">
            TECHNO
          </span>
          LOGIES
        </h1>
      </div>
      <div className="content font-extrabold tracking-widest text-xl md:text-4xl grid items-center">
        <h1 className="before:content-['['] before:mr-2 md:before:mr-6 before:text-orange-400 after:content-[']'] after:ml-2 md:before:mr-l after:text-orange-400 px-4 text-xl">
          {technologies}
        </h1>
      </div>
    </div>
  );
};
