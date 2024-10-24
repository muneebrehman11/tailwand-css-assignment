import Wrapper from "@/app/shared/wrapper";
function Footer(){
    return(
        <footer className="h-32 bg-[#202020] md:py-16">
            <Wrapper>
           <div className="flex flex-col md:flex-row  align-middle justify-between">
           <h1>MR.Muneeb</h1>
            <ul  className="flex flex-col md:flex-row gap-2 md:gap-4 ">
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
            <p className="">
            © 2024 MR.All Rights Reserved
            </p>
           </div>
          </Wrapper>
        </footer>
    )
}
export default Footer;