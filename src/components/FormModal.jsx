import { useState, useRef, useEffect } from "react";
import Img from "./../assets/profile.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import emailjs, { init } from "emailjs-com";

export const FormModal = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  init("user_ULkTbFhXx27CetTfYChwV");

  const form = useRef();

  const sendMail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7bd281v",
        "template_2gmtlzk",
        form.current,
        "user_ULkTbFhXx27CetTfYChwV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 bg-gray-700 rounded-xl -translate-y-1/2 -translate-x-1/2 z-[1000] fixedcenter flex flex-row w-8/12 h-3/4  ${
        isOpen ? "opacity-100" : "opacity-0 left-1/2 top-1/2 "
      } transition-all overflow-hidden rounded-2xl `}
    >
      <div id="left" className="w-full">
        <form
          ref={form}
          className="p-11 flex flex-col gap-6"
          onSubmit={sendMail}
        >
          <div className="flex flex-col">
            <label>Your name</label>
            <input
              className="text-black flex flex-col"
              type="text"
              name="from_name"
              placeholder="Your name"
              value={name}
              required={true}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Your Email</label>
            <input
              className="text-black flex flex-col"
              type="email"
              placeholder="Your email"
              required={true}
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
          </div>
          <div className="flex flex-col">
            <label>Your Message</label>
            <textarea
              className="text-black flex flex-col resize-none"
              type="text"
              placeholder="Your message"
              required={true}
              name="message"
              minLength={15}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <br />
          </div>

          <input className="text-black flex flex-col" type="submit" />
        </form>
      </div>
      <div
        id="right"
        className="w-full bg-gradient-to-br bg-gradient-to-br overflow-hidden relative"
      >
        <img src={Img} className="h-full object-cover scale-150" />
        <AiFillCloseCircle
          className="absolute right-2 top-2 cursor-pointer text-2xl"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    </div>
  );
};
