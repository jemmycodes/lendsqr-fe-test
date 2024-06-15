"use client";

import { createContext, useContext, useState } from "react";

interface ShowSidebarContextProps {
  showSidebar: boolean;
  handleShowSidebar: () => void;
}

const ShowSidebarContext = createContext<ShowSidebarContextProps>({
  showSidebar: false,
  handleShowSidebar: () => {},
});

const { Provider } = ShowSidebarContext;

const ShowSidebarProvider = ({ children }: ChildrenProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <Provider
      value={{
        showSidebar,
        handleShowSidebar,
      }}
    >
      {children}
    </Provider>
  );
};

const useShowSidebar = () => useContext(ShowSidebarContext);
export { useShowSidebar, ShowSidebarProvider };
