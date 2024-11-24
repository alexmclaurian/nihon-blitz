"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type MessageProps = {
  message: {
    role: "user" | "assistant";
    content: string;
  };
  onAddToStudyList: (item: string) => void;
};

export function Message({ message, onAddToStudyList }: MessageProps) {
  const isAI = message.role === "assistant";

  const parseContent = (content: string) => {
    const segments = content.match(/\[([^\]]+)\]|([^\[]+)/g) || [];
    
    return segments.map((segment, index) => {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        const text = segment.slice(1, -1);
        return (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <span className="cursor-pointer underline decoration-dotted underline-offset-4 hover:text-blue-500">
                {text}
              </span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Study Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p>{text}</p>
                <button
                  onClick={() => onAddToStudyList(text)}
                  className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Add to Study List
                </button>
              </div>
            </DialogContent>
          </Dialog>
        );
      }
      return <span key={index}>{segment}</span>;
    });
  };

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`rounded-lg px-4 py-2 ${
          isAI
            ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
            : "bg-blue-500 text-white"
        } max-w-[80%]`}
      >
        {parseContent(message.content)}
      </div>
    </div>
  );
}