import React from "react";
import styles from "../style/Button.module.css";

const Button = ({ href, label, target = "_self", icon, classes }) => {
	if (href) {
		return (
			<div className={styles.bestBtn}>
				<a
					href={href}
					target={target}
					className={`${styles.btnPrimary} ${classes}`}
				>
					{label}
					{icon && <span className={styles.icon}>{icon}</span>}
				</a>
			</div>
		);
	} else {
		return (
			<div className={styles.bestBtn}>
				<button className={`${styles.btnPrimary} ${classes}`}>
					{label}
					{icon && <span className={styles.icon}>{icon}</span>}
				</button>
			</div>
		);
	}
};

const ButtonOutline = ({ href, label, target = "_self", icon, classes }) => {
	if (href) {
		return (
			<div className={styles.bestBtnOutline}>
				<a
					href={href}
					target={target}
					className={`${styles.btnOutline} ${classes}`}
				>
					{label}
					{icon && <span className={styles.icon}>{icon}</span>}
				</a>
			</div>
		);
	} else {
		return (
			<div className={styles.bestBtnOutline}>
				<button className={`${styles.btnOutline} ${classes}`}>
					{label}
					{icon && <span className={styles.icon}>{icon}</span>}
				</button>
			</div>
		);
	}
};

export { Button, ButtonOutline };
