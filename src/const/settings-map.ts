import type { OBSRequestTypes } from 'obs-websocket-js';

const PresetSceneEnum = {
  GENSHIN: 'Genshin',
  ZENLESS_ZONE_ZERO: 'Zenless Zone Zero',
  HEAVEN_BURNS_RED: 'Heaven Burns Red',
} as const;
type PresetScene = (typeof PresetSceneEnum)[keyof typeof PresetSceneEnum];

export const SceneSettings:Record<PresetScene, OBSRequestTypes['SetVideoSettings']> = {
  [PresetSceneEnum.GENSHIN]: {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
  [PresetSceneEnum.ZENLESS_ZONE_ZERO]: {
    baseWidth: 1920,
    baseHeight: 1080,
    outputWidth: 1920,
    outputHeight: 1080,
  },
  [PresetSceneEnum.HEAVEN_BURNS_RED]: {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
};

export const SceneRecordDirectory:Record<PresetScene, string> = {
  [PresetSceneEnum.GENSHIN]: 'Genshin Impact',
  [PresetSceneEnum.ZENLESS_ZONE_ZERO]: 'Zenless Zone Zero',
  [PresetSceneEnum.HEAVEN_BURNS_RED]: 'Heaven Burns Red',
};
