import { ColorModeScript } from '@chakra-ui/react'
import { Html, Main, NextScript, Head } from "next/document";
import React from "react";

const NextDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={"/MO.png"} />

        {/* <meta
          name="description"
          content="Michael Orscheln"
        ></meta>
        <meta
          name="keywords"
          content="React, Android, Javascript, Typescript ,Kotlin, Java"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta> */}
      </Head>
      <body>
        <ColorModeScript/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default NextDocument;
