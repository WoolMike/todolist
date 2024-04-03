import React, { useState } from "react";



//include images into your bundle

//create your first component
const ToDoList = () => {
	const [warning, setWarning] = useState(true);
	const [task, setTask] = useState('');
	const [taskList, setTaskList] = useState([]);
	function handOnTask(evento) {
		if(evento.target.value!='')
		{
			if (evento.key == "Enter" ) {
			setTaskList([...taskList, {
				label: task,
				done: true
			}])
		}
		setTask(evento.target.value)

		if (evento.key == "Enter") {
			evento.target.value=""
			setTask("")
		}

		}
		
	}


	return (<>
		<div className="text-center">
			<h1>To do list</h1>
			<input type="text" placeholder="Task" onKeyUp={(evento) => handOnTask(evento)} defaultValue={task} />
			{
				taskList.map((toDo, index) => {
					return <div className="container">
						<div className="col-align-self-center">
							<div className="card mt-3">
								<div className="card-body">
									<div className="d-flex">
										<div>
											<div className="col text-start fs-1" key={index}>
												{toDo.label}
											</div>
										</div>
										<div className="col align-self-end text-end">
											<div className="col align-self-end text-end">
												<div className="hidden">
													<i className="fa-solid fa-xmark fs-1 " onClick={() => setTaskList(taskList.filter((t, currentIndex) => index != currentIndex))}></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
						</div>
						<p></p>
					</div>

				})}

			<div className="container">
				<p className="text-start ml-4">{taskList.length} items left</p>
			</div>

		</div>

	</>
	);
};

export default ToDoList;
