import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import { Hackathon2022Page, Hackathon2023Page, HomePage } from "./pages";

const App: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/hackathon-2022" component={Hackathon2022Page} />
          <Route path="/hackathon-2023" component={Hackathon2023Page} />
          <Route path="*" component={HomePage} />
        </Routes>
      </main>
    </>
  );
};

export default App;
