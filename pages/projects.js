import ProjectsPage from "../components/ProjectsPage";
import Head from "next/head";

function Projects() {
  return (
    <>
      <Head>
        <title>Térence MBU | Projects Page</title>
        <meta name="Projects" content="Project Page" />
      </Head>
      <ProjectsPage />;
    </>
  );
}

export default Projects;
