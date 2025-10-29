# Universities Data - JSON Format

## Structure

Each university has its own JSON file with the following structure:

```json
{
  "id": "unique-university-id",
  "name": "University Name",
  "logo": "/logos/university-logo.png",
  "schools": [
    {
      "id": "school-id",
      "name": "School/Faculty Name",
      "departments": [
        {
          "id": "dept-id",
          "name": "Department Name",
          "programs": [
            {
              "id": "program-id",
              "name": "Program Name",
              "courses": [
                {
                  "id": "course-id",
                  "code": "CSE101",
                  "name": "Course Name",
                  "instructor": "Instructor Name"
                }
              ]
            }
          ],
          "courses": [
            // Direct courses (when no programs exist)
          ]
        }
      ]
    }
  ]
}
```

## Available Universities

- **UIU** - United International University (`uiu.json`)
- **DU** - University of Dhaka (`du.json`)
- **DIU** - Dhaka International University (`diu.json`)
- **BUET** - Bangladesh University of Engineering and Technology (`buet.json`)
- **NSU** - North South University (`nsu.json`)
- **BRAC** - BRAC University (`brac.json`)

## Usage

The data is accessed through the `UniversitiesDataSource` class:

```typescript
import { UniversitiesDataSource } from './UniversitiesDataSource';

const dataSource = new UniversitiesDataSource();

// Get all universities
const universities = dataSource.getAllUniversities();

// Get schools by university ID
const schools = dataSource.getSchoolsByUniversity('uiu');

// Get specific university
const university = dataSource.getUniversityById('uiu');
```

## Adding a New University

1. Create a new JSON file: `new-university.json`
2. Follow the structure shown above
3. Add the import in `UniversitiesDataSource.ts`:
   ```typescript
   import newUniversityData from './json/new-university.json';
   ```
4. Add to the universities array in the constructor

## Benefits of JSON Structure

✅ **Separation of Concerns** - Each university in its own file  
✅ **Easy to Maintain** - Find and edit specific university data  
✅ **Scalable** - Add new universities without touching existing ones  
✅ **Version Control Friendly** - Git diffs show only changed university  
✅ **Type Safety** - TypeScript interfaces ensure data consistency  
✅ **Lazy Loading** - Can load universities on demand in the future
