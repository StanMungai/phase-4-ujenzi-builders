import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router";

function NewProject(contractor) {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type" : "Application/json",
      },
      body: JSON.stringify({
        title,
        image_url,
        description,
        duration
      })
    }).then((r) => {
      if (r.ok) {
        navigation("/");
      } else {
        
      }
    })
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <h2 className='welcome'>Add Project</h2>
        <label htmlFor='title' className='text'>Title</label>
        <input 
          className="inputs"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='image_url' className='text'>Image URL</label>
        <input 
          className="inputs"
          type="text"
          id="image_url"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <label htmlFor='description' className='text'>Description</label>
        <input 
          className="inputs"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor='duration' className='text'>Duration</label>
        <input 
          className="inputs"
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default NewProject