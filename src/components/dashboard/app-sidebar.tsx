"use client";

import * as React from "react";
import { CircleUserRound, ScrollText, SquareTerminal } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import logo from "../../assets/TutorLink.png";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/student",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Profile",
      url: "/student/profile",
      icon: CircleUserRound,
      isActive: true,
    },
    {
      title: "Manage Tutors",
      url: "/student/myrequest",
      icon: ScrollText,
      isActive: true,
    },
    {
      title: "My Bookings",
      url: "/student/bookings",
      icon: ScrollText,
      isActive: true,
    },
  ],
  navTutor: [
    {
      title: "Dashboard",
      url: "/tutor",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Profile",
      url: "/tutor/profile",
      icon: CircleUserRound,
      isActive: true,
    },
    {
      title: "Student Request",
      url: "/tutor/requestStudents",
      icon: ScrollText,
      isActive: true,
    },
    {
      title: "All Bookings",
      url: "/tutor/bookings",
      icon: ScrollText,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
 
  return (
    <div className=" flex justify-center items-center">
      <Sidebar
        className=" flex justify-center items-center"
        collapsible="icon"
        {...props}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className=" flex items-center justify-center">
              <Link href="/">
                <Image src={logo} alt="logo" height={80} width={80}></Image>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className=" text-blue-600  pl-12 text-xl ">
          {user?.role === "Tutor" ? (
            <NavMain items={data.navTutor} />
          ) : (
            <NavMain items={data.navMain} />
          )}
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
