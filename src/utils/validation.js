export const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          return 'Name should only contain letters and spaces';
        }
        if (value.length < 10) {
          return 'Name should be at least 10 characters long';
        }
        break;
      case 'phone':
        if (!/^\d{10,}$/.test(value)) {
          return 'Phone number should contain at least 10 digits';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'age':
        if (!/^\d+$/.test(value) || value < 18 || value > 120) {
          return 'Please enter a valid age between 18 and 120';
        }
        break;
      case 'occupation':
        if (value.length < 2) {
          return 'Occupation should be at least 2 characters long';
        }
        break;
      case 'address':
        if (value.length < 10) {
          return 'Address should be at least 10 characters long';
        }
        break;
      default:
        return '';
    }
    return '';
  };