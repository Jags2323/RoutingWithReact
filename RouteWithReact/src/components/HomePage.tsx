import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>HomePage</p>

      <Link to="/users" style={{ display: "block", marginBottom: "10px" }}>
        Users
      </Link>
      <Link to="/contact" style={{ display: "block" }}>
        ContactPage
      </Link>
      {/* <a href="/users">Users</a> */}
    </>
  );
};

export default HomePage;
