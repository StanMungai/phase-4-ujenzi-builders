import ProjectList from "./ProjectList";

function Home({ contractor, projects}) {
  if (contractor) {
    return <h1>Welcome, {contractor.name}!</h1>;
  } else {
    <ProjectList projects={projects} />
    
  }
}

export default Home;
