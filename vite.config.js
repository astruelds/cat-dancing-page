import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // 빌드 결과물이 상대 경로를 써서 GitHub Pages 하위 경로에서도 동작
  base: './',
  plugins: [react()],
  server: {
    // 기본값은 IPv6(::1)에만 열려 127.0.0.1 접속이 거부될 수 있음 → IPv4로 고정
    host: '127.0.0.1',
    port: 5173,
    // 서버가 뜨면 브라우저 자동 열기
    open: true,
  },
})
