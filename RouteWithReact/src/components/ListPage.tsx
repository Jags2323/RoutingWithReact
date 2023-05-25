import { useNavigate } from "react-router-dom";

const ListPage = () => {
    const navigate = useNavigate();
  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        navigate("/");
    }}>
      <ul>
        <li>jags</li>
        <li>kittu</li>
        <li>reddy</li>
      </ul>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ListPage;
