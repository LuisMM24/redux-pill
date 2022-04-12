import { formatMoney } from "../../utils/formatMoney";
import "./propertieCard.scss";

interface Props {
  image: string;
  title: string;
  city: string;
  rooms: number;
  size: number;
  price: number;
  description: string;
  contactPhone: string;
}

export const PropertieCard: React.FC<Props> = ({
  image,
  title,
  city,
  rooms,
  size,
  price,
  description,
  contactPhone,
}) => (
  <section className="propertieCardWrapper">
    <img src={image} alt="house" />
    <div className="propertieInfo">
      <h4 className="propertieTitle">{`${title}, ${city}`}</h4>
      <span className="propertiePrice">{formatMoney(price)}</span>
      <div className="propertieSpecsWrapper">
        <p>{rooms} rooms</p>
        <p>
          {size} m<sup>2</sup>
        </p>
      </div>
      <span className="propertieDescription">{description}</span>
      <div className="propertieInteractionsWrapper">
        <span>{contactPhone}</span>
        <span>Save</span>
      </div>
    </div>
  </section>
);
