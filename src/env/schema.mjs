// @ts-check
import {z} from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    INSTAPAPER_CONSUMER_ID: z.string(),
    INSTAPAPER_CONSUMER_SECRET: z.string(),
    NOTION_SECURITY_KEY: z.string(),
    NOTION_DIARY_DB_ID: z.string(),
    NOTION_CLIENT_ID: z.string(),
    NOTION_CLIENT_SECRET: z.string(),
    NOTION_AUTH_URL: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
    // NEXT_PUBLIC_BAR: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
    // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
};
