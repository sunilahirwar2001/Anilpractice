import React from 'react';

function ToDo({ todoId, createdAt, children }) {
  return (
    <tr>
      <td>{todoId}</td>
      <td>
        <input type="text" value={children} />
      </td>
      <td>{createdAt}</td>
    </tr>
  );
}

export default ToDo;
