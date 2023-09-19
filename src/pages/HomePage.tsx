import { Component } from "solid-js";
import { Profile } from "../components";

const HomePage: Component = () => {
  return (
    <>
      {/* Event report section */}
      <section>
        <div class="relative">
          <img
            src="/images/event_report/top.jpg"
            alt="トップ画像"
            class="h-[calc(100vh-80px)] object-cover opacity-60 md:max-h-[calc(100vh-80px)] lg:w-full"
          />
          <div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-8 text-center text-white">
            <div class="animate-fade-in-fwd">
              <img
                src="/images/logo/logo_event.png"
                alt="イベントロゴ"
                class="mx-auto my-2 h-44"
              />
              <p class="text-xs">SPONSORED BY</p>
              <img
                src="/images/logo/logo_wide.png"
                alt="イベントロゴ"
                class="mx-auto my-2 h-10"
              />
              <p class="my-4">
                <span class="my-2 block text-xl font-bold leading-10 tracking-wide">
                  Web3領域でこれからの日本を
                  <br />
                  創っていく若者の登竜門
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
