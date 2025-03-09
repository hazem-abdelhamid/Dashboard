"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "@/components/schema/FormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

async function createUser(data: FormValues) {
  try {
    const response = await axiosInstance.post("/", data);
    console.log("User created successfully:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error creating user: ${error.message}`);
    } else {
      throw new Error("unablea to create user.");
    }
  }
}
const CreatePage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      country: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      alert("User successfully added!");
      router.push("/");
    },
  });
  function onSubmit(data: FormValues): void {
    console.log(data);

    mutate(data);
  }

  return (
    <div className="ml-9 mt-3 rounded-lg border-[3px] border-[#0f0a0a] p-5 absolute inset-0 m-auto w-full max-w-md h-fit transform translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-lg text-center">Add new user</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className={`${
                      !!form.formState.errors.name &&
                      "focus-visible:ring-red-600"
                    }`}
                  />
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
                  <Input
                    placeholder="Company"
                    {...field}
                    className={`${
                      !!form.formState.errors.company &&
                      "focus-visible:ring-red-600"
                    }`}
                  />
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
                  <Input
                    placeholder="Phone"
                    {...field}
                    className={`${
                      !!form.formState.errors.phone &&
                      "focus-visible:ring-red-600"
                    }`}
                  />
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
                  <Input
                    placeholder="Email"
                    {...field}
                    className={`${
                      !!form.formState.errors?.email &&
                      "focus-visible:ring-red-600"
                    }`}
                  />
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
                  <Input
                    placeholder="Country"
                    {...field}
                    className={`${
                      !!form.formState.errors.country &&
                      "focus-visible:ring-red-600"
                    }`}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* this button causing hydration error */}
          <button type="submit" className="text-white bg-black p-2">
            {isPending ? "adding user" : "Add user"}
          </button>
          {isError && <p>{error.message}</p>}
        </form>
      </Form>
    </div>
  );
};

export default CreatePage;
