import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from '@phosphor-icons/react';

const EMAIL = 'sumitmpatil19@gmail.com';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable over plain HTTP or without permission.
      // Leaving the label untouched is better than a false confirmation.
    }
  };

  return (
    <section id="home" className="flex min-h-[100dvh] items-center pb-16 pt-28">
      <div className="mx-auto w-full max-w-content px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow entrance">
              Penetration tester &amp; security analyst
            </p>

            <h1 className="entrance entrance-d1 mt-6 font-heading text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              Defence,
              <br />
              reimagined.
            </h1>

            <p className="entrance entrance-d2 mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              I'm Sumit Bide. I assess networks, applications and
              infrastructure, then report what I find in terms an engineering
              team can act on.
            </p>

            <div className="entrance entrance-d3 mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-primary group"
              >
                {copied ? 'Copied' : 'Copy email'}
                <span className="icon-island" aria-hidden="true">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </span>
              </button>
              <a href="#work" className="btn btn-glass group">
                View work
                <span className="icon-island" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>

          <div className="entrance entrance-d2 lg:col-span-5 lg:justify-self-end">
            <div className="shell glass w-full max-w-sm">
              <div className="shell-core overflow-hidden">
                <img
                  src="/portrait.png"
                  alt="Sumit Bide, penetration tester and security analyst"
                  width="300"
                  height="400"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="flex items-center justify-between border-t border-line px-5 py-4">
                  <span className="font-mono text-xs text-muted">
                    Sumit Bide
                  </span>
                  <span className="font-mono text-xs text-muted">
                    @SERP3N7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;