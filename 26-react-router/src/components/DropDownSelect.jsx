function DropDownSelect({ handleChange, uniqueElements }) {
  return (
    <>
      <select
        name="Sort by"
        onChange={(elem) => handleChange(elem.target.value)}
      >
        <option value="">Select sort item</option>
        {uniqueElements.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  )
}

export default DropDownSelect
