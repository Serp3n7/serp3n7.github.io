const QuoteSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.03] to-transparent" />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
      style={{
        background: 'radial-gradient(circle, rgba(0,255,240,0.4) 0%, transparent 70%)',
      }}
    />
    <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
      <span className="text-6xl md:text-8xl font-mono text-cyan-400/20 select-none leading-none">
        &ldquo;
      </span>
      <blockquote className="text-2xl md:text-4xl font-bold leading-tight -mt-6 md:-mt-8">
        The only secure system is the one you&apos;ve{' '}
        <span className="text-gradient">tested yourself</span>
      </blockquote>
      <p className="mt-6 text-sm font-mono text-white/30 tracking-wider">
        &mdash; Sumit Bide, @SERP3N7
      </p>
      <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto" />
    </div>
  </section>
);

export default QuoteSection;
