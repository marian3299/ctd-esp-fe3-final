import Card from "../Components/Card";
import { useContextGlobal } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.data.favs.map((odont) => (
          <Card key={odont.id} odont={odont} />
        ))}
      </div>
    </>
  );
};

export default Favs;
