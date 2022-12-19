import Image from "next/image";
import { AiFillMail, AiOutlineGithub } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";

export default function Contact(){
    return(
        <>
            <div className="w-full lg:h-screen">
                <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
                    <p className="text-xl tracking-widest uppercase text-#5651e5">Contact</p>
                    <h2 className="py-4">Get in Touch</h2>
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* left */}
                        <div className="col-span-2 lg:col-span-2 w-full h-full shadow-xl bg-white shadow-gray-400 rounded-xl p-4">
                            <div className="py-4 h-full">
                                <div>
                                    <Image className="rounded-xl hover:scale-105 ease-in duration-300" src='/images/rick.gif' alt='logo' width={500} height={100} />
                                </div>
                                <div>
                                    <h2 className="py-2">Name here</h2>
                                    <p>Front End Developer</p>
                                    <p className="py-4">
                                        I am available for freelance or full-time positions. 
                                        Contact me and let's talk.
                                    </p>
                                </div>
                                <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#5651e5]">Connect With Me</p>
                                    <div className="flex items-center justify-between my-4 max-w-[550px] w-full sm:w-[80%]">
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
                        {/* right */}
                        <div className="col-span-3 w-full h-auto shadow-xl bg-white shadow-gray-400 rounded-xl lg:p-4">
                            <div className="py-4">
                                <form>
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2 ">Name</label>
                                            <input type="text" placeholder="Your Name" className="border-2 rounded-lg p-3 flex border-gray-500" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2 ">Phone Number</label>
                                            <input type="number" placeholder="Phone number" className="border-2 rounded-lg p-3 flex border-gray-500" />
                                        </div>
                                        <div className="flex flex-col py-2 col-span-2">
                                            <label className="uppercase text-sm py-2">Email</label>
                                            <input type="email" placeholder="Email"className="border-2 rounded-lg p-3 border-gray-500 flex" />
                                        </div>
                                        <div className="flex flex-col py-2 col-span-2">
                                            <label className="uppercase text-sm py-2">Subject</label>
                                            <input type="email" placeholder="Subject"className="border-2 rounded-lg p-3 border-gray-500 flex" />
                                        </div>
                                        <div className="flex flex-col py-2 col-span-2">
                                            <label>Message</label>
                                            <textarea className="flex border-2 rounded-lg p-3 border-gray-500"></textarea>
                                        </div>
                                    </div>
                                    <button className="w-full text-gray-100 mt-4 p-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Reviews</h1>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}