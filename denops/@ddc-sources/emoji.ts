import { BaseSource, Item } from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";

import {
  EMOJIS,
  EMOJIS_ALIAS,
} from "https://raw.githubusercontent.com/99x/emojideno/master/src/constants.ts";

type Emojis = {
  [key: string]: string;
};

export type CompletionMetadata = {
  name: string;
  emoji: string;
};

function getEmojis(): CompletionMetadata[] {
  const emojis = Object.entries(EMOJIS as Emojis).map(([key, value]) => ({
    name: key,
    emoji: value,
  }));
  emojis.push(
    ...Object.entries(EMOJIS_ALIAS as Emojis).map(([key, value]) => ({
      name: key,
      emoji: value,
    })),
  );
  return emojis;
}

export class Source extends BaseSource<Record<string, never>> {
  gather(): Promise<Item<CompletionMetadata>[]> {
    const candidates = getEmojis();
    const ddcCandidates = candidates.flatMap((e) => {
      return {
        word: e.emoji,
        abbr: e.emoji,
        kind: e.name,
        user_data: {
          name: e.name,
          emoji: e.emoji,
        },
      };
    });
    return Promise.resolve(ddcCandidates);
  }
  params() {
    return {};
  }
}
