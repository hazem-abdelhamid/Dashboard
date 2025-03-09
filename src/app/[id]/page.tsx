"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/utils";
import Loading from "./Loading";

const UserDetails = () => {
  const params = useParams();
  const { id } = params;
  const {
    data: user,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id as string | number),
    enabled: !!id,
  });
  console.log(user, isLoading, isError);
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  return (
    <div className="bg-slate-600 ml-16 text-white rounded-xl p-5">
      <h1>Username : {user?.name}</h1>
      <h1>Email : {user?.email}</h1>
      <h1>Company : {user?.company?.name || user?.company}</h1>
      <h1>City : {user?.address?.city || user?.country}</h1>
    </div>
  );
};

export default UserDetails;
