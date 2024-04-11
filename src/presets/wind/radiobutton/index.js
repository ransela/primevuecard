export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-4 h-4", "cursor-default", "select-none"]
  },
  box: ({ props }) => ({
      class: [
        // Flexbox
        "flex justify-center items-center",
        // Size
        "w-4 h-4",
        "text-sm",
        "font-medium",
        // Shape
        "border-2",
        "rounded-full",
        // Transition
        "transition duration-200 ease-in-out",
        // Colors
        {
          "text-surface-700 dark:text-white/80": props.value !== props.modelValue && props.value !== void 0,
          "bg-surface-0 dark:bg-surface-900": props.value !== props.modelValue && props.value !== void 0,
          "border-surface-300 dark:border-surface-700": props.value !== props.modelValue && props.value !== void 0 && !props.invalid,
          "border-primary-500 dark:border-primary-400": props.value == props.modelValue && props.value !== void 0
        },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // States
        {
          "outline-none outline-offset-0": !props.disabled,
          "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-800 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400": !props.disabled,
          "opacity-60 cursor-default": props.disabled
        }
      ]
    }),
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-300 dark:border-surface-700", "appearance-none", "cursor-default"]
  },
  icon: {
    class: "hidden"
  }
}