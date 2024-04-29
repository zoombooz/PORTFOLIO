import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import Image from "next/image";
import pintarLabsImg from "../assets/pintarlabs.png"
import underConstructionImg from "../assets/underconstruction.jpg"
import profileImg from "../assets/Zaky_Ahmad_Mak.png"

let style = {
    socialButton : "text-white text-2xl mx-4 mt-16 p-4 rounded-xl hover:bg-gray-400 hover:text-gray-700 transition duration-300"
}

export default function Home() {
    return (
        <div className=" h-full relative" style={{scrollBehavior : "smooth", overflowY : "scroll"}}>
            <Navbar />
            <div id="about" className="flex bg-gray-700 h-screen text-center items-center justify-center px-32 ">
                <div className="w-1/2 flex flex-col">
                    <h1 className="text-white text-5xl font-bold">Hi, I Am Zaky</h1>
                    <h4 className="text-red-700 italic text-2xl mt-3">A Web Developer</h4>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <Image src={profileImg} alt="My Self" className="rounded-full object-cover h-96 w-96 border-solid border-8" />
                </div>
            </div>
            <div id="work" className="flex flex-col bg-slate-500 h-min-screen text-center items-center ">
                <h1 className="text-white text-4xl underline mt-32 font-mono">These are some of my projects</h1>
                <div className="flex flex-wrap p-8">
                    <ProjectCard name="PintarLabs" url="https://pintarlabs.web.app/" img={pintarLabsImg}/>
                    <ProjectCard name="TBA" url="#" img={underConstructionImg}/>
                    <ProjectCard name="TBA" url="#" img={underConstructionImg}/>
                    <ProjectCard name="TBA" url="#" img={underConstructionImg}/>
                    <ProjectCard name="TBA" url="#" img={underConstructionImg}/>
                    <ProjectCard name="TBA" url="#" img={underConstructionImg}/>
                </div>
            </div>
            <div className="h-screen" id="contact">
                <div className="flex flex-col bg-gray-700  items-center justify-center h-5/6">
                    <h1 className="text-white text-6xl font-bold mb-8">Let&apos;s work together...</h1>
                    <div className="flex mt-8">
                        <div>
                            <a target="_blank" href="https://github.com/zoombooz" className={style.socialButton}>GitHub</a>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.linkedin.com/in/zaky-ahmad-makarim-b957332a4/" className={style.socialButton}>LinkedIn</a>
                        </div>
                        <div>
                            <a href="mailto:zakyahmad0023@gmail.com" className={style.socialButton}>Email</a>
                        </div>
                        <div>
                            <a href="tel:+6282189503684" className={style.socialButton}>Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/6 bg-gray-700 border-solid border-t-4 border-red-500 justify-center items-center">
                    <p className="text-white text-xl">© Created by Zaky Ahmad Makarim</p>
                </div>
            </div>
        </div>
    );
}
