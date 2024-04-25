import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import Image from "next/image";

export default function Home() {
    return (
        <div className=" h-full relative">
            <Navbar />
            <div className="flex flex-col bg-gray-700 h-screen text-center items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Hi I Am Zaky</h1>
                <h4 className="text-red-700 italic text-xl mt-3">A Web Developer</h4>
            </div>
            <div className="flex flex-col bg-slate-500 h-min-screen text-center items-center ">
                <h1 className="text-white text-4xl underline mt-32 font-mono">These are some of my projects</h1>
                <div className="flex flex-wrap p-8">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
            <div className="flex flex-col bg-gray-700 h-screen  items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Let's work together...</h1>
                <h1 className="text-white text-xl italic mt-4">How do you take your coffee?</h1>
                <div className="flex mt-8">
                    <div>
                        <p className="text-white m-4">GitHub</p>
                    </div>
                    <div>
                        <p className="text-white m-4">LinkedIn</p>
                    </div>
                    <div>
                        <p className="text-white m-4">Email</p>
                    </div>
                    <div>
                        <p className="text-white m-4">Contact Me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
