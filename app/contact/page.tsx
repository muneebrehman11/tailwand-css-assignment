import Link from "next/link";
import Button from "@/app/shared/button";
function Contact() {
    return (

        <section className=" flex-grow my-16">
            
                {/* bg color design */}
                <div className="absolute rotate-45 top-20 right-60 hidden sm:block 4xl:hidden -z-20">
                    <div className="blur-[200px] -z-20 bg-amber-950 w-40 h-[200px] rounded-full ">
                    </div>
                </div>
            <div className="group flex lg:mx-44 ">
                {/* left */}
                <div className="rounded-l-xl basis-6/12 bg-slate-950 bg-opacity-30">
                    <div className="relative my-20 text-center px-10">
                        <h2 className="text-2xl lg:text-4xl font-extrabold ">
                            Get in Touch
                        </h2>
                        <p className=" mt-5 text-slate-300 flex text-xs md:text-lg ">
                            Whether you have a question, want to  start a projecy or simply want to connect.
                            <br />

                            Feel free to send me a message in the contact form
                            <br />
                            I’m always open to new opportunities and collaborations. Let’s work together to build something great!
                        </p>
                        
                    </div>

                </div>
                {/* right */}

                {/* bg color design */}
                <div className="absolute -rotate-45 top-20 right-36 hidden sm:block 4xl:hidden -z-20">
                    <div className="blur-[150px] -z-20 bg-amber-950 w-40 h-[300px] rounded-full ">
                    </div>
                </div>

                <div className="rounded-r-xl basis-6/12 bg-[#1e1e82] text-center bg-opacity-30">
                    <form action="" className="my-20 space-y-5 flex flex-col mx-10 rounded-md ">
                        <h2 className="text-3xl font-extrabold ">Contact</h2>
                        <input type="text" placeholder="Name" className="rounded-md   h-10 p-3" />
                        <input type="email" placeholder="Email" className="rounded-md   h-10 p-3" />
                        <input type="number" placeholder="Phone" className="rounded-md   h-10 p-3" />
                        <textarea name="" id="" placeholder="Message" className="rounded-md   h-20 p-3" ></textarea>
                        <div className="flex justify-center">
                            <Button text={"Submit"} border={false} custom={" duration-700 hover:bg-[#1e1e82] bg-[#5454D4]"} />
                        </div>

                    </form>
                </div>
            </div>

       

        </section>
    )
}
export default Contact;