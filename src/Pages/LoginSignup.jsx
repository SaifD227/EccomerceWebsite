
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust this path based on your actual structure
import './CSS/LoginSignup.css';
import PropTypes from 'prop-types';

const LoginSignup = ({ onAuthChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async (event) => {
    event.preventDefault();
    setError('');
    if (!agree) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onAuthChange(true); // Notify App component of successful login or sign-up
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('The email address is already in use. Please use a different email.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError('Error: ' + error.message);
      }
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? 'Sign up' : 'Log in'}</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleAuth}>
          {isSignup && (
            <div className="loginsignup-fields">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              required
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button type="submit">{isSignup ? 'Continue' : 'Log in'}</button>
          <p className="loginsignup-login" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Already have an account? Log in here' : 'Don\'t have an account? Sign up here'}
          </p>
        </form>
      </div>
    </div>
  );
};

LoginSignup.propTypes = {
  onAuthChange: PropTypes.func.isRequired,
};

export default LoginSignup;
