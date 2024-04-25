import Link from "next/link"

let style = {
    button : "w-1/8  p-4 text-center text-white text-2xl hover:bg-gray-500"
}

export default function Navbar(){
    return(
        <div className="flex justify-end fixed w-full" style={{backgroundColor : "#ab3549"}}>
            <Link href={"#"} className={style.button}>About</Link>
            <Link href={"#"} className={style.button}>Work</Link>
            <Link href={"#"} className={style.button}>Contact</Link>
        </div>
    )
}