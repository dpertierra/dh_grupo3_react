import React from "react";
import Card from "./Card";
function ContentRowMovies() {
	let cards = [
		{
			title: "Movies in Data Base",
			borderColor: "border-left-primary",
			amount: 21,
			icon: "fa-film",
		},
		{
			title: "Total awards",
			borderColor: "border-left-success",
			amount: 79,
			icon: "fa-award",
		},
		{
			title: "Actors quantity",
			borderColor: "border-left-warning",
			amount: 49,
			icon: "fa-user",
		},
	];
	return (
		<div className="row">
			{cards.map((card, index) => {
				return <Card {...card} key={card.title + index} />;
			})}
		</div>
	);
}

export default ContentRowMovies;
