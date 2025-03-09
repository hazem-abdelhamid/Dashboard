"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useState } from "react";

const Modal = ({ trigger, handleDelete }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="bg-black text-white w-[288px] p-4 text-center">
        <p className="mb-2">Are you sure you want to delete this user?</p>
        {/* These two buttons causing hydration error */}
        <button
          style={{ marginRight: "2rem" }}
          className="border-white border-2 p-2"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className="border-white border-2 p-2"
          onClick={() => {
            handleDelete();
            handleClose();
          }}
        >
          Continue
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default Modal;
