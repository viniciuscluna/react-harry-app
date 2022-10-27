
import { Outlet } from "react-router-dom";
import { ThemeContext } from './contexts/theme-context';
import Header from "./components/Header"
import { useState } from "react";
import useLoaderStore from "./stores/loaderStore";
import LoadingCard from "./components/LoadingCard";

const App = () => {

  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  const isLoading = useLoaderStore((state) => state.loading);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme} min-vh-100`}>
        <Header />
        <div className="container-fluid content-body ">
          <Outlet />
          {isLoading && <LoadingCard />}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
