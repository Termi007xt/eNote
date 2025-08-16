import Notes from "./NOtes.js";

const Home = (props) => {
  return (
    <>
      <Notes showAlert={props.showAlert} />
    </>
  );
};

export default Home;
