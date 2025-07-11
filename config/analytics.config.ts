export interface AnalyticsConfig {
  googleAnalytics?: {
    measurementId: string;
  };
  plausible?: {
    domain: string;
  };
  posthog?: {
    apiKey: string;
    apiHost?: string;
  };
}

export const analyticsConfig: AnalyticsConfig = {
  googleAnalytics: process.env.NEXT_PUBLIC_GA_ID ? {
    measurementId: process.env.NEXT_PUBLIC_GA_ID
  } : undefined,
  plausible: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? {
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  } : undefined,
  posthog: process.env.NEXT_PUBLIC_POSTHOG_KEY ? {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"
  } : undefined
};