import "./filterForm.scss";
// components
import { Formik } from "formik";
import { Checkbox } from "../Checkbox/Checkbox";
import { Select } from "../Select/Select";
import { setPrices } from "../../utils/formatMoney";

const initialValues: IFormFilter = {
  type: [],
  condition: [],
  room: null,
  bath: null,
  price_gte: null,
  price_lte: null,
  pet: null,
  garden: null,
  air_conditioning: null,
  swimming_pool: null,
  terrace: null,
};

interface Props {
  dispatch: (formValues: IFormFilter) => void;
}

export const FilterForm: React.FC<Props> = ({ dispatch }) => {
  return (
    <>
      <h1 className="dashTitle">Filter dashboard:</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          // parsing values to numbers cause event effect
          const parsedIntegers: IFormFilter = {
            ...values,
            bath: Number(values.bath),
            room: Number(values.room),
            price_gte: Number(values.price_gte),
            price_lte: Number(values.price_lte),
          };
          dispatch(parsedIntegers);
        }}
      >
        {({ values, handleChange, submitForm }) => (
          <form className="filterForm">
            <div className="typesWrapper">
              <h4>Type of home</h4>
              <Checkbox
                id="houseType"
                handleChange={handleChange}
                submitForm={submitForm}
                name="type"
                value="house"
              />
              <Checkbox
                id="flatType"
                handleChange={handleChange}
                submitForm={submitForm}
                name="type"
                value="flat/apartment"
              />

              <Checkbox
                id="duplexType"
                handleChange={handleChange}
                submitForm={submitForm}
                name="type"
                value="duplex"
              />
            </div>
            <div className="conditionsWrapper">
              <h4>Condition</h4>
              <Checkbox
                id="newHome"
                handleChange={handleChange}
                submitForm={submitForm}
                name="condition"
                value="new"
              />
              <Checkbox
                id="goodHome"
                handleChange={handleChange}
                submitForm={submitForm}
                name="condition"
                value="good"
              />
              <Checkbox
                id="renovateHome"
                handleChange={handleChange}
                submitForm={submitForm}
                name="condition"
                value="need renovation"
              />
            </div>

            <div className="roomsWrapper">
              <h4>Rooms</h4>
              <Select
                name="room"
                options={[1, 2, 3, 4, 5]}
                handleChange={handleChange}
                submitForm={submitForm}
              />
            </div>
            <div className="bathsWrapper">
              <h4>Baths</h4>
              <Select
                name="bath"
                options={[1, 2, 3]}
                handleChange={handleChange}
                submitForm={submitForm}
              />
            </div>

            <div className="priceWrapper">
              <h4>Price Range</h4>
              <Select
                name="price_gte"
                options={setPrices()}
                handleChange={handleChange}
                submitForm={submitForm}
                priceFormat
              />
              -
              <Select
                name="price_lte"
                options={setPrices()}
                handleChange={handleChange}
                submitForm={submitForm}
                priceFormat
              />
            </div>
            <div className="moreFiltersWrapper">
              <h4>More Filters</h4>
              <Checkbox
                id="pet"
                handleChange={handleChange}
                submitForm={submitForm}
                name="pet"
                title="Pets allowed"
              />
              <Checkbox
                id="garden"
                handleChange={handleChange}
                submitForm={submitForm}
                name="garden"
                title="Garden"
              />
              <Checkbox
                id="pool"
                handleChange={handleChange}
                submitForm={submitForm}
                name="swimming_pool"
                title="swimming pool"
              />
              <Checkbox
                id="airConditioning"
                handleChange={handleChange}
                submitForm={submitForm}
                name="air_conditioning"
                title="air conditioning"
              />
              <Checkbox
                id="terrace"
                handleChange={handleChange}
                submitForm={submitForm}
                name="terrace"
                title="terrace"
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
