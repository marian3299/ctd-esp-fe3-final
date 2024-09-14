import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [costumer, setCostumer] = useState({
    name: "",
    email: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErros] = useState(false);

  const handleNameChange = (e) => {
    setCostumer({ ...costumer, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setCostumer({ ...costumer, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = costumer;

    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    if (name.trim().length > 5 && emailRegex.test(email)) {
      setShowMessage(true);
      setErros(false);
    } else {
      setErros(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" value={costumer.name} onChange={handleNameChange} />
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={costumer.email}
          onChange={handleEmailChange}
        />
        <button>Send</button>
      </form>
      {errors && <p>Por favor verifique su información nuevamente</p>}
      {showMessage && (
        <h2 style={{ fontWeight: "400" }}>
          Gracias {costumer.name}, te contactaremos via email
        </h2>
      )}
    </div>
  );
};

export default Form;
