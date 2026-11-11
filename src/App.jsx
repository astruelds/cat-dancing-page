import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { MOVES, useAnimation } from './hooks/useAnimation'

export default function App() {
  const { isPlaying, toggle, move, setMove, speedIndex, speed, setSpeedIndex } = useAnimation()
  const moveLabel = MOVES.find((m) => m.id === move)?.label

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} move={move} speed={speed.value} onToggle={toggle} />
      <p className="status" role="status" aria-live="polite">
        {isPlaying ? `${moveLabel} 춤 중 · ${speed.label}` : '쉬는 중'}
      </p>
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        move={move}
        onMoveChange={setMove}
        speedIndex={speedIndex}
        onSpeedChange={setSpeedIndex}
      />
    </Layout>
  )
}
