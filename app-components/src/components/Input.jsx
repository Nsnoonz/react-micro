import PropTypes from 'prop-types';

const Input = (props) => {
  const { value, onChange, onSubmit } = props;
  console.log("Current value:", value);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div className="flex-row">
        <input
        style={{"caret-color" : "transparent"}}
          type="text"
          value={value}
          onChange={(e) => {console.log("New value:", e.target.value); onChange(e.target.value)}
         }
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

Input.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Input;
