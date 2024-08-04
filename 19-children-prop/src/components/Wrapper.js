function Wrapper(props) {
  const wrStyle = {
    backgroundColor: props.color,
    width: '300px',
    margin: '30px',
  }
  return <div style={wrStyle}>{props.children}</div>
}

export default Wrapper
