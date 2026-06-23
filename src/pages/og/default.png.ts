import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const interFont = readFileSync(join(process.cwd(), 'src/assets/fonts/Inter-400.ttf'));

const michromaFont = readFileSync(
  join(process.cwd(), 'node_modules/@fontsource/michroma/files/michroma-latin-400-normal.woff'),
);

export const GET: APIRoute = async () => {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #080c14 0%, #0862a7 100%)',
          padding: '60px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontFamily: 'Michroma',
                fontSize: '64px',
                color: '#f0f4f8',
                marginBottom: '16px',
              },
              children: 'NestWeaver',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontFamily: 'Inter',
                fontSize: '28px',
                color: '#5ed0fe',
                textAlign: 'center',
                maxWidth: '700px',
              },
              children: 'Code intelligence knowledge graph for AI agents',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interFont, weight: 400, style: 'normal' },
        { name: 'Michroma', data: michromaFont, weight: 400, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
