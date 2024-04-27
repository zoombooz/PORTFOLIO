import Image, { StaticImageData } from "next/image"

let style = {
    hoverButton : "p-2 rounded-xl border-solid border-2 border-gray-700 mx-2 hover:bg-gray-700 hover:text-white transition duration-300"
}

export default function ProjectCard(props : {name : string, url : string, img : StaticImageData}){
    let {name, url, img,} = props

    return(
        <div className="m-8">
            <div className="w-96 h-96 bg-gray-400">
                <div className="absolute opacity-0 transition duration-300 h-80 w-96 flex flex-col justify-center items-center hover:bg-gray-100 hover:opacity-70">
                    <p className="text-left mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tellus odio. In quis blandit tellus, a tincidunt mauris. Suspendisse potenti. Mauris consectetur sed tortor ac laoreet. Maecenas posuere massa eu elementum elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                    <div className="flex mt-4">
                        <a href="https://github.com/FINAL-PROJECT-HACKTIV8-HCK67" target="_blank" className={style.hoverButton}>Github</a>
                        <a href="https://pintarlabs.web.app/" target="_blank" className={style.hoverButton}>Deploy</a>
                    </div>
                </div>
                <div className="h-5/6">
                    <Image src={img} height={500} width={500} alt={name + "'s Preview"} className="object-contain h-full"/>
                </div>
                <div className="flex bg-gray-700 h-1/6 items-center justify-center">
                    <h1 className="text-white text-xl"><span className="text-orange-500">&lt;</span> {name} <span className="text-orange-500">/&gt;</span></h1>
                </div>
            </div>
            
        </div>
    )
}