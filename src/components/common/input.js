const Input = ({ 
    label, 
    type = "text", 
    name, 
    value, 
    onChange, 
    error, 
    placeholder 
  }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 bg-gray-800 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            ${error ? 'border-red-500' : 'border-gray-600'}`}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  };
  
  export default Input;