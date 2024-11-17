import React from "react";
import styles from "../style/Skill.module.css";

export default function Skill() {
	const SkillItems = [
		{
			imgSrc: "/html.svg",
			label: "HTML",
			desc: "The standard markup language for creating web pages.",
		},

		{
			imgSrc: "/css.svg",
			label: "CSS",
			desc: "Used for styling web pages and defining the layout.",
		},
		{
			imgSrc: "/JavaScript.svg",
			label: "JavaScript",
			desc: "Enables interactive elements and dynamic functionality.",
		},
		{
			imgSrc: "/TypeScript.svg",
			label: "TypeScript",
			desc: "A superset of JavaScript that adds static typing.",
		},
		{
			imgSrc: "/TailwindCSS.svg",
			label: "Tailwind CSS",
			desc: "A utility-first CSS framework for rapid UI development.",
		},
		{
			imgSrc: "/Sass.svg",
			label: "Sass",
			desc: "A CSS preprocessor for writing more maintainable styles.",
		},
		{
			imgSrc: "/react.svg",
			label: "React",
			desc: "A JavaScript library for building user interfaces.",
		},
		{
			imgSrc: "/Gsap.png",
			label: "GSAP",
			desc: "A JavaScript library for creating high-performance animations.",
		},
	];

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.heading2}>My Skills And Essential Tools I Use</h2>
				<p className={styles.description}>
					I am a highly proficient web developer with expertise in modern web
					technologies like HTML, CSS, JavaScript, React, TypeScript, and
					animation libraries like GSAP.
				</p>

				<div className={styles["grid-container"]}>
					{SkillItems.map((skill, key) => (
						<div key={key} className={styles.skillCard}>
							<img
								src={skill.imgSrc}
								width={40}
								height={40}
								alt={skill.label}
								className={styles.skillImage}
							/>
							<div>
								<h3 className={styles.skillLabel}>{skill.label}</h3>
								<p className={styles.skillDescription}>{skill.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
