import Clock from "@/components/Clock";

const highlights = [
  { title: "Lightning Start", copy: "Opinionated Next.js starter with sensible defaults ready for Vercel." },
  { title: "Type Safe", copy: "Strict TypeScript setup keeps you confident as you iterate." },
  { title: "Dark Aesthetic", copy: "Polished UI crafted for modern landing-like greetings." }
];

export default function Home() {
  return (
    <main>
      <section className="card" aria-labelledby="headline">
        <header className="grid">
          <span className="badge">
            <span role="img" aria-label="sparkles">
              ✨
            </span>
            Agentic Mode
          </span>
          <h1 className="headline" id="headline">
            Hi there, <span>we&apos;re live</span>.
          </h1>
          <p className="copy">
            This minimal interface ships with a live clock, curated highlights, and a production-ready
            Next.js configuration. Deploy it to Vercel and iterate instantly.
          </p>
          <div className="actions">
            <a className="button" href="https://nextjs.org" target="_blank" rel="noreferrer">
              Explore Next.js
            </a>
            <a className="button secondary" href="https://vercel.com" target="_blank" rel="noreferrer">
              View Deployment Docs
            </a>
          </div>
        </header>

        <div className="tiles" role="list">
          {highlights.map((item) => (
            <article className="tile" key={item.title} role="listitem">
              <span className="tile-icon">{item.title.slice(0, 1)}</span>
              <div>
                <h2>{item.title}</h2>
                <p className="copy">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <footer>
          <span>Local time: <Clock /></span>
          <span>Ready for `vercel deploy --prod`.</span>
        </footer>
      </section>
    </main>
  );
}
