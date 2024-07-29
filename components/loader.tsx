import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <LoaderCircle className="h-32 w-32 text-gray-400 animate-spin" />
      <p className="text-muted-foreground text-sm text-center pt-8">
        Thinking ...
      </p>
    </div>
  );
};
