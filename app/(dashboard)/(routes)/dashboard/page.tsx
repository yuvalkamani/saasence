"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
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
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          All-in-one AI tool? Gotcha.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          You don't have to go to anywhere else.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => {
          return (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className="p-2 w-fit rounded-md bg-[#DB4A2B]/10">
                  <tool.icon className="w-8 h-8 text-[#DB4A2B]" />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
