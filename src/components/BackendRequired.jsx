
function BackendRequired() {
  return (
    
    <div style={{backgroundColor:"",padding:"25px",fontFamily:"inter"}}>
  <h1 style={{fontFamily:'inter',color:'red'}}>
     Backend Setup Required
  </h1>

  <p style={{padding:'10px 0 0 0'}}>
    The frontend is deployed and available online, but the backend server is not currently hosted.
  </p>

  <p style={{padding:'0 0 10px 0'}}>
    To use complaint submission and tracking features, please clone and run the backend locally.
  </p>

  <a
    href="https://github.com/Yogeth/complaint-app-backend.git"
    target="_blank"
    rel="noopener noreferrer"
    style={{textDecoration:'none',color:"white", backgroundColor:'var(--color-error-fg)',padding:'7px',borderRadius:'7px'}}
  >
    Visit the Backend GitHub Repository →
  </a>
</div>
  )
}

export default BackendRequired