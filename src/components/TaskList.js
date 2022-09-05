import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteTask } from '../feactures/tasks/taskSlice';
import "bootstrap/dist/css/bootstrap.min.css";

// import axios from 'axios';

// const listPersons = async () => {
//     await axios.get("")
// }

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch()

    const handleDelete = (code) => {
        dispatch(deleteTask(code));
    };
    return (
        <div>

            <header>
                <h1  style={{padding: "30px"}}>Total Personas ({tasks.length})</h1>

                <Link
                    className="btn btn-success"
                    to="/create-task"
                    style={{marginBottom: "30px"}}
                >
                    Agregar Persona
                </Link>
            </header>

            {tasks.map(task => (
                <table className="table table-striped" key={task.code}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">codigo</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Hobbie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{task.codigo}</td>
                            <td>{task.tipe_identification}</td>
                            <td>{task.identification_number}</td>
                            <td>{task.names}</td>
                            <td>{task.last_name}</td>
                            <td>{task.email}</td>
                            <td>{task.address}</td>
                            <td>{task.hobbie}</td>
                            <td>
                                <Link
                                    className="btn btn-warning"
                                    to={`/edit-task/${task.code}`}
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-danger' 
                                    onClick={() => handleDelete(task.code)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            ))}
        </div>
    )
}

export default TaskList
