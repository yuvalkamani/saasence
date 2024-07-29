import { CircleOff } from "lucide-react";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <CircleOff className="h-32 w-32 text-gray-400" />
      <p className="text-muted-foreground text-sm text-center pt-8">{label}</p>
    </div>
  );
};
