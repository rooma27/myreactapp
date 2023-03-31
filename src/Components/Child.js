import React from 'react'
// import { Button } from 'semantic-ui-react';

export default function Child({childToParent}) {
    return (
        <div>
            <h1>I am Child Component</h1>
            <button primary onClick={() => childToParent()}>Click Me</button>
        </div>
    )
}