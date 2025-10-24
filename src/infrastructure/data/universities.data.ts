// Data: Universities and Institutes

export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string; // Path to logo in public folder
  departments: Department[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  courses: Course[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  instructors: string[];
}

export interface Instructor {
  id: string;
  name: string;
  designation: string;
}

// Universities Database
export const UNIVERSITIES: University[] = [
  {
    id: 'uiu',
    name: 'United International University',
    shortName: 'UIU',
    logo: '/logos/uiu-logo.png',
    departments: [
      {
        id: 'sbe',
        name: 'School of Business and Economics',
        shortName: 'SBE',
        courses: [
          {
            id: 'bmt2113',
            code: 'BMT 2113',
            name: 'Business Mathematics II',
            instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan', 'Prof. Sultana Akter'],
          },
          {
            id: 'acc1013',
            code: 'ACC 1013',
            name: 'Principles of Accounting',
            instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
          },
          {
            id: 'mkt2023',
            code: 'MKT 2023',
            name: 'Principles of Marketing',
            instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
          },
          {
            id: 'fin3033',
            code: 'FIN 3033',
            name: 'Financial Management',
            instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
          },
        ],
      },
      {
        id: 'cse',
        name: 'School of Science and Engineering',
        shortName: 'CSE',
        courses: [
          {
            id: 'cse1115',
            code: 'CSE 1115',
            name: 'Object Oriented Programming',
            instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed', 'Taslima Akter'],
          },
          {
            id: 'cse2217',
            code: 'CSE 2217',
            name: 'Data Structures',
            instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
          },
          {
            id: 'cse3311',
            code: 'CSE 3311',
            name: 'Database Management Systems',
            instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
          },
        ],
      },
      {
        id: 'law',
        name: 'School of Law',
        shortName: 'LAW',
        courses: [
          {
            id: 'law1013',
            code: 'LAW 1013',
            name: 'Introduction to Law',
            instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
          },
          {
            id: 'law2023',
            code: 'LAW 2023',
            name: 'Constitutional Law',
            instructors: ['Prof. Kamal Uddin', 'Dr. Nasrin Ahmed'],
          },
        ],
      },
    ],
  },
  {
    id: 'du',
    name: 'University of Dhaka',
    shortName: 'DU',
    logo: '/logos/du-logo.png',
    departments: [
      {
        id: 'business',
        name: 'Faculty of Business Studies',
        shortName: 'FBS',
        courses: [
          {
            id: 'mba501',
            code: 'MBA 501',
            name: 'Managerial Economics',
            instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
          },
          {
            id: 'mba502',
            code: 'MBA 502',
            name: 'Organizational Behavior',
            instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
          },
        ],
      },
      {
        id: 'arts',
        name: 'Faculty of Arts',
        shortName: 'Arts',
        courses: [
          {
            id: 'eng101',
            code: 'ENG 101',
            name: 'English Literature',
            instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
          },
        ],
      },
    ],
  },
  {
    id: 'buet',
    name: 'Bangladesh University of Engineering and Technology',
    shortName: 'BUET',
    logo: '/logos/buet-logo.png',
    departments: [
      {
        id: 'eee',
        name: 'Department of Electrical and Electronic Engineering',
        shortName: 'EEE',
        courses: [
          {
            id: 'eee101',
            code: 'EEE 101',
            name: 'Basic Electrical Engineering',
            instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
          },
          {
            id: 'eee201',
            code: 'EEE 201',
            name: 'Electronic Circuits',
            instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
          },
        ],
      },
      {
        id: 'ce',
        name: 'Department of Civil Engineering',
        shortName: 'CE',
        courses: [
          {
            id: 'ce101',
            code: 'CE 101',
            name: 'Engineering Mechanics',
            instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
          },
        ],
      },
    ],
  },
  {
    id: 'nsu',
    name: 'North South University',
    shortName: 'NSU',
    logo: '/logos/nsu-logo.png',
    departments: [
      {
        id: 'cse',
        name: 'Department of Computer Science and Engineering',
        shortName: 'CSE',
        courses: [
          {
            id: 'cse115',
            code: 'CSE 115',
            name: 'Programming Language I',
            instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
          },
          {
            id: 'cse225',
            code: 'CSE 225',
            name: 'Data Structures and Algorithms',
            instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
          },
        ],
      },
    ],
  },
  {
    id: 'brac',
    name: 'BRAC University',
    shortName: 'BRACU',
    logo: '/logos/brac-logo.png',
    departments: [
      {
        id: 'bbs',
        name: 'BRAC Business School',
        shortName: 'BBS',
        courses: [
          {
            id: 'bus101',
            code: 'BUS 101',
            name: 'Introduction to Business',
            instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
          },
        ],
      },
      {
        id: 'cse',
        name: 'Department of Computer Science',
        shortName: 'CSE',
        courses: [
          {
            id: 'cse110',
            code: 'CSE 110',
            name: 'Programming Language',
            instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
          },
        ],
      },
    ],
  },
];

// Helper functions to get data
export const getUniversityById = (id: string): University | undefined => {
  return UNIVERSITIES.find((uni) => uni.id === id);
};

export const getDepartmentById = (universityId: string, departmentId: string): Department | undefined => {
  const university = getUniversityById(universityId);
  return university?.departments.find((dept) => dept.id === departmentId);
};

export const getCourseById = (
  universityId: string,
  departmentId: string,
  courseId: string
): Course | undefined => {
  const department = getDepartmentById(universityId, departmentId);
  return department?.courses.find((course) => course.id === courseId);
};

export const getAllUniversities = (): University[] => {
  return UNIVERSITIES;
};

export const getDepartmentsByUniversity = (universityId: string): Department[] => {
  const university = getUniversityById(universityId);
  return university?.departments || [];
};

export const getCoursesByDepartment = (universityId: string, departmentId: string): Course[] => {
  const department = getDepartmentById(universityId, departmentId);
  return department?.courses || [];
};
