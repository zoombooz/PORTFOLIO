import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import Image from "next/image";

let profileImg = "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww"
let imageUrl = "https://images.unsplash.com/photo-1713972327618-381d95481ca2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"

export default function Home() {
    return (
        <div className=" h-full relative">
            <Navbar />
            <div className="flex bg-gray-700 h-screen text-center items-center justify-center px-32 ">
                <div className="w-1/2 flex flex-col">
                    <h1 className="text-white text-5xl font-bold">Hi, I Am Zaky</h1>
                    <h4 className="text-red-700 italic text-xl mt-3">A Web Developer</h4>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <img src={profileImg} alt="My Self" className="rounded-full h-96 w-96 border-solid border-8" />
                </div>
            </div>
            <div className="flex flex-col bg-slate-500 h-min-screen text-center items-center ">
                <h1 className="text-white text-4xl underline mt-32 font-mono">These are some of my projects</h1>
                <div className="flex flex-wrap p-8">
                    <ProjectCard name="project1" url="#" img={imageUrl}/>
                    <ProjectCard name="project2" url="#" img={imageUrl}/>
                    <ProjectCard name="project3" url="#" img={imageUrl}/>
                    <ProjectCard name="project4" url="#" img={imageUrl}/>
                    <ProjectCard name="project5" url="#" img={imageUrl}/>
                    <ProjectCard name="project6" url="#" img={imageUrl}/>
                </div>
            </div>
            <div className="flex flex-col bg-gray-700 h-screen  items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Let's work together...</h1>
                <div className="flex mt-8">
                    <div>
                        <a target="_blank" href="https://github.com/zoombooz" className="text-white m-4">GitHub</a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/zaky-ahmad-makarim-b957332a4/" className="text-white m-4">LinkedIn</a>
                    </div>
                    <div>
                        <a href="mailto:zakyahmad0023@gmail.com" className="text-white m-4">Email</a>
                    </div>
                    <div>
                        <a href="tel:+6282189503684" className="text-white m-4">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
