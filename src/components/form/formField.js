import Input from "../common/input";

const FormField = ({ field, value, onChange, error }) => {
  return (
    <Input
      label={field.label}
      type={field.type}
      name={field.name}
      value={value}
      onChange={onChange}
      error={error}
      placeholder={field.placeholder}
    />
  );
};

export default FormField;