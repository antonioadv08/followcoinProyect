"use client";
import Search from "../components/search";
import Image from "next/image";
import Link from "next/link";
//  import Search from '../assets/svg/search'
//  import { ConnectButton } from 'web3uikit'
import { useContext, useEffect } from "react";
import { CoinMarketContext } from "../context/context";

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const Header = () => {
  const { user } = useContext(CoinMarketContext);
  const openLoginPopup = () => {
    window.open("/api/auth/signin", "loginPopup", "width=600,height=600");
  };


  return (
    <div className={styles.header}>
      {user && <div>hola {user.name}</div>}
      <Link href="/">
        <Image
          alt=""
          src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
          width={220}
          height={220}
        />
      </Link>
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchange</div>
          </div>
          {user ? (
            <Link href="/portfolio">
              <div className={styles.navItem}>
                <div className={styles.navLink}>Portfolio</div>
              </div>
            </Link>
          ) : (
            <div
              className={styles.navItem}
              style={{ cursor: user ? "pointer" : "not-allowed" }}
              title={
                user ? "" : "Debes iniciar sesión para utilizar esta función."
              }
            >
              <div className={styles.navLink}>Portfolio</div>
            </div>
          )}
          {user ? (
            <Link href="/watchlist">
              <div className={styles.navItem}>
                <div className={styles.navLink}>Watchlist</div>
              </div>
            </Link>
          ) : (
            <div
              className={styles.navItem}
              style={{ cursor: user ? "pointer" : "not-allowed" }}
              title={
                user ? "" : "Debes iniciar sesión para utilizar esta función."
              }
            >
              <div className={styles.navLink}>Watchlist</div>
            </div>
          )}
        </nav>

        <div className="flex items-center">
          {/* <ConnectButton /> */}
          <div className={styles.inputContainer}>
            <Search />
          </div>
          {user ? (
            <Link href="/api/auth/signout">
              <div className={styles.cursorPointer}>Logout</div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className={styles.cursorPointer}>Login</div>
            </Link>
          )}
          <button onClick={openLoginPopup}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
