import { Techstack } from "../components";
import { Aboutme } from "../components/Aboutme";
import { Contact } from "../components/Contact";
import { Landing } from "../components/Landing";
import { ParticleBackground } from "../components/Particles";
import { FormModal } from "../components/FormModal";
import { useState } from "react";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkForEsc = (event) => {
    event = event || window.event;
    let isEsc = false;
    if ("key" in event) {
      isEsc = event.key === "Escape" || event.key === "Esc";
    } else {
      isEsc = event.key === 27;
    }
    if (isEsc) {
      if (isOpen) setIsOpen(false);
      return;
    }
  };

  document.onkeydown = function (event) {
    checkForEsc();
  };

  return (
    <div className="bg-background absolute top-0 right-0 left-0 text-white">
      <ParticleBackground>
        <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Landing setIsOpen={setIsOpen} isOpen={isOpen} />
        <Aboutme />
        <Techstack />
        <Contact />
      </ParticleBackground>
    </div>
  );
};
