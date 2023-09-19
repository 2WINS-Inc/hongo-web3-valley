import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import { Hackathon2022Page, HomePage } from "./pages";

const App: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/hackathon-2022" component={Hackathon2022Page} />
          <Route path="*" component={HomePage} />
        </Routes>
      </main>
    </>
  );
};

export default App;
