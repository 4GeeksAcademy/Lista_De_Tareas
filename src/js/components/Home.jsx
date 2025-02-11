import React, {useState} from "react";



//create your first component
const Home = () => {

	const [inputValue, setImputValue,]= useState("")

	const [tareas, setTareas] = useState([])
	


	return (
		<div className= "list" style={{width: "500px"}}>

			<h1>Mis tareas {inputValue} </h1>

			<ul>


				<li><input tipe="text" 
				onChange={(e) => setImputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e)=> e.key === "enter" && setTareas()}
				placeholder="añade una tarea"/>
				</li>

				<li>
					Pasear al perro  <img src="https://raw.githubusercontent.com/4GeeksAcademy/Lista_De_Tareas/refs/heads/main/marca-x.png" style={{width: "15px", height: "15"}}/>
				</li>

				<li>
					Comprar pan <img src="https://raw.githubusercontent.com/4GeeksAcademy/Lista_De_Tareas/refs/heads/main/marca-x.png" style={{width: "15px", height: "15"}}/>
					</li>

				<li>
					Pintar la casa <img src="https://raw.githubusercontent.com/4GeeksAcademy/Lista_De_Tareas/refs/heads/main/marca-x.png" style={{width: "15px", height: "15"}}/>
					</li>

				<li>
					Dominar el mundo <img src="https://raw.githubusercontent.com/4GeeksAcademy/Lista_De_Tareas/refs/heads/main/marca-x.png" style={{width: "15px", height: "15"}}/>
					</li>

			</ul> 
			<div>maximo 15 tareas</div>
      
		</div>
	);
};

export default Home; 