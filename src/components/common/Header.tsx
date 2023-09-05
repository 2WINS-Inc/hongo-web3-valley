import { Component, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const Header: Component = () => {
  return (
    <nav
      class="sticky top-0 z-10 px-8 h-20 w-full flex flex-row justify-between 
           bg-black shadow-md"
    >
      <div class="my-auto flex w-1/4">
        <A href="/hongo-web3-valley/2022">
          <img
            src="/hongo-web3-valley/images/logo/logo_wide.png"
            alt="ログ画像"
            class="w-full"
          />
        </A>
      </div>
      <ul class="my-auto mx-4 flex flex-row gap-8">
        <NavItem href="/hongo-web3-valley/2023" text="2023" disabled={true} />
        <NavItem href="/hongo-web3-valley/2022" text="2022" disabled={false} />
      </ul>
    </nav>
  );
};

const NavItem: Component<{ href: string; text: string; disabled: boolean }> = (
  props
) => {
  const location = useLocation();

  return (
    <li
      class="relative group"
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
              class="absolute w-auto p-2 my-2 min-w-max top-6 right-0
                     rounded-md shadow-md text-black bg-white text-sm
                     transition-all duration-100 scale-0 origin-left group-hover:scale-100"
            >
              Coming soon...
            </span>
          </>
        }
      >
        <A href={props.href}>
          {props.text}
          <span
            class="block h-0.5 max-w-0 group-hover:max-w-full bg-white transition-all duration-300"
            classList={{ "max-w-full": location.pathname === props.href }}
          ></span>
        </A>
      </Show>
    </li>
  );
};

export default Header;
