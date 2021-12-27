import Logo from "./../assets/logo2.svg";

export const Nav = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="flex text-base flex-row justify-between mx-4 my-2 items-center lg:mx-20 md:mx-44 sm:mx-20 font-bold select-none absolute top-0 left-0 right-0">
      <img
        src={Logo}
        alt=""
        className="h-7 md:h-16 lg:h-20 w-7 md:w-16 lg:w-20 z-50 hover:scale-110 transition-all"
      />
      <ul className="flex flex-row text-sm gap-4 sm:gap-7 md:gap-16 sm:text-base lg:text-base  items-center">
        <a href="#about-me" className="hover-element">
          About Me
        </a>
        <a href="#techstack" className="hover-element">
          Technologies
        </a>
        <a
          href="#contactme"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          id="contact-btn"
          className="hover-element"
        >
          Contact Me
        </a>
      </ul>
    </nav>
  );
};
