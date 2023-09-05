import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import { HomePage } from "./pages";

const App: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" component={HomePage} />
        </Routes>
      </main>
    </>
  );
};

export default App;
