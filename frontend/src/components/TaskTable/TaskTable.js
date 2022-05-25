import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskTable = ({ tasks }) => {
  const [priorityFilter, setPriority] = useState(null);
  const [stateFilter, setFilter] = useState(null);

  return (
    <div>
      <Box>
        <Text>Filtered by:</Text>
        <Flex mb={2}>
          <Select
            mr={2}
            onChange={(e) => setPriority(parseInt(e.target.value))}
            placeholder="Filter by Priority"
          >
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </Select>
          <Select
            onChange={(e) => setFilter(parseInt(e.target.value))}
            placeholder="Filter by State"
          >
            <option value={1}>New</option>
            <option value={2}>In Progress</option>
            <option value={3}>Finished</option>
          </Select>
        </Flex>
      </Box>
      {tasks
        ?.filter((task) => {
          if (priorityFilter && priorityFilter !== task.priority) return false;
          if (stateFilter && stateFilter !== task.state) return false;
          return true;
        })
        .map((task) => {
          console.log(priorityFilter);
          return <TaskCard key={task._id} {...task} />;
        })}
    </div>
  );
};

export default TaskTable;
