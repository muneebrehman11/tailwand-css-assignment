import Image from "next/image";
import html from "@/assets/html (1).png"
import css from "@/assets/css.png"
import javascript from "@/assets/javascript.png"
import typescript from "@/assets/typescript.png"
<<<<<<< HEAD
import react from "@/assets/react.png"
import tailwand from "@/assets/tailwind.png"

=======
>>>>>>> 084371554fcbc0c49da21febbacc44e8ceb5dbac

function Skills() {
    return (
        <section className="mt-10">
            <h2 className="text-2xl  sm:text-4xl  font-extrabold">
                Technologies I Work With:
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
                <div className="flex items-center mt-10  ">
                    <Image src={html} alt={"html"} className="group-hover:scale-110 duration-500 w-[80px] hover:shadow-xl shadow-white" /> 
<<<<<<< HEAD
                    <p className="ml-3 group">Html</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={css} alt={"css"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">CSS</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={javascript} alt={"javascript"} className="group-hover:scale-110 duration-500  w-[80px] " /> 
                    <p className="ml-3 group">Javascript</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={typescript} alt={"typescript"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-[200px] shadow-rose-800" /> 
                    <p className="ml-3 group">Typescript</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={react} alt={"react"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">React</p>
                </div>
                <div className="flex items-center mt-10">
                    <Image src={tailwand} alt={"tailwand"} className="group-hover:scale-110 duration-500  w-[80px] hover:shadow-xl shadow-white" /> 
                    <p className="ml-3 group">Tailwand css</p>
                </div>
                
              
=======
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
>>>>>>> 084371554fcbc0c49da21febbacc44e8ceb5dbac
            </div>



        </section>
    )
}
export default Skills;
