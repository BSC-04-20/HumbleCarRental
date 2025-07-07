import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Heros from "./Heros";
import HumbleCarRentalLocation from "./map";
import NavBar from "./NavBar";
import OurFleet from "./OurFleet";
import WhyChooseUs from "./WhyChooseUs";

export default function Home(){
    return(
        <div className="">
            <NavBar/>
            <Heros/>
            <OurFleet/>
            <WhyChooseUs/>
            <ContactUs/>
            {/* <HumbleCarRentalLocation/> */}
            <Footer/>
        </div>
    )
}