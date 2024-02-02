"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();


  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/note.svg"
        height={110}
        width={110}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};