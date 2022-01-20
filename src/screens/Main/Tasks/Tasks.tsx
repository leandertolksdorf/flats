import React from "react";
import Header from "../../../components/Header";
import Padding from "../../../components/Padding";
import Screen from "../../../components/Screen";
import Task from "../../../components/Task";
import useStore from "../../../store";

const Tasks = () => {
  const [tasks] = useStore((state) => [state.tasks]);
  console.log(tasks);
  return (
    <Screen hero={() => <Header />}>
      <Padding>
        {tasks?.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </Padding>
    </Screen>
  );
};

export default Tasks;
