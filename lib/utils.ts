import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"
const COLORS = [
  "#DC2626", 
  "#D97706", 
  "#059669", 
  "#7C3AED", 
  "#DB2777"
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}


export function pointerEventCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
){
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}