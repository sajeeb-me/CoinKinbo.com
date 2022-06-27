import React from 'react';
import { Link } from 'react-router-dom';

const NewsBody = () => {
    return (
        <section>
            {/* news one */}
            <article>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <p className='text-gray-500 uppercase text-xs'>SD Shuvo - 1 Hours ago</p>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none hover:text-primary-focus">
                                    Bitcoin and Ethereum Consolidate,
                                    <br className="hidden md:block" />
                                    DOGE{' '}
                                    <span className="relative px-1">
                                        <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary" />
                                        <span className="relative inline-block">
                                            and STX Rally
                                        </span>
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Bitcoin price remained supported above the USD 20,500 zone and BTC was able to climb above the USD 21,200 level, but... <a href='https://cryptonews.com/news/bitcoin-and-ethereum-consolidate-doge-and-stx-rally.htm' target='_blank' rel="noreferrer" className='hover:text-primary'>Read more</a>
                                </p>
                            </div>
                            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                                <div className="bg-white border-l-4 shadow-sm border-secondary">
                                    <div className="h-full p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Bitcoin price
                                        </h6>
                                        <p className="text-sm text-gray-500">
                                            After a clear move above the USD 21,200 level, bitcoin price was able to continue higher and climbed above the USD 21,800 level.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white border-l-4 shadow-sm border-secondary">
                                    <div className="h-full p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Ethereum price
                                        </h6>
                                        <p className="text-sm text-gray-500">
                                            Ethereum price also started an upward move above the USD 1,150 resistance. ETH was able to surpass USD 1,250 .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src="https://i.ibb.co/BnmW07B/news.jpg"
                                alt="news"
                            />
                        </div>
                    </div>
                </div>
            </article>
            {/* news two */}
            <article>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Trendy news
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Get</span>
                            </span>{' '}
                            the super trending news always first!
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We provide markets top trendy news, so that you can keep yourself updated within this rapidly changing technology.
                        </p>
                    </div>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:border-primary-focus hover:shadow-xl duration-300 ease-in-out">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-primary-focus"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    A flower in my garden, a mystery in my panties. Heart attack never
                                    stopped old Big Bear.
                                </p>
                            </div>
                            <Link
                                to="/coins"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-primary-focus hover:text-primary"
                            >
                                Learn more
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:border-primary-focus hover:shadow-xl duration-300 ease-in-out">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-primary-focus"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Rough pomfret lemon shark plownose chimaera southern sandfish
                                    kokanee northern sea.
                                </p>
                            </div>
                            <Link
                                to="/coins"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-primary-focus hover:text-primary"
                            >
                                Learn more
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:border-primary-focus hover:shadow-xl duration-300 ease-in-out">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-primary-focus"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    A slice of heaven. O for awesome, this chocka full cuzzie is as
                                    rip-off as a cracker.
                                </p>
                            </div>
                            <Link
                                to="/coins"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-primary-focus hover:text-primary"
                            >
                                Learn more
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:border-primary-focus hover:shadow-xl duration-300 ease-in-out">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-primary-focus"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Disrupt inspire and think tank, social entrepreneur but
                                    preliminary thinking think tank compelling.
                                </p>
                            </div>
                            <Link
                                to="/coins"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-primary-focus hover:text-primary"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default NewsBody;