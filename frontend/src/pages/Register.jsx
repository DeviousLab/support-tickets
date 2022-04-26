import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register, reset } from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const { name, email, password, confirmpassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

  useEffect(() => {
    if(isError) {
      toast.error(message);
    }
    if(isSuccess || user) {
      toast.success("You have successfully registered");
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, dispatch, navigate]);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData));
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account!</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="name" id="name" className='form-control' value={name} onChange={onChange} placeholder="Enter your name" required/>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" className='form-control' value={email} onChange={onChange} placeholder="Enter your email" required/>
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" className='form-control' value={password} onChange={onChange} placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <input type="password" name="confirmpassword" id="confirmpassword" className='form-control' value={confirmpassword} onChange={onChange} placeholder="Confirm your password" required />
          </div>
          <div className="form-group">
            <button className='btn btn-block' type="submit">Register</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register