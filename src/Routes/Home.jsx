import Card from "../Components/Card";
import { useContextGlobal } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.data.odonts.map((odont) => (
          <Card key={odont.id} odont={odont} />
        ))}
      </div>
    </main>
  );
};

export default Home;
