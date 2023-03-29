
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../styles/EditCar.css";
import axios from "axios";

// import AdminNav from "../components/AdminNav";

function EditCar() {
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    carname: "",
    type: "",
    model: "",
    milage: "",
    perkm: "",
    image: "",
    availablefrom: "",
    availabletill: "",
    description: "",
    cardetails: "",
    details: "",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const HandleImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "cardata");
    data.append("cloud_name", "drfg4tq7u");
    fetch("https://api.cloudinary.com/v1_1/drfg4tq7u/upload",
      {
        method: "post",
        body: data
      })
      .then(resp => resp.json())
      .then((data) => setFormdata({
        ...formdata,
        image: data.url
      }))
      .catch((err) => {
        console.log(err)
      });
  };
  const Submitdata = () => {
    axios
      .post("http://localhost:5000/newCarDetail", (formdata))
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        setUrl(data.url);
        setFormdata({
          ...formdata,
          image: data.url
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formdata);
    console.log(url)
    navigate('/admin')
  };


  return (<>
    {/* <AdminNav /> */}
    <br />
    <h3 >EDIT CAR DETAILS</h3>
    <div className="dividor">
      <div className="sec1">
        <div className="CN">
          <label >Car Name</label>
          <input type="text"
            placeholder="Name"
            name="carname"
            onChange={HandleChange} ></input>
        </div>
        <div className="dev1">
          <div className="devv">
            <label for="cartype">Type </label>
            <input
              type="text"
              name="type"
              className="inp-type"
              onChange={HandleChange}
            />
          </div>

          <div className="dev">
            <label for="model">Model </label>
            <input
              type="text"
              name="model"
              className="inp-model"
              onChange={HandleChange}
            />
          </div>
        </div>

        <div className="dev2">
          <div className="devv">
            <label for="milage">Milage </label>
            <input
              type="number"
              name="milage"
              className="inp-milage"
              onChange={HandleChange}
            />
          </div>

          <div className="dev">
            <label for="perkm">perKM </label>
            <input type="number"
              id="perkm"
              placeholder="0000"
              name="perkm"
              onChange={HandleChange}
            ></input>

          </div>
        </div>

        <div className="dev3">
          <div className="devv">
            <label for="doa">Available from </label>
            <input type="date"
              id="doa"
              name="availablefrom"

              onChange={HandleChange}
            ></input>
          </div>

          <div className="dev">
            <label for="dt">Available till </label>
            <input type="date" id="dt"
              name="availabletill"
              onChange={HandleChange}
            ></input>

          </div>

        </div>
        <div className="dev4">
          <div className="CN">
            <label for="desc">Description </label>
            <textarea id="cd" rows="4" colums="100"
              name="description"
              onChange={HandleChange}
            ></textarea>

          </div>
        </div>
        <div className="c-btn"><Link to="/admin"><button id="cancel" >Cancel</button></Link></div>
       
      </div>
      <div className="sec2">
        <div className="dev">
          <div id="dev1"><label>Images </label><button className="addimg" onClick={HandleImage}>ADD</button></div>

          <input type="file"
            name="image"
            className="image"
            onChange={(e) => {
              setImage(e.target.files[0])
            }}></input>
        </div>


        <div className="dev5">
          <label for="cd">Car details </label>
          <textarea id="cd" rows="4" colums="100"
            name="cardetails"
            onChange={HandleChange}></textarea>

          <label for="details">Details </label>
          <textarea id="details" rows="4" colums="100"
            name="details"
            onChange={HandleChange}></textarea>
        </div>
        <div className="btnss">
          <div>
            <Link to="/admin"><button className="Delete"
            onClick={Submitdata}>Delete </button>
          </Link>
          </div>
          <div>
            <Link to="/admin"><button className="Save"
            onClick={Submitdata}>Save </button>
             </Link>
          </div>
          
        </div>
      </div>
    </div>
  </>

  )
}


export default EditCar;