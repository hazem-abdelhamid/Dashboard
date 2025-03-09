"use client";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useState } from "react";
import { editFormSchema, editFormValues } from "./schema/EditFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "@/utils";
const EditForm = ({ trigger, user }: any) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: (data: editFormValues) => editUser(data, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      alert("User has been edited successfully.");
    },
  });
  const form = useForm<editFormValues>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      name: user.name || "",
      company: user.company.name || user.company || "",
      phone: user.phone || "",
      email: user.email || "",
      country: user.address?.city || user.country || "",
    },
  });

  function onSubmit(data: editFormValues) {
    mutate(data);
    handleClose();
  }
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>

      <PopoverContent onPointerDownOutside={(e) => e.preventDefault()}>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-black text-white mr-4 p-7 rounded-xl"
          >
            <h1 className="text-lg text-center">Edit user</h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between pt-2">
              {/* these two buttons causing hydration error */}
              <button className="text-white bg-black p-2" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="text-white bg-black p-2">
                {isPending ? "Editing user" : "Save"}
              </button>
            </div>
            {isError && <p>{error.message}</p>}
          </form>
        </FormProvider>
      </PopoverContent>
    </Popover>
  );
};

export default EditForm;
