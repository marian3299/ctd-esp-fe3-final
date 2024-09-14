//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url).then((res) => setDetail(res.data));
  }, []);

  const { email, name, phone, website } = detail;

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
