import { TIMELINE_DATA, SKILLS_DATA, PERSON_DATA } from '@/data/portfolioData';

export default function PrintResume() {
  return (
    <div className="print-resume" style={{ padding: '0', color: '#000', fontFamily: 'Arial, sans-serif', fontSize: '10pt', lineHeight: 1.4 }}>
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h1 style={{ fontSize: '24pt', fontWeight: 'bold', margin: '0 0 4px 0' }}>{PERSON_DATA.name}</h1>
        <div style={{ fontSize: '11pt', color: '#333' }}>
          {PERSON_DATA.headline}
        </div>
        <div style={{ fontSize: '10pt', marginTop: '4px' }}>
          {PERSON_DATA.email} • {PERSON_DATA.linkedin} • {PERSON_DATA.github}
        </div>
      </div>

      {/* SUMMARY */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '12pt', borderBottom: '1px solid #000', margin: '0 0 8px 0', paddingBottom: '2px', textTransform: 'uppercase' }}>Professional Summary</h2>
        <p style={{ margin: 0 }}>{PERSON_DATA.summary}</p>
      </div>

      {/* SKILLS */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '12pt', borderBottom: '1px solid #000', margin: '0 0 8px 0', paddingBottom: '2px', textTransform: 'uppercase' }}>Technical Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {SKILLS_DATA.map(category => (
            <div key={category.id} style={{ display: 'flex' }}>
              <strong style={{ width: '120px', flexShrink: 0 }}>{category.label}:</strong>
              <span>
                {category.skills.map((s, i) => (
                  <span key={s.name}>
                    {s.name}{i < category.skills.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '12pt', borderBottom: '1px solid #000', margin: '0 0 8px 0', paddingBottom: '2px', textTransform: 'uppercase' }}>Professional Experience</h2>
        {TIMELINE_DATA.map((job, i) => (
          <div key={job.id} style={{ marginBottom: i < TIMELINE_DATA.length - 1 ? '12px' : 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div>
                <strong style={{ fontSize: '11pt' }}>{job.title}</strong>
                <span> — {job.company}</span>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '10pt' }}>
                {job.dateRange}
              </div>
            </div>
            <ul style={{ margin: '0 0 0 16px', padding: 0 }}>
              {job.achievements.map((ach, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: ach }} style={{ marginBottom: '4px' }} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* EDUCATION & CERTIFICATIONS */}
      <div>
        <h2 style={{ fontSize: '12pt', borderBottom: '1px solid #000', margin: '0 0 8px 0', paddingBottom: '2px', textTransform: 'uppercase' }}>Education & Certifications</h2>
        {PERSON_DATA.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: i < PERSON_DATA.education.length - 1 ? '4px' : 0 }}>
            <strong>{edu.degree}</strong> — {edu.institution}
            {edu.status === 'In Progress' && <span style={{ fontStyle: 'italic' }}> (In Progress)</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
