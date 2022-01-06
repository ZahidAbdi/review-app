import loading from'../assets/loading.gif'


const Spinner = () => {
  return (
  <img
   src={loading} 
   alt='Loading...' 
   style={
    {width: '100px', margin: 'auto', display: 'block'}
  } 
  />
  )
}

export default Spinner
