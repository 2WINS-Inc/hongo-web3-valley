import { Component, Show } from "solid-js";

const Profile: Component<{
  src: string;
  alt: string;
  name: string;
  company: string;
  dept?: string;
  title?: string;
}> = (props) => {
  return (
    <div class="text-center">
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
  );
};

export default Profile;
