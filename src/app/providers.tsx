"use client"

import React from "react";
import StorageProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
     return <StorageProvider>{children}</StorageProvider>
}

export default Providers;