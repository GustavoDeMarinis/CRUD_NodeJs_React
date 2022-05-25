import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskTable = ({ tasks }) => {
  return tasks?.map((task) => {
    return <TaskCard key={task._id} {...task} />;
  });
};

export default TaskTable;
