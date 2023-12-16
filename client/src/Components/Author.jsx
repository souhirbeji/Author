import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Author= () => {
  const [Name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/author", { Name })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log("unexpected error occured ",err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Link to="/">Home</Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={Name}
              />
              {errors.Name ? <p>{errors.Name.message}</p> : null}
            </div>
            <button className="btn btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Author;