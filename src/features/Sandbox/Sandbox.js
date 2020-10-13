import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testReducer';
import { openModal } from './../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  const handelSetLocation = (latLng) => {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  };
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
      <div style={{ margin: 15 }}>
        <TestPlaceInput setLocation={handelSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
};

export default Sandbox;
