import { useState } from 'react';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // login
      fetch('http://localhost:4000/users')
        .then(r => r.json())
        .then(users => {
          const user = users.find(u => u.email === formData.email && u.password === formData.password);
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/';
          } else {
            setError('Invalid Email or Password');
          }
        })
        .catch(() => setError('Login Failed. Please Try Again.'));
    } else {
      // sign up - if email exists first
      fetch('http://localhost:4000/users')
        .then(r => r.json())
        .then(users => {
          const existingUser = users.find(u => u.email === formData.email);
          if (existingUser) {
            setError('Email Already Has an Account. Please Login.');
            return;
          }

          // create new user
          const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password
          };

          fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
          })
            .then(r => r.json())
            .then(user => {
              localStorage.setItem('currentUser', JSON.stringify(user));
              window.location.href = '/';
            })
            .catch(() => setError('Signup Failed. Please Try Again.'));
        })
        .catch(() => setError('Signup Failed. Please Try Again.'));
    }
  };

  return (
    <main className="main-content">
      <div className="auth-simple-container">
        <div className="auth-simple-card">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          {error && <div className="error-alert">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
            )}
            
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            
            <button type="submit" className="auth-submit-btn">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="auth-toggle-text">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => { setIsLogin(!isLogin); setError(''); setFormData({ email: '', password: '', name: '' }); }} className="toggle-link">
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default AuthPage;