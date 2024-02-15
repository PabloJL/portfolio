"use client";
import React, { useState } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      id="contact"
      className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative "
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className=" z-10">
        <h5 className=" text-xl font-bold text-white my-2">
          Let&apos;s connect
        </h5>
        <p className=" text-[#ADB7BE] mb-4 max-w-md ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          suscipit, quasi expedita corporis aspernatur ipsum! Unde quod debitis
          qui, nulla aperiam hic blanditiis nostrum labore ut obcaecati error
          quam magni.
        </p>
        <div className="socials flex gap-2 sm:mb-4">
          <Link href="/">
            <IoLogoGithub className=" text-4xl" />
          </Link>
          <Link href="/">
            <IoLogoLinkedin className=" text-4xl" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className=" text-white block  text-md font-medium"
          >
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="example@gmail.com"
            className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          <label
            htmlFor="subject"
            className=" text-white block  text-md font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just saying hi!"
            className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          <label
            htmlFor="message"
            className=" text-white block  text-md font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's talk about ..."
            className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          ></textarea>
          <button
            type="submit"
            className=" bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className=" text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
