import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fdf2f8',
            backgroundImage: 'linear-gradient(135deg, #fdf2f8 0%, #e0f2fe 100%)',
          }}
        >
          {/* Heart decoration */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              fontSize: '40px',
              color: '#ec4899',
            }}
          >
            💕
          </div>
          
          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            {/* Names */}
            <div
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                backgroundClip: 'text',
                color: 'transparent',
                textAlign: 'center',
                fontFamily: 'cursive',
                marginBottom: '20px',
              }}
            >
              Eiva & Jorge
            </div>
            
            {/* Date */}
            <div
              style={{
                fontSize: '32px',
                color: '#6b7280',
                textAlign: 'center',
                fontWeight: '500',
                fontFamily: 'sans-serif',
                marginBottom: '30px',
              }}
            >
              14 de Fevereiro de 2026
            </div>
            
            {/* Subtitle */}
            <div
              style={{
                fontSize: '24px',
                color: '#9ca3af',
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: '1.4',
                fontFamily: 'sans-serif',
              }}
            >
              Celebre conosco nosso casamento
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              fontSize: '30px',
              display: 'flex',
              gap: '20px',
            }}
          >
            <span style={{ color: '#ec4899' }}>💍</span>
            <span style={{ color: '#8b5cf6' }}>✨</span>
            <span style={{ color: '#10b981' }}>💐</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('Failed to generate OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}