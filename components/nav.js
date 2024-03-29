"use client";

import Cart from "./cart";
import styles from "./nav.module.css";
import utils from "./utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsNavMenuOpened((prevValue) => !prevValue);
    setIsActive((prevValue) => !prevValue);
  };

  return (
      <header >
      <div className={`${styles.header} ${utils.flex}`}>
        <button
          className={
            isNavMenuOpened
              ? `${styles.navMenuToggleActive} ${styles.navMenuToggle}`
              : `${styles.navMenuToggle}`
          }
          onClick={() => {
            toggleMenu();
            
          }}
        >
          <span
            className={`${styles.hamburgerLine1}  ${
              isActive ? styles.active : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine2}  ${
              isActive ? styles.active : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine3}  ${
              isActive ? styles.active : ''
            }`}
          ></span>
        </button>
        <div className={styles.tophome}>
        <Link href="/"> 
        <div className={styles.logohome}>
          <img src="images/logo.png" alt="logo" />
        </div>
        </Link>
        <div className={styles.inputbox}>
          <input type="text" placeholder="Buscar" />
        </div>
          <Link href="/signup" className={styles.signupbutton}>Cadastre-se</Link>
          <Link href="/signin" className={styles.signinbutton}>Entrar</Link>
        <nav
          className={
            isNavMenuOpened
              ? `${styles.navMenuMobileActive} ${styles.navMenuMobile}`
              : styles.navMenuMobile
          }
        >
          <ul
            className={`${styles.navMenuMobileLinks} ${utils.flex} ${utils.fw700}`}
          >
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="myorders"
              >
                Meus Pedidos
              </Link>
            </li>
            <li>
              <Link href="/signup" className={styles.signupbuttonmobile}>Cadastre-se</Link>
              <Link href="/signin" className={styles.signinbuttonmobile}>Entrar</Link>
            </li>

          </ul>
        </nav>
        <div className={`${styles.navMenuRight} ${utils.flex}`}>
          <Cart />

        </div>
        </div>

        </div>
        
        <nav className={`${styles.navMenu} ${styles.navfull}`}>
          <ul className={`${styles.navMenuLinks} ${utils.flex}`}>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Produtos
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Categorias
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="myorders">
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.inputboxcontainer}>
        <div className={styles.inputboxmobile}>
          <input type="text" placeholder="Buscar" />
        </div>
        </div>
      </header>
  );
}
