import PropTypes from "prop-types";
import { InputFilter } from "./Filter.styled";

const  Filter = ({ filter }) => {
  const handleChange = e => {
    this.props.onChange(e.currentTarget.value);
  }

  return (
    <InputFilter
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Find contacts by name"
    />
  );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Filter;