import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Authenticated = ({ children }) => {
  
  //Instantiate useNavigate
  const navigate = useNavigate();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { acilDetails } = loginReducer;

  useEffect(() => {
    if (!acilDetails?.token) {
      navigate('/login');
    }
  }, [acilDetails, navigate])

  return (
    <>{children}</>
  )
}

export default Authenticated