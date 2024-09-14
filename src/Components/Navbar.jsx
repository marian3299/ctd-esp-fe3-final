import { Link } from "react-router-dom";
import NavbarStyles from "../styles/navbar.module.css";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useContextGlobal } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch, state } = useContextGlobal();

  return (
    <nav className={state.theme ? "" : NavbarStyles.darkTheme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <p className={NavbarStyles.pNavbar}>
        <span>D</span>H Odonto
      </p>
      <div className={NavbarStyles.linksContainer}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button
          className={`${NavbarStyles.button} ${
            state.theme ? NavbarStyles.buttonLight : NavbarStyles.buttonDark
          }`}
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          {state.theme ? (
            <FaMoon className={NavbarStyles.moonIcon} />
          ) : (
            <IoSunny className={NavbarStyles.moonIcon} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
