import React from 'react';

interface IHelloProps {
  message?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h3>{ props.message }</h3>
}

Hello.defaultProps = {
  message: "Hello World Default"
}

export default Hello