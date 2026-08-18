import { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'SERP3N7_OS v3.0 INITIALIZED' },
    { type: 'success', text: 'ACCESS GRANTED' },
    { type: 'info', text: "TYPE 'help' FOR COMMANDS" },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter' || !input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let response;

    switch (cmd) {
      case 'help':
        response = { type: 'info', text: 'COMMANDS: whoami | scan | secret | clear' };
        break;
      case 'whoami':
        response = { type: 'success', text: 'SUMIT BIDE // CYBERSECURITY ANALYST & PENETRATION TESTER' };
        break;
      case 'scan':
        response = { type: 'warning', text: 'SCANNING... NO VULNERABILITIES DETECTED' };
        break;
      case 'secret':
        response = { type: 'success', text: 'FLAG{NEO_BRUTAL_H4CK3R_2025}' };
        break;
      case 'clear':
        setOutput([]);
        setInput('');
        return;
      default:
        response = { type: 'error', text: `UNKNOWN COMMAND: '${cmd}'` };
    }

    setOutput((prev) => [...prev, { type: 'input', text: `> ${cmd}` }, response]);
    setInput('');
  };

  const colorMap = {
    error: 'text-[#FF3864]',
    success: 'text-[#39FF14]',
    warning: 'text-[#00FFF0]',
    info: 'text-[#00B4FF]',
    input: 'text-white/50',
    system: 'text-[#00FFF0]/50',
  };

  return (
    <div className="bg-[#0a0a0f] border-[3px] border-black overflow-hidden" style={{ boxShadow: '6px 6px 0 0 #000' }}>
      <div className="flex items-center gap-2 px-5 py-3 bg-black border-b-[3px] border-black">
        <div className="w-3 h-3 bg-[#FF3864] border border-black" />
        <div className="w-3 h-3 bg-[#00FFF0] border border-black" />
        <div className="w-3 h-3 bg-[#39FF14] border border-black" />
        <span className="ml-3 text-xs font-mono text-[#00FFF0] font-bold tracking-wider uppercase">
          SERP3N7_TERMINAL
        </span>
      </div>

      <div className="p-5 space-y-1.5 font-mono text-sm bg-[#0a0a0f]">
        <div className="h-40 overflow-y-auto space-y-1.5">
          {output.map((line, i) => (
            <div key={i} className={`font-bold ${colorMap[line.type] || 'text-white/50'}`}>
              {line.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="flex items-center gap-2 pt-3 border-t-[3px] border-black bg-[#0a0a0f]">
          <span className="text-[#39FF14] font-bold">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono font-bold text-[#39FF14] placeholder:text-[#39FF14]/30"
            placeholder="TYPE COMMAND..."
          />
          <span className="w-2.5 h-5 bg-[#39FF14] animate-terminal-blink" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
