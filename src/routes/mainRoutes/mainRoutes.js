import React from "react";

export const userRoutes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: React.lazy(() => import("../../views/Dashboard/Dashboard")),
  },
  {
    path: "/collections",
    exact: true,
    name: "Collections",
    component: React.lazy(() => import("../../views/Collections/Collection")),
  },
  {
    exact:true,
        path:"/faqs",
        component:React.lazy(() => import("../../views/FAQs/FAQs")),
        name:"FAQS"
  },
  {
    exact:true,
    path:"/whitepaper",
    component:React.lazy(() => import("../../views/WhitePaper/WhitePaper")),
    name:"White Paper"
  },
  // Main route's default dashboard
  {
    redirectRoute: true,
    name: "dashboardRedirect",
    path: "/",
  },
];
