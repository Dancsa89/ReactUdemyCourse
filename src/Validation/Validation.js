import React from 'react';

const validation = (props) => {
  let alertMessage = 'Text is long enough!';

  if (props.inputLenght <= 5) {
     alertMessage = 'Text is too short!'
  };

  return (
    <div>
      <p>{alertMessage}</p>
    </div>
  );
}

export default validation;