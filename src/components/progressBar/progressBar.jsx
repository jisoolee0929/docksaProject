const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: '10%',
    width: '75%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  // const labelStyles = {
  //   color: 'white',
  //   fontWeight: 'bold'
  // }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;