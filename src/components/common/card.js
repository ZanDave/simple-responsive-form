const Card = ({ children, className = "" }) => {
    return (
      <div className={`
        bg-gray-800/50 backdrop-blur-lg 
        border border-gray-700/50 
        rounded-xl shadow-xl 
        transition-all duration-300 ease-in-out
        hover:shadow-indigo-500/10 hover:border-indigo-500/50
        ${className}
      `}>
        {children}
      </div>
    );
  };
  
  export default Card;