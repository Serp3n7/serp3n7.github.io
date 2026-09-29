/**
 * Layered arrow mark.
 *
 * Three nested chevron strokes, value-stepped so the layers read as depth
 * at large sizes and stay separable down to 16px favicon scale. Built inline
 * because the mark has to inherit theme colour in both the lockup and the
 * standalone form, and because the standalone form is reused verbatim as the
 * favicon asset.
 */

const LAYERS = [
  { d: 'M6 3 L14 12 L6 21', opacity: 1 },
  { d: 'M14 5.5 L21 12 L14 18.5', opacity: 0.62 },
  { d: 'M21 8.5 L27 12 L21 15.5', opacity: 0.38 },
];

export const Mark = ({ size = 28, className = '', title = 'SERP3N7' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {LAYERS.map((layer, i) => (
      <path
        key={i}
        d={layer.d}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity={layer.opacity}
      />
    ))}
  </svg>
);

/** Header lockup: mark + wordmark. */
export const Logo = ({ className = '' }) => (
  <a
    href="#home"
    className={`inline-flex items-center gap-3 ${className}`}
    aria-label="SERP3N7, home"
  >
    <Mark size={26} />
    <span className="font-heading font-bold text-base tracking-[0.2em]">
      SERP3N7
    </span>
  </a>
);

export default Mark;
