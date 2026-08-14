import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";
import { blogPosts } from "@/data/site";

const title = "Property Management Blog: Society Laws, Compliance & Maintenance";
const description =
  "Practical articles on property management tips, housing society laws, compliance updates, maintenance planning, society accounting and resident engagement.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insight for committees, owners and property professionals"
        description="Written by practitioners who run societies and commercial assets day to day."
      >
        <CTA to="/consultation" variant="gold">
          Ask an expert
        </CTA>
      </PageHero>

      <Section>
        {featured ? (
          <Reveal>
            <article className="surface-navy relative overflow-hidden rounded-[2rem] p-10 lg:p-14">
              <div
                aria-hidden
                className="bg-gold/20 pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full blur-[130px]"
              />
              <p className="text-gold relative text-[11px] font-semibold tracking-[0.24em] uppercase">
                {featured.category}
              </p>
              <h2 className="text-navy-foreground relative mt-5 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-navy-foreground/70 relative mt-5 max-w-2xl text-base leading-relaxed">
                {featured.excerpt}
              </p>
              <p className="text-navy-foreground/55 relative mt-6 text-xs">
                {featured.date} · {featured.read}
              </p>
            </article>
          </Reveal>
        ) : null}

        <div className="mt-14">
          <SectionHeading eyebrow="Latest Articles" title="Recent from the desk" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal as="article" key={post.slug} delay={(index % 3) * 90}>
                <div className="lift border-border/70 flex h-full flex-col rounded-3xl border p-7">
                  <p className="text-emerald text-[11px] font-semibold tracking-[0.22em] uppercase">
                    {post.category}
                  </p>
                  <h3 className="text-navy mt-4 text-lg leading-snug font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-muted-foreground mt-6 flex items-center justify-between text-xs">
                    <span>
                      {post.date} · {post.read}
                    </span>
                    <ArrowRight className="text-emerald h-4 w-4" aria-hidden />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ClosingCTA
        title="Have a question we haven't written about?"
        description="Send it across — our experts answer society and property queries every week."
      />
    </>
  );
}