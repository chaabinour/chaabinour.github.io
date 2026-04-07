import { useState, useEffect } from "react";
import { Wifi } from "lucide-react";

export function NetworkStatus() {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 20) + 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-mono shadow-lg">
      <span className="h-2 w-2 rounded-full bg-cyan" style={{ animation: "pulse-dot 2s infinite" }} />
      <Wifi size={12} className="text-cyan" />
      <span className="text-muted-foreground hidden sm:inline">
        {latency}ms • Tunisia
      </span>
    </div>
  );
}
