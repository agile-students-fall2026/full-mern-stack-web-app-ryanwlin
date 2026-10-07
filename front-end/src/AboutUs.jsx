import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => setAbout(response.data))
  }, [])

  if (!about) return <p>Loading...</p>

  return (
    <>
      <img className="AboutUs-photo" src={about.imageUrl} alt={about.name} />
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  )
}

export default AboutUs
