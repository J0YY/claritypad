"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Your AI notetaking assistent :)")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Let AI think for you!")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
