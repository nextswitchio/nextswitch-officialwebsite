import Image from "next/image";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";

export default function InternshipPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <section className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)]">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#00153a] mb-4">
              Next Switch Internship – Cohort 2026
            </h1>
            <p className="text-sm md:text-base text-[#1a2a4d]/80 mb-4">
              At Next Switch Ltd, we do not just offer internships. We develop professionals.
              This cohort is designed for driven individuals interested in both tech and business roles.
            </p>
            <p className="text-sm md:text-base text-[#1a2a4d]/80 mb-6">
              You will work with real teams, on real products, in an environment built to stretch you
              and help you grow.
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] px-4 py-3">
                <CalendarDays className="mt-0.5 h-5 w-5 text-[#006ff5]" />
                <div>
                  <p className="font-semibold text-[#001f3f]">Program window</p>
                  <p className="text-[#1a2a4d]/80">Cohort 2026, multi-month intensive internship.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] px-4 py-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#006ff5]" />
                <div>
                  <p className="font-semibold text-[#001f3f]">Location</p>
                  <p className="text-[#1a2a4d]/80">Hybrid; remote-friendly with selected on-site moments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] px-4 py-3">
                <Clock className="mt-0.5 h-5 w-5 text-[#006ff5]" />
                <div>
                  <p className="font-semibold text-[#001f3f]">Time commitment</p>
                  <p className="text-[#1a2a4d]/80">Structured weekly schedule with dedicated learning time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] px-4 py-3">
                <Users className="mt-0.5 h-5 w-5 text-[#006ff5]" />
                <div>
                  <p className="font-semibold text-[#001f3f]">Tracks</p>
                  <p className="text-[#1a2a4d]/80">Tech roles and business roles, learning side by side.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-3xl border border-[#d4e0ff] bg-[#001f3f] shadow-[0_24px_60px_rgba(0,22,71,0.45)] md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&crop=faces"
              alt="Interns collaborating on a project"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Next Switch Internship
              </p>
              <p className="text-sm md:text-base font-semibold">
                Build portfolio-ready work with support from mentors and a real team.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#001f3f]">
              Who we are looking for
            </h2>
            <p className="text-sm md:text-base text-[#1a2a4d]/80">
              We welcome students, fresh graduates, and early-career professionals who are eager to learn,
              contribute, and grow in a structured tech environment.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-[#1a2a4d]">
              <li>Curious learners who take initiative.</li>
              <li>People comfortable working in teams and giving feedback.</li>
              <li>Those interested in building for the African market and beyond.</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] p-6">
            <h2 className="text-lg md:text-xl font-semibold text-[#001f3f]">
              Tracks available
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="font-semibold text-[#001f3f] mb-1">Tech roles</p>
                <ul className="list-disc list-inside space-y-1 text-[#1a2a4d]">
                  <li>Frontend engineering</li>
                  <li>Backend or full‑stack engineering</li>
                  <li>Product design and UX</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#001f3f] mb-1">Business roles</p>
                <ul className="list-disc list-inside space-y-1 text-[#1a2a4d]">
                  <li>Product strategy and operations</li>
                  <li>Growth and marketing</li>
                  <li>Business analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 rounded-2xl border border-[#d4e0ff] bg-[#f5f7ff] p-6 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-[#001f3f]">
            What you will do
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-[#1a2a4d]">
            <li>Join product squads working on active internal or client projects.</li>
            <li>Attend weekly learning sessions and office hours with mentors.</li>
            <li>Ship features, documentation, and experiments that go into real products.</li>
            <li>Collaborate with interns from other tracks to deliver end‑to‑end work.</li>
            <li>Graduate with a clearer portfolio and story for your next role.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-[#001f3f]">
            How to apply
          </h2>
          <p className="text-sm md:text-base text-[#1a2a4d]/80">
            To apply, send your CV and portfolio (or links to relevant work) with a short introduction
            about yourself, your preferred track, and what you hope to learn during the cohort.
          </p>
          <p className="text-sm md:text-base font-semibold text-[#001f3f]">
            Send CV + Portfolio to{" "}
            <a
              href="mailto:hr@nextswitch.org"
              className="text-[#006ff5] underline underline-offset-4"
            >
              hr@nextswitch.org
            </a>
          </p>
          <p className="text-xs md:text-sm font-medium text-[#c53030]">
            Limited slots available. Early applications are strongly encouraged.
          </p>
        </section>
      </div>
    </main>
  );
}
