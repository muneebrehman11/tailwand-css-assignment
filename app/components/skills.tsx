import Image from "next/image";
import html from "@/assets/html (1).png"
import css from "@/assets/css.png"
import javascript from "@/assets/javascript.png"
import typescript from "@/assets/typescript.png"

function Skills() {
    return (
        <section className="mt-10">
            <h2 className="text-2xl  sm:text-4xl  font-extrabold">
                Technologies I Work With:
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
                <div className="flex items-center mt-10  ">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500 w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={css} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={javascript} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] " /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={typescript} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-[200px] shadow-rose-800" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Building the foundation of modern websites.</p>
                </div>
                <div className="absolute right-11 hidden sm:block 4xl:hidden -z-20">
                    <div className="blur-[100px] -z-20 bg-[#6b49ff44] w-60 h-60 rounded-full ">
                    </div>
                </div>
            </div>



        </section>
    )
}
export default Skills;
