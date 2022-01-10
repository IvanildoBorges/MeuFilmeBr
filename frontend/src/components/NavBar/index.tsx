import {ReactComponent as LogoGithub} from 'assets/img/github.svg';
import './styles.css';

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/IvanildoBorges" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <LogoGithub />
                            <p className="dsmovie-contact-link">/IvanildoBorges</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;