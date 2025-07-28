import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import expressiveCode from 'astro-expressive-code'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeDocument from 'rehype-document'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://frostfoe.netlify.app',
  integrations: [expressiveCode(), mdx(), react(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 1234,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeDocument,
        {
          css: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: 'vitesse-dark',
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkEmoji],
  },
  redirects: {
    // v1.0.0 -> v3.0.0
    '/ctfs/pico22/beginners-compilation':
      '/blog/picoctf-2022-beginners-compilation',
    '/ctfs/pico/beginners-compilation':
      '/blog/picoctf-2022-beginners-compilation',
    '/ctfs/pico22/crypto/basic-mod1':
      '/blog/picoctf-2022-beginners-compilation',
  },
})
