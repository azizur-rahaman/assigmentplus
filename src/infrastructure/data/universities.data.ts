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
