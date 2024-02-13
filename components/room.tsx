"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

// import { Layer } from "@/types/canvas";
import { RoomProvider } from "@/liveblocks.config";

interface RoomProps { 
  children: ReactNode
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
};

export const Room = ({ 
  children,
  roomId,
  fallback,
}: RoomProps) => {
  return (
    <RoomProvider 
      id={roomId} 
      initialPresence={{

      }}

    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};