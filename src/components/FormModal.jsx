import { useState, useRef, useEffect } from "react";
import Left from "./../assets/left.svg";
import Right from "./../assets/right.svg";
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
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsOpen(false);
  };

  let center =
    "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1000]";

  return (
    <div
      className={`${center} bg-gray-700 rounded-xl flex flex-col items-center p-4 w-5/6 h-5/6 transition duration-300 ease-in-out   ${
        isOpen ? " left-1/2 top-1/2 opacity-100" : "hidden opacity-0"
      } text-black transition-all overflow-hidden rounded-2xl bg-white border-form font-bold tracking-wide border-2 `}
    >
      <div className="w-8/12 text-center flex-auto select-none text-2xl sm:text-4xl md:text-5xl">
        Contact Me Through Email
      </div>

      <form
        ref={form}
        className="py-4 flex flex-col gap-6 w-6/12 text-left flex-auto relative"
        onSubmit={sendMail}
      >
        <img
          src={Left}
          className="absolute opacity-5 -z-0 bottom-40 -left-3/4"
          alt=""
        />
        <img
          src={Right}
          className="absolute opacity-5 -z-0 top-40 -right-2/4 h-full"
          alt=""
        />
        <div className="flex flex-col gap-2 ">
          <label className="select-none text-lg sm:text-2xl">Your name</label>
          <input
            className="border-y border-x border-blue-900 p-1 invalidCheck focus:border-b-4 z-50 flex flex-col"
            type="text"
            name="from_name"
            placeholder="Your name"
            value={name}
            required={true}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="select-none text-lg sm:text-2xl">Your Email</label>
          <input
            className="border-y border-x border-blue-900 p-1 invalidCheck focus:border-b-4 z-50 border-b-form flex flex-col"
            type="email"
            placeholder="Your email"
            required={true}
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="select-none text-lg sm:text-2xl">
            Your Message
          </label>
          <textarea
            className="border-y border-x border-blue-900 relative p-1 focus:border-b-4 z-50 flex flex-col resize-none required:after:content-['Messagerequired'] required:after:absolute required:after:top-0 required:after:left-0 required:after:z-50"
            type="text"
            placeholder="Your message"
            required={true}
            name="message"
            value={message}
            minLength={150}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <input
          className="text-md sm:text-lg flex flex-col border-b-4 border-l-4 border-2 p-2 w-5/12 sm:w-4/12 items-center justify-center select-none"
          type="submit"
        />
      </form>

      <AiFillCloseCircle
        className="absolute right-2 top-2 cursor-pointer text-2xl"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};
