import React from "react";
import styles from "../style/Contact.module.css";

export default function Contact() {
	const Forms = [
		{
			name: "github",
			href: "https://github.com/AhmedKhan981",
			icon: "/github-logo.png",
		},
		{
			name: "instagram",
			icon: "Instagram-Logo.wine.svg",
		},
		{
			name: "facebook",
			icon: "facebook1.png",
		},
		{
			name: "Linkedin",
			icon: "Linkedin1.png",
		},
	];

	return (
		<section id="contact" className={styles.section}>
			<div className={styles.container}>
				<div className={styles.infoSection}>
					<h1 className={styles.heading}>Contact me for collaboration</h1>
					<p className={styles.description}>
						Reach me out today to discuss your project and create something
						amazing!
					</p>
					<div className={styles.iconsContainer}>
						{Forms.map((form, index) => (
							<a
								href={form.href}
								target="_blank"
								rel="noopener noreferrer"
								key={index}
								className={styles.iconLink}
							>
								<img
									src={form.icon}
									alt={`${form.name} icon`}
									className={styles.icon}
								/>
							</a>
						))}
					</div>
				</div>
				<form
					action="https://getform.io/f/bqoomrqb"
					method="POST"
					className={styles.form}
				>
					<div className={styles.inputGroup}>
						<label htmlFor="name">Your Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							autoComplete="name"
							required
							placeholder="Enter your name"
							className={styles.inputField}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="email">Your Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							autoComplete="email"
							required
							placeholder="Enter your email"
							className={styles.inputField}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="message">Message:</label>
						<textarea
							name="message"
							id="message"
							required
							placeholder="Enter your message"
							className={`${styles.inputField} ${styles.textArea}`}
						></textarea>
					</div>
					<button type="submit" className={styles.submitButton}>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}
