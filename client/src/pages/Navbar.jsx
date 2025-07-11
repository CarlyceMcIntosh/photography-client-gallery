const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  alert('You have been logged out.');
  window.location.href = '/login'; // optional redirect
};
<button onClick={handleLogout}>Logout</button>
const isLoggedIn = !!localStorage.getItem('token');

return (
  <nav>
    <a href="/">Home</a>
    <a href="/portfolio">Portfolio</a>
    {isLoggedIn ? (
      <>
        <a href="/client-gallery">My Gallery</a>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <a href="/login">Login</a>
    )}
  </nav>
);
