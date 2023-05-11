import React from "react";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter();
    const {movieId} = router.query;

    const {data} = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center bg-black bg-opacity-70 gap-8">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className="cursor-pointer text-white" size={40}/>
                <p className="text-white text-xl md:text-3xl font-bold"><span>Watching : </span>{data?.title}</p>
            </nav>
            <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
        </div>
        
    )
}

export default Watch;