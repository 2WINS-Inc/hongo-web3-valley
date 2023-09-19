import { Component, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const Header: Component = () => {
  return (
    <nav
      class="sticky top-0 z-10 flex h-20 w-full flex-row justify-between bg-black px-4 
           shadow-md md:px-8"
    >
      <div class="my-auto flex w-2/3 md:w-1/2 lg:w-1/4">
        <A href="/hackathon-2022">
          <img src="/images/logo/logo_wide.png" alt="ログ画像" class="w-full" />
        </A>
      </div>
      <ul class="my-auto flex flex-row gap-4 md:gap-8 lg:mr-4">
        <NavItem href="/hackathon-2023" text="2023" disabled={true} />
        <NavItem href="/hackathon-2022" text="2022" disabled={false} />
      </ul>
    </nav>
  );
};

const NavItem: Component<{ href: string; text: string; disabled: boolean }> = (
  props,
) => {
  const location = useLocation();

  return (
    <li
      class="group relative lg:text-lg"
      classList={{
        "text-gray-600 cursor-not-allowed": props.disabled,
        "text-white": !props.disabled,
      }}
    >
      <Show
        when={!props.disabled}
        fallback={
          <>
            {props.text}
            <span
              class="absolute right-0 top-6 my-2 w-auto min-w-max origin-left
                     scale-0 rounded-md bg-white p-2 text-sm
                     text-black shadow-md transition-all duration-100 group-hover:scale-100"
            >
              Coming soon...
            </span>
          </>
        }
      >
        <A href={props.href}>
          {props.text}
          <span
            class="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full"
            classList={{ "max-w-full": location.pathname === props.href }}
          ></span>
        </A>
      </Show>
    </li>
  );
};

export default Header;
