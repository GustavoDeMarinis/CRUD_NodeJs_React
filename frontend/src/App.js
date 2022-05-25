import { useEffect } from 'react';
import TaskTable from './components/TaskTable/TaskTable';
import { Flex, Box } from '@chakra-ui/react';
import TaskModal from './components/TaskModal/TaskModal';
import { getTasks } from './helpers/helpers.axios';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  console.log(tasksList);

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={6}
        w={500}
        mx="auto"
      >
        <Box mb={6}>
          <TaskModal>Create</TaskModal>
        </Box>
        <TaskTable tasks={tasksList} />
      </Flex>
    </>
  );
}

export default App;
