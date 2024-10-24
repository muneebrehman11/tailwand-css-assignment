import Image from "next/image";
import image from "@/assets/lego-figure-boy-wearing-jacket-with-word-s-it_1270569-3133-removebg-preview.png"
import Icons from "@/app/shared/social-icons";
function About() {
    return (
        <section className=" flex-grow mt-20 ">
            <div className="flex ">

                {/* left */}
                <div className="flex-1">
                    <h1 className="text-4xl font-extrabold ">
                        About Me
                    </h1>

                    <p className=" mt-5 text-slate-300 flex text-base max-w-[650px] text-justify  leading-8">
                        I am a dedicated web developer with a passion for crafting seamless and interactive user experiences. With a solid background in front-end technologies like HTML, CSS, JavaScript, and React/Next.js, I focus on creating scalable, responsive, and performance-optimized websites. My journey in web development has been fueled by a curiosity for technology and a drive to solve real-world problems.

                        Currently, I am expanding my expertise in Artificial Intelligence through the Governor Initiative for Artificial Intelligence (GIAIC). This program is equipping me with cutting-edge knowledge in AI, which I plan to integrate into future web projects to enhance functionality and user experience.
                    </p>
                    <div className="flex justify-center mt-20">
                        <Icons />
                    </div>

                    {/* bg color design */}
                    <div className="absolute -rotate-45 top-20 hidden sm:block 4xl:hidden -z-20">
                        <div className="blur-[140px] -z-20 bg-purple-800 w-32 h-[200px] rounded-full ">
                        </div>
                    </div>


                </div>
                {/* right */}
                <div className="flex flex-1 justify-center">
                    <Image src={image} alt="Muneeb ur rehman" className="about-right-img" />
                    {/* bg color design */}
                    <div className="absolute rotate-45 top-40 right-60 hidden sm:block 4xl:hidden -z-20">
                        <div className="blur-[130px] -z-20 bg-amber-900 w-64 h-[600px] rounded-full ">
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About;