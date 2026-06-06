import { ImageResponse } from 'next/og'

// Default Open Graph / social-share card for the whole site.
// Inherited by every route that doesn't define its own.
export const alt = 'PropertyApp — property management for UK landlords'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0b1220 0%, #15294d 100%)',
          color: '#ffffff',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#3b82f6',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ marginLeft: 20, fontSize: 36, fontWeight: 700 }}>PropertyApp</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 960 }}>
            Property management for UK landlords
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: '#9fb3d1' }}>
            SA105 · CT600 · SA900 · HMO · Renters&apos; Rights Act 2026
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#7f93b3' }}>
          marpropertyinvestments.co.uk
        </div>
      </div>
    ),
    { ...size },
  )
}
