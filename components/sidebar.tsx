"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    label: "Image",
    icon: ImageIcon,
    href: "/image",
  },
  {
    label: "Video",
    icon: VideoIcon,
    href: "/video",
  },
  {
    label: "Music",
    icon: Music,
    href: "/music",
  },
  {
    label: "Code",
    icon: Code,
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#F4F4F4] text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-xl font-bold", montserrat.className)}>
            SaaSence.
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm text-gray-500 group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-gray-400/10 rounded-lg transition",
                  pathname === route.href ? "text-black bg-gray-400/10" : ""
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon
                    className={cn("h-5 w-5 mr-3 text-[#DB4A2B]", route.color)}
                  />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
