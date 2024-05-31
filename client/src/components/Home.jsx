import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Added for testing tailwind and material UI Remove it later */}
      <h1 className="text-3xl font-bold underline text-center">Welcome To Skill Up Techie</h1>
      <Link>
       <Button variant="contained">Click Me</Button>
      </Link>
    </>
  )
}

export default Home