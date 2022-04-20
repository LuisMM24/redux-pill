import houseIcon from "../../assets/img/houseIcon.png";
import "./header.scss";
// redux
import { signOut } from "../../redux/user/actions";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { InputSearch } from "../InputSearch/InputSearch";
import { RootState } from "../../redux/reducers";
export const Header: React.FC = () => {
  const router = useNavigate();
  // redux
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { pathname } = useLocation();
  return (
    <header className="headerWrapper">
      <button className="HeaderBtnLogo noBtn" onClick={() => router("/")}>
        <img className="headerImg" src={houseIcon} alt="house" />
        <h1 className="headerTitle">Housing FakeAPI</h1>
      </button>
      {pathname === "/dashboard" && <InputSearch />}
      {(!user.token && <Link to={"/login"}>Login</Link>) || (
        <>
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
          <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </>
      )}
    </header>
  );
};
