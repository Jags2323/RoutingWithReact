import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailsPage = () => {
    const param =useParams();
    const [searchParams, setSeachParams] = useSearchParams();  // acccess and update query params
    console.log(searchParams.toString());
    console.log(searchParams.get('name'));
    const location = useLocation();
    console.log(location);
    
    
  return (
    <p>User</p>
  )
}

export default UserDetailsPage