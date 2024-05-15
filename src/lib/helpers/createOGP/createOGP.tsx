import React from 'react'
import satori from 'satori'
import sharp from 'sharp'
import fs from 'fs'

type Props = {
  title: string
  avatar: string
  author: string
}

export const createOGP = async ({
  title,
  avatar,
  author,
}: Props): Promise<Buffer> => {
  const font = fs.readFileSync('./public/fonts/BIZUDGothic-Bold.ttf')
  const svg = await satori(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'rgb(55,65,81)',
        fontWeight: 600,
        padding: 48,
        border: '48px solid rgb(31,41,55)',
        background:
          'radial-gradient(77.73% 77.73% at 98.52% 96.25%, #F98BDA 0%, rgba(128, 76, 239, 0.29) 50.52%, rgba(91, 216, 216, 0) 100%), radial-gradient(141.73% 105.23% at 50% -7.16%, #E1F8FF 0%, rgba(160, 198, 255, 0) 50.73%, rgba(162, 147, 255, 0) 100%), radial-gradient(112.27% 48.54% at 1.59% 50%, rgba(255, 130, 227, 0.5) 0%, rgba(255, 123, 234, 0.095) 53.91%, rgba(254, 216, 255, 0) 100%), linear-gradient(153.07deg, #8177F3 6.37%, rgba(255, 230, 166, 0) 83.82%)',
        backgroundBlendMode:
          'multiply, color-dodge, lighten, screen, luminosity, overlay',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: 64,
          maxWidth: 1000,
          textShadow: '3px 3px 0 #3d3d3d',
          lineHeight: 1.5,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            color: '#d1d5db',
            fontSize: 48,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={avatar}
            alt=""
            width={48}
            height={48}
            style={{ borderRadius: 9999, marginRight: 24 }}
          />
          {author}
        </div>
        <img
          src="https://nits-tips.blog/favicon@3x.png"
          alt=""
          width={80}
          height={80}
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'BIZUDGothic',
          data: font,
          style: 'normal',
        },
      ],
    },
  )

  const buffer = await sharp(Buffer.from(svg)).png().toBuffer()
  return buffer
}
