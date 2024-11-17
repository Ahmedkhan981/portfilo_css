import React from "react";
import styles from "../style/Footer.module.css";

export default function Footer() {
	return (
		<div>
			<footer className={styles.footer}>
				<div className={styles.contactSection}>
					<h4 className={styles.contactHeading}>Contact</h4>
					<ul>
						<li>
							<a
								href="mailto:ahmedkhan22893@gmail.com"
								className={styles.contactLink}
							>
								Email: ahmedkhan22893@gmail.com
							</a>
						</li>
						<li>
							<a href="tel:+92333504695" className={styles.contactLink}>
								Phone: +92 333504695
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
