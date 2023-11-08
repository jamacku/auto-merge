import { z } from 'zod';

export const pullRequestApiSchema = z.object({
  number: z.number(),
  title: z.string(),
  base: z.object({ ref: z.string() }).transform(base => base.ref),
  labels: z.array(
    z.object({ name: z.string() }).transform(label => label.name)
  ),
  draft: z.boolean(),
  merged: z.boolean(),
  mergeable: z.boolean().nullable(),
  mergeable_state: z.string(),
});

export type PullRequestApi = z.infer<typeof pullRequestApiSchema>;
