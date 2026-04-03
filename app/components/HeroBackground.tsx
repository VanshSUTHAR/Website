import { type ReactNode } from "react";

interface HeroBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: "full" | "compact";
}

export default function HeroBackground({
  children,
  className = "",
  variant = "full",
}: HeroBackgroundProps) {
  return (
    <section
      className={`relative overflow-hidden ${variant === "full" ? "min-h-screen" : ""} ${className}`}
      style={{ contain: "layout paint" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, #2A0A12, #1A0A2E, #0A1040)",
        }}
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 10% 90%, rgba(220,20,60,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 100% 70% at 90% 10%, rgba(59,130,246,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(147,51,234,0.2) 0%, transparent 70%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg,
              rgba(220,20,60,0.08) 0%,
              rgba(147,51,234,0.06) 35%,
              rgba(59,130,246,0.08) 70%,
              rgba(10,16,64,0.04) 100%
            )
          `,
          backgroundSize: "400% 400%",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(200,80,100,0.03) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(100,170,255,0.03) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(140,100,240,0.03) 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
