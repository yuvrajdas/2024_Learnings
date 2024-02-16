import React, { forwardRef } from 'react';

const __12ForwardRef = forwardRef((props, ref) => {
  console.log("child ref", ref);

  return (
    <input ref={ref} type="text" />
  );
});

export default __12ForwardRef;
