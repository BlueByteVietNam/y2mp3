interface EnvironmentVariables {
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string;
  NEXT_PUBLIC_POSTHOG_KEY?: string;
  NEXT_PUBLIC_POSTHOG_HOST?: string;
}

class Environment {
  private static instance: Environment;
  private variables: EnvironmentVariables;

  private constructor() {
    this.variables = {
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
      NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
      NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
      NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST
    };
  }

  public static getInstance(): Environment {
    if (!Environment.instance) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }

  public get(key: keyof EnvironmentVariables): string | undefined {
    return this.variables[key];
  }

  public getRequired(key: keyof EnvironmentVariables): string {
    const value = this.variables[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is required but not set`);
    }
    return value;
  }

  public isDevelopment(): boolean {
    return process.env.NODE_ENV === "development";
  }

  public isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }
}

export const env = Environment.getInstance();