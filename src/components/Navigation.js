import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
            Accueil
        </NavLink> 
        <NavLink exact to="About" activeClassName="nav-active">
            À propos
        </NavLink> 
    </div>
  );
};
export default Navigation;
