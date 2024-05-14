import authOptions from "@repo/auth/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import { ThemedLayout } from "@components/themed-layout";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.session?.user) {
    return redirect("/login");
  }

  return <ThemedLayout>{children}</ThemedLayout>;
}

async function getData() {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
}
