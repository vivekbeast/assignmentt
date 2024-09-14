import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileNumberInput from './components/MobileNumberInput';
import VerifyOtp from './components/VerifyOtp';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileNumberInput />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
