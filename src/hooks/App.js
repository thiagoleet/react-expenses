import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import "./App.css";
import useHttp from "./use-http";

function TasksApp() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks({
      url: "https://react-http-212ab-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    const transformTasks =
      ((data) => {
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks, transformTasks);
      },
      []);
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default TasksApp;
