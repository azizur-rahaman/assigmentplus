# Quick Reference - Clean Architecture

## 🚀 Quick Start

### Import Components
```typescript
import { 
  CoverPreview, 
  GenerateButton, 
  InputField, 
  SelectField 
} from '@/features/cover-generator';
```

### Import Types
```typescript
import type { CoverData } from '@/shared/types';
import type { TemplateType } from '@/features/cover-generator';
```

### Import Utilities
```typescript
import { getCurrentDate, formatDate, validateCoverData } from '@/shared/utils';
```

### Use Controller (Server-side only)
```typescript
import { CoverGeneratorController } from '@/features/cover-generator';

const controller = new CoverGeneratorController();
const result = await controller.generateCover(data, 'default');
```

## 📂 File Locations

| What | Where |
|------|-------|
| Components | `src/features/cover-generator/presentation/components/` |
| Business Logic | `src/features/cover-generator/domain/` |
| Use Cases | `src/features/cover-generator/application/use-cases/` |
| Infrastructure | `src/features/cover-generator/infrastructure/` |
| Types | `src/shared/types/` |
| Utilities | `src/shared/utils/` |
| Data | `src/infrastructure/data/` |

## 🎯 Common Tasks

### Add a New Component
1. Create file in `src/features/cover-generator/presentation/components/MyComponent.tsx`
2. Export from `src/features/cover-generator/presentation/components/index.ts`
3. Use: `import { MyComponent } from '@/features/cover-generator'`

### Add a New Use Case
1. Create file in `src/features/cover-generator/application/use-cases/MyUseCase.ts`
2. Define ports (interfaces) if needed in `application/ports/`
3. Implement adapters in `infrastructure/adapters/`
4. Export from `src/features/cover-generator/index.ts`

### Add Shared Utility
1. Create file in `src/shared/utils/myUtil.ts`
2. Export from `src/shared/utils/index.ts`
3. Use: `import { myUtil } from '@/shared/utils'`

## 🔍 Layer Rules

### ✅ Domain Layer CAN:
- Define entities and value objects
- Validate business rules
- Have no external dependencies

### ❌ Domain Layer CANNOT:
- Use framework code
- Make HTTP calls
- Access database
- Import from infrastructure

### ✅ Application Layer CAN:
- Define use cases
- Define ports (interfaces)
- Use domain entities
- Orchestrate workflows

### ❌ Application Layer CANNOT:
- Implement infrastructure
- Use external libraries
- Have UI code
- Know about HTTP or database

### ✅ Infrastructure Layer CAN:
- Implement ports
- Use external libraries
- Access database/HTTP/filesystem
- Handle technical details

### ❌ Infrastructure Layer CANNOT:
- Contain business logic
- Be imported in domain/application

### ✅ Presentation Layer CAN:
- React components
- Call use cases via controller
- Handle user interaction
- Display data

### ❌ Presentation Layer CANNOT:
- Contain business logic
- Access infrastructure directly
- Bypass use cases

## 📋 Checklist for New Feature

- [ ] Create feature folder: `src/features/my-feature/`
- [ ] Add domain entities in `domain/entities/`
- [ ] Add value objects in `domain/value-objects/`
- [ ] Create use case in `application/use-cases/`
- [ ] Define ports in `application/ports/`
- [ ] Implement adapters in `infrastructure/adapters/`
- [ ] Create components in `presentation/components/`
- [ ] Create controller in `presentation/`
- [ ] Export from `index.ts`
- [ ] Update documentation
- [ ] Add tests

## 🧪 Testing Quick Guide

### Test Domain
```typescript
describe('MyEntity', () => {
  it('validates required fields', () => {
    expect(() => new MyEntity(/* invalid */)).toThrow();
  });
});
```

### Test Use Case
```typescript
describe('MyUseCase', () => {
  it('executes workflow', async () => {
    const mockPort = { method: jest.fn() };
    const useCase = new MyUseCase(mockPort);
    await useCase.execute(data);
    expect(mockPort.method).toHaveBeenCalled();
  });
});
```

### Test Adapter
```typescript
describe('MyAdapter', () => {
  it('implements port correctly', async () => {
    const adapter = new MyAdapter();
    const result = await adapter.method(input);
    expect(result).toBeDefined();
  });
});
```

## 📦 Build & Deploy

```bash
# Development
npm run dev

# Type check
npx tsc --noEmit

# Build
npm run build

# Test
npm test
```

## 🔗 Useful Links

- **Architecture Guide**: `CLEAN_ARCHITECTURE.md`
- **Migration Guide**: `MIGRATION.md`
- **Summary**: `RESTRUCTURE_SUMMARY.md`
- **Quick Start**: `QUICKSTART.md`

## 💡 Pro Tips

1. **Always use barrel exports** - Import from feature index, not deep paths
2. **Keep domain pure** - No framework dependencies in domain layer
3. **Test each layer** - Don't skip unit tests
4. **Follow the pattern** - Consistency makes it easier to navigate
5. **Document as you go** - Update docs when adding features

## 🆘 Troubleshooting

### Import Error
- Check if exported in feature's `index.ts`
- Verify path in `tsconfig.json`
- Clear `.next` cache: `rm -rf .next`

### Build Error
- Server-only code (fs, path) must not be in client bundle
- Use dynamic imports or API routes for server code
- Check Next.js bundling with `npm run build`

### Type Error
- Run `npx tsc --noEmit` to see all errors
- Check import paths
- Verify interfaces are properly exported

## 📞 Need Help?

1. Read the full docs first
2. Check existing examples in `features/cover-generator`
3. Follow the established patterns
4. Keep layers separated
