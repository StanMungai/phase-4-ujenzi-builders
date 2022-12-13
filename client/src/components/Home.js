import NewProject from "./NewProject";
import ProjectList from "./ProjectList";

function Home({ contractor, projects}) {
  if (contractor) {
    return(
    <>
      <h1 className="welcome">Welcome, {contractor.name}! Add more projects to your portfolio.</h1>;
      <NewProject />
    </>
  )} else {
    <ProjectList projects={projects} />
    
  }
}

export default Home;
