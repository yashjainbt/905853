export type ProjectMeta = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  tags: string[];
  featured: boolean;
};

export const projectConfig: ProjectMeta[] = [
  {
    title: 'B.Tech Thesis: Targeted Therapeutic Systems',
    slug: 'btech-thesis',
    category: 'Academic Research',
    shortDescription:
      'Preclinical investigation of targeted therapeutic strategies using experimentally optimized in vitro and in vivo workflows.',
    tags: ['Oncology', 'Drug Delivery', 'Preclinical Models', 'Translational Research'],
    featured: true
  },
  {
    title: 'JRF Affimer Project',
    slug: 'jrf-affimer-project',
    category: 'Research Fellowship',
    shortDescription:
      'Affimer-oriented experimental research integrating therapeutic mechanism exploration with structured evaluation pipelines.',
    tags: ['Affimer', 'Experimental Therapeutics', 'Cancer Biology', 'Evaluation Frameworks'],
    featured: true
  }
];
