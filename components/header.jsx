"use client";
import Search from "../components/search";
import Image from "next/image";
import Link from "next/link";

import { useContext, useEffect } from "react";
import { CoinMarketContext } from "../context/context";
import { usePathname, useSearchParams } from "next/navigation";

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const Header = () => {
  const { user } = useContext(CoinMarketContext);

  const router = usePathname();

  return (
    <div className={styles.header}>
      {user && <div>{/^[^@]*/.exec(user.email)}</div>}
        <Image alt="" src="/followcoin.png" width={220} height={220} className={"object-none w-full"}/>
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <Link href="/">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Home</div>
            </div>
          </Link>

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
          <div className={styles.inputContainer}>
            {router.pathname === "/" ? (
              <Search />
            ) : (
              <Search style={{ cursor: "not-allowed" }} />
            )}
          </div>
          &nbsp;&nbsp;
          {user ? (
            <Link href="/api/auth/signout">
              <div className={styles.cursorPointer}>Logout</div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className={styles.cursorPointer}>Login</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
