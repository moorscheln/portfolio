import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type IMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const NewMeta: React.FC<IMeta> = ({
  title = "Michael Orscheln",
  description = "Michael Orscheln Web Portfolio — Computer Engineer",
  keywords = "Computer, Engineering, Graduate, Michael, Orscheln",
  image,
}) => {
  const router = useRouter();

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={"title"} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      <title>
        {title}
      </title>
    </Head>
  );
};

export default NewMeta;