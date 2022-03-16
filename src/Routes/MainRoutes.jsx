import { Routes,Route } from "react-router-dom"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { MoviesDashboard } from "../components/MoviesDashboard";
import { Navbar } from "../components/Navbar";
export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/moviesDashboard" element={<MoviesDashboard/>}/>
            
            </Route>
            </Route>
        </Routes>
        </>
    )
}