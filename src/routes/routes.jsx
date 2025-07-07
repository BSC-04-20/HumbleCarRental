import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

export const routes = createBrowserRouter([
    { path:"/", element:<Home/>}
])