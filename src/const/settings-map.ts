import type { OBSRequestTypes } from "obs-websocket-js";

export const SceneSettings:Record<string, OBSRequestTypes['SetVideoSettings']> = {
  Genshin: {
    baseWidth: 1920,
    baseHeight: 1200,
  },
  'Zenless Zen Zero': {
    baseWidth: 1920,
    baseHeight: 1080,
  },
};
