"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Message } from "@/components/message";
import { StudyList } from "@/components/study-list";
import { useToast } from "@/components/ui/use-toast";

type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [studyItems, setStudyItems] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response (replace with actual API call)
    const aiResponse: MessageType = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "申し訳ありません[すみませんでした]が、これは例文です。[This is just an example.]",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const addToStudyList = (item: string) => {
    if (!studyItems.includes(item)) {
      setStudyItems((prev) => [...prev, item]);
      toast({
        title: "Added to study list",
        description: item,
      });
    }
  };

  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-800">
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onAddToStudyList={addToStudyList}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type in English or Japanese..."
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <StudyList items={studyItems} />
    </div>
  );
}