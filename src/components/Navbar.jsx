import { NavLink } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    About: "/about",
    link: "/about",
    id : "header-link-about"
  },
  {
    Movies: "/movies",
    link: "/movies",
    id : "header-link-movies"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div style={{backgroundColor:"grey", padding:"20px"}}>
       {links.map(({title,to}, index) =>{
        return <Link key={index} to={to}>{title}</Link>
       })}
    </div>
  );
};
