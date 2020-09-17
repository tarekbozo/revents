import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testReducer';
import { openModal } from './../../app/common/modals/modalReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Testing</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch({ type: INCREMENT_COUNTER })}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch({ type: DECREMENT_COUNTER })}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'Test Modal', modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
    </>
  );
};

export default Sandbox;
