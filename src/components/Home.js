import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/verify-otp');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl text-black font-bold">Welcome to the Protected Home Page!</h1>
    </div>
  );
};

export default Home;
