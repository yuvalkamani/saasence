import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const Heading = ({ title, description, Icon }: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className="p-2 w-fit rounded-md bg-[#DB4A2B]/10">
          <Icon className="w-10 h-10 text-[#DB4A2B]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
