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
    <>
      <header className={`${styles.header} ${utils.flex}`}>
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
        <img src="images/logo.png" alt="logo" />
        <nav className={styles.navMenu}>
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
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
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
                href="#"
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
                href="#"
              >
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`${styles.navMenuRight} ${utils.flex}`}>
          <Cart />
          <div className={`${styles.avatar} ${utils.flex}`}>
            <img src="images/image-avatar.png" alt="Icon avatar"></img>
          </div>
        </div>
      </header>
    </>
  );
}
