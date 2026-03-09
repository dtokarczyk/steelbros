import fs from "fs";
import path from "path";
import type {
  HomeContent,
  SiloContent,
  LandingContent,
  CaseStudyContent,
  RealizacjeListContent,
  ContactContent,
  ContentType,
} from "./content-types";

const CONTENT_DIR = "_content";

function getContentDir(): string {
  return path.join(process.cwd(), CONTENT_DIR);
}

function resolveMdRefs(obj: unknown, dir: string): unknown {
  if (typeof obj === "string") {
    if (obj.endsWith(".md")) {
      const filePath = path.join(dir, obj);
      try {
        return fs.readFileSync(filePath, "utf-8");
      } catch {
        return obj;
      }
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => resolveMdRefs(item, dir));
  }
  if (obj !== null && typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = resolveMdRefs(value, dir);
    }
    return result;
  }
  return obj;
}

function loadJson<T>(dir: string): T | null {
  const jsonPath = path.join(dir, "content.json");
  try {
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    return resolveMdRefs(parsed, dir) as T;
  } catch {
    return null;
  }
}

export function getContent<T = unknown>(
  type: ContentType,
  slug?: string
): T | null {
  const base = getContentDir();

  let dir: string;
  switch (type) {
    case "home":
      dir = path.join(base, "home");
      break;
    case "silo":
      if (!slug) return null;
      dir = path.join(base, "silos", slug);
      break;
    case "landing":
      if (!slug) return null;
      dir = path.join(base, "landing", slug);
      break;
    case "case-study":
      if (!slug) return null;
      dir = path.join(base, "realizacje", slug);
      break;
    case "realizacje-list":
      dir = path.join(base, "realizacje");
      break;
    case "kontakt":
      dir = path.join(base, "kontakt");
      break;
    default:
      return null;
  }

  return loadJson<T>(dir);
}

export function getHomeContent(): HomeContent | null {
  return getContent<HomeContent>("home");
}

export function getSiloContent(slug: string): SiloContent | null {
  return getContent<SiloContent>("silo", slug);
}

export function getLandingContent(slug: string): LandingContent | null {
  return getContent<LandingContent>("landing", slug);
}

export function getCaseStudyContent(slug: string): CaseStudyContent | null {
  return getContent<CaseStudyContent>("case-study", slug);
}

export function getRealizacjeListContent(): RealizacjeListContent | null {
  return getContent<RealizacjeListContent>("realizacje-list");
}

export function getContactContent(): ContactContent | null {
  return getContent<ContactContent>("kontakt");
}
