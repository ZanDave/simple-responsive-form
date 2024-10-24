import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import FormPage from './pages/formPage';
import SummaryPage from './pages/summaryPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;