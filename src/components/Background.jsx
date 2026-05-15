const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#0a0a0f]" />

    <div
      className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
      style={{
        background: 'radial-gradient(circle, rgba(0,255,240,0.3) 0%, transparent 70%)',
      }}
    />
    <div
      className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full opacity-20 animate-blob2"
      style={{
        background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)',
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 animate-blob3"
      style={{
        background: 'radial-gradient(circle, rgba(255,0,255,0.2) 0%, transparent 70%)',
      }}
    />

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 240, 0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div
      className="absolute inset-0 opacity-[0.02] animate-grid-scroll"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    />
  </div>
);

export default Background;
