import ProjectsPage from "../components/ProjectsPage";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";

function Projects() {
  return (
    <>
      <Head>
        <title>Térence MBU | Projects Page</title>
        <meta name="Projects" content="Project Page" />
      </Head>
      <div className="!bg-light dark:!bg-dark">

      <TransitionEffect />
      <ProjectsPage />;
      </div>
    </>
  );
}

export default Projects;
