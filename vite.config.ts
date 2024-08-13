import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      manifest: {
        "theme_color": "#1B53BC",
        "background_color": "#ffffff",
        "icons": [
          {
            "src": "assets/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "assets/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "orientation": "any",
        "display": "standalone",
        "dir": "ltr",
        "lang": "ru-RU",
        "name": "UMS Calc",
        "short_name": "UMS Calc",
        "description": "Калькулятор металлов",
        "start_url": "/",
        "scope": "/",
        "screenshots": [
          {
            "src": "assets/screen1.png",
            "sizes": "640x486",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Desktop Widgets"
          },
          {
            "src": "assets/screen2.png",
            "sizes": "360x570",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Mobile Widgets"
          }
        ]
      },
      includeAssets: ["**/*.{png}"],
    }),
  ],
})
