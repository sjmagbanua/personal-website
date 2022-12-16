import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <>
            <div className="w-full md:h-screen p-2 flex items-center py-16">
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <p className="uppercase tracking-widest text-[#5651e5]">About</p>
                        <h1 className="py-2">Who I Am</h1>
                        <p className="py-2 text-gray-600">
                            // I am not your normal developer
                        </p>
                        <p className="text-gray-600">
                            I am a graduate of Bachelor of Science in Information Technology 4 years course.
                            I graduated in Cebu Eastern College at Leon Kilat St, Cebu City, Cebu. In our thesis
                            project I was the one who design our system. We use HTML CSS JAVASCRIPT PHP for
                            server side and MYSQL for database.
                        </p>
                        <p className="cursor-pointer underline text-gray-700 hover:scale-105 ease-in duration-300"><Link href="#">Check out some of my latest projects</Link></p>
                    </div>
                    <div className="m-auto h-auto w-full shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                        <Image className="rounded-xl" src='/images/monitor.jpg' width="500" height="200" alt='Image'/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}