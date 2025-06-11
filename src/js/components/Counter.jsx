import React, { useState, useEffect } from "react";

const Counter = () => {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		const intervalo = setInterval(() => {
			setContador(prev => prev + 1);
		}, 1000);

		return () => clearInterval(intervalo);
	}, []);

	return (
		<div className="counter-card" style={{ textAlign: "center", padding: "2rem", fontSize: "2rem" }}>
			<h1>{contador}</h1>
		</div>
	);
};

export default Counter;