import Image from "next/image";

export default function Skills(){
    return(
        <>
            <div className="w-full lg:h-screen p-2">
                <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                    <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                    <h2 className="py-4">What I CAN DO</h2>
                    <div className="grid md:grod-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src='/images/html.jpg' alt='programming' width={100} height={100}/>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h3>HTML</h3>
                                </div> 
                                 
                            </div>
                            {/* <div className="mb-4 grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src='/images/css.jpg' alt='programming' width={100} height={100}/>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h3>CSS</h3>
                                </div>
                            </div> */}

                            {/* <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src='/images/javascript.jpg' alt='programming' width={100} height={100}/>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h3>JAVASCRIPT</h3>
                                </div>
                            </div> */}

                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/images/css.jpg' alt='programming' width={100} height={100}/>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/images/javascript.jpg' alt='programming' width={100} height={100}/>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}