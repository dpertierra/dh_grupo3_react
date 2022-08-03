import React, { useEffect, useState } from "react";
import Card from "./Card";
function ContentRow() {
	const [cards, setCards] = useState([
		{ name: "users", title: "Usuarios", icon: "fa-user", amount: 0 },
		{
			name: "products",
			title: "Productos",
			icon: "fa-shopping-cart",
			amount: 0,
		},
		{
			name: "categories",
			title: "Categorías",
			icon: "fa-list",
			amount: 0,
		},
	]);

	async function getData() {
		const userRespone = await fetch("http://localhost:3001/api/users");
		const userJson = await userRespone.json();
		const productsResponse = await fetch("http://localhost:3001/api/products");
		const productsJson = await productsResponse.json();

		let newCards = cards.map((card) => {
			switch (card.name) {
				case "products":
					return { ...card, amount: userJson.count };
				case "users":
					return { ...card, amount: userJson.count };
				case "categories":
					return { ...card, amount: productsJson.countByCategory.length };
				default:
					return card;
			}
		});
		setCards(newCards);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="row">
			{cards.map((card, index) => {
				return <Card {...card} key={card.title + index} />;
			})}
		</div>
	);
}

export default ContentRow;