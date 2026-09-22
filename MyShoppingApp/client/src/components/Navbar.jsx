import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">

      <Link to="/">Home</Link>
      <Link to="/myorder">My Order</Link>
      <Link to='/mycart'>My Cart</Link>
      <Link to='/myprofile'>My Profile</Link>
      <Link to='/setting'>Settings</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  );
};

export default Navbar;
