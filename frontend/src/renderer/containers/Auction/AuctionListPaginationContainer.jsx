import React from 'react';

const AuctionListPaginationContainer = () => {
    return (
        <div className="bottom-0 py-3 m-auto text-center bg-white lg:mb-2">
            <ul className="flex justify-center space-x-2 space-x-reverse">
                <li className="w-4 mr-2">
                    <a className="items-center hidden h-full" href="/search?category=1&amp;page=0">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                        </svg>
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0 bg-jngreen/80 text-white">
                    <a className="block leading-10" href="/search?category=1&amp;page=1">
                        1
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=2">
                        2
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=3">
                        3
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=4">
                        4
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=5">
                        5
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=6">
                        6
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=7">
                        7
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=8">
                        8
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=9">
                        9
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=10">
                        10
                    </a>
                </li>
                <li className="w-10 h-10 rounded-md shrink-0">
                    <a className="block leading-10" href="/search?category=1&amp;page=11">
                        11
                    </a>
                </li>
                <li className="w-4 mr-2">
                    <a className="items-center h-full flex" href="/search?category=1&amp;page=2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AuctionListPaginationContainer;
