# Quick Start Guide - aissngment+

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

### 4. Run Tests
```bash
npm test
```

## 📝 How to Use

1. **Fill in the form** with your assignment details:
   - Course name and code (e.g., "Business Mathematics II", "BMT 2113")
   - Assignment title (e.g., "ASSIGNMENT - 1")
   - Instructor name (Submitted to)
   - Your name (Submitted by)
   - Student ID
   - Department (e.g., "BBA")
   - Section (e.g., "B")
   - Trimester (e.g., "Summer 2025")
   - Submission date (format: DD.MM.YYYY)

2. **Preview** (Optional):
   - Click "Show Preview" to see how your cover page will look

3. **Generate PDF**:
   - Click "Generate Cover Page"
   - PDF will download automatically as `assignment-cover-{your-student-id}.pdf`

## 🎨 Templates

Currently supports 3 templates:
- **Default**: Blue theme
- **Modern**: Cyan/purple theme  
- **Classic**: Red/gold theme

To change template, modify the `template` parameter in the API call (default is 'default').

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js App Router
├── core/                 # Business logic (entities, use cases, services)
├── infrastructure/       # External adapters (PDF, storage)
├── interface/            # UI components and adapters
├── utils/                # Helpers and validators
└── types/                # TypeScript types
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint

## 📦 Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- pdf-lib (PDF generation)
- Jest (Testing)

---

**Built with Clean Architecture** 🏛️
