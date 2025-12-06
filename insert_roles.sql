-- Insert the 6 roles from the original design
-- Run this in your Supabase SQL Editor after setting up the database schema

INSERT INTO roles (title, rate_min, rate_max, description, requirements, specialty, status) VALUES
(
  'Radiology Expert',
  180,
  280,
  'Review and annotate radiological images for AI training datasets. Work with cutting-edge medical imaging AI systems to help improve diagnostic accuracy and support the development of next-generation radiology tools.',
  ARRAY[
    'Board certified radiologist with active medical license',
    'Minimum 5 years of clinical radiology experience',
    'Proficiency in DICOM and medical imaging standards',
    'Experience with chest X-rays, CT, and MRI interpretation',
    'Strong attention to detail and quality control',
    'Ability to work independently on remote annotation projects'
  ],
  'Radiology',
  'active'
),
(
  'Pathology Specialist',
  200,
  350,
  'Annotate pathology slides and validate AI predictions for digital pathology systems. Help train machine learning models to recognize various tissue types, cellular abnormalities, and disease markers.',
  ARRAY[
    'MD with pathology board certification',
    'Minimum 7 years of anatomic or clinical pathology experience',
    'Experience with digital pathology and whole slide imaging',
    'Strong background in histopathology and cytology',
    'Research experience in AI/ML applications preferred',
    'Excellent visual pattern recognition skills'
  ],
  'Pathology',
  'active'
),
(
  'Cardiology Annotator',
  175,
  275,
  'Label ECG data and cardiac imaging for machine learning models. Support the development of AI systems for early detection of cardiac conditions and rhythm abnormalities.',
  ARRAY[
    'Board certified cardiologist or cardiology fellowship completion',
    'Minimum 3 years of clinical cardiology experience',
    'Expert-level ECG interpretation skills',
    'Experience with echocardiography and cardiac imaging',
    'Familiarity with cardiac rhythm analysis',
    'Interest in medical AI and technology'
  ],
  'Cardiology',
  'active'
),
(
  'Clinical Notes Expert',
  150,
  250,
  'Structure and validate clinical documentation for natural language processing training. Help AI systems understand medical terminology, clinical reasoning, and documentation patterns.',
  ARRAY[
    'Active medical license (MD, DO, or equivalent)',
    'Minimum 3 years of clinical documentation experience',
    'Strong understanding of medical terminology and ICD coding',
    'Experience with electronic health records (EHR)',
    'Excellent written communication and attention to detail',
    'Understanding of clinical workflows and documentation standards'
  ],
  'Clinical Documentation',
  'active'
),
(
  'Dermatology Expert',
  160,
  260,
  'Classify skin lesions and validate dermatology AI outputs. Work with state-of-the-art computer vision systems to improve accuracy in skin cancer detection and dermatological diagnosis.',
  ARRAY[
    'Board certified dermatologist',
    'Minimum 4 years of clinical dermatology experience',
    'Expertise in dermoscopy and skin lesion analysis',
    'Experience with melanoma and skin cancer screening',
    'Research interest in dermatology AI applications',
    'Strong visual diagnostic skills'
  ],
  'Dermatology',
  'active'
),
(
  'Oncology Protocol Expert',
  300,
  450,
  'Design and validate cancer treatment protocols for AI-powered clinical decision support systems. Help create intelligent treatment planning tools that assist oncologists with evidence-based care recommendations.',
  ARRAY[
    'Board certified medical oncologist',
    'Minimum 10 years of oncology practice experience',
    'Extensive clinical trial experience and protocol development',
    'Deep knowledge of NCCN guidelines and evidence-based oncology',
    'Experience with treatment planning and multidisciplinary care',
    'Strong analytical and critical thinking skills',
    'Leadership experience in academic or clinical oncology'
  ],
  'Oncology',
  'active'
);
