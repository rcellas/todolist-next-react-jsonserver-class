import React from 'react'

export default function Tasks({task}) {
  return (
    <tr key={task.id}>
        <td>{task.text}</td>
    </tr>
  )
}
