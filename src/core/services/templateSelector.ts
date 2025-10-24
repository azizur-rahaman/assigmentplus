// Domain service: Template selector

export type TemplateType = 'default' | 'modern' | 'classic';

export interface TemplateConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    title: number;
    heading: number;
    body: number;
  };
}

export class TemplateSelector {
  private templates: Map<TemplateType, TemplateConfig> = new Map([
    [
      'default',
      {
        name: 'Default',
        colors: {
          primary: '#000000',      // Black for main text
          secondary: '#4a4a4a',    // Dark gray for secondary text
          accent: '#f47920',       // UIU Orange for highlights
        },
        fonts: {
          title: 24,
          heading: 16,
          body: 12,
        },
      },
    ],
    [
      'modern',
      {
        name: 'Modern',
        colors: {
          primary: '#0891b2',
          secondary: '#64748b',
          accent: '#8b5cf6',
        },
        fonts: {
          title: 28,
          heading: 18,
          body: 13,
        },
      },
    ],
    [
      'classic',
      {
        name: 'Classic',
        colors: {
          primary: '#991b1b',
          secondary: '#1c1917',
          accent: '#ca8a04',
        },
        fonts: {
          title: 22,
          heading: 15,
          body: 11,
        },
      },
    ],
  ]);

  getTemplate(type: TemplateType = 'default'): TemplateConfig {
    return this.templates.get(type) || this.templates.get('default')!;
  }

  getAllTemplates(): TemplateType[] {
    return Array.from(this.templates.keys());
  }
}
