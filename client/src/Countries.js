import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Countries() {
  const [Country, SetCountry] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => SetCountry(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handelDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Link to="/create" className="btn btn-success">
        Add
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Network</th>
            <th scope="col">VPMN</th>
            <th scope="col">IMSI</th>
            <th scope="col">Data Cost per MB</th>
            <th scope="col">Cost of 1 GB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Country.map((con) => {
            return (
              <tr>
                <td>{con.c_name}</td>
                <td>{con.network}</td>
                <td>{con.vpmn}</td>
                <td>{con.imsi}</td>
                <td>{con.dataCost}$</td>
                <td>{con.dataCost * 1024}$</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handelDelete(con._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${con._id}`} className="btn btn-success">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Countries;
