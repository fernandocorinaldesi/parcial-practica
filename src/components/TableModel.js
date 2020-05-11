import React from "react";
import "../css/table.css";

export default function TableModel(props) {
  const { data, titulo } = props;

  const datos = data.map((p) => {
    return (
      <tr key={p.userId}>
        <td>{p.userId}</td>
        <td>{p.id}</td>
        <td>{p.title}</td>
        <td>{p.body}</td>
      </tr>
    );
  });
  return(
    <div>
    <table>
      <caption>{titulo}</caption>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>{datos}</tbody>
    </table>
  </div>
  )
}
