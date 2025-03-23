export interface ResumeData {
  skills: string[];
  experience: Experience[];
  education: Education[];
  personalInfo: PersonalInfo;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface SkillGap {
  missing: string[];
  recommended: string[];
  proficiencyLevel: Record<string, number>;
}