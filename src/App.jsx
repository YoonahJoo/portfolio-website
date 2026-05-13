import { useState, useEffect } from "react";

const portfolioData = {
  name: "YOONAH JOO",
  nameKr: "주윤아",
  role: "Frontend Developer",
  greeting: "코드보다 먼저 스토리를 고민하고, 기능보다 먼저 감정을 설계하는 프론트엔드 개발자입니다.",
  about: {
    intro: `저는 "왜 이걸 만들까?"보다 "이게 있으면 사람들이 어떤 긍정적인 감정을 얻게 될까?" 를 먼저 묻는 개발자입니다.\n\n젊은 세대의 생산성 도구 시장을 직접 조사하며 발견한 건, 단순한 기능보다 시각적 만족감과 심리적 보상이 사용자를 움직인다는 것이었습니다.\n\n그 인사이트를 바탕으로, 얼음이 녹는 시간 동안 집중하는 픽셀아트 기반 웹앱을 기획했습니다. 아이템 디자인부터 Figma UI 설계, 그리고 릴스 컨셉 기획까지 — 개발 이전에 사용자의 감정 흐름을 먼저 설계했습니다.\n\n"내 crush가 얼음이 다 떨어졌대. 그는 얼음이 다 녹을 때까지 공부하는 챌린지를 좋아하거든" — 이 한 문장이 앱의 출발점이었습니다. 사람들이 자연스럽게 공유하고 싶어지는 이야기, 그게 좋은 프로덕트의 시작이라고 생각합니다.\n\n코드보다 먼저 스토리를 고민하고, 기능보다 먼저 감정을 설계하는 프론트엔드 개발자, Yoonah Joo입니다.`,
    philosophy: "저는 프론트엔드 개발이 단순히 화면을 구현하는 일이 아니라, 사용자가 제품과 만나는 순간의 흐름을 설계하는 일이라고 생각합니다. 기능의 완성도뿐 아니라 사용자가 어떤 타이밍에 반응하고, 어떤 피드백을 통해 몰입하며, 어떤 경험을 기억하게 되는지를 함께 고민합니다. 그래서 저는 개발 과정에서 UI의 구조, 인터랙션의 리듬, 시각적 보상, 사용자의 감정 흐름을 중요하게 봅니다. 작은 움직임과 디테일이 사용자의 행동을 자연스럽게 이끌 수 있다고 믿으며, 기획 의도를 코드로 정확히 구현하는 개발자가 되고자 합니다.",
    goal: "제 목표는 사용자의 취향과 행동을 이해하고, 이를 실제 서비스 경험으로 구현할 수 있는 프론트엔드 개발자로 성장하는 것입니다. 리서치와 기획에서 발견한 인사이트를 UI/UX 설계와 코드로 연결하며, 단순히 보기 좋은 화면이 아니라 사용자가 계속 머물고 싶어지는 웹 경험을 만들고 싶습니다."
  },
  skills: {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    stateData: ["Zustand", "React Query", "Redux", "Axios"],
    tools: ["Figma", "Git", "GitHub", "Vercel"]
  },
  timeline: [
    { year: "2021.03", event: "연세대학교 소프트웨어학부 입학", icon: "🎓" },
    { year: "2023.09", event: "Mercy University 교환학생", icon: "✈️" },
    { year: "2026.02", event: "연세대학교 소프트웨어학부 졸업 예정", icon: "🎓" },
    { year: "2026.05", event: "AI 바이브코딩 프론트엔드 과정 시작 - HTML·CSS·SCSS·Tailwind·JavaScript 학습", icon: "💻" },
    { year: "2026.06", event: "React·TypeScript·Next.js 실무 학습", icon: "⚛️" },
    { year: "2026.07", event: "AI 바이브코딩 파이널 프로젝트 진행", icon: "🚀" },
    { year: "2026.07", event: "프로젝트 배포 및 포트폴리오 고도화", icon: "🌐" },
    { year: "2026.07~", event: "프론트엔드 개발자 취업 준비", icon: "🌱" },
  ],
  projects: [
    {
      id: 1,
      title: "PIXEL SHOP",
      desc: "React 기반 쇼핑몰 프로젝트. 상품 목록, 장바구니, 결제 플로우를 구현했습니다.",
      tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
      github: "#", demo: "#", color: "#b39ddb"
    },
    {
      id: 2,
      title: "QUEST BOARD",
      desc: "팀 협업용 칸반 보드 앱. 드래그앤드롭과 실시간 업데이트 기능을 구현했습니다.",
      tech: ["React", "React Query", "TypeScript", "Vercel"],
      github: "#", demo: "#", color: "#80cbc4"
    },
    {
      id: 3,
      title: "WEATHER WORLD",
      desc: "날씨 API를 활용한 날씨 앱. 위치 기반 날씨 정보와 5일 예보를 제공합니다.",
      tech: ["React", "Axios", "JavaScript", "CSS3"],
      github: "#", demo: "#", color: "#f48fb1"
    }
  ],
  contact: { email: "adora0913@yonsei.ac.kr", github: "https://github.com/YoonahJoo" },
  githubUsername: "YoonahJoo"
};

const COLORS = {
  bg: "#1e1b3a",
  bgAlt: "#2a2550",
  card: "#2a2550",
  purple: "#d4aaff",
  cyan: "#98e4d6",
  pink: "#ffadc7",
  yellow: "#ffd97d",
  green: "#98e4d6",
  text: "#ddd5f3",
  subtext: "#9e8fb2"
};

const PIXEL_FONT = "'Press Start 2P', cursive";

function PixelBorder({ color = COLORS.purple, children, style = {} }) {
  return (
    <div style={{
      border: `3px solid ${color}`,
      boxShadow: `4px 4px 0px ${color}`,
      background: COLORS.card,
      ...style
    }}>
      {children}
    </div>
  );
}

function TypingText({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => { setDisplayed(p => p + text[idx]); setIdx(i => i + 1); }, speed);
      return () => clearTimeout(t);
    }
  }, [idx, text, speed]);
  return (
    <span>
      {displayed}
      <span style={{ animation: "blink 1s infinite", color: COLORS.cyan }}>▮</span>
    </span>
  );
}

function NavBar({ active, setActive }) {
  const sections = ["HERO", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(30,27,58,0.96)", borderBottom: `2px solid ${COLORS.purple}`,
      boxShadow: `0 2px 0 ${COLORS.purple}`,
      padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <span style={{ fontFamily: PIXEL_FONT, color: COLORS.purple, fontSize: "10px" }}>DEV.PORTFOLIO</span>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {sections.map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setActive(s)}
            style={{
              fontFamily: PIXEL_FONT, fontSize: "8px", textDecoration: "none",
              color: active === s ? COLORS.pink : COLORS.subtext,
              transition: "color 0.2s"
            }}>
            {active === s ? `> ${s}` : s}
          </a>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", background: COLORS.bg,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", paddingTop: "60px"
    }}>
      {/* 파스텔 그리드 배경 */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${COLORS.purple}22 1px, transparent 1px), linear-gradient(90deg, ${COLORS.purple}22 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />
      {/* 별 파티클 */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${(i * 37 + 10) % 100}%`, top: `${(i * 53 + 5) % 100}%`,
          width: "4px", height: "4px",
          background: [COLORS.purple, COLORS.cyan, COLORS.pink][i % 3],
          animation: `blink ${1 + (i % 3) * 0.5}s infinite ${i * 0.2}s`,
          borderRadius: "0"
        }} />
      ))}

      <div style={{ position: "relative", textAlign: "center", padding: "24px" }}>
        {/* 아바타 */}
        <PixelBorder color={COLORS.cyan} style={{
          display: "inline-block", padding: "6px", marginBottom: "24px",
          boxShadow: `4px 4px 0px ${COLORS.cyan}`
        }}>
          <div style={{
            width: "180px", height: "180px",
            background: `linear-gradient(135deg, ${COLORS.purple}66, ${COLORS.pink}66)`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "84px"
          }}>👾</div>
        </PixelBorder>

        {/* 이름 */}
        <div style={{ fontFamily: PIXEL_FONT, fontSize: "clamp(21px,4.5vw,39px)", color: COLORS.purple, marginBottom: "8px" }}>
          {portfolioData.name}
        </div>
        <div style={{ fontFamily: PIXEL_FONT, fontSize: "clamp(12px,2.25vw,18px)", color: COLORS.cyan, marginBottom: "24px" }}>
          {portfolioData.role}
        </div>

        {/* 인삿말 */}
        <PixelBorder color={COLORS.pink} style={{ maxWidth: "840px", padding: "16px", margin: "0 auto 32px" }}>
          <p style={{ fontFamily: PIXEL_FONT, fontSize: "12px", color: COLORS.text, lineHeight: "2", margin: 0 }}>
            <TypingText text={portfolioData.greeting} />
          </p>
        </PixelBorder>

        {/* 스크롤 유도 */}
        <div style={{ fontFamily: PIXEL_FONT, fontSize: "10px", color: COLORS.yellow, animation: "blink 1s infinite" }}>
          ▼ SCROLL DOWN ▼
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    { icon: "🌙", title: "ABOUT ME", content: portfolioData.about.intro, color: COLORS.purple },
    { icon: "✨", title: "PHILOSOPHY", content: portfolioData.about.philosophy, color: COLORS.cyan },
    { icon: "🪐", title: "GOAL", content: portfolioData.about.goal, color: COLORS.pink },
  ];
  return (
    <section id="about" style={{ background: COLORS.bg, padding: "80px 24px" }}>
      <SectionTitle title="ABOUT ME" color={COLORS.purple} />
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px" }}>
        {cards.map(c => (
          <PixelBorder key={c.title} color={c.color} style={{ padding: "24px" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>{c.icon}</div>
            <div style={{ fontFamily: PIXEL_FONT, fontSize: "9px", color: c.color, marginBottom: "16px" }}>{c.title}</div>
            <p style={{ color: COLORS.text, fontSize: "12px", lineHeight: "1.8", margin: 0, fontFamily: "'Noto Sans KR', sans-serif" }}>{c.content}</p>
          </PixelBorder>
        ))}
      </div>
    </section>
  );
}

function SkillBadge({ name, color }) {
  return (
    <span style={{
      fontFamily: PIXEL_FONT, fontSize: "7px", padding: "6px 10px",
      border: `2px solid ${color}`, color,
      background: `${color}22`,
      boxShadow: `2px 2px 0px ${color}`, display: "inline-block", margin: "4px"
    }}>{name}</span>
  );
}

function SkillsSection() {
  const skillGroups = [
    { title: "FRONTEND", skills: portfolioData.skills.frontend, color: COLORS.purple },
    { title: "STATE / DATA", skills: portfolioData.skills.stateData, color: COLORS.cyan },
    { title: "TOOLS", skills: portfolioData.skills.tools, color: COLORS.pink },
  ];

  const weeks = 26;
  const activityGrid = Array.from({ length: weeks }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );
  const activityColors = ["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a"];

  return (
    <section id="skills" style={{ background: COLORS.bgAlt, padding: "80px 24px" }}>
      <SectionTitle title="SKILLS" color={COLORS.cyan} />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px", marginBottom: "40px" }}>
          {skillGroups.map(g => (
            <PixelBorder key={g.title} color={g.color} style={{ padding: "20px" }}>
              <div style={{ fontFamily: PIXEL_FONT, fontSize: "8px", color: g.color, marginBottom: "16px" }}>{g.title}</div>
              <div>{g.skills.map(s => <SkillBadge key={s} name={s} color={g.color} />)}</div>
            </PixelBorder>
          ))}
        </div>

        {/* GitHub Activity */}
        <PixelBorder color={COLORS.green} style={{ padding: "24px", marginBottom: "40px" }}>
          <div style={{ fontFamily: PIXEL_FONT, fontSize: "8px", color: COLORS.green, marginBottom: "16px" }}>
            GITHUB ACTIVITY
          </div>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", gap: "3px", minWidth: "fit-content" }}>
              {activityGrid.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {week.map((lvl, di) => (
                    <div key={di} style={{
                      width: "12px", height: "12px",
                      background: activityColors[lvl],
                      border: `1px solid ${COLORS.green}55`
                    }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: PIXEL_FONT, fontSize: "7px", color: COLORS.subtext, marginTop: "8px" }}>
            @{portfolioData.githubUsername} — Last 6 months
          </div>
        </PixelBorder>

        {/* Timeline */}
        <PixelBorder color={COLORS.yellow} style={{ padding: "24px" }}>
          <div style={{ fontFamily: PIXEL_FONT, fontSize: "8px", color: COLORS.yellow, marginBottom: "24px" }}>TIMELINE</div>
          <div style={{ position: "relative", paddingLeft: "24px" }}>
            <div style={{ position: "absolute", left: "8px", top: 0, bottom: 0, width: "2px", background: `${COLORS.yellow}88` }} />
            {portfolioData.timeline.map((t, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "24px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{
                  position: "absolute", left: "-20px", top: "2px",
                  width: "10px", height: "10px", background: COLORS.yellow,
                  clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
                }} />
                <div>
                  <span style={{ fontFamily: PIXEL_FONT, fontSize: "7px", color: COLORS.yellow }}>{t.year}</span>
                  <span style={{ marginLeft: "12px", color: COLORS.text, fontSize: "12px", fontFamily: "'Noto Sans KR',sans-serif" }}>{t.icon} {t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </PixelBorder>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-6px)" : "none", transition: "transform 0.2s" }}>
      <PixelBorder color={project.color} style={{
        padding: "0", overflow: "hidden",
        boxShadow: hovered ? `6px 6px 0px ${project.color}` : `4px 4px 0px ${project.color}`
      }}>
        <div style={{
          height: "140px", background: `linear-gradient(135deg, ${project.color}44, ${COLORS.bg})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: `2px solid ${project.color}`
        }}>
          <span style={{ fontFamily: PIXEL_FONT, fontSize: "10px", color: project.color }}>
            QUEST #{String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <div style={{ padding: "20px" }}>
          <div style={{ fontFamily: PIXEL_FONT, fontSize: "10px", color: project.color, marginBottom: "12px" }}>
            {project.title}
          </div>
          <p style={{ color: COLORS.text, fontSize: "12px", lineHeight: "1.7", fontFamily: "'Noto Sans KR',sans-serif", marginBottom: "16px" }}>
            {project.desc}
          </p>
          <div style={{ marginBottom: "16px" }}>
            {project.tech.map(t => <SkillBadge key={t} name={t} color={project.color} />)}
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {[["GitHub", project.github], ["Live Demo", project.demo]].map(([label, href]) => (
              <a key={label} href={href} style={{
                fontFamily: PIXEL_FONT, fontSize: "7px", padding: "8px 12px",
                border: `2px solid ${project.color}`, color: project.color,
                textDecoration: "none", background: "transparent",
                boxShadow: `2px 2px 0 ${project.color}`, transition: "all 0.15s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = project.color; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = project.color; }}
              >{label}</a>
            ))}
          </div>
        </div>
      </PixelBorder>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" style={{ background: COLORS.bg, padding: "80px 24px" }}>
      <SectionTitle title="PROJECTS" color={COLORS.pink} />
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
        {portfolioData.projects.map((p, i) => <ProjectCard key={p.id} project={p} idx={i} />)}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" style={{ background: COLORS.bgAlt, padding: "80px 24px", textAlign: "center" }}>
      <SectionTitle title="CONTACT" color={COLORS.yellow} />
      <PixelBorder color={COLORS.yellow} style={{ maxWidth: "480px", margin: "0 auto", padding: "40px 32px" }}>
        <div style={{ fontFamily: PIXEL_FONT, fontSize: "11px", color: COLORS.yellow, marginBottom: "8px" }}>
          GAME CLEAR!
        </div>
        <div style={{ fontFamily: PIXEL_FONT, fontSize: "8px", color: COLORS.subtext, marginBottom: "32px" }}>
          함께 일해요!
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <button onClick={copyEmail} style={{
            fontFamily: PIXEL_FONT, fontSize: "8px", padding: "12px 24px", width: "100%",
            border: `2px solid ${COLORS.cyan}`, color: COLORS.cyan, background: "transparent",
            boxShadow: `3px 3px 0 ${COLORS.cyan}`, cursor: "pointer"
          }}>
            {copied ? "✓ COPIED!" : `📧 ${portfolioData.contact.email}`}
          </button>
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" style={{
            fontFamily: PIXEL_FONT, fontSize: "8px", padding: "12px 24px", width: "100%",
            border: `2px solid ${COLORS.purple}`, color: COLORS.purple, background: "transparent",
            boxShadow: `3px 3px 0 ${COLORS.purple}`, textDecoration: "none", display: "block",
            boxSizing: "border-box"
          }}>
            🐙 GITHUB PROFILE
          </a>
        </div>
      </PixelBorder>
      <div style={{ fontFamily: PIXEL_FONT, fontSize: "7px", color: COLORS.subtext, marginTop: "48px" }}>
        © 2026 {portfolioData.name} — MADE WITH 💜
      </div>
    </section>
  );
}

function SectionTitle({ title, color }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "48px" }}>
      <h2 style={{ fontFamily: PIXEL_FONT, fontSize: "clamp(12px,2.5vw,20px)", color, margin: 0 }}>
        ◆ {title} ◆
      </h2>
      <div style={{ width: "80px", height: "3px", background: color, margin: "12px auto 0" }} />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("HERO");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+KR:wght@400;500&display=swap');
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      * { box-sizing: border-box; }
      body { margin: 0;       background: #1e1b3a; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #fdf6ff; }
      ::-webkit-scrollbar-thumb { background: #b39ddb; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.toUpperCase()); });
    }, { threshold: 0.3 });
    ["hero", "about", "skills", "projects", "contact"].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh" }}>
      <NavBar active={active} setActive={setActive} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}