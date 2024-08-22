
const Spinner = () => {
  return (
    <div className="text-center  d-flex align-items-center justify-content-center flex-column" style={{height:'80vh'}}>
    <div className="spinner-border text-primary" role="status" style={{width: '5rem',height: '5rem'}}>
    </div>
    <p className="sr-only my-4">Loading...</p>
  </div>
  )
}

export default Spinner