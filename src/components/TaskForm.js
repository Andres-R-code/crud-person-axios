import './style.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../feactures/tasks/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm(){
    const [task, setTask] = useState({
        tipe_identification: "",
        identification_number: "",
        names: "",
        last_name: "",
        email: "",
        address: "",
        hobbie: "",
        state: "true",
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector((state) => state.tasks);

    //Capturar datos tipados
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
            });
        };

    // Dispara funcion addtask pasandole los datos tipados
        const handleSubmit = (e) => {
            e.preventDefault();
        
            if (params.code) {
            dispatch(editTask({ ...task, code: params.code }));
            } else {
            dispatch(
                addTask({
                ...task,
                code: uuid(),
                })
            );
            }
        
            navigate("/");
        };

        useEffect(() => {
            if (params.code) {
                setTask(tasks.find((task) => task.code === params.code));
                }
            }, [params, tasks]);

    return (
        <div style={{padding: "40px 600px", marginTop: "100px"}}>
            <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
                <input 
                    name="tipe_identification" 
                    type="text" 
                    onChange={handleChange}
                    value={task.tipe_identification}
                    placeholder="tipe_identification" 
                />

                <input 
                    name="identification_number" 
                    type="text" 
                    onChange={handleChange}
                    value={task.identification_number}
                    placeholder="identification_number" 
                />
                <input 
                    name="names" 
                    type="text" 
                    onChange={handleChange}
                    value={task.names}
                    placeholder="names" 
                />
                <input 
                    name="last_name" 
                    type="text" 
                    onChange={handleChange}
                    value={task.last_name}
                    placeholder="last name" 
                />
                <input 
                    name="email" 
                    type="text" 
                    onChange={handleChange}
                    value={task.email}
                    placeholder="ingrese su email" 
                />
                <input 
                    name="address" 
                    type="text" 
                    onChange={handleChange}
                    value={task.address}
                    placeholder="address" 
                />
                <input 
                    name="hobbie" 
                    type="text" 
                    onChange={handleChange}
                    value={task.hobbie}
                    placeholder="hobbie" 
                />
                <button 
                    style={{
                            padding: "10px 5px", 
                            margin: "10px 100PX"
                        }}
                    className="btn btn-success" 
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    )
}


export default TaskForm;
