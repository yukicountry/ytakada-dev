import { z } from "zod";

export const Tag = z.object({
  name: z.string(),
});

export type Tag = z.infer<typeof Tag>;

export const Scrap = z.object({
  slug: z.string(),
  emoji: z.string(),
  title: z.string(),
  body: z.string(),
  tags: z.array(Tag),
});

export type Scrap = z.infer<typeof Scrap>;

export const ScrapPreview = Scrap.omit({ body: true });

export type ScrapPreview = z.infer<typeof ScrapPreview>;
