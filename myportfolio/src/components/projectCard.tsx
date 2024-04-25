export default function ProjectCard(){
    return(
        <div className="bg-gray-100 w-64 h-64 m-8 rounded-xl">
            <div className="h-5/6 bg-red-500">
                <img src="https://picsum.photos/200" className="object-fill"/>
            </div>
            <div className="flex bg-gray-700 h-1/6 items-center justify-center">
                <h1 className="text-white">  Project</h1>
            </div>
        </div>
    )
}