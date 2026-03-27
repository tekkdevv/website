export type ShowcaseProject = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  accent: string;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 1,
    title: "KYMA",
    subtitle: "AI Agency",
    image: "/images/p1.svg",
    description:
      "A bold AI agency showcase built to feel high-trust, sharp, and conversion focused from the first fold.",
    accent: "#d8ff3e",
  },
  {
    id: 2,
    title: "Mugen",
    subtitle: "Design Studio",
    image: "/images/p2.svg",
    description:
      "An editorial studio portfolio with oversized typography, strong contrast, and cinematic framing.",
    accent: "#f2f0eb",
  },
  {
    id: 3,
    title: "Essentia",
    subtitle: "Ecommerce",
    image: "/images/p3.svg",
    description:
      "A premium skincare storefront designed around product clarity, softness, and elegant purchase cues.",
    accent: "#d9e3cf",
  },
  {
    id: 4,
    title: "Axiom",
    subtitle: "Performance Brand",
    image: "/images/p4.svg",
    description:
      "A dramatic commerce experience for a performance brand with high-contrast visuals and strong hero storytelling.",
    accent: "#c29a75",
  },
];

export function getShowcaseProjectById(id: string) {
  return showcaseProjects.find((project) => String(project.id) === id);
}
