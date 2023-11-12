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
    <div
      class="group aspect-square w-full perspective"
      classList={{
        "cursor-pointer":
          props.desciption !== "" && props.desciption !== undefined,
      }}
      onclick={toggle}
    >
      <div
        class="relative h-full w-full duration-500 preserve-3d"
        classList={{
          "my-rotate-y-180":
            clicked() &&
            props.desciption !== "" &&
            props.desciption !== undefined,
        }}
      >
        {/* Front side */}
        <div class="absolute h-full w-full text-center backface-hidden">
          <img
            src={props.src !== "" ? props.src : "/images/speakers/default.webp"}
            alt={props.alt}
            class="mx-auto h-56 w-56 rounded-full object-cover"
          />
          <p class="mb-1 mt-3 text-lg">{props.name}</p>
          <p class="break-keep text-sm">
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
        <div class="absolute h-full w-full overflow-scroll rounded-3xl bg-gray-100 p-6 my-rotate-y-180 backface-hidden">
          <p class="text-lg font-bold text-black">{props.name}</p>
          <p class="my-2 text-sm font-medium text-gray-500">
            {props.company} {props.dept} {props.title}
          </p>
          <p class="my-1 text-xs text-black">{props.desciption}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
