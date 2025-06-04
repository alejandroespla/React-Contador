import React from "react";

//include images into your bundle
import clock from "../../img/clock-regular.svg";

//create your first component
const Home = () => {
	return (
	<div>
		<div className=" d-flex justify-content-center align-items-center  bg-dark p-3">
            
			<img className="counter-card" src={clock} alt="clock" style={{ width: "80px" }} />
			<span className="counter-card">0</span>
			<span className="counter-card">0</span>
			<span className="counter-card">0</span>
			<span className="counter-card">0</span>
			<span className="counter-card">0</span>
			<span className="counter-card">0</span>

			
		</div>
	</div>		
	);
};

export default Home;