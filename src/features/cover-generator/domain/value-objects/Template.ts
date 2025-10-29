// Domain Value Object: Template Configuration

export type TemplateType = 'default' | 'modern' | 'classic';

export interface TemplateColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface TemplateFonts {
  title: number;
  heading: number;
  body: number;
}

export class Template {
  constructor(
    public readonly type: TemplateType,
    public readonly name: string,
    public readonly colors: TemplateColors,
    public readonly fonts: TemplateFonts
  ) {}

  static createDefault(): Template {
    return new Template(
      'default',
      'Default',
      {
        primary: '#000000',      // Black for main text
        secondary: '#4a4a4a',    // Dark gray for secondary text
        accent: '#f47920',       // UIU Orange for highlights
      },
      {
        title: 24,
        heading: 16,
        body: 12,
      }
    );
  }

  static createModern(): Template {
    return new Template(
      'modern',
      'Modern',
      {
        primary: '#0891b2',
        secondary: '#64748b',
        accent: '#8b5cf6',
      },
      {
        title: 28,
        heading: 18,
        body: 13,
      }
    );
  }

  static createClassic(): Template {
    return new Template(
      'classic',
      'Classic',
      {
        primary: '#991b1b',
        secondary: '#1c1917',
        accent: '#ca8a04',
      },
      {
        title: 22,
        heading: 15,
        body: 11,
      }
    );
  }

  static fromType(type: TemplateType): Template {
    switch (type) {
      case 'modern':
        return Template.createModern();
      case 'classic':
        return Template.createClassic();
      default:
        return Template.createDefault();
    }
  }

  static getAllTypes(): TemplateType[] {
    return ['default', 'modern', 'classic'];
  }
}
