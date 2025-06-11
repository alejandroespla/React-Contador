// Home.jsx
import React from "react";
import clock from "../../img/clock-regular.svg";
import Counter from "./Counter"; // Asegúrate de que el path sea correcto

const Home = () => {
	return (
		<div className="main d-flex justify-content-center align-items-center bg-dark p-3 text-white">
			<img className="counter-card" src={clock} alt="clock" style={{ width: "80px" }} />
			<Counter />
		</div>
	);
};

export default Home;