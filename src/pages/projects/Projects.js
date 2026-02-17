import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  portfolioProjects,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// ── Inline styles ────────────────────────────────────────────────────────────
// Scoped to portfolio section only — does not affect existing page styles

const S = {
  sectionWrap: {
    padding: "40px 5% 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionEyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#2563EB",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "1.9rem",
    fontWeight: 700,
    marginBottom: "8px",
    lineHeight: 1.2,
  },
  sectionSubtitle: {
    fontSize: "1rem",
    lineHeight: 1.65,
    marginBottom: "32px",
    maxWidth: "540px",
    fontWeight: 300,
  },
  filterRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "32px",
  },
  filterBtn: (active) => ({
    padding: "7px 18px",
    borderRadius: "100px",
    border: active ? "1.5px solid #0F1117" : "1.5px solid #E2E0DC",
    background: active ? "#0F1117" : "white",
    color: active ? "white" : "#6B7280",
    fontSize: "0.82rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s",
    fontFamily: "inherit",
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },

  // Featured card (full width, two-column)
  featuredCard: {
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "white",
    borderRadius: "14px",
    border: "1.5px solid #E8E6E0",
    boxShadow: "0 2px 12px rgba(15,17,23,0.06)",
    overflow: "hidden",
    marginBottom: "8px",
  },
  featuredContent: {
    padding: "36px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  featuredPreview: {
    background: "#F4F3EF",
    borderLeft: "1.5px solid #E8E6E0",
    position: "relative",
    overflow: "hidden",
    minHeight: "360px",
  },
  iframeEl: {
    width: "117%",
    height: "117%",
    border: "none",
    pointerEvents: "none",
    transform: "scale(0.85)",
    transformOrigin: "top left",
  },
  iframeOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(244,243,239,0.97) 0%, transparent 55%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "20px",
  },

  // Standard card
  card: {
    background: "white",
    borderRadius: "12px",
    border: "1.5px solid #E8E6E0",
    boxShadow: "0 1px 4px rgba(15,17,23,0.05)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "8px",
  },
  cardCategory: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9CA3AF",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    lineHeight: 1.3,
    color: "#0F1117",
  },
  cardSubtitle: {
    fontSize: "0.75rem",
    color: "#9CA3AF",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginTop: "-4px",
  },
  cardDesc: {
    fontSize: "0.875rem",
    color: "#4B5563",
    lineHeight: 1.65,
    fontWeight: 300,
    flex: 1,
  },
  cardContributions: {
    fontSize: "0.78rem",
    color: "#9CA3AF",
    lineHeight: 1.55,
    fontStyle: "italic",
    paddingTop: "10px",
    borderTop: "1px solid #F3F4F6",
  },

  // Status badge
  badge: (inProgress) => ({
    fontSize: "10px",
    fontWeight: 700,
    padding: "3px 9px",
    borderRadius: "100px",
    whiteSpace: "nowrap",
    background: inProgress ? "#DBEAFE" : "#D1FAE5",
    color: inProgress ? "#1E40AF" : "#065F46",
  }),

  // Tool chips
  toolsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },
  toolChip: (color) => ({
    fontSize: "10px",
    fontWeight: 700,
    padding: "3px 9px",
    borderRadius: "100px",
    border: `1.5px solid ${color}55`,
    color: color,
    background: `${color}11`,
    whiteSpace: "nowrap",
  }),

  // Hubs
  hubsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },
  hubChip: {
    fontSize: "10px",
    padding: "3px 8px",
    borderRadius: "4px",
    background: "#FFF3EE",
    color: "#C05621",
    fontWeight: 600,
    border: "1px solid #FED7AA",
  },

  // Highlights
  highlightList: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  highlightItem: {
    fontSize: "0.8rem",
    color: "#4B5563",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  highlightDot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#2563EB",
    flexShrink: 0,
  },

  // Links
  linkBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.83rem",
    fontWeight: 700,
    color: "#2563EB",
    textDecoration: "none",
    marginTop: "auto",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0,
  },
  linkBtnDark: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "white",
    background: "#0F1117",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    alignSelf: "flex-start",
    marginTop: "4px",
  },

  dividerLabel: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    margin: "40px 0 20px",
  },
  dividerText: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    whiteSpace: "nowrap",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "#E8E6E0",
  },
};

// ── Icons ─────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 7h10M7 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path
      d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8M8 1h4m0 0v4m0-4L5.5 7.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Small components ──────────────────────────────────────────────────────────

const TOOL_COLORS = {
  HubSpot: "#FF7A59",
  "Monday.com": "#F59E0B",
  "Google Sheets": "#0F9D58",
  R: "#276DC3",
  Statistica: "#7A4E9D",
  Excel: "#217346",
  VBA: "#888888",
  Discord: "#5865F2",
  "Mimu Bot": "#F472B6",
  Webhooks: "#6B7280",
  n8n: "#EA4B71",
  Python: "#3776AB",
};

function ToolChips({ tools }) {
  return (
    <div style={S.toolsRow}>
      {tools.map((t) => (
        <span key={t} style={S.toolChip(TOOL_COLORS[t] || "#6B7280")}>
          {t}
        </span>
      ))}
    </div>
  );
}

function StatusBadge({ status }) {
  const ip = status === "In Progress";
  return (
    <span style={S.badge(ip)}>{ip ? "⚡ In Progress" : "✓ Complete"}</span>
  );
}

function DividerLabel({ text }) {
  return (
    <div style={S.dividerLabel}>
      <span style={S.dividerText}>{text}</span>
      <div style={S.dividerLine} />
    </div>
  );
}

// ── Featured card ─────────────────────────────────────────────────────────────

function FeaturedCard({ project }) {
  const embedUrl = `https://docs.google.com/document/d/${project.docEmbedId}/preview`;
  return (
    <div style={S.featuredCard}>
      {/* Left: content */}
      <div style={S.featuredContent}>
        <div style={S.cardTop}>
          <span style={S.cardCategory}>{project.category}</span>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <div style={S.cardTitle}>{project.title}</div>
          <div style={{ ...S.cardSubtitle, marginTop: "6px" }}>
            {project.subtitle}
          </div>
        </div>

        <p style={S.cardDesc}>{project.description}</p>

        {project.hubs?.length > 0 && (
          <div style={S.hubsRow}>
            {project.hubs.map((h) => (
              <span key={h} style={S.hubChip}>
                {h}
              </span>
            ))}
          </div>
        )}

        <ToolChips tools={project.tools} />

        {project.highlights?.length > 0 && (
          <div style={S.highlightList}>
            {project.highlights.map((h) => (
              <div key={h} style={S.highlightItem}>
                <span style={S.highlightDot} />
                {h}
              </div>
            ))}
          </div>
        )}

        <a
          href={project.docLink}
          target="_blank"
          rel="noopener noreferrer"
          style={S.linkBtnDark}
        >
          View Documentation <ExternalIcon />
        </a>
      </div>

      {/* Right: Google Doc preview */}
      <div style={S.featuredPreview}>
        <iframe
          src={embedUrl}
          style={S.iframeEl}
          title="Portfolio Documentation Preview"
        />
        <div style={S.iframeOverlay}>
          <a
            href={project.docLink}
            target="_blank"
            rel="noopener noreferrer"
            style={S.linkBtnDark}
          >
            Open Full Document <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Standard card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div style={S.card}>
      <div style={S.cardTop}>
        <span style={S.cardCategory}>{project.category}</span>
        <StatusBadge status={project.status} />
      </div>

      <div>
        <div style={S.cardTitle}>{project.title}</div>
        <div style={S.cardSubtitle}>{project.subtitle}</div>
      </div>

      <p style={S.cardDesc}>{project.description}</p>

      {project.contributions && (
        <p style={S.cardContributions}>My role: {project.contributions}</p>
      )}

      {project.highlights?.length > 0 && (
        <div style={S.highlightList}>
          {project.highlights.map((h) => (
            <div key={h} style={S.highlightItem}>
              <span style={S.highlightDot} />
              {h}
            </div>
          ))}
        </div>
      )}

      <ToolChips tools={project.tools} />

      {project.docLink && (
        <a
          href={project.docLink}
          target="_blank"
          rel="noopener noreferrer"
          style={S.linkBtn}
        >
          {project.linkLabel || "View Project"} <ArrowIcon />
        </a>
      )}
    </div>
  );
}

// ── Portfolio section ─────────────────────────────────────────────────────────

class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { theme } = this.props;

    const featured = portfolioProjects.find((p) => p.featured);
    const rest = portfolioProjects.filter((p) => !p.featured);

    return (
      <div style={S.sectionWrap}>
        <Fade bottom duration={1500} distance="30px">
          {/* Featured */}
          {featured && (
            <>
              <DividerLabel text="Featured" />
              <div style={S.grid}>
                <FeaturedCard project={featured} />
              </div>
            </>
          )}

          {/* All Projects */}
          {rest.length > 0 && (
            <>
              <DividerLabel text="All Projects" />
              <div style={S.grid}>
                {rest.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </>
          )}
        </Fade>
      </div>
    );
  }
}

// ── Main Projects page ────────────────────────────────────────────────────────

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* ── Existing page header ── */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* ── Portfolio Projects (NEW — sits above GitHub repos) ── */}
        <PortfolioSection theme={theme} />

        {/* ── Existing GitHub repo cards ── */}
        {/* <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div> */}

        {/* <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        /> */}

        {/* ── Existing Publications ── */}
        {/* {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null} */}

        {/* <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
