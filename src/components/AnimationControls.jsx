import { MOVES, SPEEDS } from '../hooks/useAnimation'

export default function AnimationControls({
  isPlaying,
  onToggle,
  move,
  onMoveChange,
  speedIndex,
  onSpeedChange,
}) {
  return (
    <section className="controls" aria-label="춤 조절">
      <button
        type="button"
        className={`play-button ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        <span aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
        {isPlaying ? '멈추기' : '춤추기'}
      </button>

      <fieldset className="group">
        <legend>춤 동작</legend>
        <div className="chips">
          {MOVES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`chip ${move === m.id ? 'active' : ''}`}
              aria-pressed={move === m.id}
              onClick={() => onMoveChange(m.id)}
            >
              <span aria-hidden="true">{m.emoji}</span>
              {m.label}
              <kbd aria-hidden="true">{m.key}</kbd>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="group">
        <legend>속도</legend>
        <div className="chips">
          {SPEEDS.map((s, i) => (
            <button
              key={s.value}
              type="button"
              className={`chip ${speedIndex === i ? 'active' : ''}`}
              aria-pressed={speedIndex === i}
              onClick={() => onSpeedChange(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="hint">
        고양이를 탭하거나 <kbd>Space</kbd>로 시작/정지 · <kbd>1</kbd>–<kbd>5</kbd> 동작 ·{' '}
        <kbd>↑</kbd><kbd>↓</kbd> 속도
      </p>
    </section>
  )
}
