import { useState, type MouseEvent } from "react";
import ParticleDrift from "@/components/ui/particle-drift";

const BASE = import.meta.env.BASE_URL;
const EMAIL = "shdigital.au@gmail.com";

const COLOR = {
  ink: "#ece8e0",
  inkDim: "#9299a4",
  inkFaint: "#5c6370",
  accent: "#60a5fa",
  accentDim: "#3b82f6",
  teal: "#5fb0a3",
  line: "#2b3038",
  surface: "#1a1e25",
  surface2: "#20242c",
};

type Tag = { label: string; build?: boolean };
const tags = (labels: string[]): Tag[] => labels.map((label) => ({ label }));

const SKILL_GROUPS: { cat: string; tags: Tag[] }[] = [
  {
    cat: "CRM & Marketing Automation",
    tags: tags(["SMS & Chat Automation", "Sales Pipelines & Funnels"]),
  },
  {
    cat: "Digital Marketing",
    tags: tags(["Meta Ads", "TikTok Ads", "Google Ads", "SEO", "Competitor Analysis"]),
  },
  {
    cat: "AI & Automation",
    tags: [
      { label: "AI-Assisted Development (Claude Code)", build: true },
      { label: "Workflow Automation (Zapier / Make)" },
      { label: "AI Chatbots & Agents" },
      { label: "Prompt Engineering" },
    ],
  },
  {
    cat: "Website & CMS",
    tags: tags(["WordPress", "Shopify", "Full-Stack Development (VS Code, Claude Code)"]),
  },
  {
    cat: "Growth & Experimentation",
    tags: tags([
      "A/B Testing",
      "Campaign Optimisation",
      "Conversion Rate Analysis",
      "Funnel Analysis",
      "Lead Generation & Follow-up",
      "Email Marketing & List Growth",
    ]),
  },
  {
    cat: "Data Analysis & Visualisation",
    tags: tags(["SQL", "Python (Pandas, NumPy)", "Excel", "Tableau", "Google Analytics (GA4)", "Dashboard Development"]),
  },
  {
    cat: "Reporting & Insight",
    tags: tags(["Data Cleaning", "EDA", "Statistical Analysis", "Performance Reporting"]),
  },
  {
    cat: "Church Tech & Media",
    tags: tags([
      "Live Sound & Livestream Setup",
      "PA Tuning & Setup / Church IT",
      "Tap & Scan Pay Setup",
      "Audio Mixing & Mastering (Studio One Pro, Logic Pro)",
      "Video Editing (Final Cut Pro, DaVinci Resolve)",
      "Canva",
    ]),
  },
];

const EDUCATION = [
  {
    logo: `${BASE}assets/logos/swinburne.svg`,
    alt: "Swinburne University of Technology",
    name: "Graduate Certificate in Professional Data Analytics",
    desc: "Swinburne University of Technology — 2024–2025",
  },
  {
    logo: `${BASE}assets/logos/dante.png`,
    alt: "Audinate Dante",
    name: "Dante Certificate Level 1 & 2, IT Networking for Audio/Video",
    desc: "Audinate — October 2024",
  },
  {
    logo: `${BASE}assets/logos/google.png`,
    alt: "Google",
    name: "Google Data Analytics Certificate",
    href: "https://coursera.org/verify/professional-cert/RHVLZZHGUFMD",
    desc: "Coursera — January 2024",
  },
  {
    logo: `${BASE}assets/logos/ibm.png`,
    alt: "IBM",
    name: "Analysing Data with Excel",
    href: "https://courses.edx.org/certificates/d1c4f1b65bdd4490bfa689f6b62d700c",
    desc: "IBM / edX — June 2023",
  },
  {
    logo: `${BASE}assets/logos/kalay.png`,
    alt: "Kalay University",
    name: "Bachelor of Science (Physics)",
    desc: "Kalay University, Myanmar — 2004",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/salaihang",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "GitHub",
    href: "https://github.com/salaipome",
    path: "M12 .3a12 12 0 0 0-3.8 23.38c.6.1.83-.27.83-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.3 3.52 1 .1-.79.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.22.69.83.58A12 12 0 0 0 12 .3z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/salaipome",
    path: "M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.66l-5.22-6.83-5.97 6.83H1.85l7.7-8.8L1 2.5h6.83l4.72 6.24L18.24 2.5zm-1.16 17h1.83L6.98 4.4H5.02l12.06 15.1z",
  },
];

function EmailButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard) return;
    event.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={handleClick}
      title={EMAIL}
      className="font-mono text-[13px] border-b pb-0.5 transition-colors"
      style={{
        color: copied ? COLOR.teal : COLOR.ink,
        borderColor: copied ? COLOR.teal : COLOR.line,
      }}
      onMouseEnter={(e) => {
        if (copied) return;
        e.currentTarget.style.color = COLOR.accent;
        e.currentTarget.style.borderColor = COLOR.accent;
      }}
      onMouseLeave={(e) => {
        if (copied) return;
        e.currentTarget.style.color = COLOR.ink;
        e.currentTarget.style.borderColor = COLOR.line;
      }}
    >
      {copied ? `Copied — ${EMAIL}` : "Email — Business Enquiries"}
    </a>
  );
}

function CatBox({
  href,
  label,
  art,
}: {
  href: string;
  label: string;
  art: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative flex min-h-[76px] items-center justify-between gap-3 overflow-hidden rounded-md border px-6 py-[22px] no-underline transition-all duration-200 hover:-translate-y-0.5"
      style={{
        borderColor: COLOR.line,
        background: `linear-gradient(160deg, ${COLOR.surface2}, ${COLOR.surface})`,
        boxShadow: "0 1px 2px rgba(0,0,0,.2)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-11 z-0 flex w-[130px] items-center justify-end opacity-[0.13]"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 65%)" }}
      >
        {art}
      </span>
      <span
        className="relative z-10 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em]"
        style={{ color: COLOR.accent }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="relative z-10 shrink-0 font-mono text-[15px] transition-transform duration-200 group-hover:translate-x-1"
        style={{ color: COLOR.inkFaint }}
      >
        →
      </span>
    </a>
  );
}

function SectionLabelArt({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 flex w-[130px] items-center justify-end opacity-[0.13]"
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 65%)" }}
    >
      {children}
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#030509] text-[#ece8e0]">
      <ParticleDrift className="fixed inset-0 h-full w-full" speed={0.4} />

      <div className="relative z-10 mx-auto max-w-[900px] px-5 py-16">
        {/* Masthead */}
        <div className="flex flex-col gap-[18px]">
          <h1
            className="m-0 font-mono font-extrabold tracking-[-0.01em]"
            style={{ fontSize: "clamp(34px, 6vw, 50px)" }}
          >
            Salai Hang
          </h1>
          <p className="m-0 font-mono text-[13.5px] tracking-[0.03em]" style={{ color: COLOR.accent }}>
            Web Development <span style={{ color: COLOR.inkFaint, padding: "0 8px" }}>&middot;</span> Digital
            Marketing <span style={{ color: COLOR.inkFaint, padding: "0 8px" }}>&middot;</span> Data Analytics
          </p>
          <p className="m-0 max-w-none text-[16.5px] leading-[1.65]" style={{ color: COLOR.inkDim }}>
            I help businesses build practical, data-driven digital systems across web development, digital
            marketing and data analytics — from websites and CRM to automation, lead generation, paid
            advertising and SEO.
          </p>
          <p className="m-0 max-w-none text-[16.5px] leading-[1.65]" style={{ color: COLOR.inkDim }}>
            My current focus is on helping businesses attract, manage and convert leads through better digital
            systems. Before moving into this space, I spent{" "}
            <strong style={{ color: COLOR.ink, fontWeight: 600 }}>
              over 5 years leading teams of 30+ in fast-paced FMCG operations
            </strong>
            . Based in Perth, WA.
          </p>

          <div className="mt-1">
            <p
              className="m-0 mb-2 font-mono text-[11.5px] uppercase tracking-[0.1em]"
              style={{ color: COLOR.inkFaint }}
            >
              Fun facts
            </p>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              <li className="text-[15px] leading-[1.5]" style={{ color: COLOR.inkDim }}>
                ☕️ I love coffee
              </li>
              <li className="text-[15px] leading-[1.5]" style={{ color: COLOR.inkDim }}>
                🎸 I play guitar and produce music for{" "}
                <a
                  href="https://echoofgraceband.bandcamp.com/track/philippians-4-13"
                  target="_blank"
                  rel="noopener"
                  className="border-b no-underline"
                  style={{ color: COLOR.teal, borderColor: "rgba(95,176,163,.35)" }}
                >
                  Echo of Grace
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fader */}
        <div
          aria-hidden
          className="relative mt-9 h-px"
          style={{
            background: `repeating-linear-gradient(90deg, ${COLOR.line} 0 6px, transparent 6px 12px)`,
          }}
        >
          <span
            className="absolute -top-[3px] left-[22%] h-[7px] w-[2px] rounded-[1px]"
            style={{ background: COLOR.accent }}
          />
        </div>

        {/* Work columns */}
        <div className="mt-[46px] grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-12">
          <CatBox
            href={`${BASE}data-analytics.html`}
            label="Data Analytics"
            art={
              <svg viewBox="0 0 140 80" fill="none" className="h-full max-h-[60px] w-auto">
                <rect x="10" y="50" width="14" height="24" fill="#dda054" />
                <rect x="32" y="34" width="14" height="40" fill="#dda054" />
                <rect x="54" y="44" width="14" height="30" fill="#dda054" />
                <rect x="76" y="20" width="14" height="54" fill="#dda054" />
                <rect x="98" y="30" width="14" height="44" fill="#dda054" />
                <polyline
                  points="17,48 39,30 61,40 83,16 105,26"
                  stroke="#5fb0a3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="17" cy="48" r="3" fill="#5fb0a3" />
                <circle cx="39" cy="30" r="3" fill="#5fb0a3" />
                <circle cx="61" cy="40" r="3" fill="#5fb0a3" />
                <circle cx="83" cy="16" r="3" fill="#5fb0a3" />
                <circle cx="105" cy="26" r="3" fill="#5fb0a3" />
              </svg>
            }
          />
          <CatBox
            href={`${BASE}web-development-digital-marketing.html`}
            label="Web Development & Digital Marketing"
            art={
              <svg viewBox="0 0 140 80" fill="none" className="h-full max-h-[60px] w-auto">
                <rect x="6" y="6" width="128" height="68" rx="6" stroke="#5fb0a3" strokeWidth="2.5" />
                <line x1="6" y1="24" x2="134" y2="24" stroke="#5fb0a3" strokeWidth="2.5" />
                <circle cx="16" cy="15" r="2.5" fill="#dda054" />
                <circle cx="25" cy="15" r="2.5" fill="#dda054" />
                <circle cx="34" cy="15" r="2.5" fill="#dda054" />
                <path d="M40 45 L28 55 L40 65" stroke="#dda054" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M78 45 L90 55 L78 65" stroke="#dda054" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="63" y1="42" x2="55" y2="68" stroke="#dda054" strokeWidth="3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>

        {/* Skills */}
        <details
          className="mt-[46px] rounded border px-6 py-[22px]"
          style={{ borderColor: COLOR.line, background: COLOR.surface }}
        >
          <summary className="relative flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <SectionLabelArt>
              <svg viewBox="0 0 140 80" fill="none" className="h-full max-h-[60px] w-auto">
                <line x1="30" y1="40" x2="70" y2="20" stroke="#5fb0a3" strokeWidth="2" />
                <line x1="30" y1="40" x2="70" y2="60" stroke="#5fb0a3" strokeWidth="2" />
                <line x1="70" y1="20" x2="110" y2="30" stroke="#5fb0a3" strokeWidth="2" />
                <line x1="70" y1="60" x2="110" y2="50" stroke="#5fb0a3" strokeWidth="2" />
                <line x1="70" y1="20" x2="70" y2="60" stroke="#5fb0a3" strokeWidth="2" />
                <circle cx="30" cy="40" r="7" fill="#dda054" />
                <circle cx="70" cy="20" r="7" fill="#dda054" />
                <circle cx="70" cy="60" r="7" fill="#dda054" />
                <circle cx="110" cy="30" r="7" fill="#dda054" />
                <circle cx="110" cy="50" r="7" fill="#dda054" />
              </svg>
            </SectionLabelArt>
            <span
              className="relative z-10 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: COLOR.accent }}
            >
              Skills
            </span>
            <span className="relative z-10 font-mono text-[15px]" style={{ color: COLOR.inkFaint }}>
              +
            </span>
          </summary>

          <div className="mt-3.5 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-12">
            {SKILL_GROUPS.map((group) => (
              <div key={group.cat} className="pl-9 sm:pl-13">
                <p className="m-0 mb-2.5 font-mono text-sm font-bold" style={{ color: COLOR.ink }}>
                  {group.cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="rounded-[3px] border px-2.5 py-1 font-mono text-[11px] tracking-[0.02em]"
                      style={
                        tag.build
                          ? { color: COLOR.accent, borderColor: "rgba(96,165,250,.35)", background: COLOR.surface }
                          : { color: COLOR.inkDim, borderColor: COLOR.line, background: COLOR.surface }
                      }
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* Education & Certifications */}
        <details
          className="mt-[46px] rounded border px-6 py-[22px]"
          style={{ borderColor: COLOR.line, background: COLOR.surface }}
        >
          <summary className="relative flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <SectionLabelArt>
              <svg viewBox="0 0 140 80" fill="none" className="h-full max-h-[60px] w-auto">
                <polygon points="70,15 125,35 70,55 15,35" fill="#dda054" />
                <polygon
                  points="70,55 105,42 105,60 70,72 35,60 35,42"
                  fill="none"
                  stroke="#dda054"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <line x1="120" y1="37" x2="120" y2="58" stroke="#5fb0a3" strokeWidth="2.5" />
                <circle cx="120" cy="60" r="3" fill="#5fb0a3" />
              </svg>
            </SectionLabelArt>
            <span
              className="relative z-10 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: COLOR.accent }}
            >
              Education &amp; Certifications
            </span>
            <span className="relative z-10 font-mono text-[15px]" style={{ color: COLOR.inkFaint }}>
              +
            </span>
          </summary>

          <div className="mt-3.5 border-t" style={{ borderColor: COLOR.line }}>
            {EDUCATION.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[34px_1fr] items-baseline gap-[18px] border-b py-[13px]"
                style={{ borderColor: COLOR.line }}
              >
                <div className="flex h-[34px] w-[34px] items-center justify-center self-center rounded bg-white p-1">
                  <img src={item.logo} alt={item.alt} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="font-mono text-[16.5px] font-bold no-underline"
                      style={{ color: COLOR.ink }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.ink)}
                    >
                      {item.name} <span style={{ color: COLOR.teal, fontWeight: 400 }}>↗</span>
                    </a>
                  ) : (
                    <span className="font-mono text-[16.5px] font-bold" style={{ color: COLOR.ink }}>
                      {item.name}
                    </span>
                  )}
                  <span className="text-sm" style={{ color: COLOR.inkDim }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* Footer */}
        <footer
          className="mt-14 flex flex-wrap items-end justify-between gap-4 border-t pt-6"
          style={{ borderColor: COLOR.line }}
        >
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <EmailButton />
          </div>
          <div className="flex items-center gap-3.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener"
                aria-label={social.label}
                style={{ color: COLOR.inkDim }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.inkDim)}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            <a
              href="https://www.instagram.com/salaipome/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              style={{ color: COLOR.inkDim }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.inkDim)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="1" />
              </svg>
            </a>
          </div>
          <div className="font-mono text-xs tracking-[0.03em]" style={{ color: COLOR.inkFaint }}>
            PERTH, WA
          </div>
        </footer>
      </div>
    </div>
  );
}
