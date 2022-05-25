import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { deleteTask, getTasks } from '../../helpers/helpers.axios';
import {
  priorityParser,
  stateParser,
  capitalize,
} from '../../helpers/helpers.strings';
import TaskModal from '../TaskModal/TaskModal';
import { useDispatch } from 'react-redux';

const TaskCard = ({ name, description, priority, state, _id, ...task }) => {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    deleteTask(_id);
    dispatch(getTasks());
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      rounded="lg"
      w="500px"
      mh="200px"
      p={6}
      mb={4}
    >
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <Text fontSize="4xl">{capitalize(name)}</Text>
        <Box>
          <TaskModal
            name={name}
            description={description}
            priority={priority}
            state={state}
            _id={_id}
          >
            Edit
          </TaskModal>
          <Button ml={1} onClick={() => handleDelete(_id)}>
            Delete
          </Button>
        </Box>
      </Flex>

      <Flex mb={1}>
        <Text fontWeight="bold">Priority: </Text>
        <Text ml={1}>{priorityParser(priority)}</Text>
      </Flex>
      <Flex mb={1}>
        <Text fontWeight="bold">State: </Text>
        <Text ml={1}> {stateParser(state)}</Text>
      </Flex>
      <Flex direction="column" mb={1}>
        <Text fontWeight="bold">Description: </Text>
        <Text>{description}</Text>
      </Flex>
    </Box>
  );
};

export default TaskCard;
