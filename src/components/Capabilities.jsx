/**
 * Capability listing.
 *
 * Replaces the previous interactive terminal. The old component dressed a
 * static data block as a fake operating-system window (traffic lights, a
 * title bar, canned command responses) which read as decoration rather than
 * content. This section keeps the monospace register that made it feel like
 * an engineer's site but renders real, informative data in a plain listing,
 * set inside the same machined shell used across the page.
 */

const CAPABILITIES = [
  {
    group: 'Red Team',
    items: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP', 'Social engineering'],
  },
  {
    group: 'Blue Team',
    items: ['Linux hardening', 'Splunk SIEM', 'Docker', 'UNRAID', 'Bash', 'Network security'],
  },
];

const Capabilities = () => (
  <section id="capabilities" className="py-24 md:py-32">
    <div className="mx-auto max-w-content px-4 md:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-4xl">
            What I work with
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            The offensive and defensive tooling I reach for, split by the side
            of the assessment it serves.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="shell">
            <div className="shell-core overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-mono text-xs text-muted">
                  capabilities.ts
                </span>
                <span className="font-mono text-xs text-muted">tools</span>
              </div>

              <dl className="divide-y divide-line">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap.group}
                    className="grid grid-cols-1 gap-2 px-5 py-6 sm:grid-cols-12 sm:gap-6"
                  >
                    <dt className="font-mono text-sm font-bold sm:col-span-4">
                      {cap.group}
                    </dt>
                    <dd className="flex flex-wrap gap-x-3 gap-y-2 sm:col-span-8">
                      {cap.items.map((item) => (
                        <span key={item} className="font-mono text-sm text-muted">
                          {item}
                          <span aria-hidden="true" className="ml-3 text-line">
                            /
                          </span>
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Capabilities;