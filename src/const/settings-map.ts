import type { OBSRequestTypes } from 'obs-websocket-js';

const PresetSceneEnum = {
  GENSHIN: 'Genshin',
  STAR_RAIL: 'Star Rail',
  ZENLESS_ZONE_ZERO: 'Zenless Zone Zero',
  HEAVEN_BURNS_RED: 'Heaven Burns Red',
  BLUE_ARCHIVE: 'Blue Archive',
  DUET_NIGHT_ABYSS: 'Duet Night Abyss',
  STELLA_SORA: 'Stella Sora',
} as const;
type PresetScene = (typeof PresetSceneEnum)[keyof typeof PresetSceneEnum];

export const SceneSettings:Record<PresetScene, OBSRequestTypes['SetVideoSettings']> = {
  [PresetSceneEnum.GENSHIN]: {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
  [PresetSceneEnum.STAR_RAIL]: {
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
  [PresetSceneEnum.BLUE_ARCHIVE]: {
    baseWidth: 2080,
    baseHeight: 1170,
    outputWidth: 2080,
    outputHeight: 1170,
  },
  [PresetSceneEnum.DUET_NIGHT_ABYSS]: {
    baseWidth: 2080,
    baseHeight: 1170,
    outputWidth: 2080,
    outputHeight: 1170,
  },
  [PresetSceneEnum.STELLA_SORA]: {
    baseWidth: 1920,
    baseHeight: 1200,
    outputWidth: 1920,
    outputHeight: 1200,
  },
};

export const SceneRecordDirectory:Record<PresetScene, string> = {
  [PresetSceneEnum.GENSHIN]: 'Genshin Impact',
  [PresetSceneEnum.STAR_RAIL]: 'Star Rail',
  [PresetSceneEnum.ZENLESS_ZONE_ZERO]: 'Zenless Zone Zero',
  [PresetSceneEnum.HEAVEN_BURNS_RED]: 'Heaven Burns Red',
  [PresetSceneEnum.BLUE_ARCHIVE]: 'Blue Archive',
  [PresetSceneEnum.DUET_NIGHT_ABYSS]: 'Duet Night Abyss',
  [PresetSceneEnum.STELLA_SORA]: 'Stella Sora',
};
