import Link from "next/link";
import { AiFillMail, AiOutlineGithub } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";

export default function MainText(){
    return(
        <>
        <div className='flex flex-col items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
          {/* overlay */}
          <div/>
            <div className='max-w-[1240px] mx-auto bg-black/70 px-10 py-5'>
                <p className="tracking-widest text-center text-white">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 text-center text-white">Hi, <span className='text-violet-300'>I'm Snickers</span></h1>
                <h1 className="py-2 text-center text-white">A Front-End Web Developer</h1>
                <p className="tracking-widest py-2 text-center text-white"> 
                    I'm a front-end web developer specializing in building. 
                    Currently, I'm focused on building responsive front-end web applications.
                </p>
                {/* <button><Link href="#">Personal Website</Link></button> */}
                <div className="flex items-center max-w-[330px] mx-auto justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineGithub className='bg-white' size={30}/>
                    </div>  
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiFillMail className='bg-white' size={30}/>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFilePersonFill className='bg-white' size={30}/>
                    </div>                                    
                </div>
            </div>
        </div>
        </>
    )
}