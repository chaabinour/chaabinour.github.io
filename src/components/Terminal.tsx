import { useState, useRef, useEffect, useCallback } from "react";
import { terminalCommands, personalInfo } from "@/config/portfolio";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: `Welcome to ${personalInfo.name}'s portfolio terminal.` },
    { type: "output", text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [{ type: "input", text: cmd }];

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      newLines.push({ type: "output", text: response });
    } else if (trimmed.startsWith("project ")) {
      const num = parseInt(trimmed.split(" ")[1]);
      if (num >= 1 && num <= 3) {
        const projectNames = [
          "AI-Powered OpenStack Infrastructure",
          "Intelligent Kubernetes Resource Guardian",
          "B2B Application Deployment Pipeline",
        ];
        newLines.push({ type: "output", text: `Project ${num}: ${projectNames[num - 1]}\nScroll down to see full details.` });
      } else {
        newLines.push({ type: "output", text: "Project not found. Try 1, 2, or 3." });
      }
    } else {
      newLines.push({ type: "output", text: `Command not found: ${trimmed}. Type "help" for available commands.` });
    }

    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="terminal-window w-full max-w-2xl mx-auto overflow-hidden shadow-xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <div className="h-3 w-3 rounded-full bg-destructive" />
        <div className="h-3 w-3 rounded-full bg-gold" />
        <div className="h-3 w-3 rounded-full bg-cyan" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">nour@cloud-engineer:~</span>
      </div>
      <div ref={scrollRef} className="h-64 overflow-y-auto p-4 scrollbar-thin">
        {lines.map((line, i) => (
          <div key={i} className="font-mono text-sm leading-relaxed">
            {line.type === "input" ? (
              <div>
                <span className="text-cyan">❯ </span>
                <span className="text-foreground">{line.text}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-muted-foreground">{line.text}</pre>
            )}
          </div>
        ))}
        <div className="flex items-center font-mono text-sm">
          <span className="text-cyan">❯ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground caret-cyan ml-1"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
