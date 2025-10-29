# Flutter-Style Clean Architecture

## ✅ Final Structure (Flutter/Dart Pattern)

```
features/
└── cover-generator/
    ├── data/                          # Data Layer (External concerns)
    │   ├── datasources/               # Data sources (APIs, local data, etc.)
    │   │   ├── universities.data.ts   # Static university data
    │   │   └── options.data.ts        # Static options data
    │   ├── models/                    # Data models (DTOs)
    │   │   └── (future: API models)
    │   └── repositories/              # Repository implementations
    │       ├── PdfLibAdapter.ts       # Implements IPdfGenerator
    │       └── LocalStorageService.ts # Implements IStorageService
    │
    ├── domain/                        # Domain Layer (Pure business logic)
    │   ├── entities/                  # Business entities
    │   │   └── AssignmentCover.ts     # Assignment cover entity
    │   ├── repositories/              # Repository interfaces (contracts)
    │   │   ├── IPdfGenerator.ts       # PDF generation contract
    │   │   └── IStorageService.ts     # Storage contract
    │   ├── usecases/                  # Business use cases
    │   │   └── GenerateCoverUseCase.ts
    │   └── value-objects/             # Value objects
    │       └── Template.ts            # Template configuration
    │
    └── presentation/                  # Presentation Layer (UI)
        ├── components/                # Reusable UI components
        │   ├── CoverPreview.tsx
        │   ├── GenerateButton.tsx
        │   ├── InputField.tsx
        │   └── SelectField.tsx
        ├── pages/                     # Page components
        │   └── (future: dedicated page components)
        ├── providers/                 # State management
        │   └── (future: state providers)
        └── CoverGeneratorController.ts # Presentation controller
```

## 🎯 Layer Responsibilities

### 1️⃣ **Data Layer** (`data/`)
**What it does:** Handles all external data sources and implements repository interfaces

#### `datasources/`
- **Purpose:** External data sources (APIs, databases, local data)
- **Examples:**
  - `universities.data.ts` - Static university data
  - `options.data.ts` - Static form options
  - Future: `remote_api_datasource.ts` - API calls
  - Future: `local_db_datasource.ts` - Database access

#### `models/`
- **Purpose:** Data Transfer Objects (DTOs) for API/database
- **Examples:**
  - Future: `UniversityModel.ts` - JSON from API
  - Future: `CoverRequestModel.ts` - API request format

#### `repositories/`
- **Purpose:** Concrete implementations of domain repository interfaces
- **Examples:**
  - `PdfLibAdapter.ts` - Implements `IPdfGenerator` using pdf-lib
  - `LocalStorageService.ts` - Implements `IStorageService` using localStorage
- **Rules:**
  - ✅ Implements interfaces from `domain/repositories/`
  - ✅ Uses datasources to fetch/store data
  - ✅ Converts models to entities
  - ❌ No business logic

### 2️⃣ **Domain Layer** (`domain/`)
**What it does:** Pure business logic, no external dependencies

#### `entities/`
- **Purpose:** Core business objects with identity
- **Examples:**
  - `AssignmentCover.ts` - Assignment cover with validation
- **Rules:**
  - ✅ Business rules and validation
  - ✅ Pure TypeScript/JavaScript
  - ❌ No framework dependencies
  - ❌ No imports from data or presentation

#### `repositories/`
- **Purpose:** Interfaces (contracts) for data access
- **Examples:**
  - `IPdfGenerator.ts` - What PDF generation should do
  - `IStorageService.ts` - What storage should do
- **Rules:**
  - ✅ Just interfaces, no implementations
  - ✅ Used by use cases
  - ❌ No concrete classes

#### `usecases/`
- **Purpose:** Business workflows and orchestration
- **Examples:**
  - `GenerateCoverUseCase.ts` - Orchestrates cover generation
- **Rules:**
  - ✅ One use case per user action
  - ✅ Uses entities and repository interfaces
  - ✅ Contains business logic
  - ❌ No UI code
  - ❌ No data layer imports

#### `value-objects/`
- **Purpose:** Immutable objects defined by their values
- **Examples:**
  - `Template.ts` - Template configuration (no identity needed)
- **Rules:**
  - ✅ Immutable
  - ✅ No identity (equals by value)
  - ❌ No business logic (just data structure)

### 3️⃣ **Presentation Layer** (`presentation/`)
**What it does:** UI and user interaction

#### `components/`
- **Purpose:** Reusable UI components
- **Examples:**
  - `CoverPreview.tsx` - Preview component
  - `InputField.tsx` - Form input component
- **Rules:**
  - ✅ Pure presentational
  - ✅ Receive props, emit events
  - ❌ No business logic
  - ❌ No direct data access

#### `pages/`
- **Purpose:** Full page components
- **Examples:**
  - Future: `CoverGeneratorPage.tsx` - Main page
- **Rules:**
  - ✅ Compose components
  - ✅ Use controller/providers
  - ❌ No business logic

#### `providers/`
- **Purpose:** State management (React Context, Redux, etc.)
- **Examples:**
  - Future: `CoverGeneratorProvider.tsx` - State provider
- **Rules:**
  - ✅ Manage UI state
  - ✅ Call use cases via controller
  - ❌ No business logic

#### `CoverGeneratorController.ts`
- **Purpose:** Facade that wires everything together
- **Rules:**
  - ✅ Dependency injection
  - ✅ Calls use cases
  - ✅ Returns presentation-friendly data

## 📊 Comparison: Before vs After

### Before (Generic Clean Architecture)
```
features/cover-generator/
├── application/
│   ├── use-cases/
│   └── ports/
├── infrastructure/
│   ├── adapters/
│   └── services/
├── domain/
│   └── entities/
└── presentation/
```

### After (Flutter Pattern)
```
features/cover-generator/
├── data/                  ← Renamed from infrastructure
│   ├── datasources/       ← New! Data sources
│   ├── models/            ← New! DTOs
│   └── repositories/      ← Implementations
├── domain/
│   ├── entities/
│   ├── repositories/      ← Moved from application/ports
│   ├── usecases/          ← Moved from application/use-cases
│   └── value-objects/
└── presentation/
```

## 🔄 Key Differences from Generic Clean Architecture

| Aspect | Generic Clean Arch | Flutter Pattern |
|--------|-------------------|-----------------|
| **Ports** | `application/ports/` | `domain/repositories/` |
| **Use Cases** | `application/use-cases/` | `domain/usecases/` |
| **Implementations** | `infrastructure/adapters/` | `data/repositories/` |
| **Data Sources** | Mixed in infrastructure | `data/datasources/` |
| **Models** | Not separated | `data/models/` |
| **Application Layer** | Separate layer | Merged into domain |

## 💡 Why Flutter Pattern?

### Benefits:

1. **Clearer Separation**
   - Domain = Pure business logic (no data concerns)
   - Data = All external dependencies

2. **Industry Standard**
   - Widely used in Flutter/Dart community
   - Many resources and examples

3. **Explicit Data Sources**
   - Clear distinction between APIs, local data, cache
   - Easy to add multiple data sources

4. **Models vs Entities**
   - Models = JSON/API representation
   - Entities = Business representation
   - Clear conversion layer

## 🚀 Usage Examples

### Creating a Use Case
```typescript
// domain/usecases/GenerateCoverUseCase.ts
import { IPdfGenerator } from '../repositories/IPdfGenerator';

export class GenerateCoverUseCase {
  constructor(private pdfGenerator: IPdfGenerator) {}
  
  async execute(data: CoverData) {
    // Business logic here
    return this.pdfGenerator.generate(cover, template);
  }
}
```

### Implementing a Repository
```typescript
// data/repositories/PdfLibAdapter.ts
import { IPdfGenerator } from '../../domain/repositories/IPdfGenerator';

export class PdfLibAdapter implements IPdfGenerator {
  async generate(cover, template) {
    // Implementation using pdf-lib
  }
}
```

### Using in Presentation
```typescript
// presentation/CoverGeneratorController.ts
import { GenerateCoverUseCase } from '../domain/usecases/GenerateCoverUseCase';
import { PdfLibAdapter } from '../data/repositories/PdfLibAdapter';

export class CoverGeneratorController {
  constructor() {
    const pdfAdapter = new PdfLibAdapter();
    this.useCase = new GenerateCoverUseCase(pdfAdapter);
  }
}
```

## 📝 Naming Conventions (Flutter-style)

### Files
- Entities: `user.ts`, `assignment_cover.ts`
- Repositories (Interface): `i_pdf_generator.ts` or `IPdfGenerator.ts`
- Repositories (Implementation): `pdf_lib_adapter.ts` or `PdfRepositoryImpl.ts`
- Use Cases: `generate_cover_usecase.ts` or `GenerateCoverUseCase.ts`
- Models: `user_model.ts`, `cover_request_model.ts`

### This Project Uses
- **PascalCase** for classes/interfaces (TypeScript convention)
- **camelCase** for file names with descriptive suffixes
- **I** prefix for interfaces (e.g., `IPdfGenerator`)

## 🎓 Learning Resources

- [Flutter Clean Architecture by Reso Coder](https://resocoder.com/flutter-clean-architecture-tdd/)
- [Clean Architecture in Flutter (Official)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Flutter TDD Course](https://www.youtube.com/watch?v=KjE2IDphA_U&list=PLB6lc7nQ1n4iYGE_khpXRdJkJEp9WOech)

## ✅ Checklist for New Feature (Flutter Pattern)

- [ ] Create feature folder
- [ ] **Domain Layer:**
  - [ ] Create entities in `domain/entities/`
  - [ ] Create value objects in `domain/value-objects/`
  - [ ] Create repository interfaces in `domain/repositories/`
  - [ ] Create use cases in `domain/usecases/`
- [ ] **Data Layer:**
  - [ ] Create datasources in `data/datasources/`
  - [ ] Create models in `data/models/`
  - [ ] Create repository implementations in `data/repositories/`
- [ ] **Presentation Layer:**
  - [ ] Create components in `presentation/components/`
  - [ ] Create pages in `presentation/pages/`
  - [ ] Create providers in `presentation/providers/`
  - [ ] Create controller
- [ ] Export from feature's `index.ts`
- [ ] Add tests

## 🎯 The Golden Rule

> **Domain should have ZERO dependencies on Data or Presentation**
>
> Data and Presentation can depend on Domain, but Domain is 100% pure business logic!

This is the essence of the Flutter clean architecture pattern! 🚀
