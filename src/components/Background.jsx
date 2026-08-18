const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#0a0a0f]" />

    <div
      className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, rgba(0,255,240,0.25) 0%, transparent 70%)' }}
    />
    <div
      className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)' }}
    />

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 240, 0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

export default Background;
