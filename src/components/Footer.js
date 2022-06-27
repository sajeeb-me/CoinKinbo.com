import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section className='bg-base-200 text-left'>
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 md:grid-cols-4">
                        {/* footer left side  */}
                        <div className="sm:col-span-2">
                            <Link to='/coins'><p className='logo'>Coin<span className='text-primary-focus'>Kinbo</span></p></Link>
                            <div className="mt-6 lg:max-w-sm opacity-70 font-light">
                                <p className="text-sm">
                                    CoinKinbo is a coin seller platform, Successfully running business from 2020.
                                </p>
                                <p className="mt-4 text-sm">
                                    In this cutting edge technology modern people's first choice is CoinKinbo.
                                </p>
                            </div>
                        </div>
                        {/* footer right side  */}
                        <div className="space-y-2 text-sm">
                            {/* Contacts */}
                            <p className="text-base font-bold tracking-wide text-primary-focus">
                                Contacts
                            </p>
                            <div className="flex">
                                <p className="mr-1 opacity-70">Phone:</p>
                                <a
                                    href="tel:123-456-7890"
                                    aria-label="Our phone"
                                    title="Our phone"
                                    className="transition-colors duration-300 hover:text-primary-focus"
                                >
                                    123-456-7890
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 opacity-70">Email:</p>
                                <a
                                    href="mailto:hellosdshuvo@gmail.com"
                                    aria-label="Our email"
                                    title="Our email"
                                    className="transition-colors duration-300 hover:text-primary-focus"
                                >
                                    hellosdshuvo@gmail.com
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 opacity-70">Address:</p>
                                <a
                                    href="https://www.google.com/maps/place/Sylhet/@24.8998373,91.8259622,13z/data=!3m1!4b1!4m5!3m4!1s0x375054d3d270329f:0xf58ef93431f67382!8m2!3d24.8949294!4d91.8687063"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 hover:text-primary-focus"
                                >
                                    Sylhet, Bangladesh
                                </a>
                            </div>
                        </div>
                        {/* Social */}
                        <div>
                            <span className="text-base font-bold tracking-wide text-primary-focus">
                                Social Media
                            </span>
                            <div className="flex items-center mt-1 space-x-2">
                                <a
                                    href="https://www.linkedin.com/in/sdshuvo/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 transition-colors duration-300 hover:text-primary-focus"
                                >
                                    <svg viewBox="0 0 512 512" fill="currentColor" className="h-7">
                                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/sdshuvo98"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 transition-colors duration-300 hover:text-primary-focus"
                                >
                                    <svg viewBox="71 71 370 370" fill="currentColor" className="h-5">
                                        <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://twitter.com/sdshuvo98"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 transition-colors duration-300 hover:text-primary-focus"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 ml-2">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Let's get connected with Social Media. We always share our updated collection there.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                        <p className="text-sm text-gray-600">
                            © Copyright 2022 CoinKinbo. All rights reserved.
                        </p>
                        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                            <li>
                                <Link
                                    to='/coins'
                                    className="text-sm text-gray-600 transition-colors duration-300 hover"
                                >
                                    F.A.Q
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/coins'
                                    className="text-sm text-gray-600 transition-colors duration-300 hover"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/coins'
                                    className="text-sm text-gray-600 transition-colors duration-300 hover"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;