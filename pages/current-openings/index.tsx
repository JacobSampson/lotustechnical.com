import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../../layouts/Layout";

interface Posting {
  title: string;
  pay: string;
  location: string;
  description: string;
}

const postings: Posting[] = [
  {
    title: "Direct Support Professional",
    pay: "$13.25/hour",
    location: "Staples, MN",
    description: `The Direct Support Professional (DSP) functions as an advocate, supporter, educator and caregiver to individuals with disabilities. They assist individuals develop basic living and social skills to gain optimal independence and integration into the community. Depending on the individual, DSPs provide assistance with living skill development, health maintenance, medication administration, personal care and behavioral development/management. Most importantly, the goal is to provide services to enrich the lives of our residents to live happy, healthy and fulfilling lives.
    Requirements:
    · Past experience with high medical needs and personal cares
    · Compassionate and caring demeanor
    · Excellent written and verbal communication skills
    · 18 years or older
    · Pass a MN DHS Background Study
    · Available to work every other weekend
    · Prefer a Driver’s License, car insurance, and a clean record`,
  },
  {
    title: "Lumber Assembly 1st and 2nd shift",
    pay: "$16/hour",
    location: "Oak Grove, MN",
    description: `Assembles product with hand tools, helps setup on table, and separates material at workstation
    * Places proper material into setup according to specifications on cut sheet
    * Uses roller gantry equipment to place and press plates on appropriate lumber by job
    * Follows production list by priority as given to complete set shift goals
    * Ensures the entire order is built as specified by documentation, with no missing parts
    * Verifies receipt of correct materials from the saw shop for each job/batch
    * Complies with all safety rules in/outside of the shop area and yard, including wearing proper PPE
    * Utilizes the rules of operation for all machines to and processes to enforce and verify quality of the roof and floor trusses.
    * Responsible for following maintenance and machine cleanup procedures on a daily, or more frequent/needed basis in work area, without exception
    * Complies with all company policies and procedures and maintains a positive company image
    * Table assembly of wood roof and floor trusses
    
    Requirements-
    Steel toed shoes and your own hammer and tape measure
    
    This position requires the ability to be exposed to facilities that are not heated or cooled; various outdoor elements; and extreme Heat and Cold during the Winter and Summer months. This includes exposure to uneven walking surfaces and stairs.`,
  },
  {
    title: "Truss Builder/Lumber Puller/Lumber Stacker/Forklift",
    pay: "$16.50/hr-1st Shift $18.00/hour-2nd Shift",
    location: "LaCrescent, MN",
    description: `Currently looking for 1st shift (7:00 am - 3:00 pm) and 2nd shift (3:00 pm - 11:00 pm). Position is responsible for assembling cut material into floor and roof trusses to specification. The position may also be responsible for pulling plates, stacking of finished product, banding and marking materials, and pushing product on carts to appropriate area. Position reports to Section Lead person and Foreman.

    • Read and interpret work orders and production schedules (typed, handwritten, computer screen).
    • Pull plates.
    • Set up and operate presses, nail guns, and other equipment.
    • Place cut material and plates per specification.
    • Connect plates with the use of hammer and/or press.
    • Lift and stack product off lumber carts, band and mark product, and push/pull product on carts to designated areas.
    • Complete continuous quality review throughout processes to meet quality and accuracy requirements including dimensions, lumber grades, and building process.
    • Perform daily stretch and flex prior to starting job duties.
    • Perform routine cleaning and maintenance of equipment and work area.
    • Report any equipment and product deficiencies to Lead.
    • Follow all established written and unwritten company procedures.
    • Wear all required PPE (steel toed boots, safety glasses, ear plugs, gloves).
    • Comply with OSHA requirements and established company safety policies and procedures.
    • Accepts other duties as assigned by the Section Lead and Foreman.
    
    SKILL REQUIREMENTS:
    • General knowledge of the assembly process.
    • Carpentry background preferable but not required.
    • Ability to safely and effectively use a hammer, tape measure, and to band, stack and move product safely.
    • Ability to safely operate a forklift is preferred, but not a requirement.
    
    PHYSICAL AND MENTAL REQUIREMENTS OF ESSENTIAL FUNCTIONS:
    This position requires the ability to continuously stand, squat, bend, reach, and kneel; walk, handle push/pull up to 20 lbs, and lift/carry up to 25lbs; frequently push/pull up to 80 lbs, and lift/carry up to 40 lbs; occasionally lift/carry up to 100 lbs and push/pull up to 100 lbs with or without assistance from others. The work environment requires the employees to work both inside and outside. The environment generally includes dust, dirt, equipment noise; working near moving machinery. PPE required at all times.`,
  },
];

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: rgb(0, 30, 50);
  min-height: 100vh;
`;

const StyledLink = styled.a`
  color: #4a9b39;
  text-decoration: none;
  transition: 0.25 ease-in-out;
  font-size: x-large;

  &:hover {
    text-decoration: none;
    color: #aadaa0;
  }
`;

const PostingCard = ({
  title,
  description,
  location,
  pay,
  ...props
}: Posting) => (
  <div {...props}>
    <h2>{title}</h2>
    <p>{pay}</p>
    <p>{location}</p>
    <pre>{description}</pre>
    <StyledLink
      href={`mailto:brousslang@lotustechnical.com?subject=Application for ${title}`}
    >
      Apply
    </StyledLink>
  </div>
);

const StyledPostingCard = styled(PostingCard)`
  color: white;
  text-align: left;
  padding: 3rem;
  position: relative;

  & > pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  &:not(:last-child) {
    //border-bottom: solid #4A9B39 5px;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 80%;
      height: 6px;
      z-index: 15;
      background: linear-gradient(to left, #61c69d 0%, #2d72bc 100%);
    }
  }
`;

export default function CurrentOpenings() {
  return (
    <Layout>
      <Container>
        {postings.map((posting, index) => (
          <StyledPostingCard key={index} {...posting} />
        ))}
      </Container>
    </Layout>
  );
}
