import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-context";
import './Header.scss';

export default () => {
    const { theme, setTheme } = useContext(ThemeContext);
  

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Harry Potter App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={`/Personagens`}>Personagens</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={`/Magias`}>Magias</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="toggle-btn-section">
                    <div className={`toggle-checkbox m-vertical-auto`}>
                        <input
                            className="toggle-btn__input"
                            type="checkbox"
                            name="checkbox"
                            onChange={handleThemeChange}
                            checked={theme === 'light'}
                        />
                        <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

