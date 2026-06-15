import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Features", "Pricing", "Enterprise", "Blog"];

const FEATURES = [
  {
    icon: "✦",
    title: "Thinks before it speaks",
    desc: "Claude reasons through complex problems step by step — not just pattern-matching, but genuinely working things out. You get answers you can trust.",
  },
  {
    icon: "◈",
    title: "Writes like a collaborator",
    desc: "From first drafts to polished prose, Claude adapts to your voice and style. It's not a tool — it's a co-author who improves your work.",
  },
  {
    icon: "◇",
    title: "Codes with context",
    desc: "Not just syntax — Claude understands architecture, trade-offs, and intent. Debugging, refactoring, or greenfield builds: Claude ships with you.",
  },
  {
    icon: "◉",
    title: "Reads your documents",
    desc: "Upload PDFs, reports, or research papers. Claude synthesizes, compares, and extracts what matters — turning dense text into clear insight.",
  },
  {
    icon: "⬡",
    title: "Remembers your projects",
    desc: "Create Projects to keep context, files, and instructions persistent across conversations. Claude stays aligned with your goals over time.",
  },
  {
    icon: "◎",
    title: "Built to be honest",
    desc: "Claude is designed to be direct, calibrated, and honest — even when that means saying 'I don't know'. Reliability over flattery, always.",
  },
];

const PLANS = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    desc: "Start thinking better today.",
    features: ["Claude Sonnet access", "50 messages/day", "Basic file uploads", "Projects & memory"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "20",
    period: "per month",
    desc: "For people who demand more from their AI.",
    features: ["Claude Opus access", "5× more usage", "Priority at peak times", "Advanced research tools", "Longer context window"],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "30",
    period: "per user/month",
    desc: "Intelligence that scales with your organization.",
    features: ["Everything in Pro", "Shared Projects", "Team admin console", "Higher rate limits", "Early feature access"],
    cta: "Start Team",
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "Claude is the first AI I've used that feels like it's actually reading what I write. The difference in quality is striking.",
    name: "Mina Okafor",
    role: "Senior Product Designer, Stripe",
    initials: "MO",
    color: "#c9a96e",
  },
  {
    quote: "We replaced three different tools with Claude. It writes our docs, reviews our PRs, and answers customer questions better than we could.",
    name: "Theo Bergmann",
    role: "CTO, Nomad Stack",
    initials: "TB",
    color: "#8fa68c",
  },
  {
    quote: "I was skeptical of AI writing tools. Claude changed that — it understood nuance and context in a way I hadn't seen before.",
    name: "Priya Nair",
    role: "Editorial Director, Foundry Media",
    initials: "PN",
    color: "#9e8fc9",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2.5rem",
      height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10,9,8,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.07)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #c9a96e, #8a6a2e)",
          flexShrink: 0,
        }} />
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", letterSpacing: "0.04em", color: "#f5f0e8", fontWeight: 600 }}>claude</span>
      </div>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {NAV_LINKS.map(l => (
          <a key={l} href="#" style={{ fontSize: "13px", letterSpacing: "0.08em", color: "rgba(245,240,232,0.55)", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#f5f0e8"}
            onMouseLeave={e => e.target.style.color = "rgba(245,240,232,0.55)"}
          >{l}</a>
        ))}
      </div>
      <a href="https://claude.ai" style={{
        padding: "8px 20px", borderRadius: "40px",
        background: "transparent", border: "0.5px solid rgba(201,169,110,0.6)",
        color: "#c9a96e", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none",
        transition: "all 0.2s",
      }}
        onMouseEnter={e => { e.target.style.background = "#c9a96e"; e.target.style.color = "#0a0908"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c9a96e"; }}
      >Sign in →</a>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const full = "What would you like to think through?";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i === full.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "8rem 2rem 6rem",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "15%", left: "8%", width: 1, height: "40vh",
        background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "15%", right: "8%", width: 1, height: "40vh",
        background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "6px 16px", borderRadius: "40px",
          border: "0.5px solid rgba(201,169,110,0.35)", marginBottom: "2.5rem",
          color: "#c9a96e", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a96e", display: "inline-block", animation: "pulse 2s infinite" }} />
          Now available — Claude 4
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(3.5rem, 9vw, 7rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#f5f0e8",
          margin: "0 0 1.5rem",
          fontWeight: 700,
        }}>
          Intelligence<br />
          <span style={{
            background: "linear-gradient(135deg, #c9a96e 0%, #e8d5a8 50%, #c9a96e 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>that thinks</span><br />
          with you.
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(245,240,232,0.5)",
          maxWidth: "520px", margin: "0 auto 3rem", lineHeight: 1.7,
          fontFamily: "'Crimson Text', Georgia, serif",
        }}>
          Claude is an AI assistant built for the work that matters — nuanced thinking, honest answers, and a collaborator you can actually trust.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://claude.ai" style={{
            padding: "14px 32px", borderRadius: "50px",
            background: "#c9a96e", color: "#0a0908",
            fontSize: "15px", letterSpacing: "0.04em", fontWeight: 600,
            textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={e => e.target.style.background = "#e8d5a8"}
            onMouseLeave={e => e.target.style.background = "#c9a96e"}
          >Start for free</a>
          <a href="#" style={{
            padding: "14px 32px", borderRadius: "50px",
            background: "transparent", border: "0.5px solid rgba(245,240,232,0.2)",
            color: "rgba(245,240,232,0.7)", fontSize: "15px", letterSpacing: "0.04em",
            textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(245,240,232,0.5)"; e.target.style.color = "#f5f0e8"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(245,240,232,0.2)"; e.target.style.color = "rgba(245,240,232,0.7)"; }}
          >See pricing</a>
        </div>

        <div style={{
          marginTop: "5rem", maxWidth: "600px", margin: "5rem auto 0",
          background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "1.25rem 1.5rem",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #c9a96e, #8a6a2e)",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "17px", color: "rgba(245,240,232,0.5)",
            fontStyle: "italic", letterSpacing: "0.01em",
          }}>{typed}<span style={{ animation: "blink 1s infinite", borderRight: "1.5px solid rgba(201,169,110,0.7)", marginLeft: "1px" }}>&nbsp;</span></span>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Crimson+Text:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}

function FeatureCard({ icon, title, desc, index }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      padding: "2rem", border: "0.5px solid rgba(255,255,255,0.07)",
      borderRadius: "16px", background: "rgba(255,255,255,0.02)",
      transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      cursor: "default",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.05)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
    >
      <div style={{ fontSize: "22px", marginBottom: "1rem", color: "#c9a96e" }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "20px", fontWeight: 600, color: "#f5f0e8",
        margin: "0 0 0.75rem", letterSpacing: "0.01em",
      }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "rgba(245,240,232,0.45)", lineHeight: 1.75, margin: 0 }}>{desc}</p>
    </div>
  );
}

function Features() {
  const [ref, inView] = useInView();
  return (
    <section style={{ padding: "8rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div ref={ref} style={{
        textAlign: "center", marginBottom: "5rem",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1.25rem" }}>Capabilities</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
          color: "#f5f0e8", margin: 0, lineHeight: 1.1,
        }}>What Claude can do<br />
          <span style={{ color: "rgba(245,240,232,0.35)", fontWeight: 400, fontStyle: "italic" }}>for you</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
  return (
    <section style={{ padding: "8rem 2.5rem", background: "rgba(255,255,255,0.015)", borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div ref={ref} style={{
          textAlign: "center", marginBottom: "4rem",
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1.25rem" }}>Pricing</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#f5f0e8", margin: 0,
          }}>Choose your plan</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {PLANS.map((plan, i) => (
            <div key={plan.name} style={{
              padding: "2.5rem 2rem", borderRadius: "20px",
              border: plan.highlight ? "0.5px solid rgba(201,169,110,0.5)" : "0.5px solid rgba(255,255,255,0.07)",
              background: plan.highlight ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
              position: "relative", overflow: "hidden",
              animation: inView ? `fadeUp 0.7s ease ${i * 0.1}s both` : "none",
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                  background: "#c9a96e", color: "#0a0908", fontSize: "10px",
                  letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 16px",
                  borderRadius: "0 0 10px 10px", fontWeight: 600,
                }}>Most popular</div>
              )}
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c9a96e", margin: "0 0 0.5rem" }}>{plan.name}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", marginTop: "4px" }}>$</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#f5f0e8", lineHeight: 1 }}>{plan.price}</span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(245,240,232,0.35)", margin: "0 0 0.75rem" }}>{plan.period}</p>
              <p style={{ fontSize: "14px", color: "rgba(245,240,232,0.5)", margin: "0 0 1.75rem", lineHeight: 1.6 }}>{plan.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(201,169,110,0.15)", border: "0.5px solid rgba(201,169,110,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#c9a96e", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://claude.ai" style={{
                display: "block", textAlign: "center", padding: "12px",
                borderRadius: "50px",
                background: plan.highlight ? "#c9a96e" : "transparent",
                border: plan.highlight ? "none" : "0.5px solid rgba(255,255,255,0.15)",
                color: plan.highlight ? "#0a0908" : "rgba(245,240,232,0.7)",
                fontSize: "14px", fontWeight: plan.highlight ? 600 : 400,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.target.style.opacity = "1"; }}
              >{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  return (
    <section style={{ padding: "8rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div ref={ref} style={{
        textAlign: "center", marginBottom: "4rem",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1.25rem" }}>Stories</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
          color: "#f5f0e8", margin: 0,
        }}>Trusted by thinkers</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} style={{
            padding: "2rem", border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: "16px", background: "rgba(255,255,255,0.015)",
            animation: inView ? `fadeUp 0.7s ease ${i * 0.12}s both` : "none",
          }}>
            <div style={{ fontSize: "28px", color: "rgba(201,169,110,0.3)", marginBottom: "1rem", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
            <p style={{ fontSize: "15px", color: "rgba(245,240,232,0.65)", lineHeight: 1.75, margin: "0 0 1.5rem", fontFamily: "'Crimson Text', Georgia, serif", fontStyle: "italic" }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: `${t.color}22`, border: `0.5px solid ${t.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 600, color: t.color, flexShrink: 0,
              }}>{t.initials}</div>
              <div>
                <p style={{ margin: 0, fontSize: "14px", color: "#f5f0e8", fontWeight: 500 }}>{t.name}</p>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(245,240,232,0.4)" }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView();
  return (
    <section style={{ padding: "8rem 2.5rem" }}>
      <div ref={ref} style={{
        maxWidth: "700px", margin: "0 auto", textAlign: "center",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.9s ease",
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #c9a96e, #8a6a2e)",
          margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 24, height: 24, border: "2px solid rgba(10,9,8,0.4)", borderRadius: "50%" }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700,
          color: "#f5f0e8", margin: "0 0 1.25rem", lineHeight: 1.05,
        }}>Begin thinking<br />
          <span style={{
            background: "linear-gradient(135deg, #c9a96e, #e8d5a8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>differently.</span>
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(245,240,232,0.45)", marginBottom: "2.5rem", lineHeight: 1.7, fontFamily: "'Crimson Text', Georgia, serif" }}>
          Claude is free to start, endlessly useful, and built on a philosophy of honesty. No tricks, no dark patterns — just intelligence you can rely on.
        </p>
        <a href="https://claude.ai" style={{
          display: "inline-block", padding: "16px 40px", borderRadius: "50px",
          background: "#c9a96e", color: "#0a0908",
          fontSize: "16px", fontWeight: 600, letterSpacing: "0.03em",
          textDecoration: "none", transition: "all 0.25s",
        }}
          onMouseEnter={e => e.target.style.background = "#e8d5a8"}
          onMouseLeave={e => e.target.style.background = "#c9a96e"}
        >Try Claude for free →</a>
        <p style={{ marginTop: "1.25rem", fontSize: "12px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.04em" }}>No credit card required · Free forever plan</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid rgba(255,255,255,0.07)",
      padding: "2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c9a96e, #8a6a2e)" }} />
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", color: "rgba(245,240,232,0.4)" }}>claude.ai</span>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {["Privacy", "Terms", "Security", "Careers"].map(l => (
          <a key={l} href="#" style={{ fontSize: "12px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "rgba(245,240,232,0.6)"}
            onMouseLeave={e => e.target.style.color = "rgba(245,240,232,0.25)"}
          >{l}</a>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "rgba(245,240,232,0.2)", margin: 0 }}>© 2026 Anthropic, PBC</p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{
      background: "#0a0908",
      minHeight: "100vh",
      color: "#f5f0e8",
      fontFamily: "'Crimson Text', Georgia, serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Crimson+Text:ital@0;1&display=swap" rel="stylesheet" />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
