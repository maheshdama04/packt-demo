import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-1 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            />
                        </svg>
                    </button>
                    <div
                        className="collapse navbar-collapse flex-grow items-center"
                        id="navbarSupportedContent1"
                    >
                        <a
                            className="text-xl text-white pr-2 font-semibold"
                            href="#"
                        >
                            Packt
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                              <Link className="nav-link text-white" to="/products">Products</Link>
                                
                            </li>
                            
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
            </nav>

            <div className="relative justify-center min-h-screen bg-[#e6e9ff21] sm:items-center py-4 sm:pt-0">
                <div className="container">{props.children}</div>
            </div>
        </>
    );
}
