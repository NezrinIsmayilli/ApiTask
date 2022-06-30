import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { GlobaslStyle, LightTheme, DarkTheme } from "../themes";

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));
  const ThemeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobaslStyle />
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex  justify-content-between">
          <div className="navbar-nav">
            <Link to="/" className="nav-link" aria-current="page">Users</Link>
            <Link to="/post" className="nav-link" aria-current="page">Posts</Link>
            <Link to="/comment" className="nav-link" aria-current="page">Comments</Link>
          </div>

          <div className="light-mode">
            <button onClick={ThemeToggler}>
              {theme === "light" ? (
              <i className="fas fa-sun"></i>
              ) : (
              <i id="moon-dark" className="bi bi-moon-stars-fill"></i>
              )}
           </button>
         </div>
        </div>
     </nav>
    </ThemeProvider>
  )
}

export default Navbar