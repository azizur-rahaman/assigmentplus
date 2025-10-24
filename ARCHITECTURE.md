# Architecture Overview - aissngment+

## 🏛️ Clean Architecture Implementation

This project follows **Clean Architecture** principles with clear separation of concerns across layers.

### Layer Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      INTERFACE LAYER                         │
│  (UI Components, API Routes, External Interfaces)           │
│                                                              │
│  • React Components (InputField, GenerateButton, etc.)      │
│  • API Routes (/api/generate)                               │
│  • Adapters (generateCover.adapter.ts)                      │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                       CORE LAYER                             │
│        (Business Logic - Framework Independent)              │
│                                                              │
│  • Entities (AssignmentCover)                               │
│  • Use Cases (GenerateCoverUseCase)                         │
│  • Services (PdfGeneratorService, TemplateSelector)         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  INFRASTRUCTURE LAYER                        │
│     (External Tools, Frameworks, Database, etc.)            │
│                                                              │
│  • PDF Adapter (pdf-lib.adapter.ts)                         │
│  • Storage Adapter (localStorage.adapter.ts)                │
│  • Config (env.ts)                                          │
└─────────────────────────────────────────────────────────────┘
```

## 📁 File Organization

### Core Layer (`src/core/`)
**Purpose**: Contains pure business logic, independent of frameworks

- **`entities/AssignmentCover.ts`**
  - Domain model with validation
  - Pure TypeScript class with no external dependencies
  
- **`usecases/generateCover.ts`**
  - Application-specific business rules
  - Orchestrates the cover generation flow
  
- **`services/pdfGenerator.ts`**
  - Interface definition for PDF generation
  - Service layer for PDF operations
  
- **`services/templateSelector.ts`**
  - Template configuration and selection logic
  - Manages color schemes and fonts

### Infrastructure Layer (`src/infrastructure/`)
**Purpose**: Implementations of external tools and frameworks

- **`pdf/pdf-lib.adapter.ts`**
  - Concrete implementation using pdf-lib
  - Converts domain entities to PDF documents
  
- **`storage/localStorage.adapter.ts`**
  - Browser localStorage implementation
  - Saves user's last cover data
  
- **`config/env.ts`**
  - Environment variable management
  - Configuration constants

### Interface Layer (`src/interface/`)
**Purpose**: User interface and external communication

- **`components/`**
  - `InputField.tsx` - Reusable form input
  - `GenerateButton.tsx` - Action button with loading state
  - `CoverPreview.tsx` - Live preview component
  
- **`adapters/generateCover.adapter.ts`**
  - Connects UI to core use cases
  - Handles dependency injection

### App Layer (`src/app/`)
**Purpose**: Next.js specific routes and layouts

- **`page.tsx`** - Home page with form UI
- **`layout.tsx`** - Root layout wrapper
- **`api/generate/route.ts`** - API endpoint for PDF generation

### Utilities (`src/utils/`)
**Purpose**: Helper functions

- **`dateFormatter.ts`** - Date formatting utilities
- **`validators.ts`** - Input validation functions

### Types (`src/types/`)
**Purpose**: Shared TypeScript interfaces

- **`cover.d.ts`** - Type definitions for cover data

## 🔄 Data Flow

### Generating a Cover Page

```
User Input (UI)
    │
    ▼
InputField Components
    │
    ▼
Form State (React)
    │
    ▼
handleGenerate() ──────┐
    │                  │
    ▼                  ▼
Validation          API Endpoint (/api/generate)
(validators.ts)         │
    │                  ▼
    │            GenerateCoverUseCase
    │                  │
    │                  ▼
    │            AssignmentCover Entity
    │            (validates data)
    │                  │
    │                  ▼
    │            PdfGeneratorService
    │                  │
    │                  ▼
    │            PdfLibAdapter
    │            (generates PDF bytes)
    │                  │
    └──────────────────┼───────────────┐
                       │               │
                       ▼               ▼
                 NextResponse     Blob Creation
                 (API Route)      (Client-side)
                       │               │
                       ▼               ▼
                 PDF Download    LocalStorage
                                (save history)
```

## 🎯 Key Principles Applied

### 1. Dependency Inversion
- Core layer defines interfaces (`IPdfGenerator`)
- Infrastructure layer implements interfaces (`PdfLibAdapter`)
- Dependencies point inward (infrastructure → core)

### 2. Single Responsibility
- Each class/module has one reason to change
- `AssignmentCover` only handles domain validation
- `PdfLibAdapter` only handles PDF generation
- `GenerateCoverUseCase` only orchestrates the flow

### 3. Separation of Concerns
- UI components don't know about pdf-lib
- Core entities don't know about React
- Business logic independent of frameworks

### 4. Testability
- Core logic can be tested without UI
- Mock implementations easy to create
- See `generateCover.test.ts` for examples

## 🧪 Testing Strategy

```
src/core/usecases/__tests__/generateCover.test.ts
├─ Mock PDF Generator (no real PDF creation)
├─ Test valid data → PDF generation
├─ Test missing fields → validation errors
└─ Test edge cases
```

## 🚀 Benefits of This Architecture

1. **Framework Independence**: Core logic can be used with any UI framework
2. **Testability**: Business logic easily tested in isolation
3. **Maintainability**: Clear boundaries between layers
4. **Scalability**: Easy to add new features (templates, storage backends)
5. **Flexibility**: Easy to swap implementations (e.g., different PDF library)

## 🔮 Future Enhancements

Possible extensions following the same architecture:

- **New Templates**: Add to `TemplateSelector` service
- **Database Storage**: New adapter in infrastructure layer
- **Image Upload**: Add to `AssignmentCover` entity and adapter
- **Export to Word**: New infrastructure adapter
- **Authentication**: New layer between interface and core

---

**Architecture Pattern**: Clean Architecture (Uncle Bob Martin)  
**Framework**: Next.js 14 with App Router  
**Language**: TypeScript
