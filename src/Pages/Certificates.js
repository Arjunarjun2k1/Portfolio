import React from 'react';
import HTML from '../Assets/Html_Css.png';
import Css from '../Assets/Responsive_Web.png';
import JavaScript from '../Assets/Javascript.png';
import Node from '../Assets/Node.png';



const Certificates = () => {
    return (
        <div>
            <section id='certificates'>
            <div class=" mx-auto max-w-screen-xl px-4 py-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-2xl text-indigo-500 font-semibold sm:text-3xl">Certificates Achieved</h2>
                </div>
                <article class="flex bg-white transition hover:shadow-xl mt-5">
                    {/* <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                        >
                            <span>2021</span>
                            <span class="w-px flex-1 bg-red-900"></span>
                            <span>Aug 30</span>
                        </time>
                    </div> */}

                    <div class="hidden sm:block sm:basis-56">
                        <img
                            alt="Guitar"
                            src={HTML}
                            class="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="https://www.guvi.in/verify-certificate?id=8612jE3f7505Q7V4H6" target='blank'>
                                <h3 class="font-bold uppercase text-purple-700">
                                    Achieved certificate in HTML and CSS in Let's Upgrade
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white">
                            This certificate recognizes my proficiency in HTML and CSS, two fundamental languages of web development.
                            I have demonstrated a solid understanding of creating engaging and visually appealing web pages.
                            Throughout the course, I have acquired essential skills such as structuring web content with HTML tags, styling elements with CSS properties, and creating responsive layouts.
                            </p>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="https://verify.letsupgrade.in/certificate/LUHTC0821BP0235"
                                target='blank'
                                class="block bg-purple-600 rounded-md px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-purple-400"
                            >
                            Download
                            </a>
                        </div>
                    </div>
                </article>

                <article class="flex bg-white transition hover:shadow-xl mt-5">
                    {/* <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                        >
                            <span>2021</span>
                            <span class="w-px flex-1 bg-red-900"></span>
                            <span>Sep 18</span>
                        </time>
                    </div> */}

                    <div class="hidden sm:block sm:basis-56">
                        <img
                            alt="Guitar"
                            src={Css}
                            class="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="https://verify.letsupgrade.in/certificate/LURSD0821AP0227" target='blank'>
                                <h3 class="font-bold uppercase text-purple-700">
                                Achieved certificate in building Responsive Website in Let's Upgrade
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white">
                               Responsive web design is about creating web pages that look good on all devices. By Completing this course, I'm proficient in building responsive web design will automatically adjust for different screen sizes and viewports using media queries and Tailwind CSS.
                            </p>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="https://www.guvi.in/verify-certificate?id=8612jE3f7505Q7V4H6"
                                target='blank'
                                class="block bg-purple-600 rounded-md px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-purple-400"
                            >
                            Download
                            </a>
                        </div>
                    </div>
                </article>

                <article class="flex bg-white transition hover:shadow-xl mt-5">
                    {/* <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                        >
                            <span>2022</span>
                            <span class="w-px flex-1 bg-red-900"></span>
                            <span>Jul 21</span>
                        </time>
                    </div> */}

                    <div class="hidden sm:block sm:basis-56">
                        <img
                            alt="Guitar"
                            src={JavaScript}
                            class="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="https://www.coursera.org/account/accomplishments/verify/FRVLY9ZLDLBX" target='blank'>
                                <h3 class="font-bold uppercase text-purple-700">
                                Achieved certificate in JavaScript in Coursera
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white">
                            This certificate recognizes your proficiency in JavaScript, a powerful programming language that drives interactivity and functionality on the web.
                            Throughout the course, I have gained essential skills such as manipulating the DOM, handling events, working with variables and data types, and implementing conditional statements and loops, callbacks , promise , async await , etc...
                            </p>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="https://www.guvi.in/verify-certificate?id=1340641Jl5UT69W518"
                                target='blank'
                                class="block bg-purple-600 rounded-md px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-purple-400"
                            >
                            Download
                            </a>
                        </div>
                    </div>
                </article>

                <article class="flex bg-white transition hover:shadow-xl mt-5">
                    {/* <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                        >
                            <span>2022</span>
                            <span class="w-px flex-1 bg-red-900"></span>
                            <span>Oct 13</span>
                        </time>
                    </div> */}

                    <div class="hidden sm:block sm:basis-56">
                        <img
                            alt="Guitar"
                            src={Node}
                            class="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="https://www.guvi.in/verify-certificate?id=9hsC63186766Po1f65" target='blank'>
                                <h3 class="font-bold uppercase text-purple-700">
                                Achieved certificate in Node JS,Express,Mongo DB,Mongoose in Udemy
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white">
                                By completing this course I understood how modern back-end development works and how all the different technologies fit together.Got clear understandig on how Node.js works behind the scenes.Able to build own fast,scalable andd powerful Node.js RESTful APIs and able to work with NoSQL data and model data in real-world situations.
                            </p>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="https://www.udemy.com/certificate/UC-26e30c29-cbe0-47a6-be5a-f679fe509c44/"
                                target='blank'
                                class="block bg-purple-600 rounded-md px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-purple-400"
                            >
                            Download
                            </a>
                        </div>
                    </div>
                </article>

            </div>
            </section>
        </div>
    )
}

export default Certificates
