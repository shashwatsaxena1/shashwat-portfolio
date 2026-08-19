"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";

import { AnimatedBackground } from "@/components/effects/animated-background";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  about,
  achievements,
  certifications,
  contact,
  designSystem,
  education,
  experience,
  footer,
  hero,
  projects,
  siteConfig,
  skills
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    address: siteConfig.location,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social).filter(Boolean)
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function PortfolioPage() {
  return (
    <>
      <JsonLd />
      <AnimatedBackground />
      <CustomCursor />
      <Header />
      <main id="home" className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25]);

  const positions = useMemo(
    () => [
      "left-[6%] top-[20%]",
      "right-[8%] top-[22%]",
      "left-[16%] bottom-[16%]",
      "right-[18%] bottom-[18%]",
      "left-[48%] top-[12%]",
      "right-[38%] bottom-[8%]",
      "left-[2%] top-[56%]",
      "right-[4%] top-[58%]"
    ],
    []
  );

  return (
    <section className="relative flex min-h-screen items-center px-4 pb-16 pt-32 md:pt-36">
      {hero.scatteredWords.map((word, index) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, scale: 0.85, rotate: index % 2 ? 8 : -8 }}
          animate={{ opacity: 0.55, scale: 1, rotate: index % 2 ? -4 : 4 }}
          transition={{ duration: 0.9, delay: 0.15 + index * 0.06, repeat: Infinity, repeatType: "mirror", repeatDelay: 4 }}
          className={cn(
            "pointer-events-none absolute hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-xl md:block",
            positions[index]
          )}
        >
          {word}
        </motion.span>
      ))}

      <motion.div style={{ y, opacity }} className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={reveal} className="flex flex-wrap items-center gap-3">
            <Badge variant="glass" className="uppercase tracking-[0.28em] text-muted-foreground">
              {hero.eyebrow}
            </Badge>
            <Badge variant="glass" className="gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              {siteConfig.availability}
            </Badge>
          </motion.div>

          <motion.div variants={reveal} className="space-y-5">
            <p className="font-display text-sm font-bold uppercase tracking-[0.46em] text-muted-foreground">Hi, I am {siteConfig.name}</p>
            <h1 className="font-display text-5xl font-black tracking-[-0.07em] text-balance md:text-7xl lg:text-8xl">
              {hero.headline.split(" ").slice(0, 3).join(" ")} <span className="gradient-text">{hero.headline.split(" ").slice(3, 6).join(" ")}</span>{" "}
              {hero.headline.split(" ").slice(6).join(" ")}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-xl">{hero.description}</p>
          </motion.div>

          <motion.div variants={reveal} className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">
                {hero.primaryCta} <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="premium">
              <Link href="#contact">
                {hero.secondaryCta} <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={siteConfig.resumeUrl} target="_blank">
                Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={reveal} className="grid gap-3 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <Card key={stat.label} className="glass-panel rounded-3xl">
                <CardContent className="p-5">
                  <div className="font-display text-3xl font-black">{stat.value}</div>
                  <div className="mt-1 text-sm font-bold">{stat.label}</div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/20 via-signal-blue/10 to-accent/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2.6rem] p-4">
            <div className="rounded-[2rem] border border-white/10 bg-background/70 p-4 dark:bg-black/20">
              <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.32em] text-muted-foreground">Developer Card</p>
                  <h2 className="mt-1 font-display text-2xl font-black">{siteConfig.fullName}</h2>
                </div>
                <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">ACTIVE</div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-muted">
                <Image src={siteConfig.profileImage} alt={`${siteConfig.fullName} profile placeholder`} fill priority sizes="(max-width: 768px) 90vw, 470px" className="object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <InfoPill label="Location" value={siteConfig.location} icon={<MapPin className="h-4 w-4" />} />
                <InfoPill label="Timezone" value={siteConfig.timezone} icon={<Sparkles className="h-4 w-4" />} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function InfoPill({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/45 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{icon}{label}</div>
      <div className="font-display text-lg font-bold">{value}</div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ About" title={about.title} description="A premium portfolio should show personality, engineering direction, and product clarity without becoming noisy." />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <motion.p key={paragraph} variants={reveal} className="text-lg leading-9 text-muted-foreground">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="grid gap-4">
            {about.focusCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={reveal}>
                  <Card className="glass-panel group overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-primary/30">
                    <CardContent className="flex gap-5 p-6">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-black">{item.title}</h3>
                        <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ Skills" title="A practical stack for frontend, cloud, full-stack, and AI/ML internship goals." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.04 }} viewport={{ once: true }}>
                <Card className="glass-panel h-full overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-display text-sm font-bold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-black">{group.category}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={skill} variant="glass" className="font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-padding px-4">
      <div className="container">
        <SectionHeading
          eyebrow="/ Featured Work"
          title="Project stories that show UI craft, system thinking, and growth direction."
          description="These are editable placeholders based on your current project direction. Add live links, GitHub links, screenshots, and measurable results when ready."
        />
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.06 }} viewport={{ once: true, margin: "-120px" }}>
              <Card className="glass-panel group overflow-hidden rounded-[2rem]">
                <CardContent className="grid gap-8 p-6 md:grid-cols-[0.78fr_1.22fr] md:p-8">
                  <div className="relative min-h-[260px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-gradient-to-br from-primary/15 via-signal-blue/15 to-accent/15 p-6">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <Badge variant="glass">{project.type}</Badge>
                        <span className="font-display text-sm font-black text-muted-foreground">{project.year}</span>
                      </div>
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected project</p>
                        <h3 className="font-display text-3xl font-black tracking-[-0.04em]">{project.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-7">
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{project.status}</Badge>
                        {project.stack.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="glass">{tech}</Badge>
                        ))}
                      </div>
                      <p className="text-lg leading-8 text-muted-foreground">{project.description}</p>
                      <p className="mt-4 rounded-2xl border border-border/60 bg-muted/35 p-4 text-sm leading-7 text-muted-foreground">
                        <strong className="text-foreground">Impact:</strong> {project.impact}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="premium">
                        <Link href={project.links.live} target={project.links.live === "#" ? undefined : "_blank"}>
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={project.links.github} target={project.links.github === "#" ? undefined : "_blank"}>
                          GitHub <Github className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ Experience" title="Experience framed around real product building and competition work." />
        <div className="relative space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%_-_2rem)] before:w-px before:bg-border md:before:left-1/2">
          {experience.map((item, index) => (
            <motion.div key={item.role} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="relative grid gap-6 md:grid-cols-2">
              <div className={cn("ml-12 md:ml-0", index % 2 && "md:col-start-2")}>
                <Card className="glass-panel rounded-3xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge variant="glass">{item.period}</Badge>
                      <Badge variant="secondary">{item.location}</Badge>
                    </div>
                    <h3 className="font-display text-2xl font-black">{item.role}</h3>
                    <p className="mt-1 font-semibold text-primary">{item.company}</p>
                    <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => <Badge key={tech} variant="glass">{tech}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-0 top-7 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background md:left-[calc(50%_-_1rem)]">
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ Education" title="Academic background, coursework, and learning direction." />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {education.map((item) => (
            <Card key={item.institution} className="glass-panel rounded-3xl">
              <CardContent className="p-7">
                <Badge variant="glass">{item.period}</Badge>
                <h3 className="mt-5 font-display text-3xl font-black">{item.degree}</h3>
                <p className="mt-2 text-lg font-semibold text-primary">{item.institution}</p>
                <p className="mt-4 leading-8 text-muted-foreground">{item.details}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.courses.map((course) => <Badge key={course} variant="secondary">{course}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="glass-panel overflow-hidden rounded-3xl">
            <CardContent className="p-7">
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Learning Roadmap</p>
              <div className="mt-6 grid gap-4">
                {["Java + DSA fundamentals", "Cloud + DevOps basics", "Computer networking", "Next.js production projects", "Python + AI/ML foundations"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 font-display text-sm font-black text-primary">{index + 1}</span>
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ Certifications" title="Credential slots ready for your real certificates." />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.div key={certificate.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true }}>
              <Card className="glass-panel h-full rounded-3xl transition hover:-translate-y-1 hover:border-primary/30">
                <CardContent className="p-6">
                  <Badge variant="glass">{certificate.date}</Badge>
                  <h3 className="mt-5 font-display text-2xl font-black">{certificate.name}</h3>
                  <p className="mt-2 font-semibold text-primary">{certificate.issuer}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{certificate.description}</p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href={certificate.link}>Credential <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding px-4">
      <div className="container">
        <SectionHeading eyebrow="/ Achievements" title="Signals that show consistency, curiosity, and engineering intent." />
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={achievement.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} viewport={{ once: true }}>
                <Card className="glass-panel h-full rounded-3xl">
                  <CardContent className="flex gap-5 p-6">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black">{achievement.title}</h3>
                      <p className="mt-2 leading-7 text-muted-foreground">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!accessKey) {
      const name = encodeURIComponent(String(formData.get("name") || "Portfolio visitor"));
      const message = encodeURIComponent(String(formData.get("message") || "Hi, I found your portfolio."));
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${message}`;
      return;
    }

    formData.append("access_key", accessKey);
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding px-4">
      <div className="container">
        <Card className="glass-panel overflow-hidden rounded-[2.4rem]">
          <CardContent className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge variant="glass" className="mb-5 uppercase tracking-[0.28em] text-muted-foreground">/ Contact</Badge>
              <h2 className="font-display text-4xl font-black tracking-[-0.05em] text-balance md:text-6xl">{contact.title}</h2>
              <p className="mt-6 leading-8 text-muted-foreground">{contact.description}</p>
              <div className="mt-7 space-y-3">
                <ContactLink icon={<Mail className="h-4 w-4" />} label={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                <ContactLink icon={<Github className="h-4 w-4" />} label="GitHub" href={siteConfig.social.github} />
                <ContactLink icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" href={siteConfig.social.linkedin} />
              </div>
              <div className="mt-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">Target roles</p>
                <div className="flex flex-wrap gap-2">
                  {contact.preferredRoles.map((role) => <Badge key={role} variant="secondary">{role}</Badge>)}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.7rem] border border-border/60 bg-background/65 p-5 dark:bg-black/15 md:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" placeholder="Internship / project / collaboration" />
              </div>
              <div className="mt-4 space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Tell me what you want to build..." required />
              </div>
              <Button className="mt-5 w-full" size="lg" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
              </Button>
              {status === "success" ? <p className="mt-4 text-sm font-medium text-primary">Message sent successfully.</p> : null}
              {status === "error" ? <p className="mt-4 text-sm font-medium text-destructive">Something went wrong. Use the email link instead.</p> : null}
              {!accessKey ? <p className="mt-4 text-xs leading-5 text-muted-foreground">No Web3Forms key found, so this form opens your email app using mailto. Add a key in .env.local for direct inbox submissions.</p> : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/35 px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
      {icon}
      {label}
      <ArrowUpRight className="ml-auto h-4 w-4" />
    </Link>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10">
      <div className="container">
        <div className="mb-6 overflow-hidden rounded-full border border-white/10 bg-muted/30 py-3">
          <div className="flex w-[200%] animate-marquee gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {[...designSystem.motion, ...designSystem.palette, ...designSystem.motion, ...designSystem.palette].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 rounded-[2rem] border border-border/60 bg-muted/25 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-black">{siteConfig.fullName}</p>
            <p className="mt-2 text-sm text-muted-foreground">{footer.quote}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footer.links.map((link) => (
              <Button key={link.label} asChild variant="premium" size="sm">
                <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
