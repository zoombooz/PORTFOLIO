export default function ProjectCard(props : {name : string, url : string, img : string}){
    let {name, url, img} = props
    return(
        <a href={url} target="_blank" className="m-8">
            <div className="bg-red-100 w-96 h-96 rounded-sm">
                <div className="h-5/6">
                    <img src={img} className="object-cover h-full"/>
                </div>
                <div className="flex bg-gray-700 h-1/6 items-center justify-center">
                    <h1 className="text-white">{name}</h1>
                </div>
            </div>
        </a>
    )
}