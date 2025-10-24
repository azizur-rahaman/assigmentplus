# aissngment+

**Professional Assignment Cover Page Generator**

A Next.js application built with clean architecture principles to generate professional assignment cover pages in PDF format.

![Screenshot](https://via.placeholder.com/800x400?text=aissngment+Screenshot)

## 🚀 Features

- ✅ Generate professional PDF cover pages instantly
- ✅ Clean Architecture design (core, infrastructure, interface layers)
- ✅ Multiple templates (default, modern, classic)
- ✅ Live preview before generation
- ✅ Client-side PDF generation using pdf-lib
- ✅ Form validation with error handling
- ✅ LocalStorage for saving recent covers
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Unit tests with Jest

## 📁 Project Structure

```
src/
├── app/                       # Next.js App Router (routes, layout, pages)
│   ├── page.tsx              # Home (generator UI)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/                  # API endpoints
│       └── generate/route.ts # POST /api/generate (cover generation)
│
├── core/                     # 🧠 Core business logic (framework-independent)
│   ├── entities/             # Domain entities
│   │   └── AssignmentCover.ts
│   ├── usecases/             # Application use cases
│   │   └── generateCover.ts
│   └── services/             # Domain services
│       ├── pdfGenerator.ts
│       └── templateSelector.ts
│
├── infrastructure/           # 🏗️ Frameworks & external tools
│   ├── pdf/                  # PDF generation adapters
│   │   └── pdf-lib.adapter.ts
│   ├── storage/              # Storage adapters
│   │   └── localStorage.adapter.ts
│   └── config/               # Configuration
│       └── env.ts
│
├── interface/                # 🎨 UI & API layer
│   ├── components/           # React components
│   │   ├── InputField.tsx
│   │   ├── CoverPreview.tsx
│   │   └── GenerateButton.tsx
│   └── adapters/             # Adapters connecting core ↔ UI/API
│       └── generateCover.adapter.ts
│
├── utils/                    # Utilities
│   ├── dateFormatter.ts
│   └── validators.ts
│
└── types/                    # TypeScript types
    └── cover.d.ts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: pdf-lib
- **State Management**: Zustand (optional)
- **Testing**: Jest + React Testing Library
- **Architecture**: Clean Architecture

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/aissngment-plus.git
   cd aissngment-plus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

1. **Fill in the cover details**:
   - Course name and code
   - Assignment title
   - Submitted to (instructor name)
   - Submitted by (your name)
   - Student ID, department, section, trimester
   - Submission date

2. **Preview** (optional):
   - Click "Show Preview" to see a live preview

3. **Generate**:
   - Click "Generate Cover Page" to download your PDF

## 🧪 Running Tests

```bash
npm test
```

Run tests with coverage:
```bash
npm run test -- --coverage
```

## 🏗️ Clean Architecture Layers

### Core Layer (Business Logic)
- **Entities**: Pure domain models with validation (`AssignmentCover`)
- **Use Cases**: Application-specific business rules (`GenerateCoverUseCase`)
- **Services**: Domain services for PDF generation and template selection

### Infrastructure Layer
- **Adapters**: Implementation of core interfaces (pdf-lib adapter)
- **Config**: Environment variables and configuration
- **Storage**: LocalStorage implementation

### Interface Layer
- **Components**: React UI components
- **Adapters**: Connect UI to core use cases
- **API Routes**: Next.js API endpoints

## 📝 Example Cover Data

```typescript
{
  courseName: "Business Mathematics II",
  courseCode: "BMT 2113",
  assignmentTitle: "ASSIGNMENT - 1",
  submittedTo: "Mosabbir Ahmed",
  submittedBy: "Kaspia Tasmim Trisha",
  studentId: "1112420167",
  department: "BBA",
  section: "B",
  trimester: "Summer 2025",
  submissionDate: "06.09.2025",
  universityName: "United International University"
}
```

## 🎨 Available Templates

- **Default**: Classic blue theme
- **Modern**: Cyan and purple theme
- **Classic**: Red and gold theme

## 🔧 Configuration

Environment variables (optional):
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

## 📄 License

MIT License - feel free to use this project for your assignments!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

---

**Built with ❤️ using Clean Architecture principles**
