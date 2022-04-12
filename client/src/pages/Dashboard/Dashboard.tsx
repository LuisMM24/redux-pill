// hooks
import { useEffect, useState } from "react";
// styles
import "./dashboard.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
// actions
import { setIsLoading } from "../../redux/isLoading/reducer";
import { setSearchWithFilter } from "../../redux/properties/actions";
import { bindActionCreators } from "redux";

//components
import { PropertieCard } from "../../components/PropertieCard/PropertieCard";
import { Loading } from "../../components/Loading/Loading";
import { FilterForm } from "../../components/FilterForm/FilterForm";
import { useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
  // router init
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const [error, setError] = useState<boolean>(false);
  // redux init
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { setIsLoading, setSearchWithFilter },
    dispatch
  );
  const {
    searcher: { properties, inputSearch },
    isLoading,
  } = useSelector((state: RootState) => state);

  // manage filter form
  const handleDispatchFilterForm = (form: IFormFilter) => {
    actions.setIsLoading(true);
    actions.setSearchWithFilter(form, inputSearch);
  };

  useEffect(() => {
    if (properties.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    actions.setIsLoading(false);
  }, [properties]);

  return (
    <>
      <main className="dashboardMain">
        <FilterForm dispatch={handleDispatchFilterForm} />
        {isLoading && !error && <Loading />}
        {error && <h2>No results found 🥲</h2>}
        {!isLoading && (
          <>
            <h2>Results for {inputSearch}</h2>
            <div className="propertiesWrapper">
              {properties.map((propertie: IPropertie) => (
                <PropertieCard
                  key={propertie.id}
                  image={propertie.image}
                  title={propertie.type}
                  city={propertie.city}
                  rooms={propertie.room}
                  size={propertie.size}
                  price={propertie.price}
                  description={propertie.description}
                  contactPhone={propertie.contact_phone}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};
