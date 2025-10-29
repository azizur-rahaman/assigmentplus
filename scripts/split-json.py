#!/usr/bin/env python3
"""
Script to split university JSON files into modular structure
"""
import json
import os
from pathlib import Path

# Base path for JSON files
JSON_DIR = Path(__file__).parent.parent / 'src/features/cover-generator/data/datasources/json'

def split_university(university_file):
    """Split a university JSON file into modular structure"""
    
    # Read the university file
    with open(university_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    uni_id = data['id']
    uni_name = data['name']
    uni_short = data['shortName']
    uni_logo = data['logo']
    
    print(f"\n📚 Processing {uni_name} ({uni_id})...")
    
    # Create university directory
    uni_dir = JSON_DIR / uni_id
    uni_dir.mkdir(exist_ok=True)
    
    # Create university metadata
    uni_metadata = {
        "id": uni_id,
        "name": uni_name,
        "shortName": uni_short,
        "logo": uni_logo
    }
    
    # Create schools index
    schools_index = []
    
    # Process each school
    for school in data.get('schools', []):
        school_id = school['id']
        school_name = school['name']
        school_short = school['shortName']
        
        print(f"  🏫 {school_name} ({school_id})")
        
        # Create school directory
        school_dir = uni_dir / school_id
        school_dir.mkdir(exist_ok=True)
        
        # Create school metadata
        school_metadata = {
            "id": school_id,
            "name": school_name,
            "shortName": school_short
        }
        
        # Create departments index
        departments_index = []
        
        # Process each department
        for dept in school.get('departments', []):
            dept_id = dept['id']
            dept_name = dept['name']
            dept_short = dept['shortName']
            
            print(f"    📂 {dept_name} ({dept_id})")
            
            # Create department directory
            dept_dir = school_dir / dept_id
            dept_dir.mkdir(exist_ok=True)
            
            # Create department metadata
            dept_metadata = {
                "id": dept_id,
                "name": dept_name,
                "shortName": dept_short
            }
            
            # Extract courses - handle both direct courses and programs structure
            courses = []
            programs_list = []
            
            if 'programs' in dept and dept['programs']:
                # Department has programs (like UIU)
                for program in dept['programs']:
                    program_courses = program.get('courses', [])
                    courses.extend(program_courses)
                    programs_list.append({
                        "id": program['id'],
                        "name": program['name'],
                        "shortName": program['shortName']
                    })
                dept_metadata['programs'] = programs_list
            elif 'courses' in dept:
                # Department has courses directly (like DIU)
                courses = dept['courses']
            
            # Save department metadata
            with open(dept_dir / 'metadata.json', 'w', encoding='utf-8') as f:
                json.dump(dept_metadata, f, indent=2, ensure_ascii=False)
            
            # Save courses
            with open(dept_dir / 'courses.json', 'w', encoding='utf-8') as f:
                json.dump(courses, f, indent=2, ensure_ascii=False)
            
            if programs_list:
                print(f"      ✓ {len(programs_list)} programs, {len(courses)} total courses saved")
            else:
                print(f"      ✓ {len(courses)} courses saved")
            
            # Add to departments index
            departments_index.append({
                "id": dept_id,
                "name": dept_name,
                "shortName": dept_short
            })
        
        # Save school metadata and index
        school_metadata['departments'] = departments_index
        with open(school_dir / 'metadata.json', 'w', encoding='utf-8') as f:
            json.dump(school_metadata, f, indent=2, ensure_ascii=False)
        
        # Add to schools index
        schools_index.append({
            "id": school_id,
            "name": school_name,
            "shortName": school_short
        })
    
    # Save university metadata and index
    uni_metadata['schools'] = schools_index
    with open(uni_dir / 'metadata.json', 'w', encoding='utf-8') as f:
        json.dump(uni_metadata, f, indent=2, ensure_ascii=False)
    
    print(f"  ✅ {uni_name} complete!")

def create_global_index():
    """Create global universities index"""
    
    universities = []
    
    # Read all university metadata files
    for uni_dir in sorted(JSON_DIR.iterdir()):
        if uni_dir.is_dir() and (uni_dir / 'metadata.json').exists():
            with open(uni_dir / 'metadata.json', 'r', encoding='utf-8') as f:
                uni_data = json.load(f)
                universities.append({
                    "id": uni_data['id'],
                    "name": uni_data['name'],
                    "shortName": uni_data['shortName'],
                    "logo": uni_data['logo']
                })
    
    # Save global index
    index_data = {"universities": universities}
    with open(JSON_DIR / 'index.json', 'w', encoding='utf-8') as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n📑 Global index created with {len(universities)} universities")

def main():
    """Main function"""
    print("🚀 Starting JSON restructuring...\n")
    
    # Process all university JSON files
    university_files = [
        'uiu.json',
        'diu.json',
        'du.json',
        'buet.json',
        'nsu.json',
        'brac.json'
    ]
    
    for uni_file in university_files:
        uni_path = JSON_DIR / uni_file
        if uni_path.exists():
            split_university(uni_path)
        else:
            print(f"⚠️  {uni_file} not found, skipping...")
    
    # Create global index
    create_global_index()
    
    print("\n✨ Restructuring complete!\n")
    print("📁 New structure:")
    print("   json/")
    print("   ├── index.json")
    print("   ├── uiu/")
    print("   │   ├── metadata.json")
    print("   │   └── engineering/")
    print("   │       ├── metadata.json")
    print("   │       └── cse/")
    print("   │           ├── metadata.json")
    print("   │           └── courses.json")
    print("   └── ...")

if __name__ == '__main__':
    main()
