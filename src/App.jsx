import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler livros",
      description: "Ler livros de desenvolvimento pessoal",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Exercitar",
      description: "Fazer exercícios físicos para manter a saúde em dia",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // PRECISO ATUALIZAR ESSA TAREFA
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });

    console.log("newTasks", newTasks);
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(taskTitle, taskDescription) {
    const newTasks = {
      id: v4(),
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
