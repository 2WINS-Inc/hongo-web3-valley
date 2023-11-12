import { Component, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const Header: Component = () => {
  return (
    <nav
      class="sticky top-0 z-10 flex h-20 w-full flex-row justify-between bg-black px-4 
           shadow-md md:px-8"
    >
      <A href="/" class="my-auto flex w-2/3 cursor-pointer md:w-1/2 lg:w-1/4">
        <img src="/images/logo/logo_wide.png" alt="ログ画像" class="w-full" />
      </A>
      <div class="my-auto hidden md:block">
        <ul class="flex flex-row gap-8 lg:mr-4">
          <NavItem
            href="/hackathon-2023"
            text="Hackathon 2023"
            disabled={false}
          />
          <NavItem
            href="/hackathon-2022"
            text="Hackathon 2022"
            disabled={false}
          />
        </ul>
      </div>
      <div class="my-auto block md:hidden">
        <ul class="flex flex-row gap-2">
          <NavItem href="/hackathon-2023" text="2023" disabled={false} />
          <NavItem href="/hackathon-2022" text="2022" disabled={false} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem: Component<{ href: string; text: string; disabled: boolean }> = (
  props,
) => {
  const location = useLocation();

  return (
    <li
      class="group relative w-fit text-end text-sm md:text-start lg:text-lg"
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
                     scale-0 transform-gpu rounded-md bg-white p-2
                     text-sm text-black shadow-md transition-all duration-100 group-hover:scale-100"
            >
              Coming soon...
            </span>
          </>
        }
      >
        <A href={props.href}>
          {props.text}
          <span
            class="hidden h-0.5 max-w-0 transform-gpu bg-white transition-all duration-300 group-hover:max-w-full md:block"
            classList={{ "max-w-full": location.pathname === props.href }}
          ></span>
        </A>
      </Show>
    </li>
  );
};

export default Header;
