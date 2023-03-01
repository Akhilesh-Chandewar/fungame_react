import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='d-flex aligns-items-center justify-content-center'>
       <Link to="/form"><button className="btn btn-primary btn-lg">Start Fun</button></Link>
    </main>
  )
}

export default Home