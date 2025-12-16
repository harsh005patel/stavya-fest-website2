import { Toaster as Sonner, toast } from "sonner"

const Toaster = ({
  ...props
}) => {
  // REMOVE the hook usage:
  // const { theme = "system" } = useTheme()

  return (
    <Sonner
      // Use a fixed theme, or change to "system" / "dark" as you like
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster, toast }
