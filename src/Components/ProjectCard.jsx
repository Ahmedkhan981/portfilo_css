import React from "react";
import style from "../style/Project.module.css";
import { MdArrowOutward } from "react-icons/md";
export default function ProjectCard({
	imgSrc,
	label,
	ProjectLink,
	desc,
	classes,
}) {
	return (
		<div className={`${style.projectCard} ${classes}`}>
			<figure className={`${style.imgBox}`}>
				<img
					src={imgSrc}
					alt={label}
					className={`${style.imgCover}`}
					loading="lazy"
				/>
			</figure>
			<figcaption>
				<h3 className={`${style.titleName}`}>{label}</h3>
				<p className={`${style.bestDesc}`}>{desc}</p>
			</figcaption>
			<a
				href={ProjectLink}
				target="_blank"
				rel="noopener noreferrer"
				className={`${style.projectLink}`}
			>
				<span className={`${style.icon}`}>{<MdArrowOutward />}</span>
			</a>
		</div>
	);
}
