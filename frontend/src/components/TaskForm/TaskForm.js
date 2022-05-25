import { Button, Flex, Input, Textarea, Select, Box } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createTask, getTasks, updateTask } from '../../helpers/helpers.axios';
import Error from '../Error/Error';
import { useDispatch } from 'react-redux';

const TaskForm = ({
  name,
  state,
  priority,
  description,
  _id,
  onClose,
  children,
}) => {
  const dispatch = useDispatch();

  const taskForm = useForm({
    defaultValues: {
      name: name ? name : '',
      description: description ? description : '',
      priority: priority ? priority : null,
      state: state ? state : 1,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = taskForm;

  return (
    <Flex>
      <form
        onSubmit={handleSubmit(
          (values) => {
            if (name) {
              updateTask(_id, values);
            } else {
              createTask(values);
            }
            dispatch(getTasks());
            onClose();
          },
          (errors) => {
            console.log(errors);
          },
        )}
      >
        <Select
          placeholder="Select a priority"
          {...register('priority', { required: 'this field is required' })}
        >
          <option value={1}>low</option>
          <option value={2}>medium</option>
          <option value={3}>High</option>
        </Select>
        {errors.priority && <Error>{errors.priority.message}</Error>}
        <Input
          mt={3}
          placeholder="Name of the task"
          {...register('name', {
            required: 'this field is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        ></Input>
        {errors.name && <Error>{errors.name.message}</Error>}
        <Textarea
          mt={3}
          placeholder="Description of the task of the task"
          {...register('description', {
            required: 'this field is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        ></Textarea>
        {errors.description && <Error>{errors.description.message}</Error>}
        <Box>
          <Button mt={3} colorScheme="blue" type="submit" marginLeft="auto">
            {children}
          </Button>
        </Box>
      </form>
    </Flex>
  );
};

export default TaskForm;
