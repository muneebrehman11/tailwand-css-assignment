import Link from "next/link"
import Image from "next/image"
import image from "@/assets/image.png"
import Button from "@/app/shared/button"


export default function Hero() {
  return (
    <section className="mt-20 flex flex-col-reverse lg:flex-row  ">
      {/* left side Content */}
      <div className="flex flex-col flex-1 justify-center">
        {/* bg color div */}
        <div className="absolute -rotate-45  hidden sm:block 4xl:hidden -z-20">
          <div className="blur-[100px] -z-20 bg-[#6b49ff44] w-40 h-[200px] rounded-full ">
          </div>
        </div>
        <p className="font-medium sm:font-semibold md:font-bold">Hi I'm</p>
        <h1 className="text-2xl  sm:text-5xl  font-extrabold bg-gradient-to-r from-orange-50 via-orange-100 to-yellow-100 bg-clip-text text-transparent">Muneeb ur Rehman</h1>
        <p className=" mt-5 text-slate-300 flex text-sm sm:text-base text-justify leading-6 sm:leading-8">
          A passionate front-end developer with a strong foundation in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, TypeScript, React, and Next.js. Currently, I am advancing my skills in artificial intelligence through the Governor Initiative for Artificial Intelligence (GIAIC). Explore my projects, learn about my journey, and feel free to reach out to me for collaboration opportunities!
        </p>

        <div className="mt-7 ">
          <Link href={"/contact"}>
            <Button text={"Contact"} border={false} custom={"hover:scale-110 duration-700 hover:bg-[#1e1e82] bg-[#5454D4]"} />
          </Link>
        </div>
      </div>

      {/* righ side content */}
      <div className="flex flex-1 justify-center -mt-10">
        <div className="absolute top-24 right-72 hidden sm:inline-block 4xl:hidden -z-20">
          <div className="blur-[140px] -z-20 bg-orange-950 w-[200px] h-[800px] rounded-full rotate-45">
          </div>
        </div>
        <Image src={image} alt="image" className="w-[300px] md:w-[250px] lg:w-[300px]  object-cover rounded-full flex " />

      </div>

    </section>
  )
}