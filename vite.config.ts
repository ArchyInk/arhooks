/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import vueJsx from "@vitejs/plugin-vue-jsx";

const path = require('path')

export default defineConfig(({ mode }) => {
  if (mode === 'vue') {
    return {
      root: './vue',
      plugins: [vue(), vueJsx()]
    }
  } else if (mode === 'react') {
    return {
      root: './react',
      plugins: [react()]
    }
  } else if (mode === 'test') {
    return {
      test: {}
    }
  }
})

