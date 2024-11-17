import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import gsap from "gsap";
import styles from "../style/Header.module.css";

const Header = () => {
	const ahmed = useRef([]);
	const [HeaderOpen, SetHeaderOpen] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			ahmed.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1,
				delay: 0.5,
				color: "black",
			},
		);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				SetHeaderOpen(false);
			} else {
				SetHeaderOpen(true);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerContainer}>
					<h1 className={styles.logo}>
						{"Ahmed".split("").map((letter, index) => (
							<span key={letter} ref={(el) => (ahmed.current[index] = el)}>
								{letter}
							</span>
						))}
					</h1>
					<div className={styles.navbarWrapper}>
						<button
							className={styles.menuButton}
							onClick={() => SetHeaderOpen((prev) => !prev)}
						>
							<span>
								<FontAwesomeIcon
									className={HeaderOpen ? styles.closeIcon : styles.menuIcon}
									icon={HeaderOpen ? faXmark : faBars}
								/>
							</span>
						</button>
						<Navbar HeaderOpen={HeaderOpen} />
					</div>
					<a href="#contact" className={styles.contactButton}>
						Contact me
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
