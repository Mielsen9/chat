import React from "react";
import * as s from "./Img.module.scss"
// Type
type PropsType = {
	alt?: string;
	srcWebP?: string;
	srcJpg: string;
	className?: string;
	loading: "eager" | "lazy" | undefined;
};
// Img
const Img: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<picture>
			{p.srcWebP && <source srcSet={p.srcWebP} type="image/webp" />}
			<source srcSet={p.srcJpg} type="image/jpeg"/>
			<img src={p.srcJpg}
			     alt={p.alt || ""}
			     className={`${s.img} ${p.className || ""}`.trim()}
			     loading={p.loading}
			/>
		</picture>
)
});

export default Img