import { useCallback, useEffect, useState } from 'react'

export const MOVES = [
  { id: 'wiggle', label: '흔들기', emoji: '〰️', key: '1' },
  { id: 'jump', label: '점프', emoji: '⤴️', key: '2' },
  { id: 'spin', label: '회전', emoji: '🔄', key: '3' },
  { id: 'bounce', label: '통통', emoji: '🫧', key: '4' },
  { id: 'party', label: '파티', emoji: '🎉', key: '5' },
]

export const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1, label: '보통' },
  { value: 1.6, label: '빠르게' },
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function useAnimation() {
  // 움직임 줄이기 설정을 켠 사용자에게는 정지 상태로 시작
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [move, setMove] = useState('wiggle')
  const [speedIndex, setSpeedIndex] = useState(1)

  const toggle = useCallback(() => setIsPlaying((p) => !p), [])

  const changeSpeed = useCallback((delta) => {
    setSpeedIndex((i) => Math.min(SPEEDS.length - 1, Math.max(0, i + delta)))
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const tag = e.target?.tagName
      // 버튼에 포커스가 있으면 스페이스는 버튼 자체 동작에 맡김
      if (e.code === 'Space' && tag !== 'BUTTON') {
        e.preventDefault()
        toggle()
        return
      }
      const found = MOVES.find((m) => m.key === e.key)
      if (found) {
        setMove(found.id)
        setIsPlaying(true)
        return
      }
      if (e.key === 'ArrowUp' || e.key === '+') changeSpeed(1)
      if (e.key === 'ArrowDown' || e.key === '-') changeSpeed(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle, changeSpeed])

  return {
    isPlaying,
    toggle,
    move,
    setMove: (id) => {
      setMove(id)
      setIsPlaying(true)
    },
    speedIndex,
    speed: SPEEDS[speedIndex],
    setSpeedIndex,
  }
}
