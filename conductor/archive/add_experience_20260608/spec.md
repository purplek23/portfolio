# Specification: Add Prior Work Experience (ServiceMaster & TruckPro)

## Overview
This track adds prior work experience from before ALSAC to Travis Kovar's resume and website timeline. Travis started his career in 2017. Adding these two roles increases his total software engineering experience to 9+ years, which strongly supports his application for a Staff Software Engineer position.

## Functional Requirements
1. **Update Central Resume Data (portfolioData.ts)**:
   - Add **ServiceMaster** (2017 – 2019) as a TimelineEntry under TIMELINE_DATA.
   - Add **TruckPro** (2019 – 2021) as a TimelineEntry under TIMELINE_DATA.
   - Update summary and aboutMe text to change "8+ years" of experience to "9+ years".
2. **Update Portfolio Website (App.tsx)**:
   - Ensure the stats section displays "9+" years of experience (instead of "8+").
3. **Update SEO Metadata (index.html)**:
   - Update description meta tag to specify "9+" years of experience.
4. **Content Design (Staff Engineer Framing)**:
   - **TruckPro (Software Engineer, 2019 – 2021)**:
     - Title: Software Engineer
     - Achievements:
       - Designed and built a secure, self-service customer onboarding portal using Angular and C# .NET, automating new customer registration and reducing manual setup times.
       - Implemented clean, RESTful APIs and robust data validation schemas on the C# .NET backend, ensuring high-availability operations.
       - Refactored legacy system logic into modular, testable service components, enhancing database query performance and query speeds.
   - **ServiceMaster (Software Engineer, 2017 – 2019)**:
     - Title: Software Engineer
     - Achievements:
       - Developed and optimized a high-converting digital sales funnel for home warranty contracts using Angular and Java.
       - Integrated payment processing modules and third-party APIs to streamline automated contract issuance.
       - Collaborated within an Agile team to implement reusable UI component libraries, improving overall frontend code consistency.

## Acceptance Criteria
- Both the PDF resume and the online timeline section display the ServiceMaster and TruckPro roles.
- The experience count is updated to "9+" years everywhere on the website, PDF resume, and meta tags.
- The site compiles cleanly without TypeScript or bundler errors.

## Out of Scope
- Redesigning the timeline UI.
- Adding other certifications or education details not provided.
