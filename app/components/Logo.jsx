export default function Logo({ className = "", width = "40", height = "40" }) {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="audio-bars" transform="translate(20,30)">
          <rect x="0" y="15" width="8" height="25" rx="4" className="animate-pulse fill-indigo-500" />
          <rect x="12" y="5" width="8" height="45" rx="4" className="animate-pulse fill-purple-500 [animation-delay:150ms]" />
          <rect x="24" y="20" width="8" height="15" rx="4" className="animate-pulse fill-indigo-500 [animation-delay:300ms]" />
          <rect x="36" y="10" width="8" height="35" rx="4" className="animate-pulse fill-purple-500 [animation-delay:450ms]" />
          <rect x="48" y="25" width="8" height="10" rx="4" className="animate-pulse fill-indigo-500 [animation-delay:600ms]" />
        </g>
        
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          strokeWidth="2"
          className="stroke-purple-500/30" 
        />
      </svg>
    );
  }