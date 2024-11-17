import React, { useState } from "react";
import styles from "../style/Review.module.css";

export default function Review() {
	const [id, setId] = useState(undefined);
	const handleIDsetup = (id) => {
		setId(id);
	};
	const handleID = (id) => {
		setId(undefined);
	};
	const reviews = [
		{
			name: "Seema",
			rating: 3,
			imgSrc: "/review1.jpg",
			content:
				"This is an amazing website! The design is clean and modern, and the functionality is excellent.",
		},
		{
			name: "Jane Smith",
			rating: 4,
			imgSrc: "/reviews2.jpg",
			content:
				"I absolutely loved it! The colors were beautiful, and the website was easy to navigate.",
		},
		{
			name: "Alice Johnson",
			imgSrc: "/reviews3.jpg",
			rating: 4,
			content:
				"The website was not as fast as I expected, but it was still usable and functional.",
		},
		{
			name: "Bob Brown",
			rating: 5,
			imgSrc: "/reviews4.jpg",
			content:
				"This site loads quickly and performs flawlessly on my device. I appreciate the smooth experience.",
		},
	];

	return (
		<section className={styles.section} id="review">
			<div className={styles.container}>
				<h1 className={styles.heading2}>What our customer says</h1>
				<p className={styles.description}>
					These are some of the positive feedback from our users.
				</p>

				<div className={styles.hovereffect}>
					{reviews.map((review, index) => (
						<div
							key={index}
							className={`${styles.reviewCard} ${
								id == index ? styles.reviewCardhover : ""
							}`}
							onMouseEnter={() => handleIDsetup(index)}
							onMouseLeave={handleID}
						>
							<img
								src={review.imgSrc}
								alt={`${review.name}'s profile`}
								className={styles.reviewImg}
							/>
							<h4 className={styles.reviewName}>{review.name}</h4>
							<p className={styles.reviewRating}>
								{"⭐".repeat(review.rating)}
							</p>
							<p className={styles.reviewContent}>{review.content}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
