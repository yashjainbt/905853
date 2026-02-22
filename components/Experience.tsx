import Reveal from '@/components/ui/Reveal';

type ExperienceBlock = {
  role: string;
  organization: string;
  affiliation?: string;
  duration: string;
  project?: string;
  bullets: string[];
};

const experienceBlocks: ExperienceBlock[] = [
  {
    role: 'B.Tech. Biotechnology',
    organization: 'Meerut Institute of Engineering and Technology',
    affiliation: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    duration: '2020 – 2024',
    bullets: [
      'Completed undergraduate thesis titled “Cytotoxicity Assessment of Lead Acetate and Cobalt Nitrate on MDA-MB-231 Cell Line using MTT assay”, focusing on in vitro toxicity evaluation in a triple-negative breast cancer model.',
      'Developed laboratory proficiency in cell culture maintenance, experimental design, and quantitative assay-based analysis.',
      'Built foundational skills in molecular biology, bioprocessing, and structured research documentation.'
    ]
  },
  {
    role: 'Summer Research Intern',
    organization: 'IIT Guwahati',
    duration: 'June 2023 – July 2023',
    bullets: [
      'Conducted experimental studies on physicochemical characteristics of water samples from various sources.',
      'Contributed to material synthesis efforts aimed at pollutant adsorption applications.',
      'Assisted in analytical evaluation and data interpretation under supervised research guidance.'
    ]
  },
  {
    role: 'Quality Control Specialist',
    organization: 'Consure Medical (QnQ Design & Development), New Delhi',
    duration: 'March 2024 – June 2025',
    bullets: [
      'Managed ISO 13485-compliant documentation systems, including BOMs, DHRs, Document Change Authorizations, and Lot Release protocols.',
      'Performed quality inspections and maintained First Article Inspection (FAI) reports to ensure manufacturing and regulatory adherence.',
      'Supported post-market surveillance and supplier management activities, enhancing compliance with EU MDR standards.',
      'Assisted in clinical evaluation data collection, literature review, and report preparation.',
      'Participated in ISO 13485 recertification, EU MDR certification, and US FDA surveillance audits.'
    ]
  },
  {
    role: 'Junior Research Fellow (JRF)',
    organization: 'Amity Institute of Biotechnology, Amity University, Noida',
    duration: 'September 2025 – December 2025',
    project:
      'Project: EGFR-targeted Affimer recombinant proteins for siRNA/drug-loaded cubosomes in drug-resistant TNBC (ANRF-funded)',
    bullets: [
      'Designed experimental workflows for targeted therapeutic delivery systems and preclinical evaluation.',
      'Conducted literature reviews to support experimental design and translational research planning.',
      'Assisted in procurement and laboratory setup for in vitro and in vivo studies.',
      'Prepared structured frameworks for experimental execution, data analysis, and scientific reporting.',
      'Performed animal handling, including subcutaneous and tail vein injections, blood collection, and dissection procedures.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Academic & Work Experience</h2>
          <div className="mt-8 space-y-8">
            {experienceBlocks.map((item) => (
              <article key={`${item.role}-${item.duration}`} className="border-l-2 border-brand-accent/40 pl-6">
                <h3 className="font-heading text-xl font-semibold text-base-text">{item.role}</h3>
                <p className="mt-2 text-base text-base-muted">{item.organization}</p>
                {item.affiliation && <p className="text-sm text-base-muted">{item.affiliation}</p>}
                <p className="mt-1 text-sm text-base-muted">{item.duration}</p>
                {item.project && <p className="mt-3 text-sm text-base-muted">{item.project}</p>}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-base-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
