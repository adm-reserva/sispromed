import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const CLIENT_ID = "1";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <RouterProvider router={router} />
      </SidebarProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
