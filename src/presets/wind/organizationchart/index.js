export default {
  table: {
    class: ["mx-auto my-0", "border-spacing-0 border-separate"]
  },
  cell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  node: ({ context }) => ({
      class: [
        "relative inline-block",
        // Font
        "text-sm leading-none",
        // Spacing
        "px-5 py-3",
        // Shape
        "border",
        "rounded",
        // Color
        "border-surface-200 dark:border-surface-700",
        {
          "text-surface-600 dark:text-white/80": !(context != null && context.selected),
          "bg-surface-0 dark:bg-surface-800": !(context != null && context.selected),
          "text-surface-700 dark:text-surface-0": context == null ? void 0 : context.selected,
          "bg-surface-50 dark:bg-surface-700": context == null ? void 0 : context.selected
        },
        // States
        {
          "hover:bg-surface-100 dark:hover:bg-surface-600/40": context == null ? void 0 : context.selectable
        },
        { "cursor-pointer": context == null ? void 0 : context.selectable }
      ]
    }),
  linecell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  linedown: {
    class: ["mx-auto my-0", "w-px h-[20px]", "bg-surface-200 dark:bg-surface-700"]
  },
  lineleft: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none border-r",
        { "border-t": context.lineTop },
        // Color
        "border-surface-200 dark:border-surface-700"
      ]
    }),
  lineright: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none",
        // Color
        { "border-t border-surface-200 dark:border-surface-700": context.lineTop }
      ]
    }),
  nodecell: {
    class: "text-center align-top py-0 px-3"
  },
  nodetoggler: {
    class: ["absolute bottom-[-0.75rem] left-2/4 -ml-3", "z-20", "flex items-center justify-center", "w-6 h-6", "rounded-full", "bg-inherit text-inherit", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400", "cursor-pointer no-underline select-none"]
  },
  nodetogglericon: {
    class: ["relative inline-block", "w-4 h-4"]
  }
}