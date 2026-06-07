// =====================================================
//   DUMMY DATA – Computer Institute Management System
// =====================================================

const DATA = {

  institute: {
    name: "TechPro Institute of Computer Education",
    short: "TechPro Institute",
    tagline: "Empowering Careers Through Technology",
    established: 2010,
    phone: "+91 98765 43210",
    email: "info@techproinstitute.edu.in",
    address: "123, IT Park, Sector 18, Noida, Uttar Pradesh – 201301",
    website: "www.techproinstitute.edu.in",
    stats: {
      students: 45820,
      centers: 320,
      courses: 48,
      placed: 38500,
      states: 24,
      years: 15
    }
  },

  courses: [
    { id: "c001", code: "DCA", name: "Diploma in Computer Applications", duration: "6 Months", fee: 8500, level: "Basic", category: "Diploma", description: "Comprehensive course covering MS Office, Internet, and basic programming fundamentals.", syllabus: ["MS Word", "MS Excel", "MS PowerPoint", "Internet & Email", "Typing"], seats: 40, enrolled: 35, image: "dca.jpg", popular: true },
    { id: "c002", code: "ADCA", name: "Advanced Diploma in Computer Applications", duration: "12 Months", fee: 15000, level: "Advanced", category: "Diploma", description: "Advanced computer applications with Tally, DTP and web design.", syllabus: ["DCA Modules", "Tally Prime", "CorelDRAW", "Photoshop", "HTML/CSS", "C Language"], seats: 35, enrolled: 30, image: "adca.jpg", popular: true },
    { id: "c003", code: "TALLY", name: "Tally Prime with GST", duration: "3 Months", fee: 5000, level: "Basic", category: "Accounting", description: "Complete accounting software training with GST filing.", syllabus: ["Tally Prime", "GST Accounting", "Invoicing", "Inventory", "Reports"], seats: 30, enrolled: 28, image: "tally.jpg", popular: true },
    { id: "c004", code: "WD", name: "Web Development", duration: "6 Months", fee: 12000, level: "Intermediate", category: "Programming", description: "Modern web development with HTML, CSS, JavaScript and React.", syllabus: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js Basics", "MySQL"], seats: 25, enrolled: 22, image: "webdev.jpg", popular: false },
    { id: "c005", code: "PY", name: "Python Programming", duration: "4 Months", fee: 9000, level: "Intermediate", category: "Programming", description: "Python language from basics to advanced with data science intro.", syllabus: ["Python Basics", "OOP", "File Handling", "Django Intro", "Data Science"], seats: 30, enrolled: 25, image: "python.jpg", popular: true },
    { id: "c006", code: "GD", name: "Graphic Design", duration: "3 Months", fee: 7000, level: "Basic", category: "Design", description: "Professional graphic design using industry-standard tools.", syllabus: ["Photoshop", "Illustrator", "CorelDRAW", "Logo Design", "Print Media"], seats: 20, enrolled: 18, image: "gd.jpg", popular: false },
    { id: "c007", code: "DTP", name: "Desktop Publishing", duration: "2 Months", fee: 4000, level: "Basic", category: "Design", description: "Publishing and layout design for print media.", syllabus: ["PageMaker", "CorelDRAW", "Photoshop", "Printing"], seats: 25, enrolled: 20, image: "dtp.jpg", popular: false },
    { id: "c008", code: "CCC", name: "Course on Computer Concepts", duration: "3 Months", fee: 3500, level: "Basic", category: "Certificate", description: "NIELIT certified computer concepts course.", syllabus: ["Computer Fundamentals", "Windows", "MS Office", "Internet"], seats: 40, enrolled: 38, image: "ccc.jpg", popular: true },
    { id: "c009", code: "CYBER", name: "Cyber Security Basics", duration: "4 Months", fee: 11000, level: "Intermediate", category: "IT Security", description: "Introduction to cybersecurity, ethical hacking and network security.", syllabus: ["Network Fundamentals", "Linux Basics", "Ethical Hacking", "Firewalls", "Cryptography"], seats: 20, enrolled: 15, image: "cyber.jpg", popular: false },
    { id: "c010", code: "VIDEO", name: "Video Editing & Production", duration: "3 Months", fee: 8000, level: "Basic", category: "Multimedia", description: "Video production, editing and YouTube content creation.", syllabus: ["Premiere Pro", "After Effects", "Color Grading", "YouTube SEO"], seats: 20, enrolled: 17, image: "video.jpg", popular: false }
  ],

  students: [
    { id: "STU001", rollNo: "R2024001", name: "Aarav Sharma", dob: "2003-04-15", gender: "Male", mobile: "9876543201", email: "aarav@email.com", course: "DCA", centerId: "FC001", centerName: "TechPro Noida", admissionDate: "2024-01-10", status: "Active", photo: null, address: "Sector 12, Noida", marks: { theory: 78, practical: 85, total: 163, max: 200, percent: 81.5, grade: "A" } },
    { id: "STU002", rollNo: "R2024002", name: "Priya Patel", dob: "2002-07-22", gender: "Female", mobile: "9876543202", email: "priya@email.com", course: "ADCA", centerId: "FC002", centerName: "TechPro Delhi", admissionDate: "2024-01-12", status: "Active", photo: null, address: "Laxmi Nagar, Delhi", marks: { theory: 88, practical: 92, total: 180, max: 200, percent: 90, grade: "A+" } },
    { id: "STU003", rollNo: "R2023015", name: "Rohit Kumar", dob: "2001-11-05", gender: "Male", mobile: "9876543203", email: "rohit@email.com", course: "TALLY", centerId: "FC001", centerName: "TechPro Noida", admissionDate: "2023-07-05", status: "Passed", photo: null, address: "Ghaziabad, UP", marks: { theory: 72, practical: 80, total: 152, max: 200, percent: 76, grade: "B+" } },
    { id: "STU004", rollNo: "R2024003", name: "Sneha Singh", dob: "2003-02-18", gender: "Female", mobile: "9876543204", email: "sneha@email.com", course: "WD", centerId: "FC003", centerName: "TechPro Agra", admissionDate: "2024-02-01", status: "Active", photo: null, address: "Agra, UP", marks: { theory: 91, practical: 95, total: 186, max: 200, percent: 93, grade: "A+" } },
    { id: "STU005", rollNo: "R2023020", name: "Vikash Yadav", dob: "2000-09-12", gender: "Male", mobile: "9876543205", email: "vikash@email.com", course: "PY", centerId: "FC002", centerName: "TechPro Delhi", admissionDate: "2023-09-01", status: "Passed", photo: null, address: "East Delhi", marks: { theory: 65, practical: 70, total: 135, max: 200, percent: 67.5, grade: "B" } },
    { id: "STU006", rollNo: "R2024004", name: "Anjali Gupta", dob: "2004-01-30", gender: "Female", mobile: "9876543206", email: "anjali@email.com", course: "GD", centerId: "FC004", centerName: "TechPro Lucknow", admissionDate: "2024-03-15", status: "Active", photo: null, address: "Gomti Nagar, Lucknow", marks: { theory: 82, practical: 88, total: 170, max: 200, percent: 85, grade: "A" } },
    { id: "STU007", rollNo: "R2023025", name: "Amit Tiwari", dob: "2001-06-07", gender: "Male", mobile: "9876543207", email: "amit@email.com", course: "CCC", centerId: "FC005", centerName: "TechPro Kanpur", admissionDate: "2023-06-01", status: "Passed", photo: null, address: "Kanpur, UP", marks: { theory: 70, practical: 75, total: 145, max: 200, percent: 72.5, grade: "B+" } },
    { id: "STU008", rollNo: "R2024005", name: "Kavya Mishra", dob: "2002-12-25", gender: "Female", mobile: "9876543208", email: "kavya@email.com", course: "CYBER", centerId: "FC001", centerName: "TechPro Noida", admissionDate: "2024-04-01", status: "Active", photo: null, address: "Vaishali, Ghaziabad", marks: { theory: 85, practical: 90, total: 175, max: 200, percent: 87.5, grade: "A" } }
  ],

  certificates: [
    { id: "CERT2024001", studentId: "STU003", studentName: "Rohit Kumar", rollNo: "R2023015", course: "Tally Prime with GST", centerName: "TechPro Noida", issueDate: "2024-01-15", expiryDate: "2029-01-14", status: "Approved", grade: "B+", percent: 76 },
    { id: "CERT2024002", studentId: "STU005", studentName: "Vikash Yadav", rollNo: "R2023020", course: "Python Programming", centerName: "TechPro Delhi", issueDate: "2024-02-20", expiryDate: "2029-02-19", status: "Approved", grade: "B", percent: 67.5 },
    { id: "CERT2024003", studentId: "STU007", studentName: "Amit Tiwari", rollNo: "R2023025", course: "Course on Computer Concepts", centerName: "TechPro Kanpur", issueDate: "2024-01-10", expiryDate: "2029-01-09", status: "Approved", grade: "B+", percent: 72.5 },
    { id: "CERT2024004", studentId: "STU001", studentName: "Aarav Sharma", rollNo: "R2024001", course: "Diploma in Computer Applications", centerName: "TechPro Noida", issueDate: null, expiryDate: null, status: "Pending", grade: "A", percent: 81.5 },
    { id: "CERT2024005", studentId: "STU004", studentName: "Sneha Singh", rollNo: "R2024003", course: "Web Development", centerName: "TechPro Agra", issueDate: null, expiryDate: null, status: "Under Review", grade: "A+", percent: 93 }
  ],

  marksheets: [
    { id: "MRK2024001", studentId: "STU003", studentName: "Rohit Kumar", rollNo: "R2023015", course: "Tally Prime with GST", centerName: "TechPro Noida", issueDate: "2023-12-30", status: "Approved", subjects: [{ name: "Tally Fundamentals", maxMarks: 50, obtained: 38, grade: "B+" }, { name: "GST Accounting", maxMarks: 50, obtained: 36, grade: "B+" }, { name: "Inventory Management", maxMarks: 50, obtained: 40, grade: "A" }, { name: "Practical Exam", maxMarks: 50, obtained: 40, grade: "A" }], total: 154, maxTotal: 200, percent: 77, result: "Pass", grade: "B+" },
    { id: "MRK2024002", studentId: "STU005", studentName: "Vikash Yadav", rollNo: "R2023020", course: "Python Programming", centerName: "TechPro Delhi", issueDate: "2024-01-20", status: "Approved", subjects: [{ name: "Python Basics", maxMarks: 50, obtained: 35, grade: "B+" }, { name: "OOP Concepts", maxMarks: 50, obtained: 32, grade: "B" }, { name: "File Handling & Libraries", maxMarks: 50, obtained: 33, grade: "B" }, { name: "Practical Project", maxMarks: 50, obtained: 35, grade: "B+" }], total: 135, maxTotal: 200, percent: 67.5, result: "Pass", grade: "B" },
    { id: "MRK2024003", studentId: "STU007", studentName: "Amit Tiwari", rollNo: "R2023025", course: "Course on Computer Concepts", centerName: "TechPro Kanpur", issueDate: "2023-12-15", status: "Approved", subjects: [{ name: "Computer Fundamentals", maxMarks: 50, obtained: 38, grade: "A" }, { name: "MS Office", maxMarks: 50, obtained: 36, grade: "B+" }, { name: "Internet & Security", maxMarks: 50, obtained: 34, grade: "B+" }, { name: "Practical Exam", maxMarks: 50, obtained: 37, grade: "A" }], total: 145, maxTotal: 200, percent: 72.5, result: "Pass", grade: "B+" }
  ],

  franchiseCenters: [
    { id: "FC001", code: "NDA001", name: "TechPro Noida", owner: "Rajesh Verma", mobile: "9811223344", email: "noida@techpro.edu.in", address: "A-45, Sector 18, Noida, UP", city: "Noida", state: "Uttar Pradesh", pincode: "201301", status: "Active", established: "2015-03-10", students: 342, courses: 8, rating: 4.8, revenue: 285000 },
    { id: "FC002", code: "DEL002", name: "TechPro Laxmi Nagar", owner: "Sunita Arora", mobile: "9911223344", email: "laxminagar@techpro.edu.in", address: "B-12, Vikas Marg, Laxmi Nagar, Delhi", city: "Delhi", state: "Delhi", pincode: "110092", status: "Active", established: "2016-06-20", students: 285, courses: 7, rating: 4.6, revenue: 240000 },
    { id: "FC003", code: "AGR003", name: "TechPro Agra", owner: "Mahesh Gupta", mobile: "9711223344", email: "agra@techpro.edu.in", address: "Sanjay Palace, Agra, UP", city: "Agra", state: "Uttar Pradesh", pincode: "282002", status: "Active", established: "2017-01-15", students: 198, courses: 6, rating: 4.5, revenue: 165000 },
    { id: "FC004", code: "LKO004", name: "TechPro Lucknow", owner: "Alka Singh", mobile: "9611223344", email: "lucknow@techpro.edu.in", address: "Gomti Nagar, Lucknow, UP", city: "Lucknow", state: "Uttar Pradesh", pincode: "226010", status: "Active", established: "2018-08-01", students: 265, courses: 9, rating: 4.7, revenue: 220000 },
    { id: "FC005", code: "KNP005", name: "TechPro Kanpur", owner: "Pradeep Mishra", mobile: "9511223344", email: "kanpur@techpro.edu.in", address: "Civil Lines, Kanpur, UP", city: "Kanpur", state: "Uttar Pradesh", pincode: "208001", status: "Active", established: "2019-02-14", students: 180, courses: 7, rating: 4.4, revenue: 150000 },
    { id: "FC006", code: "VNS006", name: "TechPro Varanasi", owner: "Santosh Pandey", mobile: "9411223344", email: "varanasi@techpro.edu.in", address: "Lanka, Varanasi, UP", city: "Varanasi", state: "Uttar Pradesh", pincode: "221005", status: "Active", established: "2019-09-20", students: 155, courses: 6, rating: 4.3, revenue: 130000 },
    { id: "FC007", code: "JPR007", name: "TechPro Jaipur", owner: "Kavita Sharma", mobile: "9311223344", email: "jaipur@techpro.edu.in", address: "C-Scheme, Jaipur, Rajasthan", city: "Jaipur", state: "Rajasthan", pincode: "302001", status: "Active", established: "2020-01-10", students: 220, courses: 8, rating: 4.6, revenue: 185000 },
    { id: "FC008", code: "PNE008", name: "TechPro Pune", owner: "Vinay Deshmukh", mobile: "9211223344", email: "pune@techpro.edu.in", address: "Kothrud, Pune, Maharashtra", city: "Pune", state: "Maharashtra", pincode: "411029", status: "Pending", established: "2024-03-01", students: 42, courses: 4, rating: 4.1, revenue: 35000 }
  ],

  notices: [
    { id: 1, title: "Admission Open for July 2024 Batch", date: "2024-06-01", category: "Admission", important: true, content: "TechPro Institute announces admission open for July 2024 batch. All courses available. Early bird discount of 10% applicable till June 30, 2024. Visit your nearest franchise center for enrollment." },
    { id: 2, title: "Result Declared – March 2024 Examination", date: "2024-05-15", category: "Results", important: true, content: "Results for March 2024 examination have been declared. Students can check their results on the student portal using their Roll Number." },
    { id: 3, title: "New Course Launch: Cyber Security Basics", date: "2024-05-01", category: "Courses", important: false, content: "We are pleased to announce the launch of our new Cyber Security Basics course. Duration 4 months. Limited seats available." },
    { id: 4, title: "Franchise Partner Meet – June 2024", date: "2024-04-20", category: "Franchise", important: false, content: "Annual Franchise Partner Meet scheduled for June 15, 2024 at Noida Head Office. All franchise owners are requested to attend." },
    { id: 5, title: "Certificate Distribution – Batch 2023", date: "2024-04-10", category: "Certificates", important: false, content: "Certificate distribution ceremony for Batch 2023 will be held on May 5, 2024. Students who have passed their examinations should collect certificates from their respective centers." }
  ],

  faqs: [
    { q: "What courses does TechPro Institute offer?", a: "We offer 48+ courses including DCA, ADCA, Tally Prime, Web Development, Python, Graphic Design, Cyber Security, and many more. Visit our courses page for the complete list." },
    { q: "How can I verify my certificate?", a: "You can verify your certificate online using our Certificate Verification System. Enter your certificate number on the verification page to check authenticity." },
    { q: "How can I open a franchise center?", a: "To open a TechPro franchise center, visit our Franchise Opportunity page and fill out the inquiry form. Our team will contact you within 48 hours with complete details." },
    { q: "What is the fee structure for courses?", a: "Course fees vary from ₹3,500 to ₹15,000 depending on the course and duration. Installment options are available. Contact your nearest center for details." },
    { q: "Are certificates government recognized?", a: "TechPro Institute certificates are ISO certified and recognized by industry partners. Specific courses also carry NIELIT recognition. Verify through our online system." },
    { q: "How do I access the student portal?", a: "Login to the student portal at student.techpro.edu.in using your Student ID and password. Your login credentials are provided at the time of admission." },
    { q: "What documents are required for admission?", a: "Required documents: Aadhaar Card, 10th/12th Marksheet, 2 Passport Photos, Address Proof. Additional documents may be required for specific courses." },
    { q: "Is placement assistance provided?", a: "Yes, TechPro Institute provides 100% placement assistance to all eligible students. We have tie-ups with 500+ companies across India." }
  ],

  blogs: [
    { id: 1, title: "Top 5 Computer Courses for Career Growth in 2024", date: "2024-05-20", author: "Dr. R.K. Sharma", category: "Career", readTime: "5 min", excerpt: "Discover which computer courses are most in-demand by employers in 2024 and how they can transform your career.", image: null },
    { id: 2, title: "How Tally Prime is Changing Accounting in India", date: "2024-05-10", author: "CA Priya Mehta", category: "Accounting", readTime: "4 min", excerpt: "Tally Prime with GST integration has revolutionized how small businesses manage their accounts. Here's everything you need to know.", image: null },
    { id: 3, title: "The Future of Web Development: Trends to Watch", date: "2024-04-28", author: "Vikram Singh", category: "Technology", readTime: "6 min", excerpt: "From AI-assisted coding to WebAssembly, explore the technologies reshaping web development in the coming years.", image: null },
    { id: 4, title: "Why Franchising with TechPro is a Smart Business Move", date: "2024-04-15", author: "Business Desk", category: "Franchise", readTime: "3 min", excerpt: "Learn how 300+ franchise partners are building profitable businesses with TechPro Institute's proven model.", image: null },
    { id: 5, title: "Cyber Security Basics Every Professional Should Know", date: "2024-04-01", author: "Ankit Rawat", category: "Technology", readTime: "7 min", excerpt: "In an age of digital threats, understanding basic cyber security practices is no longer optional — it's essential.", image: null }
  ],

  adminStats: {
    totalStudents: 45820,
    activeStudents: 12450,
    totalCenters: 320,
    activeCenters: 298,
    totalCourses: 48,
    pendingCertificates: 124,
    pendingMarksheets: 89,
    monthlyRevenue: 1850000,
    monthlyEnrollments: [320, 410, 380, 450, 490, 520, 480, 560, 530, 610, 580, 650],
    revenueData: [1200000, 1350000, 1280000, 1450000, 1520000, 1680000, 1590000, 1720000, 1650000, 1850000, 1780000, 1920000],
    coursePopularity: [
      { name: "DCA", value: 28 },
      { name: "ADCA", value: 22 },
      { name: "Tally", value: 18 },
      { name: "Web Dev", value: 12 },
      { name: "Python", value: 10 },
      { name: "Others", value: 10 }
    ]
  }
};

// Safe export – works in both browser and Node.js environments
try { if (typeof module !== 'undefined' && module.exports) module.exports = DATA; } catch(e) {}
