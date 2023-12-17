import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkedIn from "../Assets/linkedin.png";

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        toast.success("E-Mail Send Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        emailjs.sendForm('service_ztus6md', 'template_c0hfmfm', form.current, 'CaQhBL8zklv8sDBMG')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <footer id='contacts' class="bg-white dark:bg-gray-900">
            <div class="mt-16 border-t border-black pt-8 dark:border-gray-800" />
            <div class="mx-auto  px-4 pb-8 pt-16 sm:px-6 lg:px-8">



                <div class="mx-auto max-w-md">
                    <strong
                        class="block text-center text-xl font-bold text-purple-700 dark:text-white sm:text-3xl"
                    >
                        Want us to email me
                    </strong>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-5">
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-white hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                placeholder="Name"
                                type="text"
                                id="name"
                                name='user_name'
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-white hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    name='user_email'
                                />
                            </div>

                            <div>
                                <label className="peer sr-only " htmlFor="phone">Phone</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-white hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    placeholder="Phone Number"
                                    type="tel"
                                    id="phone"
                                    name='ph_num'
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="name">Company</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-white hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                placeholder="Company"
                                type="text"
                                id="company"
                                name='company_name'
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                                className="w-full rounded-lg border border-gray-200 p-3 text-white hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                placeholder="Message"
                                rows="8"
                                id="message"
                                name='message'
                            ></textarea>
                        </div>

                        <div className="mt-4 align-middle justify-center flex">
                            <button
                                type="submit"
                                value="Send"
                                className="inline-block w-full rounded-lg bg-purple-500 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Send Email
                            </button>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </form>
                </div>




                <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="mx-auto max-w-sm lg:max-w-none">
                        <p
                            class="mt-4 text-center text-white dark:text-gray-400 lg:text-left lg:text-lg"
                        >                            
                        "Be curious. Be an expert. Be an enthusiast. Be authentic. Know your competition." </p>
                        <div class="mt-6 flex justify-center gap-4 lg:justify-start">

                            <a
                                class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="https://github.com/Arjunarjun2k1?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span class="sr-only"> GitHub </span>

                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="https://www.linkedin.com/in/arjun-k-k-671125236/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span class="sr-only"> LinkedIn </span>

                               <img src={LinkedIn} />
                            </a>

                        </div>

                        
                    </div>

                    <div
                        class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        <div>
                            <strong class="font-medium text-blue-700 dark:text-white">
                                Main Skills
                            </strong>

                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Node.js
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Express.js
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        React.js
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        MongoDB
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <strong class="font-medium text-blue-700 dark:text-white">
                                Main Projects
                            </strong>

                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Chat App
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Authentication System
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Portfolio
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <strong class="font-medium text-blue-700 dark:text-white">
                                Contact Me
                            </strong>

                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        arjunarju2k1@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-400 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        (+91 79******78)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
                    <p class="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
                        © Created by . arjun k.k 2023.

                        <br />

                        Created with
                        <a
                            href="https://tailwindcss.com/"
                            target='blank'
                            class="text-gray-400 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >Tailwind Css
                        </a>

                        and
                        <a
                            href="https://react.dev/"
                            target='blank'
                            class="text-gray-400 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >React.js
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
