"use client";

import React from "react";
import styles from "./navbar.module.css";
import { IoSearch  } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { FaEarthAsia } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split('/').pop()}</div>
      <div className={styles.menus}>
        <div className={styles.search}>
          <IoSearch  style={{color: '#fff'}} size={'15'}/>
          <input className={styles.input} type="text" placeholder="search" />
        </div>
        <div className={styles.icons}>
          <BiCommentDetail size={'15'}/>
          <FaBell size={'15'}/>
          <FaEarthAsia size={'15'}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
