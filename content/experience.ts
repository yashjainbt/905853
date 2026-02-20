export type ExperienceItem = {
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Biotechnology Research Trainee',
    organization: 'Academic Research Environment',
    duration: '2022–Present',
    bullets: [
      'Designed and executed experimental workflows spanning in vitro and in vivo therapeutic evaluations.',
      'Supported nanomaterial synthesis and targeted drug delivery studies through iterative protocol refinement.',
      'Maintained detailed laboratory records with emphasis on reproducibility and structured data interpretation.',
      'Collaborated across project streams to connect molecular findings with translational hypotheses.'
    ]
  },
  {
    role: 'Quality & Regulatory Exposure Intern',
    organization: 'Medical Device Corporate Environment',
    duration: 'Industry Exposure',
    bullets: [
      'Gained exposure to regulatory frameworks, documentation standards, and quality-focused systems thinking.',
      'Contributed to process-oriented reviews aligned with compliance and biomedical safety considerations.',
      'Developed practical understanding of how structured documentation supports product and research reliability.'
    ]
  }
];
