import ContactUs from "./ContactUs";
import Heros from "./Heros";
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
        </div>
    )
}