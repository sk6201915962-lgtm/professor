"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { BookOpen, FileText, Award, Users, Brain, Search, ChevronDown, Menu, X, Home, Calendar } from "lucide-react"

export default function PublicationsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")

  const navigationItems = [
    "HOME",
    "ABOUT ME",
    "EDUCATION",
    "EXPERIENCE",
    "WORK",
    "STUDENTS",
    "AWARDS & ACHIEVEMENTS",
    "SKILLS",
    "CONTACT",
  ]

  const workDropdownItems = ["RESEARCH INTERESTS", "PUBLICATION", "PROFESSIONAL ACTIVITIES"]

  const journalPublications = [
    {
      id: 1,
      title: "Performance Evaluation of IPE and IE-Affected Patients using a Modified PSO and ANFIS",
      authors:
        "S.R. Nayak, K. Swain, T. K. Tak, K. Upreti, P. R. Kshirsagar, S. B. Krishnan, R. C. Poonia, and S. K. Mohapatra",
      journal: "Journal of Mechanics of Continua and Mathematical Sciences",
      volume: "20 (6)",
      pages: "65-89",
      year: 2025,
      type: "SCOPUS",
      category: "journal",
    },
    {
      id: 2,
      title: "Internet of Medical Things-enabled Brain Tumor Classification Using GWO-based Optimized RBF Network",
      authors: "S.K. Panda, R.C. Barik, S.R. Nayak, and G. Panda",
      journal: "Journal of Electronic Imaging",
      volume: "33 (6)",
      pages: "063046-063046",
      year: 2024,
      type: "SCI",
      category: "journal",
    },
    {
      id: 3,
      title: "BT-CNN: A Balanced Binary Tree Architecture for Classification of Brain Tumour Using MRI Imaging",
      authors:
        "S. Chauhan, R. Cheruku, D.R. Edla, K. Lavanya, S.R. Nayak, J. Giri, S. Mallik, S. Aluvala, V. Boddu, and H. Qin",
      journal: "Frontiers in Physiology",
      volume: "15",
      pages: "1349111",
      year: 2024,
      type: "SCIE",
      category: "journal",
    },
    {
      id: 4,
      title: "Reconfigurable Neuromorphic Neural Network Architecture",
      authors: "K. Sharma, P.K. Sarangi, P. Sharma, S.R. Nayak, S. Aluvala, and S.K. Swain",
      journal: "Applied Computational Intelligence and Soft Computing",
      volume: "24",
      pages: "6632801",
      year: 2024,
      type: "ESCI",
      category: "journal",
    },
    {
      id: 5,
      title:
        "Leveraging Ensemble Learning for Enhanced Security in Credit Card Transaction Fraudulent within Smart Cities for Cybersecurity Challenges",
      authors: "B. Padhi, S. Chakravarty, B. Naik, S.R. Nayak, and R.C. Poonia",
      journal: "Journal of Discrete Mathematical Sciences and Cryptography",
      volume: "27 (4)",
      pages: "1233-1246",
      year: 2024,
      type: "ESCI",
      category: "journal",
    },
    {
      id: 6,
      title:
        "Detection of COVID-19 using edge devices by a light-weight convolutional neural network from chest X-ray images",
      authors: "S. Chauhan, D. Reddy, V.R. Cheruku, S.R. Nayak",
      journal: "BMC Medical Imaging",
      volume: "24 (1)",
      pages: "1-15",
      year: 2024,
      type: "SCI",
      category: "journal",
    },
    {
      id: 7,
      title:
        "DMF-Net: a deep multi-level semantic fusion network for high-resolution chest CT and X-ray image de-noising",
      authors: "T.K. Nayak, C.S. Rao, S.R. Nayak, B.M. Gedefaw",
      journal: "BMC Medical Imaging",
      volume: "23",
      pages: "1-15",
      year: 2024,
      type: "SCI",
      category: "journal",
    },
    {
      id: 8,
      title: "A new efficient referential genome compression technique for FastQ files",
      authors: "S. Kumar, M.K. Singh, S.R. Nayak, A.U. Khan, A.k. Jain",
      journal: "Functional & Integrative Genomics",
      volume: "23",
      pages: "1-15",
      year: 2024,
      type: "SCI",
      category: "journal",
    },
    {
      id: 9,
      title: "DELM: Deep Ensemble Learning Model for Multiclass Classification of Super-Resolution Leaf Disease Images",
      authors: "P. Kaur, M.K. Singh, A.M. Mishra, A. Shankar, P. Singh, M. Diwakar, S.R. Nayak",
      journal: "Turkish Journal of Agriculture and Forestry",
      volume: "47 (5)",
      pages: "1-21",
      year: 2024,
      type: "SCI",
      category: "journal",
    },
    {
      id: 10,
      title: "Towards Early Intervention: Detecting Parkinson's Disease through Voice Analysis with Machine Learning",
      authors: "K.P. Swain, S.R. Samal, V. Ravi, S.R. Nayak, T.J. Alahmadi, P. Singh, and M. Diwakar",
      journal: "The Open Biomedical Engineering Journal",
      volume: "18",
      pages: "1-10",
      year: 2024,
      type: "SCOPUS",
      category: "journal",
    },
    {
      id: 11,
      title:
        "Application of Deep Learning techniques for Detection of COVID-19 Cases using Chest X-ray Images: A Comprehensive Study",
      authors: "S.R. Nayak, D.R. Nayak, V. Arora, U. Sinha, R.B. Pachuri",
      journal: "Biomedical Signal Processing and Control",
      volume: "64",
      pages: "102365",
      year: 2021,
      type: "SCI",
      category: "journal",
    },
    {
      id: 12,
      title: "Fractal Dimension based Generalised Box-Counting Technique with Application to Gray Scale Images",
      authors: "S.R. Nayak, J. Mishra",
      journal: "Fractals",
      volume: "29 (3)",
      pages: "2150055",
      year: 2021,
      type: "SCI",
      category: "journal",
    },
    {
      id: 13,
      title: "Analysing Roughness of Surface through Fractal Dimension: A Review",
      authors: "S.R. Nayak, J. Mishra, G. Palai",
      journal: "Image and Vision Computing",
      volume: "89",
      pages: "21-34",
      year: 2019,
      type: "SCI",
      category: "journal",
    },
    {
      id: 14,
      title: "Fractal Dimension of RGB Color Images",
      authors: "S.R. Nayak, J. Mishra, A. Khandual, G. Palai",
      journal: "International Journal for Light and Electron Optics",
      volume: "162",
      pages: "196-205",
      year: 2018,
      type: "SCI",
      category: "journal",
    },
    {
      id: 15,
      title: "A modified approach to estimate fractal dimension of gray scale Images",
      authors: "S.R. Nayak, J. Mishra, G. Palai",
      journal: "International Journal for Light and Electron Optics",
      volume: "161",
      pages: "136-145",
      year: 2018,
      type: "SCI",
      category: "journal",
    },
  ]

  const conferencePublications = [
    {
      id: 1,
      title:
        "Automated Brain Tumor Detection in MRI Images using YOLOv8: A Real-Time Diagnosis Tool for Precision Oncology",
      authors: "K. P. Swain, S. R. Nayak, S. K. Swain, and S. K. Mohapatra",
      conference: "Advances in Intelligent Computing and Communication: Proceedings of ICAC 2024",
      volume: "1325",
      pages: "13",
      year: 2025,
      type: "Springer",
      category: "conference",
    },
    {
      id: 2,
      title: "Vision Transformer-Based Automated Classification of Acute Lymphoblastic Leukemia",
      authors: "K. P. Swain, S. K. Swain, and S. R. Nayak",
      conference: "2025 International Conference on Emerging Systems and Intelligent Computing (ESIC)",
      volume: "IEEE",
      pages: "584-588",
      year: 2025,
      type: "IEEE",
      category: "conference",
    },
    {
      id: 3,
      title: "Employing sequence-to-sequence stacked LSTM autoencoder architecture to forecast Indian weather",
      authors: "A. Maharatha, R. Das, J. Mishra, S.R. Nayak, and S. Aluvala",
      conference: "Procedia Computer Science",
      volume: "235",
      pages: "2258-2268",
      year: 2024,
      type: "Elsevier",
      category: "conference",
    },
    {
      id: 4,
      title: "Computer Vision-Based Smart Helmet with Voice Assistant for Increasing Driver Safety",
      authors: "Y. Grover, S.G. Mishra, S. Kumar, S.R. Nayak",
      conference: "Advances and Applications of Artificial Intelligence & Machine Learning: Proceedings of ICAAAIML",
      volume: "1078",
      pages: "203–216",
      year: 2023,
      type: "Scopus",
      category: "conference",
    },
    {
      id: 5,
      title: "Time Series Analysis of Crypto currency using ARIMAX",
      authors: "S. Sejwal, K. Aggarwal, S.R. Nayak",
      conference: "Advances and Applications of Artificial Intelligence & Machine Learning: Proceedings of ICAAAIML",
      volume: "1078",
      pages: "233–245",
      year: 2023,
      type: "Scopus",
      category: "conference",
    },
    {
      id: 6,
      title: "Lung Cancer Detection using Ensemble of Machine Learning Models",
      authors: "B. Jehangir, S.R. Nayak, S. Shandilya",
      conference: "IEEE International Confluence (CONFUENCE)",
      volume: "",
      pages: "",
      year: 2022,
      type: "IEEE",
      category: "conference",
    },
    {
      id: 7,
      title: "GLCM Based LGBM classification for COVID-19 Analysis using Chest X-ray Images",
      authors: "B. Jehangir, S.R. Nayak",
      conference: "IEEE International Confluence (CONFUENCE)",
      volume: "",
      pages: "",
      year: 2022,
      type: "IEEE",
      category: "conference",
    },
    {
      id: 8,
      title: "Face Recognition based Automated Recognition System",
      authors: "A. Sethy, A.K. Rout, S.R. Nayak",
      conference: "IEEE International Confluence (CONFUENCE)",
      volume: "",
      pages: "",
      year: 2022,
      type: "IEEE",
      category: "conference",
    },
    {
      id: 9,
      title: "A Hybrid Based Ensemble Learning Model and DNN for Automated Diagnosis of Brain Tumor from MRI Images",
      authors: "B. Jehangir, S.R. Nayak",
      conference:
        "International Conference on Innovation in Electrical Power Engineering, Communication, and Computing Technology (IEPCCT-2021)",
      volume: "814",
      pages: "309–321",
      year: 2021,
      type: "Springer",
      category: "conference",
    },
    {
      id: 10,
      title: "Analysis of Lung Cancer by using Deep Neural Network",
      authors: "S. Shandilya, S.R. Nayak",
      conference:
        "International Conference on Innovation in Electrical Power Engineering, Communication, and Computing Technology (IEPCCT-2021)",
      volume: "814",
      pages: "427–436",
      year: 2021,
      type: "Springer",
      category: "conference",
    },
  ]

  const books = [
    {
      id: 1,
      title: "Intelligent Fractal Based Image Analysis: Applications in Pattern Recognition and Machine Vision",
      authors: "S.R. Nayak, J. Nayak, K. Muhammad, Y. Karaca",
      publisher: "Elsevier",
      year: 2024,
      isbn: "9780443184697",
      category: "book",
    },
    {
      id: 2,
      title: "Deep Learning for Sustainable Agriculture",
      authors: "R.C. Poonia, V. Singh, and S.R. Nayak",
      publisher: "Elsevier",
      year: 2022,
      isbn: "9780323852142",
      category: "book",
    },
    {
      id: 3,
      title: "Smart Sensor Networks Using AI for Industry 4.0: Applications and New Opportunities",
      authors: "S.R. Nayak, B.R. Sahoo, M. Muthukumaran, J. Mishra",
      publisher: "CRC Press (Taylor & Francis)",
      year: 2021,
      isbn: "9781003145028",
      category: "book",
    },
    {
      id: 4,
      title: "Machine Vision Inspection Systems: Machine Learning-Based Approaches",
      authors: "M. Muthukumaran, S.R. Nayak, S.N. Panda, P.K. Pattnaik",
      publisher: "Wiley-Scrivener Publishing",
      year: 2021,
      isbn: "9781119786092",
      category: "book",
    },
    {
      id: 5,
      title: "Machine Vision Inspection Systems: An Image Processing Approach",
      authors: "M. Muthukumaran, S.R. Nayak, S.N. Panda, P.K. Pattnaik, N. Muangnak",
      publisher: "Wiley-Scrivener Publishing",
      year: 2020,
      isbn: "9781119681809",
      category: "book",
    },
    {
      id: 6,
      title: "Examining Fractal Image Processing and Analysis",
      authors: "S.R. Nayak, J. Mishra",
      publisher: "IGI Global, Advances in Computational Intelligence and Robotics (ACIR)",
      year: 2019,
      isbn: "9781799800668",
      category: "book",
    },
    {
      id: 7,
      title: "Pioneering Autonomous Technology: A Deep Dive Into Hyper Automation",
      authors: "S.R. Nayak, K. Swain, R.C. Poonia, P.K. Pattnaik",
      publisher: "Elsevier",
      year: 2024,
      isbn: "Contract Signed (on-going)",
      category: "book",
    },
    {
      id: 8,
      title:
        "Genome Mapping and Advancements in Deep Learning Approaches: Computation and Analysis in Medical Applications",
      authors: "S.R. Nayak, S.P. Singh, J. Singh, P. Singh, M. Diwakar, D. Garg",
      publisher: "CRC Press (Taylor & Francis)",
      year: 2024,
      isbn: "Contract Signed (on-going)",
      category: "book",
    },
  ]

  const bookChapters = [
    {
      id: 1,
      title: "AI enhanced healthcare: Opportunities, challenges, ethical considerations, and future risk",
      authors: "S. Gupta, S. Mohanty, D. K. Behera, S.R. Nayak",
      publisher: "Responsible and Explainable Artificial Intelligence in Healthcare",
      pages: "127–153",
      year: 2025,
      type: "Elsevier",
      category: "chapter",
    },
    {
      id: 2,
      title: "The Impact of Machine Learning on Chronic Kidney Disease: Analysis and Insights",
      authors: "K. P. Swain, R. K. Nayak, A. Swain, and S. R. Nayak",
      publisher: "Healthcare Industry Assessment: Analyzing Risks, Security, and Reliability",
      pages: "121–148",
      year: 2024,
      type: "Springer",
      category: "chapter",
    },
    {
      id: 3,
      title: "Integrative Data Analysis and Automated Deep Learning Techniques for Ovary Detection",
      authors: "S. Acharya, D. Ghosh, H. Swapnarekha, M. Mishra, S.R. Nayak",
      publisher: "Computational Intelligence in Cancer Diagnosis: Progress and Challenges",
      pages: "43–65",
      year: 2023,
      type: "Elsevier",
      category: "chapter",
    },
    {
      id: 4,
      title: "Quantitative Assessment of Fetal Wellbeing Through CTG Recordings",
      authors: "S. Sharma, A. Gupta, S.R. Nayak",
      publisher: "Connected e-Health: Integrated IoT and Cloud Computing",
      pages: "Chapter 13",
      year: 2022,
      type: "Springer",
      category: "chapter",
    },
    {
      id: 5,
      title: "Analysis of Medical Images Using Fractal Geometry",
      authors: "S.R. Nayak, J. Mishra",
      publisher: "Histopathological Image Analysis in Medical Decision Making",
      pages: "181–201",
      year: 2018,
      type: "IGI Global",
      category: "chapter",
    },
  ]

  const patents = [
    {
      id: 1,
      title: "Device for Segregating Objects in Limited Illumination",
      inventors: "S. R. Nayak. et al.",
      patentNo: "201911041599",
      grantedNo: "354455",
      year: 2020,
      status: "Granted",
      type: "Indian Utility",
      category: "patent",
    },
    {
      id: 2,
      title: "Device for Surface Roughness Measurement of an Object",
      inventors: "S. R. Nayak. et al.",
      patentNo: "201911043717",
      grantedNo: "366328",
      year: 2021,
      status: "Granted",
      type: "Indian Utility",
      category: "patent",
    },
    {
      id: 3,
      title: "Machine Learning Based Hand Sanitizer making and Dispensing Machine",
      inventors: "S. R. Nayak. et al.",
      patentNo: "2021100049",
      grantedNo: "2021100049",
      year: 2021,
      status: "Granted",
      type: "Australia Design",
      category: "patent",
    },
    {
      id: 4,
      title: "Machine Learning Based Water Purifier and Dispenser",
      inventors: "S. R. Nayak. et al.",
      patentNo: "2021100437",
      grantedNo: "2021100437",
      year: 2021,
      status: "Granted",
      type: "Australia Design",
      category: "patent",
    },
    {
      id: 5,
      title: "Helmet (Smart Helmet)",
      inventors: "S. R. Nayak. et al.",
      patentNo: "353451-001",
      grantedNo: "353451-001",
      year: 2021,
      status: "Granted",
      type: "Indian Design",
      category: "patent",
    },
    {
      id: 6,
      title: "Micro-Channel Heat Exchange for Cooling of Electronic Chip",
      inventors: "S. R. Nayak. et al.",
      patentNo: "356591-001",
      grantedNo: "356591-001",
      year: 2022,
      status: "Granted",
      type: "Indian Design",
      category: "patent",
    },
    {
      id: 7,
      title: "Biometric Attendance Device with Touch-Free Body Temperature Screening",
      inventors: "S. R. Nayak. et al.",
      patentNo: "360414-001",
      grantedNo: "360414-001",
      year: 2022,
      status: "Granted",
      type: "Indian Design",
      category: "patent",
    },
    {
      id: 8,
      title: "Artificial Intelligence Based Skin Cancer Inspection Device",
      inventors: "S. R. Nayak. et al.",
      patentNo: "6293058",
      grantedNo: "6293058",
      year: 2023,
      status: "Granted",
      type: "UK Design",
      category: "patent",
    },
    {
      id: 9,
      title: "Wearable Device for Automatic Stress Monitoring",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202111042735",
      grantedNo: "",
      year: 2021,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
    {
      id: 10,
      title: "Optical Lock through Visible Light Communication for Electronic Device",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202111022796",
      grantedNo: "",
      year: 2021,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
    {
      id: 11,
      title: "Multipurpose Footwear",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202111011180",
      grantedNo: "",
      year: 2021,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
    {
      id: 12,
      title: "Safety System for Preventing Motorcycle Accidents due to Loose Garments",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202431093604",
      grantedNo: "",
      year: 2024,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
    {
      id: 13,
      title: "AquaVision: Computer Vision-Based DrainWater Leakage Detection System",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202431083103",
      grantedNo: "",
      year: 2024,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
    {
      id: 14,
      title: "Customer Movement-Based Product Visibility Optimization System for Retail Spaces",
      inventors: "S. R. Nayak. et al.",
      patentNo: "202431095870",
      grantedNo: "",
      year: 2024,
      status: "Published",
      type: "Indian",
      category: "patent",
    },
  ]

  const copyrights = [
    {
      id: 1,
      title: "CALOTRACK : AI-Powered Caloric Intake and Expenditure Management System",
      inventors: "S. R. Nayak. et al.",
      regNo: "L-157195/2024",
      year: 2024,
      status: "Registered",
      type: "Indian",
      category: "copyright",
    },
  ]

  const allPublications = [
    ...journalPublications,
    ...conferencePublications,
    ...books,
    ...bookChapters,
    ...patents,
    ...copyrights,
  ]

  // Filter publications
  const filteredPublications = allPublications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.inventors?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory
    const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear

    return matchesSearch && matchesCategory && matchesYear
  })

  // Get unique years for filter
  const years = [...new Set(allPublications.map((pub) => pub.year))].sort((a, b) => b - a)

  const categories = [
    { value: "all", label: "All Publications" },
    { value: "journal", label: "Journal Articles" },
    { value: "conference", label: "Conference Papers" },
    { value: "book", label: "Books" },
    { value: "chapter", label: "Book Chapters" },
    { value: "patent", label: "Patents" },
    { value: "copyright", label: "Copyrights" },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "SCI":
      case "SCIE":
        return "bg-green-100 text-green-800 border-green-200"
      case "SCOPUS":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "IEEE":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Springer":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Elsevier":
        return "bg-red-100 text-red-800 border-red-200"
      case "Granted":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "Published":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Registered":
        return "bg-cyan-100 text-cyan-800 border-cyan-200"
      case "ESCI":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "journal":
        return <FileText className="h-5 w-5" />
      case "conference":
        return <Users className="h-5 w-5" />
      case "book":
        return <BookOpen className="h-5 w-5" />
      case "chapter":
        return <BookOpen className="h-5 w-5" />
      case "patent":
        return <Award className="h-5 w-5" />
      case "copyright":
        return <Brain className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1F1F1D] z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center space-x-8">
            {navigationItems.map((item) =>
              item === "WORK" ? (
                <div key={item} className="relative group">
                  <button className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                    {item}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-[#1F1F1D] border border-[#EBB884] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {workDropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem}
                          href={dropdownItem === "PUBLICATION" ? "/publications" : "#"}
                          className="block w-full text-left px-4 py-3 text-white hover:text-[#EBB884] hover:bg-[#2A2A28] transition-colors duration-200 text-sm"
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item === "HOME" ? (
                <Link
                  key={item}
                  href="/"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "ABOUT ME" ? (
                <Link
                  key={item}
                  href="/about-me"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "EXPERIENCE" ? (
                <Link
                  key={item}
                  href="/experience"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "EDUCATION" ? (
                <Link
                  key={item}
                  href="/education"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : (
                <button
                  key={item}
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-between items-center">
            <Link href="/" className="text-white font-bold text-lg">
              DR. S.R. NAYAK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#EBB884] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#1F1F1D] border-t border-[#EBB884] shadow-lg">
              <div className="py-4 px-4 space-y-2">
                <Link
                  href="/"
                  className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="inline mr-2 h-4 w-4" />
                  HOME
                </Link>
                {navigationItems.slice(1).map((item) =>
                  item === "WORK" ? (
                    <div key={item} className="space-y-2">
                      <button className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2">
                        {item}
                      </button>
                      <div className="pl-4 space-y-1">
                        {workDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem}
                            href={dropdownItem === "PUBLICATION" ? "/publications" : "#"}
                            className="block w-full text-left text-gray-300 hover:text-[#EBB884] transition-colors duration-200 text-xs py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item === "ABOUT ME" ? (
                    <Link
                      key={item}
                      href="/about-me"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "EXPERIENCE" ? (
                    <Link
                      key={item}
                      href="/experience"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "EDUCATION" ? (
                    <Link
                      key={item}
                      href="/education"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      key={item}
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">PUBLICATIONS</h1>
            <p className="text-lg sm:text-xl text-[#EBB884] mb-8">Research Contributions & Academic Works</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-300">Publications</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">76+</div>
                  <div className="text-sm text-gray-300">Journal Papers</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-sm text-gray-300">Books</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <Brain className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">14+</div>
                  <div className="text-sm text-gray-300">Patents</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#EBB884] focus:border-[#E8BF96]"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-[#EBB884] rounded-md focus:border-[#E8BF96] focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-[#EBB884] rounded-md focus:border-[#E8BF96] focus:outline-none"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPublications.length} of {allPublications.length} publications
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {filteredPublications.map((publication) => (
              <Card
                key={`${publication.category}-${publication.id}`}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-[#EBB884] p-3 rounded-full">{getCategoryIcon(publication.category)}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1D] leading-tight">
                          {publication.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge className={`${getTypeColor(publication.type || publication.status || "")} border`}>
                            {publication.type || publication.status}
                          </Badge>
                          <Badge variant="outline" className="border-[#EBB884] text-[#1F1F1D]">
                            <Calendar className="h-3 w-3 mr-1" />
                            {publication.year}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3 text-sm sm:text-base">
                        {publication.authors || publication.inventors}
                      </p>

                      <div className="space-y-2 text-sm text-gray-600">
                        {publication.journal && (
                          <p>
                            <strong>Journal:</strong> {publication.journal}
                            {publication.volume && `, Vol. ${publication.volume}`}
                            {publication.pages && `, pp. ${publication.pages}`}
                          </p>
                        )}
                        {publication.conference && (
                          <p>
                            <strong>Conference:</strong> {publication.conference}
                            {publication.volume && `, ${publication.volume}`}
                            {publication.pages && `, pp. ${publication.pages}`}
                          </p>
                        )}
                        {publication.publisher && (
                          <p>
                            <strong>Publisher:</strong> {publication.publisher}
                            {publication.isbn && ` (ISBN: ${publication.isbn})`}
                          </p>
                        )}
                        {publication.patentNo && (
                          <p>
                            <strong>Patent No:</strong> {publication.patentNo}
                            {publication.grantedNo && ` | Granted: ${publication.grantedNo}`}
                            {publication.type && ` | Type: ${publication.type}`}
                          </p>
                        )}
                        {publication.regNo && (
                          <p>
                            <strong>Registration No:</strong> {publication.regNo}
                            {publication.type && ` | Type: ${publication.type}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">© 2025 Dr. Soumya Ranjan Nayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
