import PropTypes from "prop-types";

function Button({ btnName, onClick }) {
  return (
    <div>
      <button
        className="bg-red text-almostWhite hover:bg-blue hover:text-yellow p-5 flex justify-center items-center font-sans drop-shadow-lg rounded-2xl m-5 lg:min-w-30 h-20 w-72 text-4xl transform active:scale-75 active:bg-blue active:text-almostwhite transition-transform"
        type="button"
      >
        {btnName}
        {onClick}
      </button>
    </div>
  );
}
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
