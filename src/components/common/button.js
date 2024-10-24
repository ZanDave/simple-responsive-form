const Button = ({ children, type = "button", onClick, disabled, className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg font-medium transition-colors
          ${disabled 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'}
          ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;