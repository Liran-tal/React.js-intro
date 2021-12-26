import React from "react";
import { useState } from "react";

export default function ReadMore({text, maxLength}) {
	const [readMore, setReadMore] = useState(false);

	let visibleTextPart = '';
	let hiddenTextPart = '';

	const clickReadMore = () => {
		setReadMore(!readMore);
	}

	if (text.length > maxLength) {
		visibleTextPart = text.substring(0, maxLength);
		hiddenTextPart = text.substring(maxLength, );
		console.log("visibleTextPart: ", visibleTextPart);
		console.log("hiddenTextPart: ", hiddenTextPart);
	}
	else {
		visibleTextPart = text;
	}

	return (
		<div>
			Read More 
			<p>
				{visibleTextPart}
				{(hiddenTextPart && !readMore) && <span 
					onClick={() => clickReadMore()}>
						{` Read more ... `}
					</span>}
				{readMore && <span>{hiddenTextPart}</span>}
				{readMore && <span 
					onClick={() => clickReadMore()}>
						{" Read less ... "}
					</span>}
			</p>
		</div>
	);
}

