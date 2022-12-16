'use client';


import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose, AiOutlineGithub, AiFillMail, AiFillFacebook } from 'react-icons/ai';
import { BsFilePersonFill } from 'react-icons/bs';
import { useState } from "react";

 export default function Navbar(){
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <div className="fixed w-full h-20 shadow-xl z-[100]">
                <div className='flex justify-between items-center w-full h-full text-white px-2 2xl:px-16'> 
                    <Image src='/images/Snickers.png' alt='logo' width={100} height={100} />
                    <div>
                        <ul className="hidden md:flex">
                            <Link href="#"><li className="ml-10 text-sm uppercase hover:border-b">Home</li></Link>
                            <Link href="#"><li className="ml-10 text-sm uppercase hover:border-b">About</li></Link>
                            <Link href="#"><li className="ml-10 text-sm uppercase hover:border-b">Skills</li></Link>
                            <Link href="#"><li className="ml-10 text-sm uppercase hover:border-b">Projects</li></Link>
                            <Link href="#"><li className="ml-10 text-sm uppercase hover:border-b">Contact </li></Link>
                        </ul>
                    </div>
                    <div onClick={handleNav} className="md:hidden">
                        <RxHamburgerMenu size={25}/>
                    </div>
                </div>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    <div className={
                        nav 
                        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Image src='/images/Snickers.png' alt='logo' width={100} height={100} />
                                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose size={25}/>
                                </div> 
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:[90%] py-4">Let's build something legendary together</p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href='#'>
                                <li className="py-4 px-4 text-sm hover:border-b hover:shadow-lg">Home</li>
                                </Link>
                                <Link href='#'>
                                <li className="py-4 px-4 text-sm hover:border-b hover:shadow-lg">About</li>
                                </Link>
                                <Link href='#'>
                                <li className="py-4 px-4 text-sm hover:border-b hover:shadow-lg">Skills</li>
                                </Link>
                                <Link href='#'>
                                <li className="py-4 px-4 text-sm hover:border-b hover:shadow-lg">Projects</li>
                                </Link>
                                <Link href='#'>
                                <li className="py-4 px-4 text-sm hover:border-b hover:shadow-lg">Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#5651e5]">Let's connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineGithub/>
                                    </div>  
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiFillMail/>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFilePersonFill/>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }