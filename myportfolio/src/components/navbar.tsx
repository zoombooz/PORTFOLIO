import Link from "next/link"

let style = {
    button : "w-1/8  p-4 text-center text-white text-2xl hover:bg-gray-500 transition duration-200"
}

export default function Navbar(){
    return(
        <div className="flex justify-end fixed w-full" style={{backgroundColor : "#ab3549"}}>
            <Link href={"#about"} className={style.button} style={{scrollBehavior : "smooth"}}>About</Link>
            <Link href={"#work"} className={style.button}>Work</Link>
            <Link href={"#contact"} className={style.button}>Contact</Link>
        </div>
    )
}