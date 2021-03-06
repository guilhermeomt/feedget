import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute top-5 right-5 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 hover:text-zinc-800"
      title="Fechar formulário de feedback"
    >
      <X weight="bold" className="w-4 h-4"></X>
    </Popover.Button>
  );
}
