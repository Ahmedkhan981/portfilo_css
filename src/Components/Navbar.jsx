import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../style/Navbar.module.css";

export default function Navbar({ HeaderOpen }) {
  const navRefs = useRef([]); // Use array refs for nav items
  const navbarRef = useRef(null);

  useEffect(() => {
    if (HeaderOpen) {
      // Animate nav links in
      gsap.fromTo(
        navRefs.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          stagger: 0.2,
        }
      );

      // Animate navbar
      gsap.fromTo(
        navbarRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2 }
      );
    } else {
      // Animate nav links out
      gsap.to(navRefs.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      // Animate navbar out
      gsap.to(navbarRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
    }
  }, [HeaderOpen]);

  const navItems = [
    { name: "Home", link: "#home", className: styles.navLink },
    { name: "About", link: "#about", className: styles.navLink },
    { name: "Work", link: "#work", className: styles.navLink },
    {
      name: "Contact",
      link: "#contact",
      className: `${styles.navLink} ${styles.mdHidden}`,
    },
    { name: "Review", link: "#review", className: styles.navLink },
  ];

  return (
    <div
      className={`${styles.navbar} ${HeaderOpen ? styles.active : ""}`}
      ref={navbarRef}
    >
      {navItems.map(({ name, className, link }, index) => (
        <a
          href={link}
          className={`${className} ${styles.anchor}`}
          key={index}
          ref={(el) => (navRefs.current[index] = el)}
          aria-label={name}
        >
          {name}
        </a>
      ))}
      <div className={styles.activeBox}></div>
    </div>
  );
}
