import houseIcon from "../../assets/img/houseIcon.png";
import "./header.scss";

import { useNavigate, useLocation } from "react-router-dom";
import { InputSearch } from "../InputSearch/InputSearch";
export const Header: React.FC = () => {
  const router = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="headerWrapper">
      <button className="HeaderBtnLogo noBtn" onClick={() => router("/")}>
        <img className="headerImg" src={houseIcon} alt="house" />
        <h1 className="headerTitle">Housing FakeAPI</h1>
      </button>
      {pathname === "/dashboard" && <InputSearch />}
    </header>
  );
};
