
import Link from "next/link";
import Button from "@/app/shared/button";

function Header() {
    return (

        <header className="mt-5 text-slate-200 flex justify-between text-sm">
            <h1 className="font-sans">MR.Muneeb</h1>
            {/* <Image src={logo} alt="logo" className="bg-black rounded-full w-24"/> */}
                <ul className ="flex gap-5">
                    <Link href="/" >
                    <li className="hover:text-[#5454D4] duration-300">Home</li>
                    </Link>
                    <Link href="/about" >
                    <li className="hover:text-[#5454D4] duration-300">About</li>
                    </Link>
                    <Link href="/contact" >
                    <li className="hover:text-[#5454D4] duration-300">Contact</li>
                    </Link>
                </ul>
                    {/* <button className="border border-slate-200 px-6 py-1 rounded-md">Contact</button> */}
                    <Button text={"Contact"}  custom={"hover:scale-110 duration-500 hover:bg-black"}/>

        </header>

    )
}
export default Header;