import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/home/Navbar'; 
import '../styles/LoginPage.css';
import Footer from '../components/home/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Save token to localStorage 
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      alert('Login successful!');
      // Navigate to private gallery or dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };
  
  return (
    <>    
      <Navbar/>
      <section id="login-section" className="login-section">
        <div className="login-form-wrapper">
          <h2 className="login-title">Login</h2>
          
          <div className="login-form" >
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  className="login-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              <button className="login-button" type="submit">Login</button>
              <p className="login-note">Contact the photographer for login info.</p>

            </form>
          </div>

        </div>

      </section>
      <Footer/>
    </>
  );
}

