import React, { useState } from 'react';
import './styles.css';
import ScreenSize from '../../utils/screensSize';
import burger from "../../assets/png/burger.png";
import close from "../../assets/png/close.png"

const Menu = () => {
    const width: number = ScreenSize().width;
    const [openMenuBurger, setOpenMenuBurger] = useState<boolean>(false);

    const getMenu = () => (
        <nav className={`${width >= 768 ? "menu menu-desktop" : "menu-mobile"}`}>
            <ul className={`menu-list${width < 768 ? "-mobile" : ""}`}>
                <li className="menu-item"><a href="#home">Accueil</a></li>
                <li className="menu-item"><a href="#about">À Propos</a></li>
                <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                <li className="menu-item"><a href="#services">Services</a></li>
                <li className="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )

    const menuBurger = () => {
        return (
            <>
                <div className="menu menu-burger">
                    <button className="burger" onClick={() => setOpenMenuBurger((prev) => !prev)}>
                        {openMenuBurger ?

                            <img src={close} alt='button close' /> :
                            <img src={burger} alt='link menu' />
                        }
                    </button>
                </div>
                {
                    openMenuBurger && (
                        getMenu()
                        // <nav className="menu-mobile">
                        //     <ul className="menu-list-mobile">
                        //         <li className="menu-item"><a href="#home">Accueil</a></li>
                        //         <li className="menu-item"><a href="#about">À Propos</a></li>
                        //         <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                        //         <li className="menu-item"><a href="#services">Services</a></li>
                        //         <li className="menu-item"><a href="#contact">Contact</a></li>
                        //     </ul>
                        // </nav>
                    )
                }
            </>
        );
    }
    return (
        width < 768 ? menuBurger() :
            // <nav className="menu menu-desktop">
            //     <ul className="menu-list">
            //         <li className="menu-item"><a href="#home">Accueil</a></li>
            //         <li className="menu-item"><a href="#about">À Propos</a></li>
            //         <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
            //         <li className="menu-item"><a href="#services">Services</a></li>
            //         <li className="menu-item"><a href="#contact">Contact</a></li>
            //     </ul>
            // </nav>
            getMenu()
    );
}

export default Menu;
