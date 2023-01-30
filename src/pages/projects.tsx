import React, { useEffect } from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import themeattempt from "../styles/themeattempt";
import GithubSection from "../components/section/GithubSection";
import { GitRepo } from "../types/gitRepo";
import { Article } from "../types/article";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


interface IProjectsPage {
  repos: GitRepo[];
  articles: Article[];
}

const ProjectsPage: React.FC<IProjectsPage> = ({ repos, articles }) => {
  return (
    <div >
      <Head>
        <title>Projects</title>
        <meta name="description" content="Michael" />
        <link rel="icon" href="/headshot_small.png" />
      </Head>

      

        <NavBar></NavBar>
        <Container maxW="container.xl" mt={20} mb={5}>
          <GithubSection repos={repos} />
          
        </Container>
        
      
      <Footer></Footer>
      
    </div>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");
  

  return {
    props: {
      repos: repos || null,
      
    },
  };
};
