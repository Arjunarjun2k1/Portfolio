import React from "react";

const NavBar = () => {
  return (
    <div className="relative">
      <header className="bg-white fixed left-0 right-0 top-0 z-50">
        {/* Navigation Bar */}
        <header class="bg-white dark:bg-gray-900">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="md:flex md:items-center md:gap-12">
                <a class="block text-white font-semibold text-2xl" href="/">
                  <h1>
                    Arjun<span class="text-purple-500 m-2">K K</span>
                  </h1>
                </a>
              </div>

              <div class="hidden md:block">
                <nav aria-label="Global">
                  <ul class="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#about"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#skills"
                      >
                        Skills
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#projects"
                      >
                        Projects
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#certificates"
                      >
                        Certificates
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white hover:text-indigo-500 text-lg"
                        href="#contacts"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  <a
                    class="rounded-md bg-purple-600 px-3 py-2 text-sm font-medium text-white shadow"
                    href="#contacts"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
};

export default NavBar;
