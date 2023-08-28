"use client"
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";






const Landing = () => {


    const [theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return(
        <nav>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page */}
                    <div className="w-full navbar bg-green-800">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl font-mono">Stella_TsuNami</div>

                        <div>
                            <label className="swap swap-rotate m-3">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox"
                                       onChange={handleToggle}
                                       checked={theme === "light" ? false : true}

                                />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                                </svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                                </svg>

                            </label>

                        </div>


                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Page menu content here */}
                                <li><Link href="#Collection"  className="font-mono">Collection</Link></li>
                                <li><Link href="#Contact" className="font-mono">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="hero min-h-screen bg-base-100">
                            <div className="hero-content flex-col lg:flex-row">
                                <Image src="/Photos/mainpug.jpeg"
                                       className="max-w-sm rounded-lg shadow-2xl"
                                       width={400}
                                       alt={"Image of Stella and Tsunami"}
                                       height={400}/>
                                <div>
                                    <h1 className="text-5xl font-bold text-primary">Hi Freinds!</h1>
                                    <p className="py-6 text-primary">Introducing my beautiful Pugs, Stella and Tsunami,
                                        who will now live
                                        forever on the blockchain as NFTs. This remarkable feature is one of the many
                                        benefits that
                                        blockchain technology offers. And now, you too can experience this incredible
                                        opportunity!
                                        Click the "Contact" button to get started and bring your beloved pets to life
                                        in the world of NFTs.
                                    </p>
                                    <Link href="#Contact" className=" bg-green-700 btn text-white hover:bg-green-600 ">
                                        Contact Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><Link href="#Collection"  className="font-mono p-2 text-primary">Collection</Link></li>
                        <li><Link href="#Contact" className="font-mono p-2 text-primary">Contact</Link></li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}


export default Landing