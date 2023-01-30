import React from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import GithubSection from "../components/section/GithubSection";
import { GitRepo } from "../types/gitRepo";
import css from "../../styles/Home.module.css";
import NavBar from "../components/NavBar";

interface IGithubPage {
  repos: GitRepo[];
}

const GithubPage: React.FC<IGithubPage> = ({ repos }) => {
  return (
    <div >
      <Head>
        <title>Michael | Github</title>
        <meta name="description" content="Michael" />
        <link rel="icon" href="/headshot_small.png" />
      </Head>

      
        
        
        <Container maxW="container.xl" marginTop={"20"}>
          <GithubSection repos={repos} />
        </Container>
      
    </div>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default GithubPage;
