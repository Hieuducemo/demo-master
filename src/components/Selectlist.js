import React, { useState, useEffect, useCallback } from 'react'

export const SelectInput = ({ id, value, onChange, placeholder }) => {
  const [localValue, setLocalValue] = useState(value)

  const localOnChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setLocalValue(newValue)
      if (onChange) {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedName = selectedOption.getAttribute('data-name');
        onChange({ id, type: { id: newValue, name: selectedName } })
      }
    },
    [id, onChange]
  );

  return (
    <select value={localValue} placeholder={placeholder} onChange={localOnChange}>
      <option value="" disabled hidden>{placeholder}</option>
      <option value="764217ee-a7a0-11ed-b76e-0242ac110002" data-name="areál">areál</option>
      <option value="76421cf8-a7a0-11ed-b76e-0242ac110002" data-name="budova">budova</option>
      <option value="76421e10-a7a0-11ed-b76e-0242ac110002" data-name="patro">patro</option>
      <option value="76421faa-a7a0-11ed-b76e-0242ac110002" data-name="učebna">učebna</option>
    </select>
  )
}
