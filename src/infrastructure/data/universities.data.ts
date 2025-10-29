// Data: Universities and Institutes

export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string; // Path to logo in public folder
  schools: School[];
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  departments: Department[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  programs?: Program[]; // Optional: for departments with sub-programs
  courses?: Course[]; // Optional: for departments without sub-programs
}

export interface Program {
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
    schools: [
      {
        id: 'sbe',
        name: 'School of Business and Economics',
        shortName: 'SoBE',
        departments: [
          {
            id: 'bba',
            name: 'Bachelor of Business Administration (BBA)',
            shortName: 'BBA',
            courses: [
              // Core Business Courses
              {
                id: 'bus1102',
                code: 'BUS 1102',
                name: 'Introduction to Business',
                instructors: ['Dr. Rahman Khan', 'Prof. Sultana Akter'],
              },
              {
                id: 'bus2112',
                code: 'BUS 2112',
                name: 'Business Communication',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'ecn2111',
                code: 'ECN 2111',
                name: 'Microeconomics',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ecn2214',
                code: 'ECN 2214',
                name: 'Macroeconomics',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'bst1308',
                code: 'BST 1308',
                name: 'Business Statistics I',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'bst2216',
                code: 'BST 2216',
                name: 'Business Statistics II',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'bmt2113',
                code: 'BMT 2113',
                name: 'Business Mathematics II',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan', 'Prof. Sultana Akter'],
              },
              {
                id: 'acn1205',
                code: 'ACN 1205',
                name: 'Financial Accounting I',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'acn1309',
                code: 'ACN 1309',
                name: 'Financial Accounting II',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'acn2215',
                code: 'ACN 2215',
                name: 'Management Accounting',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'mgt1307',
                code: 'MGT 1307',
                name: 'Principles of Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'mgt2318',
                code: 'MGT 2318',
                name: 'Organizational Behavior',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'mgt3225',
                code: 'MGT 3225',
                name: 'E-Business',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'mgt3224',
                code: 'MGT 3224',
                name: 'Production & Operations Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'mgt3122',
                code: 'MGT 3122',
                name: 'Human Resources Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'mgt4356',
                code: 'MGT 4356',
                name: 'Strategic Management',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'mkt2320',
                code: 'MKT 2320',
                name: 'Introduction to Marketing',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt3336',
                code: 'MKT 3336',
                name: 'Marketing Management',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'fin2319',
                code: 'FIN 2319',
                name: 'Principles of Finance',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin3123',
                code: 'FIN 3123',
                name: 'Managerial Finance',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'law4151',
                code: 'LAW 4151',
                name: 'Business Law',
                instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
              },
              {
                id: 'ibs3121',
                code: 'IBS 3121',
                name: 'International Business',
                instructors: ['Prof. Kamal Uddin', 'Dr. Nasrin Ahmed'],
              },
              // General Education Courses
              {
                id: 'eng1011',
                code: 'ENG 1011',
                name: 'English I',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'eng1013',
                code: 'ENG 1013',
                name: 'English II',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'bds1201',
                code: 'BDS 1201',
                name: 'History of the Emergence of Bangladesh',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'bmt1103',
                code: 'BMT 1103',
                name: 'Business Mathematics I',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'cst1206',
                code: 'CST 1206',
                name: 'Computer Applications',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'soc1105',
                code: 'SOC 1105',
                name: 'Sociology and Psychology',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'mis2218',
                code: 'MIS 2218',
                name: 'Advanced Computer Applications in Business',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'mis2220',
                code: 'MIS 2220',
                name: 'Fundamentals of Management Information Systems',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'cst2321',
                code: 'CST 2321',
                name: 'Business Analytics',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'bus3339',
                code: 'BUS 3339',
                name: 'Business Research Methodology',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              // Marketing Major Courses
              {
                id: 'mkt4203',
                code: 'MKT 4203',
                name: 'Integrated Communication',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt4101',
                code: 'MKT 4101',
                name: 'Consumer Behavior',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt4102',
                code: 'MKT 4102',
                name: 'Services Marketing',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt4204',
                code: 'MKT 4204',
                name: 'Strategic Marketing',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt4311',
                code: 'MKT 4311',
                name: 'Brand Management',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt4313',
                code: 'MKT 4313',
                name: 'Digital Marketing',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt4306',
                code: 'MKT 4306',
                name: 'Marketing Research',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt4309',
                code: 'MKT 4309',
                name: 'Global Marketing',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              // Finance Major Courses
              {
                id: 'fin4116',
                code: 'FIN 4116',
                name: 'Management of Financial Institutions',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin4117',
                code: 'FIN 4117',
                name: 'Corporate Finance',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin4218',
                code: 'FIN 4218',
                name: 'Financial Statements Analysis',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin4219',
                code: 'FIN 4219',
                name: 'Securities Analysis and Portfolio Management',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin4331',
                code: 'FIN 4331',
                name: 'Financial Modeling',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin4332',
                code: 'FIN 4332',
                name: 'Financial Technology (FinTech)',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin4322',
                code: 'FIN 4322',
                name: 'International Financial Management',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              // Accounting Major Courses
              {
                id: 'acn4135',
                code: 'ACN 4135',
                name: 'Taxation',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'acn4136',
                code: 'ACN 4136',
                name: 'Advanced Financial Accounting - I',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'acn4237',
                code: 'ACN 4237',
                name: 'Cost Accounting',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'acn4238',
                code: 'ACN 4238',
                name: 'Advanced Financial Accounting - II',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'acn4340',
                code: 'ACN 4340',
                name: 'Auditing',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              // HRM Major Courses
              {
                id: 'hrm4152',
                code: 'HRM 4152',
                name: 'Compensation Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'hrm4153',
                code: 'HRM 4153',
                name: 'Human Resource Planning',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'hrm4269',
                code: 'HRM 4269',
                name: 'Learning and Development Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'hrm4270',
                code: 'HRM 4270',
                name: 'Industrial Law and Employee Relations',
                instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
              },
              {
                id: 'hrm4366',
                code: 'HRM 4366',
                name: 'Strategic Human Resource Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              // MIS Major Courses
              {
                id: 'mis4181',
                code: 'MIS 4181',
                name: 'System Analysis & Design',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'mis4395',
                code: 'MIS 4395',
                name: 'Structured Programming Language',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'mis4385',
                code: 'MIS 4385',
                name: 'E-Commerce and Web Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'mis4388',
                code: 'MIS 4388',
                name: 'Advanced Database Management',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'mis4394',
                code: 'MIS 4394',
                name: 'Network Resource Management',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              // Supply Chain Management Courses
              {
                id: 'scm4101',
                code: 'SCM 4101',
                name: 'Introduction to Supply Chain Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'scm4103',
                code: 'SCM 4103',
                name: 'Global Sourcing and Procurement',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'scm4102',
                code: 'SCM 4102',
                name: 'Logistics Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'scm4202',
                code: 'SCM 4202',
                name: 'Enterprise Resource Planning (ERP)',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              // Business Analytics Courses
              {
                id: 'bsa4101',
                code: 'BSA 4101',
                name: 'Business Database System Development',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'bsa4102',
                code: 'BSA 4102',
                name: 'Business Data Warehousing',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'bsa4201',
                code: 'BSA 4201',
                name: 'Applied Decision Modeling',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'bsa4202',
                code: 'BSA 4202',
                name: 'Advanced Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // International Business Courses
              {
                id: 'ibs4170',
                code: 'IBS 4170',
                name: 'Legal Environment of International Business',
                instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
              },
              {
                id: 'ecn4171',
                code: 'ECN 4171',
                name: 'International Economics',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ibs4169',
                code: 'IBS 4169',
                name: 'International Management',
                instructors: ['Prof. Kamal Uddin', 'Dr. Nasrin Ahmed'],
              },
              // Entrepreneurship Courses
              {
                id: 'bie4101',
                code: 'BIE 4101',
                name: 'Small and Medium Business Entrepreneurship',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'bie4102',
                code: 'BIE 4102',
                name: 'Corporate Entrepreneurship',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'bie4201',
                code: 'BIE 4201',
                name: 'Business Plan Development',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'bie4202',
                code: 'BIE 4202',
                name: 'Business Innovation',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              // Internship
              {
                id: 'int4399',
                code: 'INT 4399',
                name: 'Internship / Project',
                instructors: ['All Faculty Members'],
              },
            ],
          },
          {
            id: 'mba',
            name: 'Master of Business Administration (MBA)',
            shortName: 'MBA',
            courses: [
              // Foundation Courses
              {
                id: 'bus501',
                code: 'BUS 501',
                name: 'Business Communications',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'acc502',
                code: 'ACC 502',
                name: 'Financial Accounting',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'bus503',
                code: 'BUS 503',
                name: 'Business Mathematics',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'bus508',
                code: 'BUS 508',
                name: 'Applied Business Statistics',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'mgt506',
                code: 'MGT 506',
                name: 'Management & Organization Behavior',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'bus507',
                code: 'BUS 507',
                name: 'Business Law',
                instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
              },
              {
                id: 'econ508',
                code: 'ECON 508',
                name: 'Micro Economics',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'econ509',
                code: 'ECON 509',
                name: 'Macro Economics',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'acc605',
                code: 'ACC 605',
                name: 'Managerial Accounting',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'mis608',
                code: 'MIS 608',
                name: 'E-Business',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // Fixed Core Courses
              {
                id: 'mkt601',
                code: 'MKT 601',
                name: 'Marketing Management',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'fin602',
                code: 'FIN 602',
                name: 'Managerial Finance',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'hrm604',
                code: 'HRM 604',
                name: 'Human Resource Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              // Flexible Core Courses
              {
                id: 'bsa640',
                code: 'BSA 640',
                name: 'Business Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'bus606',
                code: 'BUS 606',
                name: 'International Business',
                instructors: ['Prof. Kamal Uddin', 'Dr. Nasrin Ahmed'],
              },
              {
                id: 'scm620',
                code: 'SCM 620',
                name: 'Supply Chain Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'opm603',
                code: 'OPM 603',
                name: 'Operations Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'am610',
                code: 'AM 610',
                name: 'Apparel Management',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'mis640',
                code: 'MIS 640',
                name: 'Management Information Systems',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              // Integrative Course
              {
                id: 'mgt607',
                code: 'MGT 607',
                name: 'Strategic Management',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              // Finance and FinTech Concentration
              {
                id: 'fin621',
                code: 'FIN 621',
                name: 'Corporate Finance',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin623',
                code: 'FIN 623',
                name: 'Security Analysis & Portfolio Management',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin615',
                code: 'FIN 615',
                name: 'Financial Risk Management',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin638',
                code: 'FIN 638',
                name: 'Fintech',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'fin632',
                code: 'FIN 632',
                name: 'Financial Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'fin625',
                code: 'FIN 625',
                name: 'International Financial Management',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'fin626',
                code: 'FIN 626',
                name: 'Management of Financial Institutions',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'fin629',
                code: 'FIN 629',
                name: 'Financial Statement Analysis',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              // Marketing Concentration
              {
                id: 'mkt611',
                code: 'MKT 611',
                name: 'Consumer Behavior',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt619',
                code: 'MKT 619',
                name: 'Brand Management',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt615',
                code: 'MKT 615',
                name: 'Services Marketing',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt616',
                code: 'MKT 616',
                name: 'Marketing Research',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt617',
                code: 'MKT 617',
                name: 'Strategic Marketing',
                instructors: ['Prof. Ahmed Ali', 'Nasrin Sultana'],
              },
              {
                id: 'mkt612',
                code: 'MKT 612',
                name: 'Global Marketing',
                instructors: ['Dr. Rahim Sheikh', 'Ayesha Khan'],
              },
              {
                id: 'mkt621',
                code: 'MKT 621',
                name: 'Marketing Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // HRM Concentration
              {
                id: 'hrm634',
                code: 'HRM 634',
                name: 'Employee Appraisal and Compensation Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'hrm636',
                code: 'HRM 636',
                name: 'Organization Design and Development',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'hrm648',
                code: 'HRM 648',
                name: 'Learning and Development Management',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'hrm639',
                code: 'HRM 639',
                name: 'International Human Resource Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'hrm640',
                code: 'HRM 640',
                name: 'Strategic Human Resource Management',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'hrm647',
                code: 'HRM 647',
                name: 'Human Resources Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // Supply Chain Management Concentration
              {
                id: 'scm621',
                code: 'SCM 621',
                name: 'Demand Planning and Procurement Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'scm623',
                code: 'SCM 623',
                name: 'Global Supply Chain & Logistics Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'scm624',
                code: 'SCM 624',
                name: 'Supply Chain Risk Management',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'scm628',
                code: 'SCM 628',
                name: 'Supply Chain Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // MIS Concentration
              {
                id: 'mis643',
                code: 'MIS 643',
                name: 'Enterprise Resource Planning',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'mis641',
                code: 'MIS 641',
                name: 'System Analysis and Design',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'mis642',
                code: 'MIS 642',
                name: 'Database Management',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'mis646',
                code: 'MIS 646',
                name: 'Applied Artificial Intelligence',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'mis647',
                code: 'MIS 647',
                name: 'Advanced Database Management',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // Business Analytics Concentration
              {
                id: 'bsa641',
                code: 'BSA 641',
                name: 'Business Database System Development',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'bsa642',
                code: 'BSA 642',
                name: 'Business Data Warehousing',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'bsa643',
                code: 'BSA 643',
                name: 'Applied Decision Modeling',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'bsa644',
                code: 'BSA 644',
                name: 'Advanced Analytics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'bsa648',
                code: 'BSA 648',
                name: 'Big Data Analytics and Data Visualization',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'bsa650',
                code: 'BSA 650',
                name: 'Predictive Analytics for Business',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              // Professional Accounting Concentration
              {
                id: 'acc611',
                code: 'ACC 611',
                name: 'Advanced Managerial Accounting & Control System',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'acc612',
                code: 'ACC 612',
                name: 'Advanced Financial Accounting I',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'acc613',
                code: 'ACC 613',
                name: 'Advanced Financial Accounting II',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'acc663',
                code: 'ACC 663',
                name: 'Advanced Auditing and Assurance',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'acc664',
                code: 'ACC 664',
                name: 'Corporate Financial Reporting & IFRSs',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'acc667',
                code: 'ACC 667',
                name: 'Corporate Tax Accounting & Planning',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              // Bank Management Concentration
              {
                id: 'bm651',
                code: 'BM 651',
                name: 'Banking Law and Practice',
                instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
              },
              {
                id: 'bm652',
                code: 'BM 652',
                name: 'Credit Management and Bank',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'bm653',
                code: 'BM 653',
                name: 'International Trade Payment and Finance',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'bm656',
                code: 'BM 656',
                name: 'E-Banking',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'bm660',
                code: 'BM 660',
                name: 'Risk Management in Banks',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              // Open Elective Courses
              {
                id: 'bus691',
                code: 'BUS 691',
                name: 'Research Methodology',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'bus692',
                code: 'BUS 692',
                name: 'Project Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'con803',
                code: 'CON 803',
                name: 'Organization Consulting Project (OCP)',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'con802',
                code: 'CON 802',
                name: 'Dissertation',
                instructors: ['All Faculty Members'],
              },
            ],
          },
        ],
      },
      {
        id: 'sse',
        name: 'School of Science and Engineering',
        shortName: 'SSE',
        departments: [
          {
            id: 'cse',
            name: 'Department of Computer Science and Engineering',
            shortName: 'CSE',
            programs: [
              {
                id: 'bscse',
                name: 'B.Sc. in Computer Science & Engineering',
                shortName: 'BSc CSE',
                courses: [
                  // Programming Core
                  {
                    id: 'cse1110',
                    code: 'CSE 1110',
                    name: 'Introduction to Computer Systems',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse1111',
                    code: 'CSE 1111',
                    name: 'Structured Programming Language',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse1112',
                    code: 'CSE 1112',
                    name: 'Structured Programming Language Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse1115',
                    code: 'CSE 1115',
                    name: 'Object Oriented Programming',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed', 'Taslima Akter'],
                  },
                  {
                    id: 'cse1116',
                    code: 'CSE 1116',
                    name: 'Object Oriented Programming Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse2118',
                    code: 'CSE 2118',
                    name: 'Advanced Object Oriented Programming Lab',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse4165',
                    code: 'CSE 4165',
                    name: 'Web Programming',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse4181',
                    code: 'CSE 4181',
                    name: 'Mobile Application Development',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  // Hardware Courses
                  {
                    id: 'cse1325',
                    code: 'CSE 1325',
                    name: 'Digital Logic Design',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse1326',
                    code: 'CSE 1326',
                    name: 'Digital Logic Design Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse3313',
                    code: 'CSE 3313',
                    name: 'Computer Architecture',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse4325',
                    code: 'CSE 4325',
                    name: 'Microprocessors and Microcontrollers',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse4326',
                    code: 'CSE 4326',
                    name: 'Microprocessors and Microcontrollers Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  // Logics and Algorithms
                  {
                    id: 'cse2213',
                    code: 'CSE 2213',
                    name: 'Discrete Mathematics',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'cse2215',
                    code: 'CSE 2215',
                    name: 'Data Structure and Algorithms I',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse2216',
                    code: 'CSE 2216',
                    name: 'Data Structure and Algorithms I Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse2217',
                    code: 'CSE 2217',
                    name: 'Data Structure and Algorithms II',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse2218',
                    code: 'CSE 2218',
                    name: 'Data Structure and Algorithms II Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse2233',
                    code: 'CSE 2233',
                    name: 'Theory of Computation',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  // Software Engineering
                  {
                    id: 'cse3411',
                    code: 'CSE 3411',
                    name: 'System Analysis and Design',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse3412',
                    code: 'CSE 3412',
                    name: 'System Analysis and Design Laboratory',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse3421',
                    code: 'CSE 3421',
                    name: 'Software Engineering',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse3422',
                    code: 'CSE 3422',
                    name: 'Software Engineering Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  // Systems
                  {
                    id: 'cse4531',
                    code: 'CSE 4531',
                    name: 'Computer Security',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse3521',
                    code: 'CSE 3521',
                    name: 'Database Management Systems',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse3522',
                    code: 'CSE 3522',
                    name: 'Database Management Systems Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse4509',
                    code: 'CSE 4509',
                    name: 'Operating Systems',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse4510',
                    code: 'CSE 4510',
                    name: 'Operating Systems Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse3711',
                    code: 'CSE 3711',
                    name: 'Computer Networks',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse3712',
                    code: 'CSE 3712',
                    name: 'Computer Networks Laboratory',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse3811',
                    code: 'CSE 3811',
                    name: 'Artificial Intelligence',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse3812',
                    code: 'CSE 3812',
                    name: 'Artificial Intelligence Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  // Electives - Computational Theory
                  {
                    id: 'cse4601',
                    code: 'CSE 4601',
                    name: 'Mathematical Analysis for Computer Science',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'cse4633',
                    code: 'CSE 4633',
                    name: 'Basic Graph Theory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse4655',
                    code: 'CSE 4655',
                    name: 'Algorithm Engineering',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse4611',
                    code: 'CSE 4611',
                    name: 'Compiler Design',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse4621',
                    code: 'CSE 4621',
                    name: 'Computer Graphics',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  // Electives - Network and Communications
                  {
                    id: 'cse3715',
                    code: 'CSE 3715',
                    name: 'Data Communication',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse4759',
                    code: 'CSE 4759',
                    name: 'Wireless and Cellular Communication',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse4793',
                    code: 'CSE 4793',
                    name: 'Advanced Network Services and Management',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse4783',
                    code: 'CSE 4783',
                    name: 'Cryptography',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse4777',
                    code: 'CSE 4777',
                    name: 'Networks Security',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  // Electives - Data Science
                  {
                    id: 'cse4889',
                    code: 'CSE 4889',
                    name: 'Machine Learning',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse4891',
                    code: 'CSE 4891',
                    name: 'Data Mining',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse4883',
                    code: 'CSE 4883',
                    name: 'Digital Image Processing',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse4817',
                    code: 'CSE 4817',
                    name: 'Big Data Analytics',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  // Electives - Cloud & Distributed Systems
                  {
                    id: 'cse4587',
                    code: 'CSE 4587',
                    name: 'Cloud Computing',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse4519',
                    code: 'CSE 4519',
                    name: 'Distributed Systems',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse4567',
                    code: 'CSE 4567',
                    name: 'Advanced Database Management Systems',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  // Final Year Design Project
                  {
                    id: 'cse4000a',
                    code: 'CSE 4000A',
                    name: 'Final Year Design Project – I',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'cse4000b',
                    code: 'CSE 4000B',
                    name: 'Final Year Design Project – II',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'cse4000c',
                    code: 'CSE 4000C',
                    name: 'Final Year Design Project – III',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
              {
                id: 'bsds',
                name: 'B.Sc. in Data Science',
                shortName: 'BSc DS',
                courses: [
                  // Programming
                  {
                    id: 'ds1501',
                    code: 'DS 1501',
                    name: 'Programming for Data Science',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'ds1502',
                    code: 'DS 1502',
                    name: 'Programming for Data Science Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'ds1115',
                    code: 'DS 1115',
                    name: 'Object Oriented Programming for Data Science',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'ds1116',
                    code: 'DS 1116',
                    name: 'Object Oriented Programming for Data Science Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  // Foundations in Statistics
                  {
                    id: 'ds3101',
                    code: 'DS 3101',
                    name: 'Advanced Probability and Statistics',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'ds4523',
                    code: 'DS 4523',
                    name: 'Simulation and Modelling',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'ds2251',
                    code: 'DS 2251',
                    name: 'Bayesian Statistics',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  // Foundations in Computing
                  {
                    id: 'cse2213',
                    code: 'CSE 2213',
                    name: 'Discrete Mathematics',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse2215',
                    code: 'CSE 2215',
                    name: 'Data Structures and Algorithms – I',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse2216',
                    code: 'CSE 2216',
                    name: 'Data Structures and Algorithms – I Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse2217',
                    code: 'CSE 2217',
                    name: 'Data Structures and Algorithms – II',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse2218',
                    code: 'CSE 2218',
                    name: 'Data Structures and Algorithms – II Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse3521',
                    code: 'CSE 3521',
                    name: 'Database Management Systems',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse3522',
                    code: 'CSE 3522',
                    name: 'Database Management Systems Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  // Systems Optional
                  {
                    id: 'cse4511',
                    code: 'CSE 4511',
                    name: 'Operating Systems and Scripting',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse3411',
                    code: 'CSE 3411',
                    name: 'System Analysis and Design',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse3421',
                    code: 'CSE 3421',
                    name: 'Software Engineering',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse4197',
                    code: 'CSE 4197',
                    name: 'Introduction to Internet of Things (IoT)',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse4587',
                    code: 'CSE 4587',
                    name: 'Cloud Computing',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse4531',
                    code: 'CSE 4531',
                    name: 'Computer Security',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  // Data Science and Analytics
                  {
                    id: 'ds1101',
                    code: 'DS 1101',
                    name: 'Fundamentals of Data Science',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'ds3885',
                    code: 'DS 3885',
                    name: 'Data Wrangling',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'ds4217',
                    code: 'DS 4217',
                    name: 'Data Privacy and Ethics',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'ds3521',
                    code: 'DS 3521',
                    name: 'Data Visualization',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'ds3522',
                    code: 'DS 3522',
                    name: 'Data Visualization Laboratory',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'ds4891',
                    code: 'DS 4891',
                    name: 'Data Analytics',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'ds4892',
                    code: 'DS 4892',
                    name: 'Data Analytics Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'ds4889',
                    code: 'DS 4889',
                    name: 'Machine Learning',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'ds4817',
                    code: 'DS 4817',
                    name: 'Big Data',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'ds4211',
                    code: 'DS 4211',
                    name: 'Deep Learning',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'ds4491',
                    code: 'DS 4491',
                    name: 'Machine Learning Systems Design',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'ds3881',
                    code: 'DS 3881',
                    name: 'Regression and Time Series Analysis',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'ds3120',
                    code: 'DS 3120',
                    name: 'Technical Report Writing and Presentation',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  // Option I - Advanced Data Science
                  {
                    id: 'ds4213',
                    code: 'DS 4213',
                    name: 'Natural Language Processing',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'ds4215',
                    code: 'DS 4215',
                    name: 'Social Media Analytics',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'ds4821',
                    code: 'DS 4821',
                    name: 'Generative Machine Learning',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'ds4823',
                    code: 'DS 4823',
                    name: 'Reinforcement Learning',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'ds4825',
                    code: 'DS 4825',
                    name: 'Deep Learning for Computer Vision',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse3811',
                    code: 'CSE 3811',
                    name: 'Artificial Intelligence',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  // Option II - Application Areas
                  {
                    id: 'ds4115',
                    code: 'DS 4115',
                    name: 'Marketing Analytics',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'ds4117',
                    code: 'DS 4117',
                    name: 'Computational Finance',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'ds4119',
                    code: 'DS 4119',
                    name: 'Health Informatics',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'ds4123',
                    code: 'DS 4123',
                    name: 'Human Computer Interaction',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  // Capstone Project
                  {
                    id: 'ds4000a',
                    code: 'DS 4000A',
                    name: 'Capstone Project – I',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'ds4000b',
                    code: 'DS 4000B',
                    name: 'Capstone Project – II',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'ds4000c',
                    code: 'DS 4000C',
                    name: 'Capstone Project – III',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
              {
                id: 'mscse',
                name: 'M.Sc. in Computer Science & Engineering',
                shortName: 'MSc CSE',
                courses: [
                  // Core Graduate Courses
                  {
                    id: 'cse5001',
                    code: 'CSE 5001',
                    name: 'Object Oriented Programming',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse5031',
                    code: 'CSE 5031',
                    name: 'Data Structures and Algorithms',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse5005',
                    code: 'CSE 5005',
                    name: 'Database Management Systems',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse5029',
                    code: 'CSE 5029',
                    name: 'Computer Networks',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse5013',
                    code: 'CSE 5013',
                    name: 'System Analysis and Design',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse5021',
                    code: 'CSE 5021',
                    name: 'Probability and Statistics',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse5023',
                    code: 'CSE 5023',
                    name: 'Artificial Intelligence',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  // Advanced Courses
                  {
                    id: 'cse6101',
                    code: 'CSE 6101',
                    name: 'Advanced Algorithms',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse6103',
                    code: 'CSE 6103',
                    name: 'Advanced Database Systems',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse6105',
                    code: 'CSE 6105',
                    name: 'Machine Learning',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse6107',
                    code: 'CSE 6107',
                    name: 'Data Mining',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse6109',
                    code: 'CSE 6109',
                    name: 'Computer Vision',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse6111',
                    code: 'CSE 6111',
                    name: 'Natural Language Processing',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse6113',
                    code: 'CSE 6113',
                    name: 'Deep Learning',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cse6115',
                    code: 'CSE 6115',
                    name: 'Big Data Analytics',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'cse6117',
                    code: 'CSE 6117',
                    name: 'Cloud Computing',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'cse6119',
                    code: 'CSE 6119',
                    name: 'Cybersecurity',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'cse6121',
                    code: 'CSE 6121',
                    name: 'Software Architecture',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse6123',
                    code: 'CSE 6123',
                    name: 'Distributed Systems',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'cse6125',
                    code: 'CSE 6125',
                    name: 'Internet of Things (IoT)',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'cse6127',
                    code: 'CSE 6127',
                    name: 'Blockchain Technology',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'cse6129',
                    code: 'CSE 6129',
                    name: 'Network Security',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  // Thesis
                  {
                    id: 'cse6999',
                    code: 'CSE 6999',
                    name: 'Thesis',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
          {
            id: 'eee',
            name: 'Department of Electrical and Electronics Engineering',
            shortName: 'EEE',
            programs: [
              {
                id: 'bseee',
                name: 'B.Sc. in Electrical & Electronic Engineering',
                shortName: 'BSc EEE',
                courses: [
                  // Mathematics and Sciences
                  {
                    id: 'mat1205',
                    code: 'MAT 1205',
                    name: 'Differential and Integral Calculus',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'mat2201',
                    code: 'MAT 2201',
                    name: 'Linear Algebra and Fourier Analysis',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'mat2203',
                    code: 'MAT 2203',
                    name: 'Complex Variable, Laplace and Z-Transformation',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'mat3201',
                    code: 'MAT 3201',
                    name: 'Numerical Analysis',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'phy1201',
                    code: 'PHY 1201',
                    name: 'Physics I',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'phy1202',
                    code: 'PHY 1202',
                    name: 'Physics I Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'phy1207',
                    code: 'PHY 1207',
                    name: 'Physics II',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'phy1208',
                    code: 'PHY 1208',
                    name: 'Physics II Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'chem1101',
                    code: 'CHEM 1101',
                    name: 'Chemistry',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'chem1102',
                    code: 'CHEM 1102',
                    name: 'Chemistry Laboratory',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // Programming and Computer Science
                  {
                    id: 'cse1101',
                    code: 'CSE 1101',
                    name: 'Computer Programming',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'cse1102',
                    code: 'CSE 1102',
                    name: 'Computer Programming Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // Basic Electrical & Electronics
                  {
                    id: 'eee1101',
                    code: 'EEE 1101',
                    name: 'Electrical Circuits I',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee1102',
                    code: 'EEE 1102',
                    name: 'Electrical Circuits I Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee1201',
                    code: 'EEE 1201',
                    name: 'Electrical Circuits II',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eee1202',
                    code: 'EEE 1202',
                    name: 'Electrical Circuits II Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee2101',
                    code: 'EEE 2101',
                    name: 'Electronics I',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee2102',
                    code: 'EEE 2102',
                    name: 'Electronics I Laboratory',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eee2201',
                    code: 'EEE 2201',
                    name: 'Electronics II',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eee2202',
                    code: 'EEE 2202',
                    name: 'Electronics II Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // Digital Systems
                  {
                    id: 'eee2103',
                    code: 'EEE 2103',
                    name: 'Digital Logic Design',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee2104',
                    code: 'EEE 2104',
                    name: 'Digital Logic Design Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },

                  // Electromagnetic Fields
                  {
                    id: 'eee2301',
                    code: 'EEE 2301',
                    name: 'Electromagnetic Fields and Waves',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },

                  // Signals and Systems
                  {
                    id: 'eee3101',
                    code: 'EEE 3101',
                    name: 'Signals and Linear Systems',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee3102',
                    code: 'EEE 3102',
                    name: 'Signals and Linear Systems Laboratory',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },

                  // Microprocessor and Microcontroller
                  {
                    id: 'eee3201',
                    code: 'EEE 3201',
                    name: 'Microprocessors and Microcontrollers',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eee3202',
                    code: 'EEE 3202',
                    name: 'Microprocessors and Microcontrollers Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },

                  // Communication Systems
                  {
                    id: 'eee3301',
                    code: 'EEE 3301',
                    name: 'Communication Systems I',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee3302',
                    code: 'EEE 3302',
                    name: 'Communication Systems I Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee4301',
                    code: 'EEE 4301',
                    name: 'Communication Systems II',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4302',
                    code: 'EEE 4302',
                    name: 'Communication Systems II Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },

                  // Control Systems
                  {
                    id: 'eee3401',
                    code: 'EEE 3401',
                    name: 'Control Systems I',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee3402',
                    code: 'EEE 3402',
                    name: 'Control Systems I Laboratory',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4401',
                    code: 'EEE 4401',
                    name: 'Control Systems II',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // Power Systems
                  {
                    id: 'eee3501',
                    code: 'EEE 3501',
                    name: 'Electrical Machines I',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eee3502',
                    code: 'EEE 3502',
                    name: 'Electrical Machines I Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee4501',
                    code: 'EEE 4501',
                    name: 'Electrical Machines II',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee4502',
                    code: 'EEE 4502',
                    name: 'Electrical Machines II Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4503',
                    code: 'EEE 4503',
                    name: 'Power Systems I',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eee4504',
                    code: 'EEE 4504',
                    name: 'Power Systems I Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee4505',
                    code: 'EEE 4505',
                    name: 'Power Systems II',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4601',
                    code: 'EEE 4601',
                    name: 'Power Electronics',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eee4602',
                    code: 'EEE 4602',
                    name: 'Power Electronics Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },

                  // Measurement and Instrumentation
                  {
                    id: 'eee2501',
                    code: 'EEE 2501',
                    name: 'Electrical and Electronic Measurement and Instrumentation',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee2502',
                    code: 'EEE 2502',
                    name: 'Electrical and Electronic Measurement and Instrumentation Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // Digital Signal Processing
                  {
                    id: 'eee4201',
                    code: 'EEE 4201',
                    name: 'Digital Signal Processing',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4202',
                    code: 'EEE 4202',
                    name: 'Digital Signal Processing Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },

                  // Engineering Drawing & CAD
                  {
                    id: 'me1101',
                    code: 'ME 1101',
                    name: 'Engineering Drawing',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },

                  // Elective Courses - Communication Track
                  {
                    id: 'eee4303',
                    code: 'EEE 4303',
                    name: 'Wireless Communication',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4305',
                    code: 'EEE 4305',
                    name: 'Optical Fiber Communication',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eee4307',
                    code: 'EEE 4307',
                    name: 'Satellite Communication',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eee4309',
                    code: 'EEE 4309',
                    name: 'Antenna and Wave Propagation',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee4311',
                    code: 'EEE 4311',
                    name: 'Mobile and Cellular Communication',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // Elective Courses - Electronics & VLSI Track
                  {
                    id: 'eee4203',
                    code: 'EEE 4203',
                    name: 'VLSI Design',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4204',
                    code: 'EEE 4204',
                    name: 'VLSI Design Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eee4205',
                    code: 'EEE 4205',
                    name: 'Digital System Design',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee4207',
                    code: 'EEE 4207',
                    name: 'Embedded Systems',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4209',
                    code: 'EEE 4209',
                    name: 'Microelectronics',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // Elective Courses - Power & Energy Track
                  {
                    id: 'eee4507',
                    code: 'EEE 4507',
                    name: 'Renewable Energy Systems',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eee4509',
                    code: 'EEE 4509',
                    name: 'Electric Drives',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee4511',
                    code: 'EEE 4511',
                    name: 'Power System Protection',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee4513',
                    code: 'EEE 4513',
                    name: 'High Voltage Engineering',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4515',
                    code: 'EEE 4515',
                    name: 'Smart Grid Technology',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eee4517',
                    code: 'EEE 4517',
                    name: 'Power Quality',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },

                  // Elective Courses - Control & Automation Track
                  {
                    id: 'eee4403',
                    code: 'EEE 4403',
                    name: 'Digital Control Systems',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4405',
                    code: 'EEE 4405',
                    name: 'Robotics',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eee4407',
                    code: 'EEE 4407',
                    name: 'Industrial Automation',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eee4409',
                    code: 'EEE 4409',
                    name: 'Mechatronics',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // Elective Courses - Emerging Technologies
                  {
                    id: 'eee4701',
                    code: 'EEE 4701',
                    name: 'Internet of Things (IoT)',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eee4703',
                    code: 'EEE 4703',
                    name: 'Artificial Intelligence and Machine Learning',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eee4705',
                    code: 'EEE 4705',
                    name: 'Computer Networks',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eee4707',
                    code: 'EEE 4707',
                    name: 'Image Processing',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eee4709',
                    code: 'EEE 4709',
                    name: 'Biomedical Engineering',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eee4711',
                    code: 'EEE 4711',
                    name: 'Nanotechnology',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // Engineering Management
                  {
                    id: 'pmg4101',
                    code: 'PMG 4101',
                    name: 'Entrepreneurship Development',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'pmg4103',
                    code: 'PMG 4103',
                    name: 'Project Management',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eee4801',
                    code: 'EEE 4801',
                    name: 'Engineering Economics',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // General Education
                  {
                    id: 'soc2101',
                    code: 'SOC 2101',
                    name: 'Society, Environment and Engineering Ethics',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eng1011',
                    code: 'ENG 1011',
                    name: 'English I',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eng1013',
                    code: 'ENG 1013',
                    name: 'English II',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'bds1201',
                    code: 'BDS 1201',
                    name: 'History of the Emergence of Bangladesh',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },

                  // Capstone Project
                  {
                    id: 'eee4000a',
                    code: 'EEE 4000A',
                    name: 'Capstone Project I',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'eee4000b',
                    code: 'EEE 4000B',
                    name: 'Capstone Project II',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'eee4000c',
                    code: 'EEE 4000C',
                    name: 'Capstone Project III',
                    instructors: ['All Faculty Members'],
                  },

                  // Internship
                  {
                    id: 'eee4900',
                    code: 'EEE 4900',
                    name: 'Industrial Training/Internship',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
          {
            id: 'ce',
            name: 'Department of Civil Engineering',
            shortName: 'CE',
            courses: [
              // 1st Year 1st Semester
              {
                id: 'eng1011',
                code: 'ENG 1011',
                name: 'English I',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math1101',
                code: 'MATH 1101',
                name: 'Differential and Integral Calculus',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'act2111',
                code: 'ACT 2111',
                name: 'Financial and Managerial Accounting',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'chem1211',
                code: 'CHEM 1211',
                name: 'Chemistry',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'ce1201',
                code: 'CE 1201',
                name: 'Surveying',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'ce1100',
                code: 'CE 1100',
                name: 'Civil Engineering Drawing I',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'chem1212',
                code: 'CHEM 1212',
                name: 'Chemistry Lab',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'ce1202',
                code: 'CE 1202',
                name: 'Practical Surveying',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },

              // 1st Year 2nd Semester
              {
                id: 'eng1013',
                code: 'ENG 1013',
                name: 'English II',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'math1201',
                code: 'MATH 1201',
                name: 'Linear Algebra, Ordinary and Partial Differential equations',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'ce1101',
                code: 'CE 1101',
                name: 'Engineering Mechanics',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'phy1201',
                code: 'PHY 1201',
                name: 'Physics',
                instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
              },
              {
                id: 'eee1201',
                code: 'EEE 1201',
                name: 'Basic Electrical Engineering',
                instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
              },
              {
                id: 'bds1201',
                code: 'BDS 1201',
                name: 'History of the Emergence of Bangladesh',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ce1200',
                code: 'CE 1200',
                name: 'Civil Engineering Drawing II',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'phy1202',
                code: 'PHY 1202',
                name: 'Physics Lab',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },

              // 2nd Year 1st Semester
              {
                id: 'math2101',
                code: 'MATH 2101',
                name: 'Matrices and Vector Analysis',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'ce2101',
                code: 'CE 2101',
                name: 'Engineering Materials',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'ce2201',
                code: 'CE 2201',
                name: 'Engineering Geology and Geomorphology',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'ce2111',
                code: 'CE 2111',
                name: 'Mechanics of Solids I',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'ce2171',
                code: 'CE 2171',
                name: 'Fluid Mechanics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'cse2100',
                code: 'CSE 2100',
                name: 'Computer Programming Lab',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'ce2102',
                code: 'CE 2102',
                name: 'Engineering Materials Laboratory',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'ce2172',
                code: 'CE 2172',
                name: 'Fluid Mechanics Laboratory',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },

              // 2nd Year 2nd Semester
              {
                id: 'math2103',
                code: 'MATH 2103',
                name: 'Laplace Transformation, Probability and Statistics',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'ce2203',
                code: 'CE 2203',
                name: 'Numerical Analysis and Computer Programming',
                instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
              },
              {
                id: 'ce2211',
                code: 'CE 2211',
                name: 'Mechanics of Solids II',
                instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
              },
              {
                id: 'ce2271',
                code: 'CE 2271',
                name: 'Engineering Hydrology',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'eco4101',
                code: 'ECO 4101',
                name: 'Economics',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'ce2200',
                code: 'CE 2200',
                name: 'Details of Construction',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'ce2104',
                code: 'CE 2104',
                name: 'GIS and Remote Sensing Lab',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'ce2212',
                code: 'CE 2212',
                name: 'Structural Mechanics and Materials Laboratory',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },

              // 3rd Year 1st Semester
              {
                id: 'ce3111',
                code: 'CE 3111',
                name: 'Structural Analysis and Design I',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'ce3113',
                code: 'CE 3113',
                name: 'Design of Concrete Structures',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'ce3131',
                code: 'CE 3131',
                name: 'Water Supply Engineering',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'ce3241',
                code: 'CE 3241',
                name: 'Soil Mechanics',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'sdv1107',
                code: 'SDV 1107',
                name: 'Introduction to Sustainable Development',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'ce2100',
                code: 'CE 2100',
                name: 'Construction Detailing and Estimation Lab',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'ce3132',
                code: 'CE 3132',
                name: 'Environmental Engineering Laboratory',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'ce3142',
                code: 'CE 3142',
                name: 'Geotechnical Engineering Laboratory',
                instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
              },

              // 3rd Year 2nd Semester
              {
                id: 'ce3211',
                code: 'CE 3211',
                name: 'Design of Steel Structures',
                instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
              },
              {
                id: 'ce3231',
                code: 'CE 3231',
                name: 'Wastewater Engineering',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ce4141',
                code: 'CE 4141',
                name: 'Foundation Engineering',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'ce3251',
                code: 'CE 3251',
                name: 'Transportation Planning and Traffic Engineering',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'ce3171',
                code: 'CE 3171',
                name: 'Open Channel Flow',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'arch3200',
                code: 'ARCH 3200',
                name: 'Architectural, Engineering & Planning Appreciation',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'ce3112',
                code: 'CE 3112',
                name: 'Reinforced Concrete Structure Design Lab',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'ce3172',
                code: 'CE 3172',
                name: 'Open Channel Flow Laboratory',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },

              // 4th Year 1st Semester
              {
                id: 'ce3201',
                code: 'CE 3201',
                name: 'Project Planning and Construction Management',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'ce4111',
                code: 'CE 4111',
                name: 'Structural Analysis and Design II',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'ce4151',
                code: 'CE 4151',
                name: 'Highway Design and Railway Engineering',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'ce4171',
                code: 'CE 4171',
                name: 'Irrigation and Flood Control',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'ce3212',
                code: 'CE 3212',
                name: 'Steel Structures Design Lab',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'ce4152',
                code: 'CE 4152',
                name: 'Highway Materials and Traffic Engineering Design Lab',
                instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
              },
              {
                id: 'ce4000a',
                code: 'CE 4000A',
                name: 'Final Year Design Project I',
                instructors: ['All Faculty Members'],
              },

              // 4th Year 2nd Semester
              {
                id: 'ce4201',
                code: 'CE 4201',
                name: 'Engineering Ethics and Professional Practices',
                instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
              },
              {
                id: 'ce4110',
                code: 'CE 4110',
                name: 'Computer Applications in Civil Engineering',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ce4202',
                code: 'CE 4202',
                name: 'Industrial Attachment and Professional Practices',
                instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
              },
              {
                id: 'ce4000b',
                code: 'CE 4000B',
                name: 'Final Year Design Project II',
                instructors: ['All Faculty Members'],
              },

              // Optional/Elective Courses
              {
                id: 'ce4221',
                code: 'CE 4221',
                name: 'Advanced Structural Analysis',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'ce4222',
                code: 'CE 4222',
                name: 'Earthquake Engineering',
                instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'ce4223',
                code: 'CE 4223',
                name: 'Bridge Engineering',
                instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
              },
              {
                id: 'ce4224',
                code: 'CE 4224',
                name: 'Pre-stressed Concrete Design',
                instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
              },
              {
                id: 'ce4225',
                code: 'CE 4225',
                name: 'Coastal and Offshore Engineering',
                instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
              },
              {
                id: 'ce4226',
                code: 'CE 4226',
                name: 'Rock Mechanics',
                instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
              },
              {
                id: 'ce4227',
                code: 'CE 4227',
                name: 'Pavement Design and Maintenance',
                instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
              },
              {
                id: 'ce4228',
                code: 'CE 4228',
                name: 'Urban Planning and Development',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
              {
                id: 'ce4229',
                code: 'CE 4229',
                name: 'Water Resources Engineering',
                instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
              },
              {
                id: 'ce4230',
                code: 'CE 4230',
                name: 'Environmental Impact Assessment',
                instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
              },
              {
                id: 'ce4231',
                code: 'CE 4231',
                name: 'Waste Management',
                instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
              },
              {
                id: 'ce4232',
                code: 'CE 4232',
                name: 'Air Quality Management',
                instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
              },
            ],
          },
        ],
      },
      {
        id: 'sohss',
        name: 'School of Humanities and Social Sciences',
        shortName: 'SoHSS',
        departments: [
          {
            id: 'eds',
            name: 'Department of Environment and Development Studies',
            shortName: 'EDS',
            programs: [
              {
                id: 'bsseds',
                name: 'BSS in Environment and Development Studies',
                shortName: 'BSSEDS',
                courses: [
                  // Compulsory General Courses
                  {
                    id: 'eng1011',
                    code: 'ENG 1011',
                    name: 'English I',
                    instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
                  },
                  {
                    id: 'eng1013',
                    code: 'ENG 1013',
                    name: 'English II',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'soc2301',
                    code: 'SOC 2301',
                    name: 'Environmental Sociology',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'cst1101',
                    code: 'CST 1101',
                    name: 'Introduction to Computer',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bds1201',
                    code: 'BDS 1201',
                    name: 'Bangladesh Studies',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'ant2101',
                    code: 'ANT 2101',
                    name: 'Ecological Anthropology',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },

                  // Compulsory Foundation Courses
                  {
                    id: 'eds1101',
                    code: 'EDS 1101',
                    name: 'Introduction to Environmental Studies',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eds1201',
                    code: 'EDS 1201',
                    name: 'Introduction to Development Studies',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'eds2101',
                    code: 'EDS 2101',
                    name: 'Environment, Development and Sustainability',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // Core Courses
                  {
                    id: 'eds1301',
                    code: 'EDS 1301',
                    name: 'Introduction to Environmental and Natural Resource Development',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eds2201',
                    code: 'EDS 2201',
                    name: 'GIS and Remote Sensing-I',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eds1401',
                    code: 'EDS 1401',
                    name: 'Population, Poverty and the Environment',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eds2301',
                    code: 'EDS 2301',
                    name: 'Development Geography and Globalization',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eds2401',
                    code: 'EDS 2401',
                    name: 'Gender and Sustainable Development',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eds2501',
                    code: 'EDS 2501',
                    name: 'Development and Climate Change',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eds3101',
                    code: 'EDS 3101',
                    name: 'Environmental Law and Policy',
                    instructors: ['Barrister Ahmed Hassan', 'Advocate Sultana Begum'],
                  },
                  {
                    id: 'eds3201',
                    code: 'EDS 3201',
                    name: 'Quantitative Research Methodology',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'eds3301',
                    code: 'EDS 3301',
                    name: 'Political Ecology',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'eds3401',
                    code: 'EDS 3401',
                    name: 'Environmental Ethics',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'eds3501',
                    code: 'EDS 3501',
                    name: 'Environmental Issues in Bangladesh',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eds3601',
                    code: 'EDS 3601',
                    name: 'Environmental Analysis',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'stat2101',
                    code: 'STAT 2101',
                    name: 'Statistics',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'eco2201',
                    code: 'ECO 2201',
                    name: 'Development Economics',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eds1501',
                    code: 'EDS 1501',
                    name: 'Environment: Science and Society',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eds4101',
                    code: 'EDS 4101',
                    name: 'Urban Development and Environmental Management',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eds4201',
                    code: 'EDS 4201',
                    name: 'Environmental Pollution Control',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eds4301',
                    code: 'EDS 4301',
                    name: 'Environment, Health and Safety',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eds4401',
                    code: 'EDS 4401',
                    name: 'Qualitative Research Methodology',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eds4501',
                    code: 'EDS 4501',
                    name: 'GIS and Remote Sensing-II',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eds4601',
                    code: 'EDS 4601',
                    name: 'Environmental Hazards and Disaster Management',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'eds4701',
                    code: 'EDS 4701',
                    name: 'Techniques of Environmental Valuation',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'eds4801',
                    code: 'EDS 4801',
                    name: 'Environmental and Social Impact Assessment (ESIA)',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },

                  // Elective Courses
                  {
                    id: 'soc3101',
                    code: 'SOC 3101',
                    name: 'Social Inequality',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eds3701',
                    code: 'EDS 3701',
                    name: 'Environment, Conflict and Security',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'ant3101',
                    code: 'ANT 3101',
                    name: 'Cultural Ecology',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'bio3101',
                    code: 'BIO 3101',
                    name: 'Environmental Biology, Ecology and Conservation',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eds3801',
                    code: 'EDS 3801',
                    name: "People's Participation in Environmental Management",
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eco3201',
                    code: 'ECO 3201',
                    name: 'Environmental Economics',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'agr3101',
                    code: 'AGR 3101',
                    name: 'Sustainable Agriculture',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eds3901',
                    code: 'EDS 3901',
                    name: 'Environment, Development and Livelihoods',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // Individual Research/Practicum/Internship
                  {
                    id: 'eds4901',
                    code: 'EDS 4901',
                    name: 'Research Project/Monograph',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'eds4902',
                    code: 'EDS 4902',
                    name: 'Practicum and Internship',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
          {
            id: 'english',
            name: 'Department of English',
            shortName: 'ENG',
            programs: [
              {
                id: 'baenglish',
                name: 'BA in English',
                shortName: 'BA English',
                courses: [
                  // 1st Semester - Core and GED Courses
                  {
                    id: 'eng1011',
                    code: 'ENG 1011',
                    name: 'English I',
                    instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
                  },
                  {
                    id: 'eng1101',
                    code: 'ENG 1101',
                    name: 'Introduction to Literature',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'bds1201',
                    code: 'BDS 1201',
                    name: 'History of the Emergence of Bangladesh',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },

                  // 2nd Semester - Core and GED Courses
                  {
                    id: 'eng1013',
                    code: 'ENG 1013',
                    name: 'English II',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'eng1201',
                    code: 'ENG 1201',
                    name: 'Introduction to Linguistics',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'cst1101',
                    code: 'CST 1101',
                    name: 'Introduction to Computer',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // 3rd Semester - Core and GED Courses
                  {
                    id: 'eng2101',
                    code: 'ENG 2101',
                    name: 'Phonetics and Phonology',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eng2201',
                    code: 'ENG 2201',
                    name: 'Introduction to Poetry',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'eng2301',
                    code: 'ENG 2301',
                    name: 'Introduction to Drama',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'bng1101',
                    code: 'BNG 1101',
                    name: 'Bangla Language and Literature',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },

                  // 4th Semester - Core Courses
                  {
                    id: 'eng2401',
                    code: 'ENG 2401',
                    name: 'Introduction to Prose: Fiction and Non-fiction',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eng2501',
                    code: 'ENG 2501',
                    name: '16th and 17th Century Literature',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eng2601',
                    code: 'ENG 2601',
                    name: 'English for Specific Purposes',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },

                  // 5th Semester - Core Courses
                  {
                    id: 'eng3101',
                    code: 'ENG 3101',
                    name: 'Romantic Literature',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eng3201',
                    code: 'ENG 3201',
                    name: 'Victorian Prose and Poetry',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // 6th Semester - Core Courses
                  {
                    id: 'eng3301',
                    code: 'ENG 3301',
                    name: '18th Century Literature',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'eng3401',
                    code: 'ENG 3401',
                    name: 'American Literature',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'eng3501',
                    code: 'ENG 3501',
                    name: 'Shakespeare',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },

                  // 7th Semester - Core Courses
                  {
                    id: 'eng3601',
                    code: 'ENG 3601',
                    name: 'Modern Literature',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eng3701',
                    code: 'ENG 3701',
                    name: 'Postcolonial Literature',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'eng3801',
                    code: 'ENG 3801',
                    name: 'Literary Criticism and Theory',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // 8th Semester - Core Courses
                  {
                    id: 'eng4101',
                    code: 'ENG 4101',
                    name: 'Contemporary Literature',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eng4201',
                    code: 'ENG 4201',
                    name: 'World Literature',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eng4301',
                    code: 'ENG 4301',
                    name: 'Chaucer and Medieval Literature',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },

                  // 9th Semester - Core Courses
                  {
                    id: 'eng4401',
                    code: 'ENG 4401',
                    name: 'Modernism and Postmodernism',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eng4501',
                    code: 'ENG 4501',
                    name: 'South Asian Literature',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eng4601',
                    code: 'ENG 4601',
                    name: 'African Literature',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },

                  // 10th Semester - Core Courses
                  {
                    id: 'eng4701',
                    code: 'ENG 4701',
                    name: 'Restoration and 18th Century Drama',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eng4801',
                    code: 'ENG 4801',
                    name: 'Women Writers',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'eng4901',
                    code: 'ENG 4901',
                    name: 'Translation Studies',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },

                  // Elective Courses
                  {
                    id: 'eng3111',
                    code: 'ENG 3111',
                    name: 'History of English Literature',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'eng3211',
                    code: 'ENG 3211',
                    name: 'Popular Literature',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eng3311',
                    code: 'ENG 3311',
                    name: 'Creative Writing',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'eng3411',
                    code: 'ENG 3411',
                    name: 'Film Studies',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'eng3511',
                    code: 'ENG 3511',
                    name: 'Cultural Studies',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'eng3611',
                    code: 'ENG 3611',
                    name: 'Fantasy and Science Fiction',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eng3711',
                    code: 'ENG 3711',
                    name: 'Gothic Literature',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'eng3811',
                    code: 'ENG 3811',
                    name: 'Children\'s Literature',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'eng4111',
                    code: 'ENG 4111',
                    name: 'Gender Studies',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'eng4211',
                    code: 'ENG 4211',
                    name: 'Postmodern Fiction',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'eng4311',
                    code: 'ENG 4311',
                    name: 'Comparative Literature',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'eng4411',
                    code: 'ENG 4411',
                    name: 'Classical Literature',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'eng4511',
                    code: 'ENG 4511',
                    name: 'Mythology',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'eng4611',
                    code: 'ENG 4611',
                    name: 'Literature and Psychology',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'eng4711',
                    code: 'ENG 4711',
                    name: 'Travel Writing',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'eng4811',
                    code: 'ENG 4811',
                    name: 'Ecocriticism',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },

                  // Research/Project
                  {
                    id: 'eng4999',
                    code: 'ENG 4999',
                    name: 'Research Project/Thesis',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'sols',
        name: 'School of Life Sciences',
        shortName: 'SoLS',
        departments: [
          {
            id: 'pharmacy',
            name: 'Department of Pharmacy',
            shortName: 'Pharmacy',
            programs: [
              {
                id: 'bpharm',
                name: 'Bachelor of Pharmacy',
                shortName: 'B.Pharm.',
                courses: [
                  // Year 1: 1st Semester
                  {
                    id: 'pharm1101',
                    code: 'PHARM 1101',
                    name: 'Introduction to Pharmacy',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'pharm1201',
                    code: 'PHARM 1201',
                    name: 'Inorganic Pharmacy',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'pharm1202',
                    code: 'PHARM 1202',
                    name: 'Inorganic Pharmacy Laboratory',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'pharm1301',
                    code: 'PHARM 1301',
                    name: 'Organic Pharmacy',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'pharm1302',
                    code: 'PHARM 1302',
                    name: 'Organic Pharmacy Laboratory',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'eng1011',
                    code: 'ENG 1011',
                    name: 'English',
                    instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
                  },
                  {
                    id: 'math1301',
                    code: 'MATH 1301',
                    name: 'Fundamentals of Mathematics',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'cst1201',
                    code: 'CST 1201',
                    name: 'Introduction to Computer Sciences',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },

                  // Year 1: 2nd Semester
                  {
                    id: 'pharm1401',
                    code: 'PHARM 1401',
                    name: 'Physical Pharmacy-I',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'pharm1501',
                    code: 'PHARM 1501',
                    name: 'Pharmacognosy & Natural Product Chemistry-I',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'pharm1502',
                    code: 'PHARM 1502',
                    name: 'Pharmacognosy & Natural Product Chemistry-I Laboratory',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'pharm1601',
                    code: 'PHARM 1601',
                    name: 'Physiology-I',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'pharm1701',
                    code: 'PHARM 1701',
                    name: 'Basic Anatomy',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'bng1101',
                    code: 'BNG 1101',
                    name: 'Bangla Language and Literature',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'bds1201',
                    code: 'BDS 1201',
                    name: 'Bangladesh Studies',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'pharm1801',
                    code: 'PHARM 1801',
                    name: 'Oral Assessment-I',
                    instructors: ['All Faculty Members'],
                  },

                  // Year 2: 1st Semester
                  {
                    id: 'pharm2101',
                    code: 'PHARM 2101',
                    name: 'Physical Pharmacy-II',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'pharm2102',
                    code: 'PHARM 2102',
                    name: 'Physical Pharmacy-II Laboratory',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'pharm2201',
                    code: 'PHARM 2201',
                    name: 'Pharmacognosy & Natural Product Chemistry-II',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'pharm2202',
                    code: 'PHARM 2202',
                    name: 'Pharmacognosy & Natural Product Chemistry-II Laboratory',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'pharm2301',
                    code: 'PHARM 2301',
                    name: 'Physiology-II',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'pharm2302',
                    code: 'PHARM 2302',
                    name: 'Physiology-II Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'pharm2401',
                    code: 'PHARM 2401',
                    name: 'Pharmaceutical Microbiology-I',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'pharm2402',
                    code: 'PHARM 2402',
                    name: 'Pharmaceutical Microbiology-I Laboratory',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'pharm2501',
                    code: 'PHARM 2501',
                    name: 'Basic Pharmaceutics',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'stat2201',
                    code: 'STAT 2201',
                    name: 'Biostatistics',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // Year 2: 2nd Semester
                  {
                    id: 'pharm2601',
                    code: 'PHARM 2601',
                    name: 'Pharmaceutical Analysis-I',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'pharm2602',
                    code: 'PHARM 2602',
                    name: 'Pharmaceutical Analysis-I Laboratory',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'pharm2701',
                    code: 'PHARM 2701',
                    name: 'Pharmaceutical Microbiology-II',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'pharm2702',
                    code: 'PHARM 2702',
                    name: 'Pharmaceutical Microbiology-II Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'pharm2801',
                    code: 'PHARM 2801',
                    name: 'Pharmacology-I',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'pharm2901',
                    code: 'PHARM 2901',
                    name: 'Pharmaceutical Technology-I',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'pharm2902',
                    code: 'PHARM 2902',
                    name: 'Pharmaceutical Technology-I Laboratory',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'bio2101',
                    code: 'BIO 2101',
                    name: 'Biochemistry & Molecular Biology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'pharm2001',
                    code: 'PHARM 2001',
                    name: 'Oral Assessment-II',
                    instructors: ['All Faculty Members'],
                  },

                  // Year 3: 1st Semester
                  {
                    id: 'pharm3101',
                    code: 'PHARM 3101',
                    name: 'Pharmaceutical Analysis-II',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'pharm3102',
                    code: 'PHARM 3102',
                    name: 'Pharmaceutical Analysis-II Laboratory',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'pharm3201',
                    code: 'PHARM 3201',
                    name: 'Pharmacology-II',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'pharm3301',
                    code: 'PHARM 3301',
                    name: 'Medicinal Chemistry-I',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'pharm3401',
                    code: 'PHARM 3401',
                    name: 'Pharmaceutical Technology-II',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'pharm3402',
                    code: 'PHARM 3402',
                    name: 'Pharmaceutical Technology-II Laboratory',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'path3101',
                    code: 'PATH 3101',
                    name: 'Pathology and Clinical Biochemistry',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },

                  // Year 3: 2nd Semester
                  {
                    id: 'pharm3501',
                    code: 'PHARM 3501',
                    name: 'Medicinal Chemistry-II',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'pharm3601',
                    code: 'PHARM 3601',
                    name: 'Pharmaceutical Technology-III',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'pharm3602',
                    code: 'PHARM 3602',
                    name: 'Pharmaceutical Technology-III Laboratory',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'pharm3701',
                    code: 'PHARM 3701',
                    name: 'Pharmaceutical Biotechnology',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'pharm3801',
                    code: 'PHARM 3801',
                    name: 'Biopharmaceutics & Pharmacokinetics-I',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'pharm3901',
                    code: 'PHARM 3901',
                    name: 'Pharmaceutical Packaging Technology',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'pharm3001',
                    code: 'PHARM 3001',
                    name: 'Hospital, Clinical & Community Pharmacy',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'pharm3002',
                    code: 'PHARM 3002',
                    name: 'Oral Assessment-III',
                    instructors: ['All Faculty Members'],
                  },

                  // Year 4: 1st Semester
                  {
                    id: 'pharm4101',
                    code: 'PHARM 4101',
                    name: 'Medicinal Chemistry-III',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'pharm4201',
                    code: 'PHARM 4201',
                    name: 'Pharmacology-III',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'pharm4301',
                    code: 'PHARM 4301',
                    name: 'Biopharmaceutics & Pharmacokinetics-II',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'pharm4401',
                    code: 'PHARM 4401',
                    name: 'Pharmaceutical Quality Control and Validation',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'pharm4501',
                    code: 'PHARM 4501',
                    name: 'Pharmaceutical Engineering',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'pharm4601',
                    code: 'PHARM 4601',
                    name: 'Pharmacy Practice',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },

                  // Year 4: 2nd Semester
                  {
                    id: 'pharm4701',
                    code: 'PHARM 4701',
                    name: 'Pharmacology-IV',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'pharm4801',
                    code: 'PHARM 4801',
                    name: 'Cosmetology',
                    instructors: ['Dr. Md. Shahin Alam', 'Farhana Yasmin'],
                  },
                  {
                    id: 'pharm4901',
                    code: 'PHARM 4901',
                    name: 'Pharmaceutical Regulatory Affairs',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'pharm4001',
                    code: 'PHARM 4001',
                    name: 'Food Technology, Nutraceuticals and Alternative Medicines',
                    instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
                  },
                  {
                    id: 'pharm4002',
                    code: 'PHARM 4002',
                    name: 'Oral Assessment-IV',
                    instructors: ['All Faculty Members'],
                  },

                  // Training and Project
                  {
                    id: 'pharm4003',
                    code: 'PHARM 4003',
                    name: 'In-plant Training',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'pharm4999',
                    code: 'PHARM 4999',
                    name: 'Project',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'pharm4004',
                    code: 'PHARM 4004',
                    name: 'Hospital Training',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
          {
            id: 'bge',
            name: 'Department of Biotechnology and Genetic Engineering',
            shortName: 'BGE',
            programs: [
              {
                id: 'bsbge',
                name: 'B.Sc. in Biotechnology and Genetic Engineering',
                shortName: 'B.Sc. BGE',
                courses: [
                  // General Education (GED) Courses
                  {
                    id: 'eng1011',
                    code: 'ENG 1011',
                    name: 'Basic English',
                    instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
                  },
                  {
                    id: 'gst1013',
                    code: 'GST 1013',
                    name: 'History of the Emergence of Bangladesh',
                    instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
                  },
                  {
                    id: 'math1301',
                    code: 'MATH 1301',
                    name: 'Fundamentals of Mathematics',
                    instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
                  },
                  {
                    id: 'chem1101',
                    code: 'CHEM 1101',
                    name: 'Biophysical Chemistry',
                    instructors: ['Dr. Mohammad Karim', 'Sabbir Ahmed'],
                  },
                  {
                    id: 'chem1201',
                    code: 'CHEM 1201',
                    name: 'Bioorganic Chemistry',
                    instructors: ['Prof. Jahangir Alam', 'Rashed Khan'],
                  },
                  {
                    id: 'phy1101',
                    code: 'PHY 1101',
                    name: 'Physics for Biologists-I',
                    instructors: ['Dr. Farhan Rahman', 'Nusrat Jahan'],
                  },
                  {
                    id: 'phy1201',
                    code: 'PHY 1201',
                    name: 'Physics for Biologists-II',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'cst1201',
                    code: 'CST 1201',
                    name: 'Basics of Computing and Information Technology',
                    instructors: ['Dr. Mumit Khan', 'Md. Eunus Ali'],
                  },
                  {
                    id: 'cst1301',
                    code: 'CST 1301',
                    name: 'Software fundamentals in Computation',
                    instructors: ['Mosabbir Ahmed', 'Dr. Rahman Khan'],
                  },
                  {
                    id: 'stat2301',
                    code: 'STAT 2301',
                    name: 'Biostatistics',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },

                  // Core BGE Courses - Foundation
                  {
                    id: 'bge1101',
                    code: 'BGE 1101',
                    name: 'General Biology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bge1201',
                    code: 'BGE 1201',
                    name: 'Basic Biochemistry',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge1301',
                    code: 'BGE 1301',
                    name: 'Introductory Biotechnology and Genetic Engineering',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'bge1401',
                    code: 'BGE 1401',
                    name: 'Basic Microbiology',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },

                  // Molecular Level Courses
                  {
                    id: 'bge2101',
                    code: 'BGE 2101',
                    name: 'Enzymes and Enzyme Kinetics',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'bge2201',
                    code: 'BGE 2201',
                    name: 'Basics of Molecular Biology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bge2301',
                    code: 'BGE 2301',
                    name: 'Protein Structure and Function',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge2401',
                    code: 'BGE 2401',
                    name: 'Molecular Genetics',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },
                  {
                    id: 'bge3101',
                    code: 'BGE 3101',
                    name: 'Advanced Molecular Biology',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },

                  // Cellular Level Courses
                  {
                    id: 'bge2501',
                    code: 'BGE 2501',
                    name: 'Bioenergetics and Metabolism',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'bge2601',
                    code: 'BGE 2601',
                    name: 'Cell Biology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bge2701',
                    code: 'BGE 2701',
                    name: 'Human Physiology',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge3201',
                    code: 'BGE 3201',
                    name: 'Cellular Communication and Signaling',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // Techniques and Methods
                  {
                    id: 'bge2801',
                    code: 'BGE 2801',
                    name: 'Animal and Plant Tissue Culture',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'bge3301',
                    code: 'BGE 3301',
                    name: 'Recombinant DNA Technology',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'bge3401',
                    code: 'BGE 3401',
                    name: 'Methods in Biotechnology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // Specialized Areas - Genomics and Bioinformatics
                  {
                    id: 'bge3501',
                    code: 'BGE 3501',
                    name: 'Genomics, Proteomics and Bioinformatics',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge4101',
                    code: 'BGE 4101',
                    name: 'Computational Genomics and System Biology',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // Applied Biotechnology
                  {
                    id: 'bge3601',
                    code: 'BGE 3601',
                    name: 'Agriculture Biotechnology',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'bge3701',
                    code: 'BGE 3701',
                    name: 'Animal Biotechnology',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'bge3801',
                    code: 'BGE 3801',
                    name: 'Medical Biotechnology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bge4201',
                    code: 'BGE 4201',
                    name: 'Environmental Biotechnology',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge4301',
                    code: 'BGE 4301',
                    name: 'Aquaculture and Marine Biotechnology',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // Molecular Biology of Diseases
                  {
                    id: 'bge2901',
                    code: 'BGE 2901',
                    name: 'Molecular Biology of the Diseases',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },

                  // Genetics and Development
                  {
                    id: 'bge3001',
                    code: 'BGE 3001',
                    name: 'Microbial Genetics',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },
                  {
                    id: 'bge3102',
                    code: 'BGE 3102',
                    name: 'Developmental Biology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },

                  // Industrial Biotechnology
                  {
                    id: 'bge3901',
                    code: 'BGE 3901',
                    name: 'Fermentation Technology and Bioprocessing',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },
                  {
                    id: 'bge4401',
                    code: 'BGE 4401',
                    name: 'Biotechnology of Microbial System',
                    instructors: ['Prof. Abdul Mannan', 'Dr. Shahana Parveen'],
                  },

                  // Ethics and Business
                  {
                    id: 'bge4501',
                    code: 'BGE 4501',
                    name: 'GMOs, Biosafety and Bioethics',
                    instructors: ['Dr. Mohammad Hasan', 'Prof. Nasrin Akhter'],
                  },
                  {
                    id: 'bge4601',
                    code: 'BGE 4601',
                    name: 'Business Perspective of Biotechnology',
                    instructors: ['Dr. Kamrul Islam', 'Eng. Tareq Ahmed'],
                  },

                  // Immunology and Pathology
                  {
                    id: 'bge2102',
                    code: 'BGE 2102',
                    name: 'Basic Immunology',
                    instructors: ['Dr. Syed Akhter Hossain', 'Mahbubul Alam'],
                  },
                  {
                    id: 'bge4701',
                    code: 'BGE 4701',
                    name: 'Virology and Oncology',
                    instructors: ['Prof. Nabila Chowdhury', 'Dr. Shahriar Rahman'],
                  },

                  // Laboratory Courses
                  {
                    id: 'bge1501',
                    code: 'BGE 1501',
                    name: 'Lab Experiments-I',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'bge2001',
                    code: 'BGE 2001',
                    name: 'Lab Experiments-II',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'bge2202',
                    code: 'BGE 2202',
                    name: 'Lab Experiments-III',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'bge3202',
                    code: 'BGE 3202',
                    name: 'Lab Experiments-IV',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'bge4001',
                    code: 'BGE 4001',
                    name: 'Lab Experiments-V',
                    instructors: ['All Faculty Members'],
                  },

                  // Capstone
                  {
                    id: 'bge4998',
                    code: 'BGE 4998',
                    name: 'Internship',
                    instructors: ['All Faculty Members'],
                  },
                  {
                    id: 'bge4999',
                    code: 'BGE 4999',
                    name: 'Thesis/Project',
                    instructors: ['All Faculty Members'],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'law',
        name: 'School of Law',
        shortName: 'LAW',
        departments: [
          {
            id: 'llb',
            name: 'Bachelor of Laws (LLB)',
            shortName: 'LLB',
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
    ],
  },
  {
    id: 'du',
    name: 'University of Dhaka',
    shortName: 'DU',
    logo: '/logos/du-logo.png',
    schools: [
      {
        id: 'business',
        name: 'Faculty of Business Studies',
        shortName: 'FBS',
        departments: [
          {
            id: 'mba',
            name: 'MBA Program',
            shortName: 'MBA',
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
        ],
      },
      {
        id: 'arts',
        name: 'Faculty of Arts',
        shortName: 'Arts',
        departments: [
          {
            id: 'english',
            name: 'Department of English',
            shortName: 'ENG',
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
    ],
  },
  {
    id: 'buet',
    name: 'Bangladesh University of Engineering and Technology',
    shortName: 'BUET',
    logo: '/logos/buet-logo.png',
    schools: [
      {
        id: 'engineering',
        name: 'Faculty of Engineering',
        shortName: 'Engineering',
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
    ],
  },
  {
    id: 'nsu',
    name: 'North South University',
    shortName: 'NSU',
    logo: '/logos/nsu-logo.png',
    schools: [
      {
        id: 'sse',
        name: 'School of Engineering and Physical Sciences',
        shortName: 'SEPS',
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
    ],
  },
  {
    id: 'brac',
    name: 'BRAC University',
    shortName: 'BRACU',
    logo: '/logos/brac-logo.png',
    schools: [
      {
        id: 'business',
        name: 'BRAC Business School',
        shortName: 'BBS',
        departments: [
          {
            id: 'business',
            name: 'Business Programs',
            shortName: 'BUS',
            courses: [
              {
                id: 'bus101',
                code: 'BUS 101',
                name: 'Introduction to Business',
                instructors: ['Dr. Salahuddin Ahmed', 'Tahmina Khatun'],
              },
            ],
          },
        ],
      },
      {
        id: 'engineering',
        name: 'School of Engineering and Computer Science',
        shortName: 'SECS',
        departments: [
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
    ],
  },
  {
    id: 'diu',
    name: 'Dhaka International University',
    shortName: 'DIU',
    logo: '/logos/diu-logo.png',
    schools: [
      {
        id: 'fse',
        name: 'Faculty of Science and Engineering',
        shortName: 'FSE',
        departments: [
          {
            id: 'civil',
            name: 'Department of Civil Engineering',
            shortName: 'Civil',
            courses: [
              // First Year
              {
                id: 'phy101',
                code: 'PHY 101',
                name: 'Optics, Waves & Oscillation, Heat & Thermodynamics',
                instructors: ['Dr. Ahmed Rahman', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'chem101',
                code: 'CHEM 101',
                name: 'Chemistry',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              {
                id: 'math101',
                code: 'MATH 101',
                name: 'Differential and Integral Calculus',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'eng101',
                code: 'ENG 101',
                name: 'Basic English Language',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'ce101',
                code: 'CE 101',
                name: 'Civil Engineering Drawing',
                instructors: ['Eng. Sazzad Ahmed', 'Nazmin Akter'],
              },
              {
                id: 'eng102',
                code: 'ENG 102',
                name: 'Communicative English',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'phy102',
                code: 'PHY 102',
                name: 'Structure of Matter, Electricity and Magnetism and Modern Physics',
                instructors: ['Dr. Ahmed Rahman', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'math102',
                code: 'MATH 102',
                name: 'Matrices and Three-Dimensional Coordinate Geometry',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'ban101',
                code: 'BAN 101',
                name: 'Bangla Language & Literature',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'ce102',
                code: 'CE 102',
                name: 'Construction Materials',
                instructors: ['Dr. Mohammad Karim', 'Eng. Tahmina Khatun'],
              },
              {
                id: 'ce103',
                code: 'CE 103',
                name: 'Geoinformatics: Surveying',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'phy101l',
                code: 'PHY 101L',
                name: 'Engineering Physics Lab',
                instructors: ['Dr. Ahmed Rahman', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'chem101l',
                code: 'CHEM 101L',
                name: 'Inorganic Quantitative Analysis Lab',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              // Second Year
              {
                id: 'math201',
                code: 'MATH 201',
                name: 'Differential Equations and Statistics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'ce201',
                code: 'CE 201',
                name: 'Engineering Geology and Geomorphology',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Jaber Hossain'],
              },
              {
                id: 'ce202',
                code: 'CE 202',
                name: 'Mechanics of Solid I',
                instructors: ['Dr. Mohammad Karim', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ee201',
                code: 'EE 201',
                name: 'Basic Electrical Engineering',
                instructors: ['Eng. Mahmudul Hassan', 'Shagor Hasan'],
              },
              {
                id: 'ce203',
                code: 'CE 203',
                name: 'Practical Surveying',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'ce204',
                code: 'CE 204',
                name: 'Construction Materials Sessional',
                instructors: ['Dr. Mohammad Karim', 'Eng. Tahmina Khatun'],
              },
              {
                id: 'ce205',
                code: 'CE 205',
                name: 'Computer Aided Drafting',
                instructors: ['Eng. Sazzad Ahmed', 'Md. Asif'],
              },
              {
                id: 'ce206',
                code: 'CE 206',
                name: 'Details of Constructions',
                instructors: ['Dr. Salahuddin Ahmed', 'Tabassima Faria'],
              },
              {
                id: 'math202',
                code: 'MATH 202',
                name: 'Laplace Transform, Fourier and Vector Analysis',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'econ201',
                code: 'ECON 201',
                name: 'Principles of Economics',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ce207',
                code: 'CE 207',
                name: 'Mechanics of Solids II',
                instructors: ['Dr. Mohammad Karim', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ce208',
                code: 'CE 208',
                name: 'Fluid Mechanics',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              {
                id: 'math203',
                code: 'MATH 203',
                name: 'Numerical Methods',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'ce208l',
                code: 'CE 208L',
                name: 'Fluid Mechanics Sessional',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              {
                id: 'ce209',
                code: 'CE 209',
                name: 'Quantity Surveying',
                instructors: ['Eng. Sazzad Ahmed', 'Abhijeet Debnath'],
              },
              {
                id: 'ce210',
                code: 'CE 210',
                name: 'Structural Mechanics Sessional',
                instructors: ['Dr. Mohammad Karim', 'Eng. Ashraful Islam'],
              },
              {
                id: 'cse201',
                code: 'CSE 201',
                name: 'Computer Programming Sessional',
                instructors: ['Md. Asif', 'Shahin Sheikh'],
              },
              // Third Year
              {
                id: 'ce301',
                code: 'CE 301',
                name: 'Structural Analysis and Design I',
                instructors: ['Dr. Mohammad Karim', 'Eng. Saniul Haque Mahi'],
              },
              {
                id: 'ce302',
                code: 'CE 302',
                name: 'Design of Concrete Structure I',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ce303',
                code: 'CE 303',
                name: 'Environmental Engineering I',
                instructors: ['Dr. Ahmed Rahman', 'Eng. Tahmina Khatun'],
              },
              {
                id: 'ce304',
                code: 'CE 304',
                name: 'Principles of Soil Mechanics',
                instructors: ['Dr. Mohammad Karim', 'Eng. Jaber Hossain'],
              },
              {
                id: 'ce305',
                code: 'CE 305',
                name: 'Engineering Hydrology',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              {
                id: 'soc301',
                code: 'SOC 301',
                name: 'Sociology and Accounting',
                instructors: ['Dr. Habibur Rahman', 'Prof. Shamima Nasrin'],
              },
              {
                id: 'ce303l',
                code: 'CE 303L',
                name: 'Environmental Engineering Sessional',
                instructors: ['Dr. Ahmed Rahman', 'Eng. Tahmina Khatun'],
              },
              {
                id: 'ce304l',
                code: 'CE 304L',
                name: 'Geotechnical Engineering Laboratory',
                instructors: ['Dr. Mohammad Karim', 'Eng. Jaber Hossain'],
              },
              {
                id: 'ce306',
                code: 'CE 306',
                name: 'Structural Analysis and Design II',
                instructors: ['Dr. Mohammad Karim', 'Eng. Saniul Haque Mahi'],
              },
              {
                id: 'ce307',
                code: 'CE 307',
                name: 'Design of Concrete Structure II',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ce308',
                code: 'CE 308',
                name: 'Environmental Engineering II',
                instructors: ['Dr. Ahmed Rahman', 'Eng. Tahmina Khatun'],
              },
              {
                id: 'ce309',
                code: 'CE 309',
                name: 'Foundation Engineering',
                instructors: ['Dr. Mohammad Karim', 'Eng. Jaber Hossain'],
              },
              {
                id: 'ce310',
                code: 'CE 310',
                name: 'Transportation Planning and Traffic Engineering',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'ce311',
                code: 'CE 311',
                name: 'Hydraulic Engineering',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              {
                id: 'ce312',
                code: 'CE 312',
                name: 'Bridge Design Sessional',
                instructors: ['Dr. Mohammad Karim', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ce313',
                code: 'CE 313',
                name: 'Highway Materials Sessional',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'ce311l',
                code: 'CE 311L',
                name: 'Hydraulic Engineering Sessional',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              // Fourth Year
              {
                id: 'bus401',
                code: 'BUS 401',
                name: 'Business and Career Development',
                instructors: ['Dr. Habibur Rahman', 'Prof. Ahmed Ali'],
              },
              {
                id: 'ce401',
                code: 'CE 401',
                name: 'Structural Analysis and Design III',
                instructors: ['Dr. Mohammad Karim', 'Eng. Saniul Haque Mahi'],
              },
              {
                id: 'ce402',
                code: 'CE 402',
                name: 'Pavement Design and Railway Engineering',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'ce403',
                code: 'CE 403',
                name: 'Irrigation and Flood Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Robin Ali'],
              },
              {
                id: 'ce404',
                code: 'CE 404',
                name: 'Design of Steel Structures Sessional',
                instructors: ['Dr. Mohammad Karim', 'Eng. Ashraful Islam'],
              },
              {
                id: 'ce405',
                code: 'CE 405',
                name: 'Building Design Sessional',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Saniul Haque Mahi'],
              },
              {
                id: 'ce490a',
                code: 'CE 490A',
                name: 'Undergraduate Thesis',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'ce491a',
                code: 'CE 491A',
                name: 'Capstone Project',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'ce4xx1',
                code: 'CE 4XX1',
                name: 'Optional Course I (Elective)',
                instructors: ['Department Faculty'],
              },
              {
                id: 'ce4xx2',
                code: 'CE 4XX2',
                name: 'Optional Course II (Elective)',
                instructors: ['Department Faculty'],
              },
              {
                id: 'ce406',
                code: 'CE 406',
                name: 'Professional Practice, Communication and Ethics',
                instructors: ['Eng. Sazzad Ahmed', 'Dr. Mohammad Karim'],
              },
              {
                id: 'ce407',
                code: 'CE 407',
                name: 'Project Planning and Management',
                instructors: ['Dr. Salahuddin Ahmed', 'Eng. Saniul Haque Mahi'],
              },
              {
                id: 'ce408',
                code: 'CE 408',
                name: 'Pavement Design and Traffic Studies Sessional',
                instructors: ['Eng. Sazzad Ahmed', 'Mohammad Morshed'],
              },
              {
                id: 'ce490b',
                code: 'CE 490B',
                name: 'Undergraduate Thesis',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'ce491b',
                code: 'CE 491B',
                name: 'Capstone Project',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'ce4xx3',
                code: 'CE 4XX3',
                name: 'Optional Course I (Elective)',
                instructors: ['Department Faculty'],
              },
              {
                id: 'ce4xx4',
                code: 'CE 4XX4',
                name: 'Optional Course II (Elective)',
                instructors: ['Department Faculty'],
              },
              {
                id: 'ce4xx5',
                code: 'CE 4XX5',
                name: 'Optional Course III (Elective)',
                instructors: ['Department Faculty'],
              },
            ],
          },
          {
            id: 'eee',
            name: 'Department of Electrical and Electronic Engineering',
            shortName: 'EEE',
            courses: [
              // Core Electrical Circuits
              {
                id: 'eee1101',
                code: 'EEE 1101',
                name: 'Electrical Circuits I',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee1102',
                code: 'EEE 1102',
                name: 'Electrical Circuits II',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee1103',
                code: 'EEE 1103',
                name: 'Electrical Circuits Laboratory',
                instructors: ['Eng. Mahmudul Hassan', 'Shafin Shadman Ahmed'],
              },
              {
                id: 'eee1104',
                code: 'EEE 1104',
                name: 'Circuit Simulation Laboratory',
                instructors: ['Eng. Shagor Hasan', 'Fahatin Binta Faruque'],
              },
              // Electronics
              {
                id: 'eee2101',
                code: 'EEE 2101',
                name: 'Electronics I',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee2201',
                code: 'EEE 2201',
                name: 'Electronics II',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee2202',
                code: 'EEE 2202',
                name: 'Electronics Laboratory',
                instructors: ['Eng. Mahim Al Masud', 'Numayer Andalib Zaman'],
              },
              // Energy Conversion
              {
                id: 'eee2103',
                code: 'EEE 2103',
                name: 'Energy Conversion I',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              {
                id: 'eee2203',
                code: 'EEE 2203',
                name: 'Energy Conversion II',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Fahid Hasan Mojumder'],
              },
              {
                id: 'eee2204',
                code: 'EEE 2204',
                name: 'Energy Conversion Laboratory',
                instructors: ['Eng. Md. Biplob Hossain', 'Md. Fahid Hasan Mojumder'],
              },
              // Materials and Fields
              {
                id: 'eee2105',
                code: 'EEE 2105',
                name: 'Electrical Properties of Materials',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee2301',
                code: 'EEE 2301',
                name: 'Electromagnetic Fields and Waves',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              // Signals and Systems
              {
                id: 'eee2107',
                code: 'EEE 2107',
                name: 'Continuous Signals and Linear Systems',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee3201',
                code: 'EEE 3201',
                name: 'Digital Signal Processing',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee3202',
                code: 'EEE 3202',
                name: 'Digital Signal Processing Laboratory',
                instructors: ['Eng. Mahim Al Masud', 'Numayer Andalib Zaman'],
              },
              // Power Systems
              {
                id: 'eee3101',
                code: 'EEE 3101',
                name: 'Transmission and Distribution of Electrical Power',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee3103',
                code: 'EEE 3103',
                name: 'Power System Analysis',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              {
                id: 'eee3104',
                code: 'EEE 3104',
                name: 'Power System Analysis Laboratory',
                instructors: ['Eng. Md. Biplob Hossain', 'Md. Fahid Hasan Mojumder'],
              },
              {
                id: 'eee4101',
                code: 'EEE 4101',
                name: 'Power Stations and Substations',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee4103',
                code: 'EEE 4103',
                name: 'Power System Protection',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee4105',
                code: 'EEE 4105',
                name: 'High Voltage Engineering',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee4107',
                code: 'EEE 4107',
                name: 'Renewable Energy',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4109',
                code: 'EEE 4109',
                name: 'Power System Operation and Control',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              {
                id: 'eee4111',
                code: 'EEE 4111',
                name: 'Special Machines',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee4113',
                code: 'EEE 4113',
                name: 'Energy Economics',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee4115',
                code: 'EEE 4115',
                name: 'Power System Reliability',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              // Communication Engineering
              {
                id: 'eee3301',
                code: 'EEE 3301',
                name: 'Communication Engineering',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee3302',
                code: 'EEE 3302',
                name: 'Communication Engineering Laboratory',
                instructors: ['Eng. Sayed Hasan Murad', 'Numayer Andalib Zaman'],
              },
              {
                id: 'eee4301',
                code: 'EEE 4301',
                name: 'Telecommunication Engineering',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4303',
                code: 'EEE 4303',
                name: 'Optical Fiber Communication',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee4305',
                code: 'EEE 4305',
                name: 'Microwave Engineering',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee4307',
                code: 'EEE 4307',
                name: 'Wireless and Cellular Communication',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4309',
                code: 'EEE 4309',
                name: 'Satellite and Radar Communication',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              // Control Systems
              {
                id: 'eee3401',
                code: 'EEE 3401',
                name: 'Control Systems',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              {
                id: 'eee3402',
                code: 'EEE 3402',
                name: 'Control Systems Laboratory',
                instructors: ['Eng. Md. Biplob Hossain', 'Md. Fahid Hasan Mojumder'],
              },
              // Digital Systems
              {
                id: 'eee2501',
                code: 'EEE 2501',
                name: 'Digital Electronics',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee2502',
                code: 'EEE 2502',
                name: 'Digital Electronics Laboratory',
                instructors: ['Eng. Mahmudul Hassan', 'Shafin Shadman Ahmed'],
              },
              // Measurement and Instrumentation
              {
                id: 'eee3501',
                code: 'EEE 3501',
                name: 'Measurement and Instrumentation',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              // Power Electronics
              {
                id: 'eee3601',
                code: 'EEE 3601',
                name: 'Power Electronics',
                instructors: ['Dr. Abdul Based', 'Eng. Md. Biplob Hossain'],
              },
              {
                id: 'eee3602',
                code: 'EEE 3602',
                name: 'Power Electronics Laboratory',
                instructors: ['Eng. Md. Biplob Hossain', 'Md. Fahid Hasan Mojumder'],
              },
              // Microprocessor
              {
                id: 'eee3701',
                code: 'EEE 3701',
                name: 'Microprocessor and Interfacing',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee3702',
                code: 'EEE 3702',
                name: 'Microprocessor and Interfacing Laboratory',
                instructors: ['Eng. Mahim Al Masud', 'Numayer Andalib Zaman'],
              },
              {
                id: 'eee4701',
                code: 'EEE 4701',
                name: 'Microprocessor System Design',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4703',
                code: 'EEE 4703',
                name: 'Embedded System Design',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              // Engineering Drawing
              {
                id: 'eee1501',
                code: 'EEE 1501',
                name: 'Engineering Drawing & Services Design Laboratory',
                instructors: ['Eng. Mahmudul Hassan', 'Shafin Shadman Ahmed'],
              },
              // VLSI and Devices
              {
                id: 'eee4201',
                code: 'EEE 4201',
                name: 'VLSI Circuits',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4203',
                code: 'EEE 4203',
                name: 'Optoelectronic Devices',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee4205',
                code: 'EEE 4205',
                name: 'Biomedical Electronics',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee4207',
                code: 'EEE 4207',
                name: 'Solid State Devices',
                instructors: ['Dr. Abdul Based', 'Eng. Mahmudul Hassan'],
              },
              {
                id: 'eee4209',
                code: 'EEE 4209',
                name: 'Compound Semiconductor Devices',
                instructors: ['Dr. Abdul Based', 'Eng. Shagor Hasan'],
              },
              {
                id: 'eee4211',
                code: 'EEE 4211',
                name: 'Nano-Electronics and Nanotechnology',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              // Advanced Signal Processing
              {
                id: 'eee4401',
                code: 'EEE 4401',
                name: 'Random Signal Processing',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee4403',
                code: 'EEE 4403',
                name: 'Digital Filter Design',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              // Computer and Software
              {
                id: 'eee3801',
                code: 'EEE 3801',
                name: 'Web Design and Software Development Fundamentals',
                instructors: ['Eng. Mahim Al Masud', 'Numayer Andalib Zaman'],
              },
              {
                id: 'eee4501',
                code: 'EEE 4501',
                name: 'Machine Learning and Artificial Neural Network',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
              {
                id: 'eee4503',
                code: 'EEE 4503',
                name: 'Information and Coding Theory',
                instructors: ['Dr. Abdul Based', 'Eng. Sayed Hasan Murad'],
              },
              {
                id: 'eee4505',
                code: 'EEE 4505',
                name: 'Data Communication and Computer Networks',
                instructors: ['Dr. Abdul Based', 'Eng. Mahim Al Masud'],
              },
            ],
          },
          {
            id: 'cse',
            name: 'Department of Computer Science and Engineering',
            shortName: 'CSE',
            courses: [
              // Programming Fundamentals
              {
                id: 'cse1101',
                code: 'CSE 1101',
                name: 'Structured Programming Languages',
                instructors: ['Dr. Abdul Based', 'Md. Safwan Zaher Asif'],
              },
              {
                id: 'cse1102',
                code: 'CSE 1102',
                name: 'Structured Programming Languages Lab',
                instructors: ['Md. Manirujjaman', 'Anik Mahmud Shanto'],
              },
              {
                id: 'cse1201',
                code: 'CSE 1201',
                name: 'Object-Oriented Programming Languages',
                instructors: ['Dr. Abdul Based', 'Safwan Ishrak'],
              },
              {
                id: 'cse1202',
                code: 'CSE 1202',
                name: 'Object-Oriented Programming Languages Lab',
                instructors: ['Md. Habibul Basar Faruq', 'Shobnom Mushtary'],
              },
              // Data Structures and Algorithms
              {
                id: 'cse2101',
                code: 'CSE 2101',
                name: 'Data Structures',
                instructors: ['Dr. Abdul Based', 'Jayed Bin Azad'],
              },
              {
                id: 'cse2102',
                code: 'CSE 2102',
                name: 'Data Structures Lab',
                instructors: ['Md. Fazle Rabbi Rizon', 'Md. Toufiqur Rahman'],
              },
              {
                id: 'cse2201',
                code: 'CSE 2201',
                name: 'Algorithms',
                instructors: ['Dr. Abdul Based', 'Md. Safwan Zaher Asif'],
              },
              {
                id: 'cse2202',
                code: 'CSE 2202',
                name: 'Algorithms Lab',
                instructors: ['Md. Manirujjaman', 'Anik Mahmud Shanto'],
              },
              // Mathematics and Physics
              {
                id: 'phy1101',
                code: 'PHY 1101',
                name: 'Physics',
                instructors: ['Dr. Ahmed Rahman', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'phy1102',
                code: 'PHY 1102',
                name: 'Physics Lab',
                instructors: ['Dr. Ahmed Rahman', 'Prof. Nasrin Akhter'],
              },
              {
                id: 'math1101',
                code: 'MATH 1101',
                name: 'Linear Algebra and Coordinate Geometry',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math1201',
                code: 'MATH 1201',
                name: 'Differential and Integral Calculus',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math2101',
                code: 'MATH 2101',
                name: 'Discrete Mathematics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math2201',
                code: 'MATH 2201',
                name: 'Differential Equations and Vector Analysis',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math3101',
                code: 'MATH 3101',
                name: 'Statistical Methods and Probability',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math3201',
                code: 'MATH 3201',
                name: 'Complex Variables and Transforms',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math4101',
                code: 'MATH 4101',
                name: 'Numerical Analysis',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              // Electronics and Hardware
              {
                id: 'ee1201',
                code: 'EE 1201',
                name: 'Electrical Circuits',
                instructors: ['Eng. Mahmudul Hassan', 'Shagor Hasan'],
              },
              {
                id: 'ee2101',
                code: 'EE 2101',
                name: 'Electronic Devices and Circuit',
                instructors: ['Eng. Sayed Hasan Murad', 'Mahim Al Masud'],
              },
              {
                id: 'ee2102',
                code: 'EE 2102',
                name: 'Electronic Devices and Circuit Lab',
                instructors: ['Eng. Mahim Al Masud', 'Numayer Andalib Zaman'],
              },
              {
                id: 'cse2301',
                code: 'CSE 2301',
                name: 'Digital Logic Design',
                instructors: ['Dr. Abdul Based', 'Safwan Ishrak'],
              },
              {
                id: 'cse2302',
                code: 'CSE 2302',
                name: 'Digital Logic Design Lab',
                instructors: ['Md. Habibul Basar Faruq', 'Shobnom Mushtary'],
              },
              {
                id: 'cse2401',
                code: 'CSE 2401',
                name: 'Computer Architecture',
                instructors: ['Dr. Abdul Based', 'Jayed Bin Azad'],
              },
              {
                id: 'cse3301',
                code: 'CSE 3301',
                name: 'Microprocessor and Assembly Language',
                instructors: ['Dr. Abdul Based', 'Md. Fazle Rabbi Rizon'],
              },
              {
                id: 'cse3302',
                code: 'CSE 3302',
                name: 'Microprocessor and Assembly Language Lab',
                instructors: ['Md. Toufiqur Rahman', 'Md. Safwan Zaher Asif'],
              },
              // Chemistry
              {
                id: 'chem1101',
                code: 'CHEM 1101',
                name: 'Chemistry',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              // English and Communication
              {
                id: 'eng1101',
                code: 'ENG 1101',
                name: 'Communicative English',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'eng4101',
                code: 'ENG 4101',
                name: 'Technical Writing and Presentation',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              // Engineering Drawing
              {
                id: 'eng1201',
                code: 'ENG 1201',
                name: 'Engineering Drawing Lab',
                instructors: ['Md. Manirujjaman', 'Anik Mahmud Shanto'],
              },
              // Bangladesh Studies
              {
                id: 'ban1101',
                code: 'BAN 1101',
                name: 'Bangladesh Studies',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              // Business and Management
              {
                id: 'econ1101',
                code: 'ECON 1101',
                name: 'Engineering Economics',
                instructors: ['Dr. Habibur Rahman', 'Prof. Ahmed Ali'],
              },
              {
                id: 'acc1101',
                code: 'ACC 1101',
                name: 'Financial and Managerial Accounting',
                instructors: ['Dr. Kamal Hossain', 'Fatima Rahman'],
              },
              {
                id: 'bus2101',
                code: 'BUS 2101',
                name: 'Business Strategy Management',
                instructors: ['Dr. Habibur Rahman', 'Prof. Ahmed Ali'],
              },
              {
                id: 'bus4501',
                code: 'BUS 4501',
                name: 'Entrepreneurship: Innovation and Commercialization',
                instructors: ['Dr. Salahuddin Ahmed', 'Prof. Ahmed Ali'],
              },
              // Ethics and Professional
              {
                id: 'eth2101',
                code: 'ETH 2101',
                name: 'Professional Ethics and Environmental Protection',
                instructors: ['Dr. Abdul Based', 'Prof. Sultana Begum'],
              },
              // Compiler Design
              {
                id: 'cse3401',
                code: 'CSE 3401',
                name: 'Compiler Design',
                instructors: ['Dr. Abdul Based', 'Safwan Ishrak'],
              },
              // Operating Systems
              {
                id: 'cse3101',
                code: 'CSE 3101',
                name: 'Operating System',
                instructors: ['Dr. Abdul Based', 'Md. Habibul Basar Faruq'],
              },
              {
                id: 'cse3102',
                code: 'CSE 3102',
                name: 'Operating System Lab',
                instructors: ['Shobnom Mushtary', 'Jayed Bin Azad'],
              },
              // Networking and Communication
              {
                id: 'cse3201',
                code: 'CSE 3201',
                name: 'Data Communication',
                instructors: ['Dr. Abdul Based', 'Md. Fazle Rabbi Rizon'],
              },
              {
                id: 'cse3501',
                code: 'CSE 3501',
                name: 'Computer Networking',
                instructors: ['Dr. Abdul Based', 'Md. Toufiqur Rahman'],
              },
              {
                id: 'cse3502',
                code: 'CSE 3502',
                name: 'Computer Networking Lab',
                instructors: ['Md. Safwan Zaher Asif', 'Md. Manirujjaman'],
              },
              // Database Systems
              {
                id: 'cse3601',
                code: 'CSE 3601',
                name: 'Database Management System',
                instructors: ['Dr. Abdul Based', 'Anik Mahmud Shanto'],
              },
              {
                id: 'cse3602',
                code: 'CSE 3602',
                name: 'Database Management Systems Lab',
                instructors: ['Safwan Ishrak', 'Md. Habibul Basar Faruq'],
              },
              // Software Engineering
              {
                id: 'cse3701',
                code: 'CSE 3701',
                name: 'Software Engineering',
                instructors: ['Dr. Abdul Based', 'Shobnom Mushtary'],
              },
              {
                id: 'cse4201',
                code: 'CSE 4201',
                name: 'Software Development Management',
                instructors: ['Dr. Abdul Based', 'Jayed Bin Azad'],
              },
              {
                id: 'cse4202',
                code: 'CSE 4202',
                name: 'Software Development Management Lab',
                instructors: ['Md. Fazle Rabbi Rizon', 'Md. Toufiqur Rahman'],
              },
              {
                id: 'cse4301',
                code: 'CSE 4301',
                name: 'Software Testing and Quality Assurance',
                instructors: ['Dr. Abdul Based', 'Md. Safwan Zaher Asif'],
              },
              {
                id: 'cse4302',
                code: 'CSE 4302',
                name: 'Software Testing and Quality Assurance Lab',
                instructors: ['Md. Manirujjaman', 'Anik Mahmud Shanto'],
              },
              {
                id: 'cse4401',
                code: 'CSE 4401',
                name: 'Software Integration and Maintenance',
                instructors: ['Dr. Abdul Based', 'Safwan Ishrak'],
              },
              // Web and Markup
              {
                id: 'cse3801',
                code: 'CSE 3801',
                name: 'Markup and Scripting Languages',
                instructors: ['Dr. Abdul Based', 'Md. Habibul Basar Faruq'],
              },
              {
                id: 'cse3802',
                code: 'CSE 3802',
                name: 'Markup and Scripting Languages Lab',
                instructors: ['Shobnom Mushtary', 'Jayed Bin Azad'],
              },
              // Security
              {
                id: 'cse4501',
                code: 'CSE 4501',
                name: 'Computer and Cyber Security',
                instructors: ['Dr. Abdul Based', 'Md. Fazle Rabbi Rizon'],
              },
              // System Configuration
              {
                id: 'cse4601',
                code: 'CSE 4601',
                name: 'System Configuration and Performance Evaluation Lab',
                instructors: ['Md. Toufiqur Rahman', 'Md. Safwan Zaher Asif'],
              },
              // Information Systems
              {
                id: 'cse3901',
                code: 'CSE 3901',
                name: 'Information System Management',
                instructors: ['Dr. Abdul Based', 'Md. Manirujjaman'],
              },
              // Artificial Intelligence
              {
                id: 'cse4701',
                code: 'CSE 4701',
                name: 'Artificial Intelligence',
                instructors: ['Dr. Abdul Based', 'Anik Mahmud Shanto'],
              },
              {
                id: 'cse4702',
                code: 'CSE 4702',
                name: 'Artificial Intelligence Lab',
                instructors: ['Safwan Ishrak', 'Md. Habibul Basar Faruq'],
              },
              // Graphics and Multimedia
              {
                id: 'cse4801',
                code: 'CSE 4801',
                name: 'Computer Graphics and Multimedia',
                instructors: ['Dr. Abdul Based', 'Shobnom Mushtary'],
              },
              {
                id: 'cse4802',
                code: 'CSE 4802',
                name: 'Computer Graphics and Multimedia Lab',
                instructors: ['Jayed Bin Azad', 'Md. Fazle Rabbi Rizon'],
              },
              // Mobile Development
              {
                id: 'cse4901',
                code: 'CSE 4901',
                name: 'Mobile Application and Development',
                instructors: ['Dr. Abdul Based', 'Md. Toufiqur Rahman'],
              },
              {
                id: 'cse4902',
                code: 'CSE 4902',
                name: 'Mobile Application and Development Lab',
                instructors: ['Md. Safwan Zaher Asif', 'Md. Manirujjaman'],
              },
              // Capstone Project
              {
                id: 'cse4990',
                code: 'CSE 4990',
                name: 'Capstone Project Design',
                instructors: ['All Faculty Members'],
              },
              // Elective Courses
              {
                id: 'cse4xx1',
                code: 'CSE 4XX1',
                name: 'Elective Course 1',
                instructors: ['Department Faculty'],
              },
              {
                id: 'cse4xx2',
                code: 'CSE 4XX2',
                name: 'Elective Course 2',
                instructors: ['Department Faculty'],
              },
              {
                id: 'cse4xx3',
                code: 'CSE 4XX3',
                name: 'Elective Course 3',
                instructors: ['Department Faculty'],
              },
              {
                id: 'cse4xx4',
                code: 'CSE 4XX4',
                name: 'Elective Course 4',
                instructors: ['Department Faculty'],
              },
            ],
          },
          {
            id: 'pharmacy',
            name: 'Department of Pharmacy',
            shortName: 'Pharmacy',
            courses: [
              // First Year - First Semester
              {
                id: 'phar1101',
                code: 'PHAR 1101',
                name: 'Introduction to Pharmacy',
                instructors: ['Md. Akbar Hossain', 'Rana Ahmed'],
              },
              {
                id: 'phar1102',
                code: 'PHAR 1102',
                name: 'Inorganic Pharmacy-I',
                instructors: ['Dr. Shimul Halder', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar1103',
                code: 'PHAR 1103',
                name: 'Inorganic Pharmacy-I Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar1104',
                code: 'PHAR 1104',
                name: 'Physical Pharmacy-I',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar1105',
                code: 'PHAR 1105',
                name: 'Physical Pharmacy-I Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'ban1101',
                code: 'BAN 1101',
                name: 'Bengali Language & Literature',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'eng1101',
                code: 'ENG 1101',
                name: 'Basic English Language',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'cse1101',
                code: 'CSE 1101',
                name: 'Fundamentals of Computer',
                instructors: ['Md. Safwan Zaher Asif', 'Md. Manirujjaman'],
              },
              {
                id: 'cse1102',
                code: 'CSE 1102',
                name: 'Fundamentals of Computer Lab',
                instructors: ['Anik Mahmud Shanto', 'Safwan Ishrak'],
              },
              // First Year - Second Semester
              {
                id: 'phar1201',
                code: 'PHAR 1201',
                name: 'Inorganic Pharmacy-II',
                instructors: ['Dr. Shimul Halder', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar1202',
                code: 'PHAR 1202',
                name: 'Inorganic Pharmacy-II Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar1203',
                code: 'PHAR 1203',
                name: 'Organic Pharmacy-I',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar1204',
                code: 'PHAR 1204',
                name: 'Organic Pharmacy-I Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar1205',
                code: 'PHAR 1205',
                name: 'Physical Pharmacy-II',
                instructors: ['Md. Akbar Hossain', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar1206',
                code: 'PHAR 1206',
                name: 'Physical Pharmacy-II Lab',
                instructors: ['Farhana Rahman Trisha', 'Rana Ahmed'],
              },
              {
                id: 'phar1207',
                code: 'PHAR 1207',
                name: 'Pharmacognosy-I',
                instructors: ['Dr. Shimul Halder', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar1208',
                code: 'PHAR 1208',
                name: 'Pharmacognosy-I Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'ban1201',
                code: 'BAN 1201',
                name: 'History of The Emergence of Independent Bangladesh',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              // Second Year - First Semester
              {
                id: 'phar2101',
                code: 'PHAR 2101',
                name: 'Organic Pharmacy-II',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar2102',
                code: 'PHAR 2102',
                name: 'Organic Pharmacy-II Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar2103',
                code: 'PHAR 2103',
                name: 'Pharmacognosy-II',
                instructors: ['Dr. Shimul Halder', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar2104',
                code: 'PHAR 2104',
                name: 'Pharmacognosy-II Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar2105',
                code: 'PHAR 2105',
                name: 'Basic Anatomy and Physiology',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar2106',
                code: 'PHAR 2106',
                name: 'Pharmaceutical Microbiology-I',
                instructors: ['Dr. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'phar2107',
                code: 'PHAR 2107',
                name: 'Pharmaceutical Microbiology-I Lab',
                instructors: ['Alfi Anjum Rashid', 'Taslima Akter Tisha'],
              },
              {
                id: 'phar2108',
                code: 'PHAR 2108',
                name: 'Nutraceuticals, Dietary Supplements & Herbal Products',
                instructors: ['Md. Akbar Hossain', 'Rana Ahmed'],
              },
              {
                id: 'math2101',
                code: 'MATH 2101',
                name: 'Mathematics & Biostatistics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              // Second Year - Second Semester
              {
                id: 'phar2201',
                code: 'PHAR 2201',
                name: 'Physiology-I',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar2202',
                code: 'PHAR 2202',
                name: 'Physiology-I Lab',
                instructors: ['Farhana Rahman Trisha', 'Rana Ahmed'],
              },
              {
                id: 'phar2203',
                code: 'PHAR 2203',
                name: 'Pharmaceutical Microbiology-II',
                instructors: ['Dr. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'phar2204',
                code: 'PHAR 2204',
                name: 'Pharmaceutical Technology-I',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar2205',
                code: 'PHAR 2205',
                name: 'Pharmaceutical Technology-I Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar2206',
                code: 'PHAR 2206',
                name: 'Pharmacology-I',
                instructors: ['Dr. Shimul Halder', 'Adiba Firuj'],
              },
              {
                id: 'phar2207',
                code: 'PHAR 2207',
                name: 'Pharmacology-I Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar2208',
                code: 'PHAR 2208',
                name: 'Pharmaceutical Biotechnology',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              // Third Year - First Semester
              {
                id: 'phar3101',
                code: 'PHAR 3101',
                name: 'Biochemistry & Cellular Biology',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'phar3102',
                code: 'PHAR 3102',
                name: 'Biochemistry & Cellular Biology-Lab',
                instructors: ['Ovi Sikder', 'Zitu Barman'],
              },
              {
                id: 'phar3103',
                code: 'PHAR 3103',
                name: 'Physiology-II',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar3104',
                code: 'PHAR 3104',
                name: 'Physiology-II Lab',
                instructors: ['Farhana Rahman Trisha', 'Rana Ahmed'],
              },
              {
                id: 'phar3105',
                code: 'PHAR 3105',
                name: 'Pharmaceutical Analysis-I',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar3106',
                code: 'PHAR 3106',
                name: 'Pharmaceutical Analysis-I Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar3107',
                code: 'PHAR 3107',
                name: 'Pharmaceutical Technology-II',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar3108',
                code: 'PHAR 3108',
                name: 'Pharmaceutical Technology-II Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar3109',
                code: 'PHAR 3109',
                name: 'Pharmacology-II',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar3110',
                code: 'PHAR 3110',
                name: 'Pharmacology-II Lab',
                instructors: ['Farhana Rahman Trisha', 'Rana Ahmed'],
              },
              // Third Year - Second Semester
              {
                id: 'phar3201',
                code: 'PHAR 3201',
                name: 'Medicinal Chemistry-I',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar3202',
                code: 'PHAR 3202',
                name: 'Medicinal Chemistry-I Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar3203',
                code: 'PHAR 3203',
                name: 'Pharmaceutical Analysis-II',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar3204',
                code: 'PHAR 3204',
                name: 'Pharmaceutical Analysis-II Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar3205',
                code: 'PHAR 3205',
                name: 'Pharmaceutical Technology-III',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar3206',
                code: 'PHAR 3206',
                name: 'Pharmaceutical Technology-III Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar3207',
                code: 'PHAR 3207',
                name: 'Pharmacology-III',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar3208',
                code: 'PHAR 3208',
                name: 'Pharmacology-III Lab',
                instructors: ['Farhana Rahman Trisha', 'Rana Ahmed'],
              },
              // Fourth Year - First Semester
              {
                id: 'phar4101',
                code: 'PHAR 4101',
                name: 'Medicinal Chemistry-II',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar4102',
                code: 'PHAR 4102',
                name: 'Medicinal Chemistry-II Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar4103',
                code: 'PHAR 4103',
                name: 'Hospital & Community Pharmacy',
                instructors: ['Md. Akbar Hossain', 'Adiba Firuj'],
              },
              {
                id: 'phar4104',
                code: 'PHAR 4104',
                name: 'Clinical Pathology',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar4105',
                code: 'PHAR 4105',
                name: 'Pharmaceutical Analysis-III',
                instructors: ['Md. Akbar Hossain', 'Md. Hamedul Islam'],
              },
              {
                id: 'phar4106',
                code: 'PHAR 4106',
                name: 'Pharmaceutical Analysis-III Lab',
                instructors: ['Progga Paramita Paul', 'Rana Ahmed'],
              },
              {
                id: 'phar4107',
                code: 'PHAR 4107',
                name: 'Medicinal Chemistry-III',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar4108',
                code: 'PHAR 4108',
                name: 'Biopharmaceutics & Pharmacokinetics-I',
                instructors: ['Dr. Shimul Halder', 'Adiba Firuj'],
              },
              {
                id: 'phar4109',
                code: 'PHAR 4109',
                name: 'Biopharmaceutics & Pharmacokinetics-I Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar4110',
                code: 'PHAR 4110',
                name: 'Pharmaceutical Engineering',
                instructors: ['Md. Akbar Hossain', 'As-Sazzad Mahmud'],
              },
              // Fourth Year - Second Semester
              {
                id: 'phar4201',
                code: 'PHAR 4201',
                name: 'Clinical Pharmacy',
                instructors: ['Dr. Shimul Halder', 'Md. Akbar Hossain'],
              },
              {
                id: 'phar4202',
                code: 'PHAR 4202',
                name: 'Cosmetology',
                instructors: ['Md. Akbar Hossain', 'Tasnim Shammi'],
              },
              {
                id: 'phar4203',
                code: 'PHAR 4203',
                name: 'Cosmetology-Lab',
                instructors: ['Khadija Akhter Poly', 'Adiba Firuj'],
              },
              {
                id: 'phar4204',
                code: 'PHAR 4204',
                name: 'Advanced Pharmacology & Toxicology',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'phar4205',
                code: 'PHAR 4205',
                name: 'Biopharmaceutics & Pharmacokinetics-II',
                instructors: ['Dr. Shimul Halder', 'Adiba Firuj'],
              },
              {
                id: 'phar4206',
                code: 'PHAR 4206',
                name: 'Biopharmaceutics & Pharmacokinetics-II Lab',
                instructors: ['Md. Hamedul Islam', 'Progga Paramita Paul'],
              },
              {
                id: 'phar4207',
                code: 'PHAR 4207',
                name: 'Pharmaceutical Quality Control & Analytical Method Validation',
                instructors: ['Md. Akbar Hossain', 'Md. Mizanur Rahman'],
              },
              {
                id: 'phar4208',
                code: 'PHAR 4208',
                name: 'Pharmaceutical Quality Control & Analytical Method Validation Lab',
                instructors: ['Tasnim Shammi', 'Khadija Akhter Poly'],
              },
              {
                id: 'phar4209',
                code: 'PHAR 4209',
                name: 'Pharmaceutical Regulatory Affairs',
                instructors: ['Md. Akbar Hossain', 'Farhana Rahman Trisha'],
              },
              {
                id: 'phar4210',
                code: 'PHAR 4210',
                name: 'Pharmaceutical Marketing & Management',
                instructors: ['Md. Akbar Hossain', 'Rana Ahmed'],
              },
              {
                id: 'phar4990',
                code: 'PHAR 4990',
                name: 'Project',
                instructors: ['All Faculty Members'],
              },
              {
                id: 'phar4991',
                code: 'PHAR 4991',
                name: 'In-Plant Training',
                instructors: ['All Faculty Members'],
              },
            ],
          },
          {
            id: 'microbiology',
            name: 'Department of Microbiology',
            shortName: 'Microbiology',
            courses: [
              // Core Microbiology Courses
              {
                id: 'mbio1101',
                code: 'MBIO 1101',
                name: 'General Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio1102',
                code: 'MBIO 1102',
                name: 'Basic Techniques in Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio1103',
                code: 'MBIO 1103',
                name: 'Microbial Diversity and Ecology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio1104',
                code: 'MBIO 1104',
                name: 'Microbiology Lab-I',
                instructors: ['Shamim Khandaker', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio1201',
                code: 'MBIO 1201',
                name: 'Bacteriology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio1202',
                code: 'MBIO 1202',
                name: 'Microbiology Lab-II',
                instructors: ['Alfi Anjum Rashid', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio2101',
                code: 'MBIO 2101',
                name: 'Microbial Metabolism: Catabolic Pathways',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio2102',
                code: 'MBIO 2102',
                name: 'Environmental Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio2103',
                code: 'MBIO 2103',
                name: 'Agricultural Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio2104',
                code: 'MBIO 2104',
                name: 'Microbiology Lab-III',
                instructors: ['Shamim Khandaker', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio2201',
                code: 'MBIO 2201',
                name: 'Applied Mycology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio2202',
                code: 'MBIO 2202',
                name: 'Medical Microbiology-I',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio2203',
                code: 'MBIO 2203',
                name: 'Food Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio2204',
                code: 'MBIO 2204',
                name: 'Microbiology Lab-IV',
                instructors: ['Shamim Khandaker', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio3101',
                code: 'MBIO 3101',
                name: 'Microbial Metabolism: Anabolic Pathways',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio3102',
                code: 'MBIO 3102',
                name: 'Medical Microbiology-II',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio3103',
                code: 'MBIO 3103',
                name: 'Industrial Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio3104',
                code: 'MBIO 3104',
                name: 'Microbiology Lab-V',
                instructors: ['Shamim Khandaker', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio3201',
                code: 'MBIO 3201',
                name: 'Virology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio3202',
                code: 'MBIO 3202',
                name: 'Immunology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio3203',
                code: 'MBIO 3203',
                name: 'Fermentation Technology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio3204',
                code: 'MBIO 3204',
                name: 'Pharmaceutical Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio3205',
                code: 'MBIO 3205',
                name: 'Quality Control of Food and Agricultural Products',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio3206',
                code: 'MBIO 3206',
                name: 'Microbiology Lab-VI',
                instructors: ['Shamim Khandaker', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio4101',
                code: 'MBIO 4101',
                name: 'Advanced Virology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio4102',
                code: 'MBIO 4102',
                name: 'Advanced Immunology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio4103',
                code: 'MBIO 4103',
                name: 'Analytical Techniques in Life Sciences',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio4104',
                code: 'MBIO 4104',
                name: 'Epidemiology, Public Health and Bioethics',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio4105',
                code: 'MBIO 4105',
                name: 'Microbiology Lab-VII',
                instructors: ['Alfi Anjum Rashid', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio4201',
                code: 'MBIO 4201',
                name: 'Antibiotics: Mechanisms of Actions and Bacterial Resistance',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'mbio4202',
                code: 'MBIO 4202',
                name: 'Environmental Pollution and Bioremediation',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio4203',
                code: 'MBIO 4203',
                name: 'Clinical and Diagnostic Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Taslima Akter Tisha'],
              },
              {
                id: 'mbio4204',
                code: 'MBIO 4204',
                name: 'Microbiology Lab-VIII',
                instructors: ['Shamim Khandaker', 'Alfi Anjum Rashid'],
              },
              {
                id: 'mbio4990',
                code: 'MBIO 4990',
                name: 'Research Project',
                instructors: ['All Faculty Members'],
              },
              // Supporting Courses - Biochemistry and Cell Biology
              {
                id: 'bio1201',
                code: 'BIO 1201',
                name: 'Fundamental Biochemistry',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bio1301',
                code: 'BIO 1301',
                name: 'Human Physiology',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'bio2101',
                code: 'BIO 2101',
                name: 'Basic Concept of Genetics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bio2201',
                code: 'BIO 2201',
                name: 'Enzymes and Bioenergetics',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bio3101',
                code: 'BIO 3101',
                name: 'Cell Biology',
                instructors: ['Dr. Tania Mannan', 'Zitu Barman'],
              },
              {
                id: 'bio3102',
                code: 'BIO 3102',
                name: 'Biosafety and Biosecurity',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'bio3201',
                code: 'BIO 3201',
                name: 'Molecular Biology',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bio3202',
                code: 'BIO 3202',
                name: 'Genomics and Bioinformatics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bio4101',
                code: 'BIO 4101',
                name: 'Biotechnology and Genetic Engineering',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              // Basic Sciences and Mathematics
              {
                id: 'cse1101',
                code: 'CSE 1101',
                name: 'Computer Fundamentals',
                instructors: ['Md. Safwan Zaher Asif', 'Md. Manirujjaman'],
              },
              {
                id: 'cse1201',
                code: 'CSE 1201',
                name: 'Computer Programming',
                instructors: ['Anik Mahmud Shanto', 'Safwan Ishrak'],
              },
              {
                id: 'eng1101',
                code: 'ENG 1101',
                name: 'Basic English',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'chem1101',
                code: 'CHEM 1101',
                name: 'Fundamental Chemistry',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              {
                id: 'chem1102',
                code: 'CHEM 1102',
                name: 'Chemistry Lab',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              {
                id: 'chem2101',
                code: 'CHEM 2101',
                name: 'Biologically Important Organic Compounds',
                instructors: ['Dr. Kamal Hossain', 'Prof. Fatima Rahman'],
              },
              {
                id: 'ban1101',
                code: 'BAN 1101',
                name: 'Bengali Language and Literature',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'ban1201',
                code: 'BAN 1201',
                name: 'History of Emergence of Bangladesh',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'math1101',
                code: 'MATH 1101',
                name: 'Mathematics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'math2101',
                code: 'MATH 2101',
                name: 'Biostatistics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'res4101',
                code: 'RES 4101',
                name: 'Scientific Research Methodology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Dr. Tania Mannan'],
              },
            ],
          },
          {
            id: 'bmb',
            name: 'Department of Biochemistry and Molecular Biology',
            shortName: 'BMB',
            courses: [
              // Core Biochemistry Courses
              {
                id: 'bmb1101',
                code: 'BMB 1101',
                name: 'Introductory Biochemistry I',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb1102',
                code: 'BMB 1102',
                name: 'Introductory Molecular Biology',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb1103',
                code: 'BMB 1103',
                name: 'Biophysical Chemistry',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bmb1104',
                code: 'BMB 1104',
                name: 'Bioorganic Chemistry',
                instructors: ['Dr. Tania Mannan', 'Zitu Barman'],
              },
              {
                id: 'bmb1105',
                code: 'BMB 1105',
                name: 'Biochemistry & Molecular Biology Lab I',
                instructors: ['Dr. Amelia Ferdaus Sara', 'Md. Shahed Alam'],
              },
              {
                id: 'bmb1201',
                code: 'BMB 1201',
                name: 'Introductory Biochemistry II',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb1202',
                code: 'BMB 1202',
                name: 'Reaction Mechanisms',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb1203',
                code: 'BMB 1203',
                name: 'Biochemistry & Molecular Biology Lab II',
                instructors: ['Ovi Sikder', 'Zitu Barman'],
              },
              // Metabolism Courses
              {
                id: 'bmb2101',
                code: 'BMB 2101',
                name: 'Metabolism I',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb2102',
                code: 'BMB 2102',
                name: 'Enzymes & Bioenergetics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb2103',
                code: 'BMB 2103',
                name: 'Biochemistry & Molecular Biology Lab III',
                instructors: ['Ovi Sikder', 'Md. Rejaul Islam'],
              },
              {
                id: 'bmb2201',
                code: 'BMB 2201',
                name: 'Metabolism II',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb2202',
                code: 'BMB 2202',
                name: 'Biochemistry & Molecular Biology Lab IV',
                instructors: ['Zitu Barman', 'Md. Shahed Alam'],
              },
              // Molecular Biology Courses
              {
                id: 'bmb2104',
                code: 'BMB 2104',
                name: 'Molecular Biology I',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb2203',
                code: 'BMB 2203',
                name: 'Molecular Biology II',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb2204',
                code: 'BMB 2204',
                name: 'Molecular Genetics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              // Physiology and Microbiology
              {
                id: 'bmb2105',
                code: 'BMB 2105',
                name: 'Human Physiology I',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'bmb2106',
                code: 'BMB 2106',
                name: 'Microbiology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'bmb2107',
                code: 'BMB 2107',
                name: 'Microbiology Lab',
                instructors: ['Alfi Anjum Rashid', 'Taslima Akter Tisha'],
              },
              {
                id: 'bmb2205',
                code: 'BMB 2205',
                name: 'Human Physiology II',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              // Nutrition and Immunology
              {
                id: 'bmb3101',
                code: 'BMB 3101',
                name: 'Nutritional Biochemistry I',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bmb3102',
                code: 'BMB 3102',
                name: 'Immunology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Alfi Anjum Rashid'],
              },
              {
                id: 'bmb3103',
                code: 'BMB 3103',
                name: 'Endocrinology',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb3104',
                code: 'BMB 3104',
                name: 'Biochemistry & Molecular Biology Lab V',
                instructors: ['Zitu Barman', 'Md. Rejaul Islam'],
              },
              {
                id: 'bmb3201',
                code: 'BMB 3201',
                name: 'Nutritional Biochemistry II',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bmb3202',
                code: 'BMB 3202',
                name: 'Advanced Immunology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'bmb3203',
                code: 'BMB 3203',
                name: 'Plant Biochemistry',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb3204',
                code: 'BMB 3204',
                name: 'Chemistry of Natural Products',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              // Biotechnology and Applied Sciences
              {
                id: 'bmb3205',
                code: 'BMB 3205',
                name: 'Biotechnology & Genetic Engineering',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb3206',
                code: 'BMB 3206',
                name: 'Pharmaceutical Sciences',
                instructors: ['Md. Akbar Hossain', 'Dr. Shimul Halder'],
              },
              {
                id: 'bmb3207',
                code: 'BMB 3207',
                name: 'Biochemistry & Molecular Biology Lab VI',
                instructors: ['Ovi Sikder', 'Md. Shahed Alam'],
              },
              // Cell Biology and Clinical Sciences
              {
                id: 'bmb4101',
                code: 'BMB 4101',
                name: 'Cell Biology I',
                instructors: ['Dr. Tania Mannan', 'Zitu Barman'],
              },
              {
                id: 'bmb4102',
                code: 'BMB 4102',
                name: 'Clinical Biochemistry I',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb4103',
                code: 'BMB 4103',
                name: 'Virology',
                instructors: ['Dr. Md. Asaduzzaman Shishir', 'Shamim Khandaker'],
              },
              {
                id: 'bmb4104',
                code: 'BMB 4104',
                name: 'Genomics and Proteomics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb4105',
                code: 'BMB 4105',
                name: 'Industrial Biotechnology',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bmb4106',
                code: 'BMB 4106',
                name: 'Biochemistry & Molecular Biology Lab VII',
                instructors: ['Md. Rejaul Islam', 'Zitu Barman'],
              },
              {
                id: 'bmb4201',
                code: 'BMB 4201',
                name: 'Cell Biology II',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb4202',
                code: 'BMB 4202',
                name: 'Clinical Biochemistry II',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb4203',
                code: 'BMB 4203',
                name: 'Cancer Biology',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
              {
                id: 'bmb4204',
                code: 'BMB 4204',
                name: 'Neurochemistry',
                instructors: ['Dr. Tania Mannan', 'Ovi Sikder'],
              },
              {
                id: 'bmb4205',
                code: 'BMB 4205',
                name: 'Bioinformatics',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'bmb4990',
                code: 'BMB 4990',
                name: 'Capstone Project Design',
                instructors: ['All Faculty Members'],
              },
              // General Education Courses
              {
                id: 'ban1101',
                code: 'BAN 1101',
                name: 'Bengali Language and Literature',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'eng1101',
                code: 'ENG 1101',
                name: 'Basic English',
                instructors: ['Prof. Sultana Begum', 'Dr. Ashraf Ali'],
              },
              {
                id: 'bot1101',
                code: 'BOT 1101',
                name: 'Botany',
                instructors: ['Dr. Tania Mannan', 'Md. Shameem Ali'],
              },
              {
                id: 'zoo1101',
                code: 'ZOO 1101',
                name: 'Zoology',
                instructors: ['Dr. Shimul Halder', 'As-Sazzad Mahmud'],
              },
              {
                id: 'cse1101',
                code: 'CSE 1101',
                name: 'Computer Fundamentals',
                instructors: ['Md. Safwan Zaher Asif', 'Md. Manirujjaman'],
              },
              {
                id: 'cse1102',
                code: 'CSE 1102',
                name: 'Computer Fundamentals Lab',
                instructors: ['Anik Mahmud Shanto', 'Safwan Ishrak'],
              },
              // Mathematics and Statistics
              {
                id: 'math1101',
                code: 'MATH 1101',
                name: 'Mathematics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'stat1101',
                code: 'STAT 1101',
                name: 'Basic Statistics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'stat2101',
                code: 'STAT 2101',
                name: 'Biostatistics',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              {
                id: 'stat2102',
                code: 'STAT 2102',
                name: 'Biostatistics Lab',
                instructors: ['Prof. Anisul Haque', 'Dr. Rowshan Ara'],
              },
              // Professional and Research Courses
              {
                id: 'ban1201',
                code: 'BAN 1201',
                name: 'History of Emergence of Bangladesh',
                instructors: ['Prof. Habibur Rahman', 'Dr. Shamima Nasrin'],
              },
              {
                id: 'eth3101',
                code: 'ETH 3101',
                name: 'Professional Ethics',
                instructors: ['Dr. Tania Mannan', 'Prof. Sultana Begum'],
              },
              {
                id: 'res4101',
                code: 'RES 4101',
                name: 'Research Methodology',
                instructors: ['Dr. Tania Mannan', 'Dr. Amelia Ferdaus Sara'],
              },
            ],
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

export const getSchoolById = (universityId: string, schoolId: string): School | undefined => {
  const university = getUniversityById(universityId);
  return university?.schools.find((school) => school.id === schoolId);
};

export const getDepartmentById = (
  universityId: string,
  schoolId: string,
  departmentId: string
): Department | undefined => {
  const school = getSchoolById(universityId, schoolId);
  return school?.departments.find((dept) => dept.id === departmentId);
};

export const getProgramById = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
): Program | undefined => {
  const department = getDepartmentById(universityId, schoolId, departmentId);
  return department?.programs?.find((prog) => prog.id === programId);
};

export const getCourseById = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  courseId: string,
  programId?: string
): Course | undefined => {
  const department = getDepartmentById(universityId, schoolId, departmentId);
  
  // If department has programs, search within the program
  if (department?.programs && programId) {
    const program = department.programs.find((prog) => prog.id === programId);
    return program?.courses.find((course) => course.id === courseId);
  }
  
  // If department has direct courses
  return department?.courses?.find((course) => course.id === courseId);
};

export const getAllUniversities = (): University[] => {
  return UNIVERSITIES;
};

export const getSchoolsByUniversity = (universityId: string): School[] => {
  const university = getUniversityById(universityId);
  return university?.schools || [];
};

export const getDepartmentsBySchool = (universityId: string, schoolId: string): Department[] => {
  const school = getSchoolById(universityId, schoolId);
  return school?.departments || [];
};

export const getProgramsByDepartment = (
  universityId: string,
  schoolId: string,
  departmentId: string
): Program[] => {
  const department = getDepartmentById(universityId, schoolId, departmentId);
  return department?.programs || [];
};

export const getCoursesByDepartment = (
  universityId: string,
  schoolId: string,
  departmentId: string
): Course[] => {
  const department = getDepartmentById(universityId, schoolId, departmentId);
  return department?.courses || [];
};

export const getCoursesByProgram = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
): Course[] => {
  const program = getProgramById(universityId, schoolId, departmentId, programId);
  return program?.courses || [];
};

// Check if a department has programs
export const departmentHasPrograms = (
  universityId: string,
  schoolId: string,
  departmentId: string
): boolean => {
  const department = getDepartmentById(universityId, schoolId, departmentId);
  return !!department?.programs && department.programs.length > 0;
};
