"use client";
import CustomersList from "@/components/CustomersList";
import Header from "@/components/Header";
import PaginationBtns from "@/components/PaginationBtns";
import StatsPanel from "@/components/StatsPanel";
import Table from "@/components/Table";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <>
      <Header />
      <StatsPanel />
      <CustomersList>
        <Table />
        <PaginationBtns />
      </CustomersList>
    </>
  );
}
