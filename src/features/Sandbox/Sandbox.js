import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from './../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const Sandbox = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);

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
        name='increment'
        loading={loading && target === 'increment'}
        onClick={(e) => {
          dispatch(increment(20));
          setTarget(e.target.name);
        }}
        content='Increment'
        color='green'
      />
      <Button
        name='decrement'
        loading={loading && target === 'decrement'}
        onClick={(e) => {
          dispatch(decrement(10));
          setTarget(e.target.name);
        }}
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
