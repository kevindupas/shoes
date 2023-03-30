const CustomRadioButton = ({ data, name, index, colorClass }) => {
  return (
    <>
      <input type="radio" id={index} name={name} value={index} />
      <label className={colorClass} htmlFor={index}>{colorClass === undefined && data}</label>
    </>
  );
};

export default CustomRadioButton;
