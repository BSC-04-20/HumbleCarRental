import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Prices from "../Components/Price/Prices";

export const routes = createBrowserRouter([
    { path:"/", element:<Home/>},
    { path:"/About", element:<About/>},
    { path:"/Prices", element:<Prices/>}
])