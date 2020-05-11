import React from "react";

export default function comboRegiones(props)
 {
 const { datos,titulo,handerCombo } = props;
  return (
    <div>
         <select onChange={handerCombo}>
          <option key={0} value={0}>{titulo}</option>
          {datos.map((r,i)=>(<option value={r}>{r}</option>
          ))}
        </select>
    </div>
  )
}



