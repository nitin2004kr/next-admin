import React from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menulink/menuLink";
import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
        <div className={styles.container}>
          <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="42" height="42" />
                <div className={styles.userDetails}>
                  <span className={styles.userName}>Joe Doe</span>
                  <span className={styles.userTitle}>Administer</span>
                </div>
          </div>
             <ul className={styles.list}>
                {
                    menuItems.map((cat, i) => (
                        <li key={i} >
                            <span className={styles.cat}>{cat.title}</span>
                            {
                                cat.list.map((item, i) => (
                                    <MenuLink item={item} key={i}/>
                                ))
                            }
                        </li>
                    ))
                }
             </ul>
        </div>
    );
};

export default Sidebar;
