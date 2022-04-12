import { string } from "yup";
import { formatMoney } from "../../utils/formatMoney";

interface Props {
  options: Array<number>;
  name: string;
  priceFormat?: boolean;
  handleChange: (e: React.ChangeEvent) => void;
  submitForm: () => Promise<void>;
}

export const Select: React.FC<Props> = ({
  options,
  name,
  priceFormat,
  handleChange,
  submitForm,
}) => {
  const handleDefaultName = (): string => {
    if (priceFormat && name === "price_gte") return "Min price";
    if (priceFormat && name === "price_lte") return "Max price";
    return `Any ${name}`;
  };
  return (
    <select
      name={name}
      defaultValue="default"
      onChange={(e) => {
        handleChange(e);
        submitForm();
      }}
    >
      <option value="null">{handleDefaultName()}</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {priceFormat ? formatMoney(option) : option}
        </option>
      ))}
    </select>
  );
};
