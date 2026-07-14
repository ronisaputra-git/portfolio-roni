import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

    const [active, setActive] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const sections = document.querySelectorAll("section");

            let current = "";

            sections.forEach((section) => {

                const sectionTop = section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {

                    current = section.getAttribute("id");

                }

            });

            setActive(current);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className="navbar">

            <h2 className="logo">Roni Saputra</h2>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

                <li>
                    <a
                        href="#hero"
                        className={active === "hero" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        className={active === "about" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        href="#project"
                        className={active === "project" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Project
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Contact
                    </a>
                </li>

            </ul>

        </nav>

    );

}

export default Navbar;