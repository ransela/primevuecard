export default {
  root: {
    class: ["rounded-md", "min-w-[12rem]", "p-1.5", "bg-surface-0 dark:bg-surface-700", "ring-1 ring-surface-200 dark:ring-surface-700"]
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"]
  },
  menuitem: {
    class: ["relative first:mt-0 mt-1"]
  },
  content: ({ context }) => ({
      class: [
        //Shape
        "rounded-md",
        //  Colors
        {
          "text-surface-500 dark:text-white/70": !context.focused && !context.active,
          "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70": context.focused && !context.active,
          "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": context.focused && context.active,
          "text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70": !context.focused && context.active
        },
        // Hover States
        {
          "hover:bg-surface-50 dark:hover:bg-surface-800": !context.active,
          "hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80": context.active
        },
        // Transitions
        "transition-shadow",
        "duration-200"
      ]
    }),
  action: {
    class: ["relative", "font-semibold", "flex", "items-center", "py-2", "px-3", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  icon: {
    class: ["mr-2", "leading-6", "text-sm"]
  },
  label: {
    class: ["leading-none", "text-sm"]
  },
  submenuicon: {
    class: ["ml-auto"]
  },
  submenu: {
    class: ["w-full sm:w-48", "p-1.5", "m-0 mx-1.5", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  }
}