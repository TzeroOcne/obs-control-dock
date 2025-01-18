import type { OBSRequestTypes } from 'obs-websocket-js';

export const SceneSettings:Record<string, OBSRequestTypes['SetVideoSettings']> = {
  Genshin: {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
  'Zenless Zone Zero': {
    baseWidth: 1920,
    baseHeight: 1080,
    outputWidth: 1920,
    outputHeight: 1080,
  },
  'Heaven Burns Red': {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
};
