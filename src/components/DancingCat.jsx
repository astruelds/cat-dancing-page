const NOTES = ['♪', '♫', '♬', '♩']

export default function DancingCat({ isPlaying, move, speed, onToggle }) {
  const beat = `${(0.6 / speed).toFixed(3)}s`

  return (
    <div
      className={`stage ${isPlaying ? 'is-playing' : 'is-paused'} move-${move}`}
      style={{ '--beat': beat }}
    >
      <div className="notes" aria-hidden="true">
        {NOTES.map((n, i) => (
          <span key={i} className={`note note-${i}`}>{n}</span>
        ))}
      </div>

      <button
        type="button"
        className="cat-button"
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
      >
        <div className="cat">
          <svg viewBox="0 0 200 230" className="cat-svg" aria-hidden="true">
            <g className="cat-tail">
              <path d="M148 172 C192 165 198 112 172 96" fill="none" stroke="var(--fur)"
                strokeWidth="14" strokeLinecap="round" />
              <path d="M172 96 C168 92 162 92 160 96" fill="none" stroke="var(--fur-dark)"
                strokeWidth="14" strokeLinecap="round" />
            </g>

            <g className="cat-leg cat-leg-left">
              <ellipse cx="74" cy="208" rx="17" ry="11" fill="var(--fur)" />
              <path d="M66 210 v5 M74 211 v5 M82 210 v5" stroke="var(--fur-dark)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="cat-leg cat-leg-right">
              <ellipse cx="126" cy="208" rx="17" ry="11" fill="var(--fur)" />
              <path d="M118 210 v5 M126 211 v5 M134 210 v5" stroke="var(--fur-dark)" strokeWidth="2" strokeLinecap="round" />
            </g>

            <ellipse cx="100" cy="164" rx="52" ry="46" fill="var(--fur)" />
            <ellipse cx="100" cy="174" rx="30" ry="30" fill="var(--belly)" />
            <path d="M62 140 q8 4 14 0 M124 140 q8 4 14 0" stroke="var(--fur-dark)" strokeWidth="4"
              fill="none" strokeLinecap="round" />

            <g className="cat-arm cat-arm-left">
              <path d="M58 150 C40 140 30 124 32 112" stroke="var(--fur)" strokeWidth="16"
                strokeLinecap="round" fill="none" />
              <circle cx="32" cy="110" r="10" fill="var(--fur)" />
            </g>
            <g className="cat-arm cat-arm-right">
              <path d="M142 150 C160 140 170 124 168 112" stroke="var(--fur)" strokeWidth="16"
                strokeLinecap="round" fill="none" />
              <circle cx="168" cy="110" r="10" fill="var(--fur)" />
            </g>

            <g className="cat-head">
              <g className="cat-ear cat-ear-left">
                <path d="M50 62 L58 12 L90 44 Z" fill="var(--fur)" />
                <path d="M58 54 L62 27 L80 45 Z" fill="var(--pink)" />
              </g>
              <g className="cat-ear cat-ear-right">
                <path d="M150 62 L142 12 L110 44 Z" fill="var(--fur)" />
                <path d="M142 54 L138 27 L120 45 Z" fill="var(--pink)" />
              </g>
              <ellipse cx="100" cy="80" rx="58" ry="50" fill="var(--fur)" />
              <path d="M88 36 q4 10 0 18 M100 34 v20 M112 36 q-4 10 0 18" stroke="var(--fur-dark)"
                strokeWidth="4" fill="none" strokeLinecap="round" />

              <g className="cat-eyes">
                <ellipse cx="78" cy="78" rx="8" ry="11" fill="var(--ink)" />
                <ellipse cx="122" cy="78" rx="8" ry="11" fill="var(--ink)" />
                <circle cx="80.5" cy="74" r="3" fill="#fff" />
                <circle cx="124.5" cy="74" r="3" fill="#fff" />
              </g>

              <ellipse cx="62" cy="96" rx="9" ry="5" fill="var(--pink)" opacity="0.7" />
              <ellipse cx="138" cy="96" rx="9" ry="5" fill="var(--pink)" opacity="0.7" />

              <path d="M95 92 L105 92 L100 98 Z" fill="var(--nose)" />
              <path d="M100 98 Q93 107 86 102 M100 98 Q107 107 114 102" fill="none"
                stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />

              <g stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.55">
                <path d="M54 88 L28 82 M54 94 L28 96" />
                <path d="M146 88 L172 82 M146 94 L172 96" />
              </g>
            </g>
          </svg>
        </div>
      </button>

      <div className="floor-shadow" aria-hidden="true" />
    </div>
  )
}
