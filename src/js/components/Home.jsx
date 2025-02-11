import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="list">

			<h1>Mis tareas</h1>
			<ul>
				<li><input tipe="text" placeholder="añade una tarea"></input></li>

				<li>
					Pasear al perro <i class="fa-solid fa-x"></i>
				</li>

				<li>
					Comprar pan <i class="fa-solid fa-x"></i>
				</li>

				<li>
					Pintar la casa <i class="fa-solid fa-x"></i>
				</li>

				<li>
					Dominar el mundo <i class="fa-solid fa-x"></i>
				</li>

			</ul> 
			<div>maximo 15 tareas</div>
      
		</div>
	);
};

export default Home;