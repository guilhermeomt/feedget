import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>
        <h1>Hello world!</h1>
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" color="#fff" />

        <span className="max-w-0 text-white overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
