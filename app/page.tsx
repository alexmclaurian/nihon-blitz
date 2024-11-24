import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container flex flex-col items-center justify-between p-4 md:p-8">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            日本語 Chat
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Learn Japanese through natural conversation
          </p>
        </header>
        <Chat />
      </div>
    </main>
  );
}