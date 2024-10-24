import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/layout/container';
import Card from '../components/common/card';
import Button from '../components/common/button';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { formData } = useSelector((state) => state.form);

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
              Summary
            </span>
          </h1>

          <Card className="p-6">
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-700 pb-4 last:border-0"
                >
                  <h3 className="text-sm text-gray-400 mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <p className="text-lg text-white">{value}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => navigate('/')}
                  className="w-full mt-6"
                >
                  Back to Form
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};

export default SummaryPage;