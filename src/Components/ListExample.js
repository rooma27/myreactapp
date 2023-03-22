import React, { useState } from "react";
 import "../Styles/ListExample.css";

function ListExample() {

  const Users = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163'
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'fightclud@gmail.com',
      phone: '202-555-0106'
    },
  ];
  return (
    <ul>
      {Users.map((data) => (
        <li key={data.id}> 
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </li>
      ))}
    </ul>
  );
      }

export default ListExample;