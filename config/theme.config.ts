export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    muted: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#0066cc",
    secondary: "#004499",
    background: "#ffffff",
    text: "#333333",
    muted: "#666666",
    border: "#dddddd",
    error: "#dc3545",
    success: "#28a745",
    warning: "#ffc107"
  },
  fonts: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    heading: "inherit",
    monospace: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px"
  }
};