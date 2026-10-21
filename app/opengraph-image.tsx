import { ImageResponse } from 'next/og'

export const alt = 'Andriamasy Eric Mathieu — Lead Developer à Madagascar'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(135deg, #111827 0%, #1e293b 100%)',
          color: '#f9fafb',
          display: 'flex',
          height: '100%',
          padding: '80px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ color: '#60a5fa', fontSize: 30, fontWeight: 600 }}>
            PORTFOLIO
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
            Andriamasy Eric Mathieu
          </div>
          <div style={{ color: '#d1d5db', fontSize: 38 }}>
            Lead Developer · Antananarivo, Madagascar
          </div>
          <div style={{ color: '#93c5fd', fontSize: 28 }}>
            Symfony · Laravel · React · TypeScript
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
