import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../style/Work.module.css";

export default function Work() {
	const workItems = [
		{
			imgSrc: "/Todo.jpg",
			title: "To-Do Today",
			ProjectLink: "https://todo-app-mode.netlify.app/",
			desc: "A simple To-Do app built with ReactJS and Firebase.",
		},
		{
			imgSrc: "/resume.webp",
			title: "ReactJS",
			ProjectLink: "https://hackathon-milestone-1-tau.vercel.app/",
			desc: `A simple Resume builder website with 
        HTML, CSS, JS, and React.js.`,
		},
		{
			imgSrc: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
			title: "E-commerce",
			ProjectLink: "https://e-commerce-website-sigma-rose.vercel.app/",
			desc: `A modern E-commerce website built with HTML, CSS, JavaScript, offering a smooth user interface and seamless shopping experience.`,
		},
		{
			imgSrc:
				"https://uploads-ssl.webflow.com/62c1627eee0defc3a1256898/62e654071cbbc708f52f0f2e_chrome_Q3Zx5Gr8Bv.png",
			title: "Pokemon Cards",
			ProjectLink: "https://pokemonscards.vercel.app/",
			desc: `A fun and interactive web application showcasing Pokemon cards with details and filters, built using HTML, CSS, and JavaScript.`,
		},
		{
			imgSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5MD4pqtQOYGMDvzRCFXDefAzx6Cf9Q9E6w&s",
			title: "movie blog website",
			ProjectLink: "https://css-dynamics-blog.vercel.app/",
			desc: "A dynamic movie blog built with Next.js, showcasing various films, reviews, and ratings, with user-friendly navigation and search filters.",
		},
	];

	return (
		<section id="work" className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.heading}>My Portfolio Highlight</h2>
				<div className={styles.gridContainer}>
					{workItems.map((work, key) => (
						<ProjectCard
							key={key}
							imgSrc={work.imgSrc}
							label={work.title}
							ProjectLink={work.ProjectLink}
							desc={work.desc}
							classes="additional-classes"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
