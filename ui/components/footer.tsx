import { Label } from "@/ui/primitives/label";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className={"flex justify-center items-center flex-col py-8"}>
      <ThemeToggle />
      <Label>
        writer, the project built by{" "}
        <a
          className={
            "dark:bg-white bg-black dark:text-black text-white dark:hover:bg-zinc-200 hover:bg-zinc-700 px-2 py-1 rounded-xl ml-1"
          }
          href={"https://vgseven.com/"}
        >
          vgseven
        </a>
      </Label>
    </footer>
  );
}
