import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
          <button onClick={onAboutClick}>about</button>
        </li>
      </ul>
    </header>
  );
}
export default Header;
