import { NavLink, Link } from "react-router-dom";
export default () => (
    <nav className="navbar navbar-expand-lg bg-light">
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
        </div>
    </nav>
)