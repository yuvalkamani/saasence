import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (UP)
      <div>
        <Link href="/sign-in">
          <Button variant="secondary">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
