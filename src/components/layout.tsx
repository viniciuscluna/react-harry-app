import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContext } from '../contexts/theme-context';
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>('dark');
  const queryClient = new QueryClient()

  useEffect(() => {

    const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

    const getDefaultTheme = (): string => {
      const localStorageTheme = localStorage.getItem('default-theme');

      const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
      return localStorageTheme || browserDefault;
    };

    setTheme(getDefaultTheme());

  }, []);



  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${theme} min-vh-100`}>
          <Header />
          <div className="container-fluid content-body ">
            {children}
          </div>
        </div>
      </QueryClientProvider>
    </ThemeContext.Provider>
  )
}