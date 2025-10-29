# Clean Architecture Guide

## 🏗️ Architecture Overview

This application follows **Clean Architecture** principles with a **feature-based** structure. The architecture ensures:

- **Separation of Concerns**: Each layer has a specific responsibility
- **Dependency Inversion**: Dependencies point inward (Domain ← Application ← Infrastructure/Presentation)
- **Testability**: Easy to test each layer independently
- **Maintainability**: Changes in one layer don't affect others
- **Scalability**: Easy to add new features

## 📁 Project Structure

```
src/
├── features/                      # Feature modules (bounded contexts)
│   └── cover-generator/           # Assignment cover generation feature
│       ├── domain/                # Business logic & rules
│       │   ├── entities/          # Core business objects
│       │   │   └── AssignmentCover.ts
│       │   └── value-objects/     # Immutable value types
│       │       └── Template.ts
│       ├── application/           # Use cases & ports
│       │   ├── use-cases/         # Business workflows
│       │   │   └── GenerateCoverUseCase.ts
│       │   └── ports/             # Interfaces for external dependencies
│       │       ├── IPdfGenerator.ts
│       │       └── IStorageService.ts
│       ├── infrastructure/        # External implementations
│       │   ├── adapters/          # Third-party integrations
│       │   │   └── PdfLibAdapter.ts
│       │   └── services/          # Infrastructure services
│       │       └── LocalStorageService.ts
│       └── presentation/          # UI layer
│           ├── components/        # React components
│           │   ├── CoverPreview.tsx
│           │   ├── GenerateButton.tsx
│           │   ├── InputField.tsx
│           │   ├── SelectField.tsx
│           │   └── index.ts
│           └── CoverGeneratorController.ts  # Facade/Controller
├── shared/                        # Shared utilities & types
│   ├── utils/                     # Common utilities
│   │   ├── dateFormatter.ts
│   │   ├── validators.ts
│   │   ├── baseUrl.ts
│   │   └── index.ts
│   └── types/                     # Shared TypeScript types
│       ├── cover.ts
│       └── index.ts
├── infrastructure/                # Cross-cutting infrastructure
│   ├── data/                      # Static data & configuration
│   │   ├── universities.data.ts
│   │   └── options.data.ts
│   └── config/                    # App configuration
│       └── env.ts
└── app/                           # Next.js app router
    ├── page.tsx                   # Main page
    ├── layout.tsx                 # Root layout
    └── api/                       # API routes
        └── generate/
            └── route.ts
```

## 🎯 Layer Responsibilities

### 1. Domain Layer (`domain/`)
**Purpose**: Pure business logic, no external dependencies

- **Entities**: Core business objects with identity and lifecycle
  - Example: `AssignmentCover` - validates assignment cover data
  
- **Value Objects**: Immutable objects defined by their values
  - Example: `Template` - template configuration without identity

**Rules**:
- ✅ No framework dependencies
- ✅ No external library imports (except standard lib)
- ✅ Contains only business rules
- ❌ No database, HTTP, or UI code

### 2. Application Layer (`application/`)
**Purpose**: Orchestrates business workflows

- **Use Cases**: Business workflows (one per user action)
  - Example: `GenerateCoverUseCase` - orchestrates cover generation
  
- **Ports**: Interfaces that infrastructure must implement
  - Example: `IPdfGenerator` - defines what PDF generation should do
  - Example: `IStorageService` - defines storage contract

**Rules**:
- ✅ Can use domain entities and value objects
- ✅ Defines interfaces (ports) for infrastructure
- ❌ No implementation details
- ❌ No framework-specific code

### 3. Infrastructure Layer (`infrastructure/`)
**Purpose**: Implements technical details

- **Adapters**: Implements application ports using third-party libraries
  - Example: `PdfLibAdapter` implements `IPdfGenerator` using pdf-lib
  
- **Services**: Technical services
  - Example: `LocalStorageService` implements `IStorageService`

**Rules**:
- ✅ Implements application ports
- ✅ Uses external libraries/frameworks
- ✅ Handles I/O, HTTP, database, etc.
- ❌ Should not contain business logic

### 4. Presentation Layer (`presentation/`)
**Purpose**: User interface and interaction

- **Components**: React UI components
  - Pure presentational components
  
- **Controller**: Coordinates the feature
  - Example: `CoverGeneratorController` - wires dependencies and provides API

**Rules**:
- ✅ React components and hooks
- ✅ Calls application use cases via controller
- ❌ No business logic
- ❌ No direct infrastructure access

## 🔄 Data Flow

```
User Action (UI)
    ↓
Presentation Layer (Controller)
    ↓
Application Layer (Use Case)
    ↓
Domain Layer (Entities/Value Objects)
    ↓
Application Layer (Port Interface)
    ↓
Infrastructure Layer (Adapter Implementation)
    ↓
External System (PDF-lib, LocalStorage, etc.)
```

### Example: Generate Cover Flow

1. **User clicks "Generate"** → `page.tsx`
2. **Controller called** → `CoverGeneratorController.generateCover()`
3. **Use case executed** → `GenerateCoverUseCase.execute()`
4. **Entity created** → `new AssignmentCover(...)` (validates data)
5. **Template selected** → `Template.fromType()`
6. **PDF generated** → `IPdfGenerator.generate()` (port)
7. **Adapter implements** → `PdfLibAdapter.generate()` (implementation)
8. **Result returned** → PDF blob back to UI

## 🔌 Dependency Injection

Dependencies are injected through constructors:

```typescript
// Use Case depends on port (interface)
class GenerateCoverUseCase {
  constructor(private pdfGenerator: IPdfGenerator) {}
}

// Controller wires up concrete implementations
class CoverGeneratorController {
  constructor() {
    const adapter = new PdfLibAdapter();  // Concrete implementation
    this.useCase = new GenerateCoverUseCase(adapter);
  }
}
```

## 📦 Feature Modules

Each feature is self-contained:

```typescript
// Import entire feature
import { 
  CoverGeneratorController,
  CoverPreview,
  GenerateButton,
  // ... other exports
} from '@/features/cover-generator';
```

## ✅ Benefits

1. **Testability**
   - Test domain logic without infrastructure
   - Mock ports in use case tests
   - Test UI components in isolation

2. **Flexibility**
   - Swap PDF library (just create new adapter)
   - Change storage (implement IStorageService)
   - Multiple UIs (web, mobile) using same core

3. **Maintainability**
   - Clear responsibility boundaries
   - Easy to find code
   - Changes isolated to specific layers

4. **Scalability**
   - Add features without affecting others
   - Each feature is independent
   - Clear integration points

## 🚀 Adding a New Feature

1. **Create feature folder**:
   ```
   src/features/my-feature/
   ```

2. **Add domain layer**:
   ```typescript
   // entities/MyEntity.ts
   export class MyEntity {
     constructor(public readonly id: string) {}
   }
   ```

3. **Add application layer**:
   ```typescript
   // use-cases/MyUseCase.ts
   export class MyUseCase {
     constructor(private dependency: IMyPort) {}
     execute() { /* business logic */ }
   }
   ```

4. **Add infrastructure**:
   ```typescript
   // adapters/MyAdapter.ts
   export class MyAdapter implements IMyPort {
     // implementation
   }
   ```

5. **Add presentation**:
   ```typescript
   // presentation/MyController.ts
   export class MyController {
     constructor() {
       const adapter = new MyAdapter();
       this.useCase = new MyUseCase(adapter);
     }
   }
   ```

6. **Export from index**:
   ```typescript
   // index.ts
   export { MyEntity } from './domain/entities/MyEntity';
   export { MyUseCase } from './application/use-cases/MyUseCase';
   // ... etc
   ```

## 📚 Related Patterns

- **Hexagonal Architecture** (Ports & Adapters)
- **Onion Architecture**
- **SOLID Principles**
- **Dependency Inversion Principle**

## 🔍 Code Organization Tips

1. **One file per class/interface**
2. **Use barrel exports** (`index.ts`) for clean imports
3. **Keep domain pure** - no framework dependencies
4. **Ports define what, adapters define how**
5. **Controllers orchestrate** - wire dependencies
6. **Components are dumb** - no business logic

## 🎓 Learning Resources

- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Domain-Driven Design](https://www.domainlanguage.com/ddd/)
