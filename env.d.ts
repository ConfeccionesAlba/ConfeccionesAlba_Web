/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_IMAGE_URL: string
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
