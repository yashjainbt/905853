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
    title: 'B.Tech Thesis: Cytotoxicity Assessment of Lead Acetate and Cobalt Nitrate on MDA-MB-231 Cell Line using MTT assay',
    slug: 'btech-thesis',
    category: 'Academic Research',
    shortDescription:
      'Evaluation of heavy-metal-induced cytotoxicity on triple-negative breast cancer cells using MTT assay. Developed experimental protocols, performed cell culture maintenance, and analyzed dose-dependent toxicity, establishing a foundation in in vitro experimental design and translational analysis.',
    tags: ['Cell Culture', 'MTT Assay', 'Data Analysis', 'Experimental Design', 'Regulatory'],
    featured: true
  },
  {
    title: 'EGFR-targeted Affimer recombinant proteins for targeted delivery of siRNA/drug-loaded cubosomes to enhance treatment efficacy for drug-resistant triple-negative breast cancer.',
    slug: 'jrf-affimer-project',
    category: 'Research Fellowship',
    shortDescription:
      'Development of targeted delivery systems using Affimer proteins for enhanced therapeutic efficacy in drug-resistant triple-negative breast cancer. Designed experimental workflows, performed preclinical planning, and gained hands-on experience in in vitro and in vivo translational research.',
    tags: ['Animal Handling', 'Lab Management', 'Experimental Design', 'Statistical Planning', 'Protocol Standardization'],
    featured: true
  }
];
