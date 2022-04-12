import "./inputSearch.scss";
// redux
import { useDispatch } from "react-redux";
//actions
import { setFirstSearch } from "../../redux/properties/actions";
import { setIsLoading } from "../../redux/isLoading/reducer";
// router hooks
import { useLocation, useNavigate } from "react-router-dom";
import glassIcon from "../../assets/img/glassIcon.png";
import { bindActionCreators } from "redux";
import { useState } from "react";

export const InputSearch: React.FC = () => {
  // router
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // setting query param for init input state
  const query = new URLSearchParams(search);
  const city = query.get("city");

  const [inputValue, setInputValue] = useState<string>(city ? city : "");
  //redux hooks
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { setFirstSearch, setIsLoading },
    dispatch
  );

  const handleSubmit = () => {
    if (inputValue === "") return console.log("input empty");
    navigate(`/dashboard?city=${inputValue}`);
    actions.setIsLoading(true);
    actions.setFirstSearch(inputValue);
  };

  return (
    <article className="inputFilterArticle">
      <h3>Select your destiny</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <span className="inputSearchContainer">
          <input
            className="inputSearch"
            name="city"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="City, country..."
          />
          <button type="submit" className="noBtn">
            <img src={glassIcon} alt="glass" />
          </button>
        </span>
      </form>
    </article>
  );
};
