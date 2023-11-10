import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateCountry() {
  const { id } = useParams();

  const [c_name, SetName] = useState();
  const [network, SetNetwork] = useState();
  const [imsi, SetIMSI] = useState();
  const [vpmn, SetVPMN] = useState();
  const [dataCost, SetDataCost] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getCountry/" + id)
      .then((result) => {
        console.log(result);
        SetName(result.data.c_name);
        SetNetwork(result.data.network);
        SetIMSI(result.data.imsi);
        SetVPMN(result.data.vpmn);
        SetDataCost(result.data.dataCost);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put("http://localhost:5000/update/"+id, {
        c_name,
        network,
        imsi,
        vpmn,
        dataCost,
      });
      console.log(result.data);
      navigate('/')
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h2>Update Country</h2>
      <div class="card text-bg-dark mb-3">
        <div class="card-body">
          <form onSubmit={handleUpdate}>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                Country Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={c_name}
                onChange={(e) => {
                  SetName(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                Network
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={network}
                onChange={(e) => {
                  SetNetwork(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                VPMN
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={vpmn}
                onChange={(e) => {
                  SetVPMN(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                IMSI
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={imsi}
                onChange={(e) => {
                  SetVPMN(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                Data Cost per MB
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={dataCost}
                onChange={(e) => {
                  SetDataCost(e.target.value);
                }}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCountry;
