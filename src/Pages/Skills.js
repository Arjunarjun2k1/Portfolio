import React from "react";
import Image from '../Assets/skills.png';

const Skills = () => {
  return (
    <div>
      <section id="skills" class="bg-gray-900 text-white">
        <div class="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl text-indigo-500 font-semibold sm:text-3xl">
              My Skills
            </h2>
          </div>
            <div className=" flex justify-center mt-10">
            <img srcset={Image} class="w-full h-auto max-w-xl rounded-lg" alt="image description"/>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
