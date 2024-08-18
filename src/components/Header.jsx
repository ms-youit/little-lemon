import Nav from "./Nav";
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="main-header container">
            <a href="/" className="logo">
                <img src={logo} alt="Little lemon logo" />
            </a>

            <Nav />
        </header>
    )
}