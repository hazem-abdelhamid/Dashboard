import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash2 } from "lucide-react";
import Modal from "./ui/Modal";
import EditForm from "./EditForm";
import { deleteUser } from "@/utils";
import { getUsers } from "@/utils";
import { useRouter } from "next/navigation";

const Table = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["users"], queryFn: () => getUsers() });
  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  if (isLoading) {
    return <p className="text-center text-gray-600 ">Loading users...</p>;
  }
  if (isError) {
    return (
      <p className="text-center text-red-500">
        An error occurred:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </p>
    );
  }
  return (
    <table className="text-sm w-full max-w-[53.938rem] ml-5">
      <thead>
        <tr className="text-sm text-[#B5B7C0] border-b border-[#EEEEEE] text-left">
          <th className="pb-4">Customer Name</th>
          <th className="pb-4">Company</th>
          <th className="pb-4">Phone Number</th>
          <th className="pb-4">Email</th>
          <th className="pb-4 pr-11 text-center">Country</th>
          <th className="pb-4 pr-3">Actions</th>
        </tr>
      </thead>
      <tbody className="text-[#292D32]">
        {users?.map((user: any) => (
          <tr
            className="border-b border-[#EEEEEE] hover:bg-gray-100 cursor-pointer"
            key={user.id}
            onClick={() => router.push(`/${user.id}`)}
          >
            <td className="py-5">{user.name}</td>
            <td>{user.company.name || user.company}</td>
            <td>{user.phone}</td>
            <td className="break-words whitespace-normal max-w-[5rem]">
              {user.email}
            </td>
            <td className="text-center">
              {user.address?.city || user.country}
            </td>
            <td>
              <div className="flex gap-2">
                <div onClick={(e) => e.stopPropagation()}>
                  <EditForm
                    trigger={<Pencil height={18} width={18} />}
                    user={user}
                  />
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <Modal
                    handleDelete={() => mutate(user.id)}
                    trigger={<Trash2 height={18} width={18} />}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
