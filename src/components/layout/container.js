const Container = ({ children, className = "" }) => {
    return (
      <div className={`
        relative min-h-screen w-full 
        bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
        from-gray-900 via-[#0f1729] to-gray-900
        overflow-hidden
        ${className}
      `}>
        {/* Animated stars background */}
        <div className="absolute inset-0">
          <div className="stars-sm"></div>
          <div className="stars-md"></div>
          <div className="stars-lg"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };
  
  export default Container;