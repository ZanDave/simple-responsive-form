import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { updateField, setErrors } from '../redux/formSlice';
import { validateField } from '../utils/validation';
import Container from '../components/layout/container';
import Card from '../components/common/card';
import FormField from '../components/form/formField';
import Button from '../components/common/button';
import Toast from '../components/common/toast';

const formFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
  { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
  { name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Enter your occupation' },
  { name: 'address', label: 'Address', type: 'text', placeholder: 'Enter your address' }
];

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, errors } = useSelector((state) => state.form);
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
    
    const error = validateField(name, value);
    if (error) {
      dispatch(setErrors({ ...errors, [name]: error }));
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      dispatch(setErrors(newErrors));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setToast({ message: 'Form submitted successfully!', type: 'success' });
      setTimeout(() => navigate('/summary'), 1500);
    } else {
      dispatch(setErrors(newErrors));
      setToast({ message: 'Please fix the errors in the form', type: 'error' });
    }
    setIsSubmitting(false);
  };

  return (
    <Container>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Registration
            </span>
          </h1>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FormField
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                  />
                </motion.div>
              ))}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <loadingSpinner />
                ) : (
                  <span className="group-hover:scale-105 transition-transform duration-200">
                    Submit
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Container>
  );
};

export default FormPage;