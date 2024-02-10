import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  /**
   * Uncontrolled Component : The component where the form elements are handled by directly from the DOM using ref is konw as Unconrtolled Component.
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value); 
  };

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={nameRef} />
        <input type="text" name="email" ref={emailRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledComponent;
