"use client";

import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React from "react";
import { AppIcon } from "@components/app-icon";
import { Header } from "@components/header";

export function ThemedLayout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2
      Header={() => <Header sticky />}
      Title={({ collapsed }) => (
        <ThemedTitleV2
          collapsed={collapsed}
          icon={<AppIcon />}
          text="Refine Project"
        />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
}
