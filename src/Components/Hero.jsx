import React from "react";
import { Button, ButtonOutline } from "./Button";
import { FiDownload } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import styles from "../style/Hero.module.css";

const Hero = () => {
	return (
		<>
			<section className={styles.heroMain} id="home">
				<div className={styles.container}>
					<div>
						<h1 className={`${styles.heading1}`}>
							Building Scalable Modern Website For the Future
						</h1>
						<div className={styles.buttonGroup}>
							<Button
								className={styles.bestBtn}
								label="Download CV"
								icon={<FiDownload />}
							/>
							<ButtonOutline
								className={styles.bestBtn}
								href="about"
								label="Scroll-down"
								icon={<FaArrowDown />}
							/>
						</div>
					</div>
					<div className={styles.imgBox}>
						<div className={styles.imageWrapper}>
							<img
								src="/file.png"
								width={650}
								height={800}
								id="Hero"
								className={styles.heroImage}
								alt="Hero"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
