"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type StudyListProps = {
  items: string[];
};

export function StudyList({ items }: StudyListProps) {
  if (items.length === 0) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Study List</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="rounded-md bg-neutral-100 p-2 dark:bg-neutral-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}