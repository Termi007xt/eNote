import Notes from "./NOtes.js";

const Home = (props) => {
  return (
    <>
      <div className="container my-3">
        <h2>Add a note</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <Notes showAlert={props.showAlert} />
      </div>
    </>
  );
};

export default Home;
