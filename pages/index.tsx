import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../layouts/Layout";

const Container = styled.div``;
const ImageCard = styled.img`
  max-height: 80vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 10%;
`;

const Card = styled.section`
  font-size: 25px;
  padding: 2%;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;

  & > h2 {
    /* font-size: ${({ theme }) => theme.fontSize.large}; */
  }

  & > p {
  }

  ul {
    display: table;
    list-style: none;
    width: 100%;
    padding: 0;

    li {
      flex: 1;
      align-self: center;
    }
  }
`;

const QuoteCard = styled(Card)`
  font-size: 50px;
  font-weight: 100;
  font-style: italic;
  text-align: center;
  padding: 3rem 2rem;
  margin: 0 auto;
  background-color: #4a9b39;
  letter-spacing: 0.15em;
  box-shadow: inset 0 0.5rem 0.5em rgba(0, 0, 0, 0.25);
`;

const RowCard = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <ImageCard src="/images/skyline.jpg" />
        <QuoteCard>Work is hectic. Getting help doesn't have to be.</QuoteCard>
        <Card style={{ backgroundColor: "#00a3e4a0" }}>
          The meaning of the lotus flower comes from the way it grows in nature.
          It starts as a bud under murky water, and grows until it emerges in a
          beautiful blooming flower.
        </Card>
        <Card style={{ backgroundColor: "#00A5E4" }}>
          <h2>Who We Are</h2>
          <p>
            Lotus Technical has filled positions in organizations of all sizes
            ranging from the small family owned business to large Fortune 500
            companies. Our staffing expertise and recruiting resources have
            helped us successfully place candidates in various roles from
            assembly to C-level executives. Whether you are looking to fill an
            entry-level position or an executive position, Lotus Technical will
            help you find your most important business resource - your people.
          </p>
          <h2>What We Do</h2>
          <p>
            Lotus Technical closes the gap between job seekers and organizations
            looking to fill positions in the Engineering, IT and Manufacturing
            industries. With historically low unemployment rates, organizations
            spend unnecessary time and cost recruiting, screening, and hiring
            the right person for the job. Additionally, many organizations lack
            the internal resources to find, attract, and retain the right
            talent. Since 2010, our job has been to connect organizations to top
            talent and simplify their hiring process.
          </p>
        </Card>
        <RowCard style={{ backgroundColor: "#0069B6" }}>
          <div>
            <h2>Engineering</h2>
            <ul>
              <li>Electical</li>
              <li>Mechanical</li>
              <li>Quality</li>
              <li>Manufacturing</li>
              <li>Drafters/Designers</li>
              <li>Technicians</li>
              <li>CNC & Welding</li>
              <li>Support Roles(AR/AP/Marketing/Sales)</li>
            </ul>
          </div>
          <div>
            <h2>Information Technology</h2>
            <ul>
              <li>Developers</li>
              <li>UI/UX</li>
              <li>Network/Systems Engineers</li>
              <li>Security</li>
              <li>Business Analysts</li>
              <li>Project and Program Managers</li>
            </ul>
          </div>
        </RowCard>
      </Container>
    </Layout>
  );
}
