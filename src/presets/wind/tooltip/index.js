export default {
  root: ({ context, props }) => ({
      class: [
        // Position
        "absolute",
        // Spacing
        {
          "px-1.5": (context == null ? void 0 : context.right) || (context == null ? void 0 : context.left) || !(context != null && context.right) && !(context != null && context.left) && !(context != null && context.top) && !(context != null && context.bottom),
          "py-1.5": (context == null ? void 0 : context.top) || (context == null ? void 0 : context.bottom)
        }
      ]
    }),
  arrow: {
    class: "hidden"
  },
  text: {
    class: ["text-xs leading-none", "p-2", "rounded-md", "text-surface-900 dark:text-surface-0/80", "bg-surface-0 dark:bg-surface-900", "ring-1 ring-inset ring-surface-200 dark:ring-surface-800 ring-offset-0", "whitespace-pre-line", "break-words"]
  }
}