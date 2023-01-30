import React from "react";
import NewMeta from "./NewMeta";

interface IMainLayout {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const MainLayout: React.FC<IMainLayout> = ({
  children,
  title,
  description,
  keywords,
  image,
}) => {
  return (
    <>
      <NewMeta
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      
        {children}
      
    </>
  );
};

export default MainLayout;
