import { Link } from "react-router-dom";
import doctorImg from "../assets/images/doctor.jpg";
import CardStyles from "../styles/card.module.css";
import { IoMdStar } from "react-icons/io";
import { useContextGlobal } from "../Context";

const Card = ({ odont }) => {
  const { dispatch, state } = useContextGlobal();

  const addFav = () => {
    const findedFav = state.data.favs.find((fav) => fav.id === odont.id);

    if (findedFav) {
      alert("Elemento ya esta en favs");
    } else {
      dispatch({ type: "ADD_FAVS", payload: odont });
    }
  };

  const { id, name, username } = odont;

  return (
    <div className={`card  ${state.theme ? "" : "dark"}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"detail/" + id} className={CardStyles.cardInfo}>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={doctorImg} alt={name} width={100} />
        <h2 className={CardStyles.name}>{name}</h2>
        <p className={CardStyles.username}>{username}</p>
        <p className={CardStyles.id}>{id}</p>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        <IoMdStar className={CardStyles.favIcon} />
      </button>
    </div>
  );
};

export default Card;
