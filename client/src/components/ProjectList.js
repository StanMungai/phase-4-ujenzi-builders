import { useEffect, useState } from "react"

function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect( () => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, [setProjects])

  return (
    <>
      {projects.map((project) => (
        <div className="container">
          <div className="image">
            <img src={project.image_url} alt="" width={400}/>
          </div>
          <div className="content">
            <h2>{project.contractor}</h2>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h3>{project.duration}</h3>
          </div>
        </div>        
      ))}
    </>
  );

}

export default ProjectList