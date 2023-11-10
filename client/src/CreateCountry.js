import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCountry() {
  const [c_name, SetName] = useState();
  const [network, SetNetwork] = useState();
  const [imsi, SetIMSI] = useState();
  const [vpmn, SetVPMN] = useState();
  const [dataCost, SetDataCost] = useState();
  const navigate =  useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/create", {
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
      <h2>Add Country</h2>
      <div class="card text-bg-dark mb-3">
        <div class="card-body">
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => SetNetwork(e.target.value)}
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
                onChange={(e) => SetVPMN(e.target.value)}
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
                onChange={(e) => SetIMSI(e.target.value)}
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
                onChange={(e) => SetDataCost(e.target.value)}
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

export default CreateCountry;
