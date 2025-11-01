"use client";

import { Progress } from "@/components/ui/progress";



export function Progressp({ value }: { value: number }) {
    return (
        <Progress value={value} />
    );
}