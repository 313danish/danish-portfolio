// src/data.js
export const PORTFOLIO_DATA = {
  name: "Mohammed Danish",
  title: "Educator & Systems / Vision Researcher",
  location: "Bengaluru, India",
  tagline: "Bridging computer vision diagnostics with robust web systems. Teaching computer science by day, training feature extraction pipelines and debugging model loss curves by night.",
  status: {
    currentFocus: "Deep learning segmentation architectures & practical full-stack student portals",
    musicOnLoop: "Lo-Fi Instrumental Beats",
    coffeeStatus: "Cup #3 (Black filter roast)"
  },
  projects: [
    {
      title: "Detection of Diabetic Retinopathy Using Pattern Recognition",
      category: "Computer Vision & Medical Imaging",
      tech: ["Python", "OpenCV", "CLAHE", "Morphological Ops", "Median Filter"],
      summary: "End-to-end diagnostic pipeline for digital fundus photography. Extracts retinal blood vessels, suppresses optical noise, and identifies microaneurysms, exudates, and diabetic maculopathy to grade severity (Normal, Mild, Severe).",
      methodology: "Digital Fundus RGB → Grayscale Conversion → Median Filtering (edge-preserving denoise) → CLAHE contrast enhancement → Morphological Closing → Otsu/Graythresh Binarization → Exudate & Vessel Localization.",
      humanNote: "The messy truth: Fundus images from different cameras had massive illumination disparities. Tuning the CLAHE clip limit and morphological structuring element so delicate microaneurysms weren't wiped out as noise took dozens of test runs.",
      github: "https://github.com",
      statusBadge: "JSS STU Research Build"
    },
    {
      title: "Citrus Crop Multi-Disease Diagnostic System",
      category: "Machine Learning & Agriculture AI",
      tech: ["Python", "TensorFlow/PyTorch", "Computer Vision", "Scikit-Learn"],
      summary: "Multi-class leaf pathology classification framework for precision agriculture. Identifies high-risk citrus infections including Citrus Canker, Black Spot, Scab, Greening (HLB), and Melanose from field leaf captures.",
      methodology: "Multi-class convolutional network trained on augmented leaf datasets with focal loss to combat real-world class imbalance across rare crop strains.",
      humanNote: "Field photography is chaotic compared to lab sets. Shadows and dirt patches initially triggered false positives for Melanose until we engineered aggressive background segmentation and color space normalization.",
      github: "https://github.com",
      statusBadge: "IFIM Conf. Research 2025"
    },
    {
      title: "JSS STU Sports Department Management System",
      category: "Desktop & Database Systems",
      tech: ["Python", "Tkinter", "MySQL", "Relational Schema"],
      summary: "Dedicated departmental desktop management tool replacing unorganized ledger books. Streamlines athlete rosters, inter-college tournament brackets, athletic event tracking, and equipment inventories.",
      methodology: "Normalized MySQL relational database architecture with clean CRUD abstractions and responsive Tkinter GUI interfaces designed for non-technical administrative staff.",
      humanNote: "The hardest part wasn't the SQL queries—it was designing an interface simple enough that university sports coaches could record event qualifications without calling me for tech support every afternoon.",
      github: "https://github.com",
      statusBadge: "Deployed for Campus Admin"
    }
  ],
  thoughts: [
    {
      title: "Why explaining Git merge conflicts to students made me a better engineer",
      date: "Recent Reflection",
      snippet: "If you cannot explain why a rebase rewrites SHA commit hashes to a room of 60 first-year students, you don't actually understand version control."
    },
    {
      title: "The reality of medical image pre-processing",
      date: "Lab Note",
      snippet: "Everyone wants to jump straight to massive 100-layer neural nets. In reality, clean CLAHE contrast enhancement and proper median filtering do 70% of the heavy lifting in fundus diagnostics."
    }
  ]
};