import React from "react";
import styles from "../style/About.module.css";

const Aboutitems = [
	{
		title: "Project clone",
		Number: 20,
	},
	{
		title: "Year of experience",
		Number: 1,
	},
];

export default function About() {
	return (
		<section id="about" className={styles.section}>
			<div className={styles.container}>
				<div className={styles.lightBackground}>
					<p className={styles.introText}>
						Welcome! I&apos;m Ahmed, a professional web developer with the
						experience of three years. I specialize in creating stunning, highly
						functional websites that are both visually appealing and
						user-friendly. I have hands-on experience with HTML, CSS,
						JavaScript, Bootstrap, React, and GSAP, and I am continuously
						expanding my expertise in modern frameworks and tools to stay ahead
						of the curve. If you're looking for someone who is dedicated to
						delivering pixel-perfect designs and seamless user experiences,
						you're in the right place!
					</p>
					<div className={styles.itemsContainer}>
						{Aboutitems.map((item, key) => (
							<div className={styles.aboutItem} key={key}>
								<div className={styles.numberContainer}>
									<p className={styles.numberText}>{item.Number}+</p>
								</div>
								<div>
									<h2 className={styles.itemTitle}>{item.title}</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
