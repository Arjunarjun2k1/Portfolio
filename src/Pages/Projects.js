import React from "react";
import Chat from "../Assets/Chat.png";
import Portfolio from "../Assets/Portfolio.png";
import Movie from "../Assets/Movie.png";
import LogIn from "../Assets/login.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" class="bg-gray-900 text-white">
        <div class="mx-auto  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl text-indigo-500 font-semibold sm:text-3xl">
              My Projects
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              href=" https://github.com/Arjunarjun2k1/ChatApp_Backend"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Chat}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Chat App</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Node JS, MongoDb</p>
              </div>
            </a>

            <a
              href="https://github.com/Arjunarjun2k1/Portfolio "
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Portfolio}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Tailwind Css</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Portfolio / Email.js</p>
              </div>
            </a>
            {/* phrase=====2 */}
            <a
              href="https://github.com/Arjunarjun2k1/MERN_JWT_Authentication_Backend"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={LogIn}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">JWT_Token</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Form / useFormik</p>
              </div>
            </a>

            <a href="https://github.com/Arjunarjun2k1/moviesearch" rel="noreferrer" class="block">
              <img
                alt="Signage"
                src={Movie}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Movie Search</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">React, Node</p>
              </div>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
