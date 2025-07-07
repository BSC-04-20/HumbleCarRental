import { NavLink } from "react-router-dom";
import Logo from "../../assets/Humble.png"

export default function NavBar(){
    return (
        <div>
            {/* Desktop Nav Bar */}
            <div className="flex items-center justify-between px-10 overflow-hidden">
                <div className="w-16 h-16">
                    <img src={Logo} className="object-cover scale-150"/>
                </div>
                <div className="flex gap-3">
                    <NavLink>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Prices</NavLink>
                </div>
                <div className="">
                    <button className="bg-tarawera-900 hover:bg-opacity-90 text-gray-50 px-6 cursor-pointer transition-colors  py-2 rounded-md">Call Now</button>
                </div>
            </div>
        </div>
    )
}