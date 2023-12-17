import React from "react";
import ReactPlayer from "react-player";
import Image from "../Assets/coding-min.jpg";

const About = () => {
  return (
    <div>
      <section id="about">
        <h1 class="text-indigo-500 font-semibold sm:text-3xl text-2xl align-middle justify-center flex">
          About Me
        </h1>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img src={Image}
              />
            </div>

            <div class="lg:py-20">
              <h2 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
                Full Stack Developer
              </h2>

              <p class="mt-4 text-white text-justify">
              An aspiring developer and a passionate learner with 1.2 years of industry experience in Software Development.
              Proficient in developing interactive, user-friendly, and responsive web applications on both frontend and backend using MERN Stack.
              I posses a strong ability to write error-free code. As a dedicated team player, I bring a supportive and friendly approach to collaborative environments, while also demonstrating the capability to work independently. Committed to staying current with industry trends, I embrace continuos learning to adapt my skills and deliver cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
