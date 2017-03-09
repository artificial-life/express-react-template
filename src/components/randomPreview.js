import React from 'react';
import {RaisedButton} from 'material-ui';

const randomPreview = (props) => {
  return (
    <div>
      <div>{props.value}</div>
      <RaisedButton onClick={() => props.getNewValue()}>
        Change
      </RaisedButton>
    </div>
  );
};

export default randomPreview;
