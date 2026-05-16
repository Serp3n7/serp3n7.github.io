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
    error: 'text-red-400',
    success: 'text-cyan-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400',
    input: 'text-white/50',
    system: 'text-white/30',
  };

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-white/40 font-bold tracking-wider uppercase">
          SERP3N7_TERMINAL
        </span>
      </div>

      <div className="p-5 space-y-1.5 font-mono text-sm">
        <div className="h-40 overflow-y-auto space-y-1.5">
          {output.map((line, i) => (
            <div key={i} className={`font-bold ${colorMap[line.type] || 'text-white/50'}`}>
              {line.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <span className="text-cyan-400 font-bold">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input-glass text-cyan-400 placeholder:text-cyan-400/30"
            placeholder="TYPE COMMAND..."
          />
          <span className="w-2 h-5 bg-cyan-400 animate-terminal-blink" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
