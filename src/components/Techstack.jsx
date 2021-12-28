import { ScrollingWatermark } from "./ScrollingWatermark";
import Watermark from "./../assets/watermark.svg";
import SCSS from "../assets/scss.png";
import TAILWIND from "../assets/tailwind.png";
import GIT from "../assets/git.png";
import FIREBASE from "../assets/firebase.png";

export const Techstack = () => {
  return (
    <div
      id="techstack"
      className="spooky w-screen flex justify-center gap-24 flex-col items-center relative overflow-x-hidden select-none"
    >
      <ScrollingWatermark />
      <img
        src={Watermark}
        alt=""
        className="absolute w-2/4 -right-52 top-0 -z-0 opacity-25 hidden md:flex"
      />
      <div className="">
        <h1 className="font-extrabold tracking-widest text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
          <span className="after:absolute relative after:content-[''] after:w-full after:h-[2px] after:bg-orange-400 after:-bottom-2 after:left-0">
            TECHNO
          </span>
          LOGIES
        </h1>
      </div>
      <div className="">
        <div className="customgrid">
          <GetLang />
        </div>
      </div>
    </div>
  );
};

const GetLang = () => {
  const Technologies = [
    {
      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png",
    },
    {
      name: "CSS",
      img: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
    },
    {
      name: "SCSS",
      img: SCSS,
    },
    {
      name: "JAVASCRIPT",
      img: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
    },
    {
      name: "REACTJS",
      img: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
    },
    {
      name: "TAILWIND",
      img: TAILWIND,
    },
    {
      name: "GIT",
      img: GIT,
    },
    {
      name: "FIREBASE",
      img: FIREBASE,
    },
  ];
  return (
    <div className="coolgrid gap-8">
      {Technologies.map((result) => {
        let ROUND = "rounded-none";
        if (result.name === "TAILWIND") {
          ROUND = "rounded-full";
        }
        return (
          <div
            className="z-30 select-none flex items-center relative group text-center flex-col"
            key={result.name}
          >
            <img
              src={result.img}
              alt={`${result} Logo`}
              className={`maxheight -z-10 bg-blend-luminosity w-3/5 group-hover:scale-75 transition-all overflow-hidden ${ROUND}`}
            />
            <h1 className="scale-0 group-hover:scale-100 transition-all">
              {result.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
