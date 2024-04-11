export default {
  root: ({ props }) => ({
      class: [
        // Sizing and Shape
        "min-w-[12rem]",
        "rounded-md",
        // Colors
        "bg-surface-0 dark:bg-surface-800",
        "text-surface-700 dark:text-white/80",
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid }
      ]
    }),
  wrapper: {
    class: ["overflow-auto"]
  },
  list: {
    class: "py-3 list-none m-0"
  },
  item: ({ context }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-3 px-5",
        // Color
        { "text-surface-700 dark:text-white/80": !context.focused && !context.selected },
        { "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80": context.focused && !context.selected },
        { "bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80": context.focused && context.selected },
        { "bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80": !context.focused && context.selected },
        //States
        { "hover:bg-surface-100 dark:hover:bg-surface-600/80": !context.focused && !context.selected },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80": context.focused && !context.selected },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
  itemgroup: {
    class: ["font-bold", "m-0", "py-3 px-5", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  header: {
    class: ["py-3 px-5", "m-0", "border-b", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-100 dark:bg-surface-800", "border-surface-300 dark:border-surface-600"]
  },
  filtercontainer: {
    class: "relative"
  },
  filterinput: {
    class: ["font-sans", "leading-none", "pr-7 py-3 px-3", "-mr-7", "w-full", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "border-surface-200 dark:border-surface-700", "border", "rounded-lg", "appearance-none", "transition", "duration-200", "hover:border-primary-500 dark:hover:border-primary-300", "focus:ring focus:outline-none focus:outline-offset-0", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "appearance-none"]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  emptymessage: {
    class: ["leading-none", "py-3 px-5", "text-surface-800 dark:text-white/80", "bg-transparent"]
  }
}