import type { ReactNode } from "react";
import communityIllustration from "../../assets/undraw-community.svg";
import collaborationIllustration from "../../assets/undraw-collaboration.svg";
import contactIllustration from "../../assets/undraw-contact.svg";
import joinIllustration from "../../assets/undraw-join.svg";
import { StaggerItem, VisualReveal } from "../ui/Motion";

const illustrations = [communityIllustration, collaborationIllustration, joinIllustration, contactIllustration];

export function WorkCard({ title, copy, icon }: { title: string; copy: string; icon: string }) {
  return <StaggerItem><article className="info-card"><span className="card-icon">{icon}</span><h3 className="card-title">{title}</h3><p className="card-copy">{copy}</p></article></StaggerItem>;
}

export function HomeIllustration({ index, alt }: { index: number; alt: string }) {
  return <VisualReveal className="home-section-visual"><img src={illustrations[index % illustrations.length].src} alt={alt} /></VisualReveal>;
}

export function TagGroup({ label, children }: { label: string; children: ReactNode }) {
  return <div className="stack"><p className="eyebrow">{label}</p><div className="tag-list">{children}</div></div>;
}
