declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        nonInteraction?: boolean;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {};