# Migration Guide - Old to New Architecture

This guide helps you understand how the codebase was restructured from the old architecture to clean architecture.

## 📊 File Mapping

### Domain Layer

| Old Location | New Location | Notes |
|-------------|--------------|-------|
| `src/core/entities/AssignmentCover.ts` | `src/features/cover-generator/domain/entities/AssignmentCover.ts` | No changes to logic |
| `src/core/services/templateSelector.ts` | `src/features/cover-generator/domain/value-objects/Template.ts` | Refactored to value object pattern |

### Application Layer

| Old Location | New Location | Notes |
|-------------|--------------|-------|
| `src/core/usecases/generateCover.ts` | `src/features/cover-generator/application/use-cases/GenerateCoverUseCase.ts` | Updated to use Template value object |
| `src/core/services/pdfGenerator.ts` | `src/features/cover-generator/application/ports/IPdfGenerator.ts` | Split into interface (port) |

### Infrastructure Layer

| Old Location | New Location | Notes |
|-------------|--------------|-------|
| `src/infrastructure/pdf/pdf-lib.adapter.ts` | `src/features/cover-generator/infrastructure/adapters/PdfLibAdapter.ts` | Implements IPdfGenerator port |
| `src/infrastructure/storage/localStorage.adapter.ts` | `src/features/cover-generator/infrastructure/services/LocalStorageService.ts` | Implements IStorageService port |
| `src/infrastructure/data/*` | `src/infrastructure/data/*` | Kept in infrastructure (cross-cutting) |
| `src/infrastructure/config/*` | `src/infrastructure/config/*` | Kept in infrastructure (cross-cutting) |

### Presentation Layer

| Old Location | New Location | Notes |
|-------------|--------------|-------|
| `src/interface/components/CoverPreview.tsx` | `src/features/cover-generator/presentation/components/CoverPreview.tsx` | Updated exports |
| `src/interface/components/GenerateButton.tsx` | `src/features/cover-generator/presentation/components/GenerateButton.tsx` | Updated exports |
| `src/interface/components/InputField.tsx` | `src/features/cover-generator/presentation/components/InputField.tsx` | Updated exports |
| `src/interface/components/SelectField.tsx` | `src/features/cover-generator/presentation/components/SelectField.tsx` | Updated exports |
| `src/interface/adapters/generateCover.adapter.ts` | `src/features/cover-generator/presentation/CoverGeneratorController.ts` | Renamed to Controller |

### Shared Layer

| Old Location | New Location | Notes |
|-------------|--------------|-------|
| `src/utils/dateFormatter.ts` | `src/shared/utils/dateFormatter.ts` | No changes |
| `src/utils/validators.ts` | `src/shared/utils/validators.ts` | Minor updates to types |
| `src/utils/baseUrl.ts` | `src/shared/utils/baseUrl.ts` | No changes |
| `src/types/cover.d.ts` | `src/shared/types/cover.ts` | Changed from .d.ts to .ts |

## 🔄 Import Path Changes

### Before (Old Architecture)

```typescript
// Old imports
import { AssignmentCover } from '@/core/entities/AssignmentCover';
import { GenerateCoverUseCase } from '@/core/usecases/generateCover';
import { PdfLibAdapter } from '@/infrastructure/pdf/pdf-lib.adapter';
import InputField from '@/interface/components/InputField';
import { CoverData } from '@/types/cover';
import { getCurrentDate } from '@/utils/dateFormatter';
```

### After (New Architecture)

```typescript
// New imports - using feature module
import { 
  AssignmentCover,
  GenerateCoverUseCase,
  PdfLibAdapter,
  CoverGeneratorController,
  InputField,
  SelectField,
  GenerateButton,
  CoverPreview
} from '@/features/cover-generator';

// Shared utilities
import type { CoverData } from '@/shared/types';
import { getCurrentDate } from '@/shared/utils';
```

## 🏗️ Architectural Changes

### 1. Service → Port + Adapter Pattern

**Before:**
```typescript
// src/core/services/pdfGenerator.ts
export class PdfGeneratorService {
  constructor(private pdfAdapter: IPdfGenerator) {}
  async generate(cover, template) {
    return this.pdfAdapter.generatePdf(cover, template);
  }
}
```

**After:**
```typescript
// src/features/cover-generator/application/ports/IPdfGenerator.ts
export interface IPdfGenerator {
  generate(cover: AssignmentCover, template: Template): Promise<Uint8Array>;
}

// Use case directly uses the port
export class GenerateCoverUseCase {
  constructor(private pdfGenerator: IPdfGenerator) {}
  async execute(data, templateType) {
    const cover = new AssignmentCover(...);
    const template = Template.fromType(templateType);
    return this.pdfGenerator.generate(cover, template);
  }
}
```

### 2. Template Selector → Value Object

**Before:**
```typescript
// Service with map of templates
export class TemplateSelector {
  private templates: Map<TemplateType, TemplateConfig>;
  getTemplate(type) { return this.templates.get(type); }
}
```

**After:**
```typescript
// Immutable value object with factory methods
export class Template {
  constructor(
    public readonly type: TemplateType,
    public readonly name: string,
    public readonly colors: TemplateColors,
    public readonly fonts: TemplateFonts
  ) {}
  
  static fromType(type: TemplateType): Template {
    // Factory method creates appropriate template
  }
}
```

### 3. Adapter → Controller Pattern

**Before:**
```typescript
// GenerateCoverAdapter - mixed concerns
export class GenerateCoverAdapter {
  async generateCover(data, template) {
    const pdfAdapter = new PdfLibAdapter();
    const pdfService = new PdfGeneratorService(pdfAdapter);
    const useCase = new GenerateCoverUseCase(pdfService);
    const pdfBytes = await useCase.execute(data, template);
    const blob = new Blob([pdfBytes]);
    return { success: true, pdfBlob: blob };
  }
}
```

**After:**
```typescript
// CoverGeneratorController - clear separation
export class CoverGeneratorController {
  private useCase: GenerateCoverUseCase;
  
  constructor() {
    // Dependency injection in constructor
    const pdfAdapter = new PdfLibAdapter();
    this.useCase = new GenerateCoverUseCase(pdfAdapter);
  }
  
  async generateCover(data, template) {
    const pdfBytes = await this.useCase.execute(data, template);
    const blob = new Blob([pdfBytes]);
    return { success: true, pdfBlob: blob };
  }
}
```

## 📝 Key Improvements

### 1. **Clear Dependency Direction**
- Old: Mixed dependencies
- New: Dependencies point inward (Domain ← Application ← Infrastructure)

### 2. **Better Testability**
- Old: Hard to test without full stack
- New: Each layer can be tested independently

### 3. **Feature Isolation**
- Old: Scattered across core, interface, infrastructure
- New: Everything related to cover generation in one feature folder

### 4. **Explicit Contracts**
- Old: Implicit dependencies
- New: Ports (interfaces) define clear contracts

### 5. **Easier Maintenance**
- Old: Changes ripple across folders
- New: Changes isolated to feature/layer

## 🚀 How to Use the New Architecture

### In Pages/Components

```typescript
'use client';

import { CoverGeneratorController } from '@/features/cover-generator';
import type { CoverData } from '@/shared/types';

export default function MyPage() {
  const generatePdf = async (data: CoverData) => {
    const controller = new CoverGeneratorController();
    const result = await controller.generateCover(data, 'default');
    
    if (result.success) {
      // Handle success
    }
  };
}
```

### In API Routes

```typescript
import { CoverGeneratorController } from '@/features/cover-generator';
import type { CoverData } from '@/shared/types';

export async function POST(request: NextRequest) {
  const { data } = await request.json();
  
  const controller = new CoverGeneratorController();
  const result = await controller.generateCover(data);
  
  // Return PDF
}
```

## 🧪 Testing Strategy

### Old Approach
- Had to set up entire stack to test anything

### New Approach

**Test Domain (No dependencies)**
```typescript
test('AssignmentCover validates required fields', () => {
  expect(() => new AssignmentCover(/* invalid data */))
    .toThrow('University name is required');
});
```

**Test Use Case (Mock port)**
```typescript
test('GenerateCoverUseCase generates PDF', async () => {
  const mockPdfGenerator: IPdfGenerator = {
    generate: jest.fn().mockResolvedValue(new Uint8Array())
  };
  
  const useCase = new GenerateCoverUseCase(mockPdfGenerator);
  await useCase.execute(validData, 'default');
  
  expect(mockPdfGenerator.generate).toHaveBeenCalled();
});
```

**Test Adapter (Integration test)**
```typescript
test('PdfLibAdapter generates valid PDF', async () => {
  const adapter = new PdfLibAdapter();
  const cover = new AssignmentCover(/* valid data */);
  const template = Template.createDefault();
  
  const pdfBytes = await adapter.generate(cover, template);
  
  expect(pdfBytes).toBeInstanceOf(Uint8Array);
  expect(pdfBytes.length).toBeGreaterThan(0);
});
```

## ⚠️ Breaking Changes

1. **Import paths changed** - Update all imports as shown above
2. **Component exports** - Components are now named exports, not default
3. **Type locations** - Types moved from `@/types` to `@/shared/types`
4. **Utility imports** - Utils moved from `@/utils` to `@/shared/utils`

## 🔧 Cleanup Tasks

After migration, you can safely delete these old folders:
- `src/core/` (moved to features)
- `src/interface/` (moved to features/presentation)
- `src/utils/` (moved to shared/utils)
- `src/types/` (moved to shared/types)

Keep these:
- `src/infrastructure/data/` (cross-cutting data)
- `src/infrastructure/config/` (cross-cutting config)
- `src/app/` (Next.js routes)

## 📚 Next Steps

1. Review the [CLEAN_ARCHITECTURE.md](./CLEAN_ARCHITECTURE.md) guide
2. Check the [QUICKSTART.md](./QUICKSTART.md) for development workflow
3. Run tests to ensure everything works
4. Consider adding more features using the same pattern
