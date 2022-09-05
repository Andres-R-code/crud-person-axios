import { BrowserRouter, Route, Routes } from "react-router-dom";


import './App.css';

// Components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <TaskForm />
      <TaskList /> */}
      
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:code" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
