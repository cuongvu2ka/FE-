import React  from 'react';
import Chance from 'chance';

const TestCom=()=>{
  const chance = new Chance();
  const name = chance.name();
  const email = chance.image();

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}

export default TestCom;