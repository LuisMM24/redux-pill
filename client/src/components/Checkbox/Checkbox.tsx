interface Props {
  name: string;
  value?: string;
  title?: string;
  id: string;
  handleChange: (e: React.ChangeEvent) => void;
  submitForm: () => Promise<void>;
}

export const Checkbox: React.FC<Props> = ({
  name,
  id,
  title,
  handleChange,
  submitForm,
  value,
}) => {
  return (
    <label htmlFor={id} className="labelCheckbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={(e) => {
          handleChange(e);
          submitForm();
        }}
        value={value}
      />
      {title ? title : value}
    </label>
  );
};
