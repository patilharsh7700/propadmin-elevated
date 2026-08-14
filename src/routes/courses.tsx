import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookMarked,
  Bookmark,
  Download,
  PlayCircle,
  Clock,
  Layers,
} from "lucide-react";

import instructorImage from "@/assets/instructor.jpg";
import academyImage from "@/assets/academy.jpg";
import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";
import { courses, curriculum } from "@/data/site";

const title = "Property Management Courses & Certification | PropAdmin Academy";
const description =
  "Structured property management courses: foundation, society governance, accounting, facility management, leadership and legal awareness — with certification.";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const featured = courses[0]!;

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="A structured path from foundation to certification"
        description="Six programmes covering the full competency map of a professional property manager."
      >
        <CTA to="/contact" variant="gold">
          Enquire about enrolment
        </CTA>
        <CTA to="/academy" variant="glass">
          About the academy
        </CTA>
      </PageHero>

      {/* Continue learning / featured course */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <Reveal>
            <article className="border-border/70 overflow-hidden rounded-[2rem] border">
              <div className="relative">
                <img
                  src={academyImage}
                  alt="Preview of the Property Management Foundation course"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent, oklch(0.17 0.05 262 / 0.75))" }}
                />
                <button
                  type="button"
                  className="glass-dark text-navy-foreground absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-110"
                  aria-label="Play course preview"
                >
                  <PlayCircle className="h-8 w-8" />
                </button>
                <span className="bg-gold text-gold-foreground absolute top-5 left-5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                  Continue learning
                </span>
              </div>
              <div className="p-8">
                <h2 className="text-navy text-2xl font-semibold">{featured.title}</h2>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{featured.summary}</p>

                <div className="mt-6">
                  <div className="text-navy flex items-center justify-between text-xs font-semibold">
                    <span>Course completion</span>
                    <span>{featured.progress}%</span>
                  </div>
                  <div className="bg-muted mt-2 h-2.5 w-full overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${featured.progress}%`, background: "var(--gradient-emerald)" }}
                    />
                  </div>
                </div>

                <dl className="mt-7 grid grid-cols-3 gap-4 text-center">
                  {[
                    { icon: Layers, value: `${featured.chapters}`, label: "Chapters" },
                    { icon: BookMarked, value: `${featured.lessons}`, label: "Lessons" },
                    { icon: Clock, value: featured.duration, label: "Duration" },
                  ].map((item) => (
                    <div key={item.label} className="bg-sand rounded-2xl p-4">
                      <item.icon className="text-emerald mx-auto h-4 w-4" aria-hidden />
                      <dt className="text-navy font-display mt-2 text-lg font-semibold">{item.value}</dt>
                      <dd className="text-muted-foreground text-xs">{item.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap gap-3">
                  <CTA variant="navy">Continue learning</CTA>
                  <CTA variant="outline">
                    <Download className="h-4 w-4" aria-hidden />
                    Download notes
                  </CTA>
                  <CTA variant="outline">
                    <Bookmark className="h-4 w-4" aria-hidden />
                    Bookmark
                  </CTA>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-emerald text-[11px] font-semibold tracking-[0.24em] uppercase">
                Curriculum
              </p>
              <h3 className="text-navy mt-3 text-xl font-semibold">{featured.title}</h3>
              <ol className="mt-6 space-y-4">
                {curriculum.map((chapter, index) => (
                  <li key={chapter.chapter} className="border-border/70 border-b pb-4 last:border-0">
                    <p className="text-navy text-sm font-semibold">{chapter.chapter}</p>
                    <ul className="text-muted-foreground mt-2 space-y-1.5 text-xs">
                      {chapter.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-center gap-2">
                          <span
                            className={
                              index < 5 ? "bg-emerald h-1.5 w-1.5 rounded-full" : "bg-border h-1.5 w-1.5 rounded-full"
                            }
                            aria-hidden
                          />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <div className="bg-sand mt-6 flex items-center gap-4 rounded-2xl p-5">
                <img
                  src={instructorImage}
                  alt="Course instructor"
                  width={912}
                  height={1104}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-navy text-sm font-semibold">Lead Instructor</p>
                  <p className="text-muted-foreground text-xs">
                    22+ years in property operations, governance and compliance
                  </p>
                </div>
              </div>
              <p className="text-navy mt-6 flex items-center gap-2 text-xs font-semibold">
                <Award className="text-gold h-4 w-4" aria-hidden />
                Certificate issued on completion of the final assessment
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Catalogue" title="All programmes" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal as="article" key={course.slug} delay={(index % 3) * 90}>
              <div className="lift flex h-full flex-col rounded-3xl bg-card p-7">
                <span className="bg-navy/6 text-navy w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                  {course.level}
                </span>
                <h3 className="text-navy mt-5 text-lg font-semibold">{course.title}</h3>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {course.summary}
                </p>
                <div className="text-muted-foreground mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  <span>{course.chapters} chapters</span>
                  <span>{course.lessons} lessons</span>
                  <span>{course.duration}</span>
                </div>
                <div className="bg-muted mt-5 h-2 w-full overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${course.progress}%`, background: "var(--gradient-gold)" }}
                  />
                </div>
                <p className="text-muted-foreground mt-2 text-[11px]">
                  {course.progress > 0 ? `${course.progress}% complete` : "Not started"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCTA
        title="Ready to certify your property management skills?"
        description="Tell us your role and experience and we'll recommend the right starting programme."
      />
    </>
  );
}