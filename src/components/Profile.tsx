import { Component, Show, createSignal } from "solid-js";

const Profile: Component<{
  src: string;
  alt: string;
  name: string;
  company: string;
  dept?: string;
  title?: string;
  desciption?: string;
}> = (props) => {
  const [clicked, setClicked] = createSignal<boolean>(false);
  const toggle = () => setClicked((prev) => !prev);

  return (
    <div class="cursor-pointer group perspective h-[360px]" onclick={toggle}>
      <div
        class="relative preserve-3d w-full h-full duration-500"
        classList={{ "my-rotate-y-180": clicked() }}
      >
        {/* Front side */}
        <div class="absolute backface-hidden text-center w-full h-full">
          <img
            src={props.src}
            alt={props.alt}
            class="h-56 w-56 mx-auto rounded-full object-cover"
          />
          <p class="mt-3 mb-1 text-lg">{props.name}</p>
          <p class="text-sm break-keep">
            {props.company}
            <Show when={props.dept}>
              <br />
              {props.dept}
            </Show>
            <Show when={props.title}>
              <br />
              {props.title}
            </Show>
          </p>
        </div>
        {/* Back side */}
        <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-3xl p-6 overflow-scroll">
          <p class="text-lg font-bold text-black">{props.name}</p>
          <p class="my-2 text-sm text-gray-500 font-medium">
            {props.company} {props.dept} {props.title}
          </p>
          <p class="my-1 text-xs text-black">
            {props.desciption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
