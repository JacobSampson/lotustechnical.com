import Head from "next/head";
import styled from "styled-components";
import EmployeeCard from "../../components/EmployeeCard";
import { Layout } from "../../layouts/Layout";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: rgb(0, 30, 50);
  text-align: left;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 4rem;
  padding: 0;
  text-align: center;
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 5rem 4rem;
  text-align: center;

  & > p {
    font-size: xx-large;
  }

  & > ul {
    display: table;
    list-style: none;
    width: 100%;
    padding: 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;

    li {
      text-align: left;
      font-size: xx-large;
      flex: 1;
      align-self: center;
    }
  }
`;

const EmployeeCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 4rem;
`;

const RowCard = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  background-color: #00a5ef;
`;

const StyledLink = styled.a`
  font-size: x-large;
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  transition: 0.25s ease-in-out;
  width: 30rem;
  height: 5rem;
  background-color: #8dd8f8;
  filter: brightness(100%);

  &:hover {
    text-decoration: none;
    filter: brightness(90%);
  }
`;

export default function JobSeekers() {
  return (
    <Layout>
      <Container>
        <Card>
          <Title>Meet Your Employment Experts</Title>
          <EmployeeCards>
            <EmployeeCard
              name="Sydney Hines"
              cellPhoneNumber="763-313-6394"
              officePhoneNumber="763-307-6505"
              email="shines@lotustechnical.com"
              linkedInUrl="https://www.linkedin.com/in/sydney-hines-564b87a7/"
              imageUrl="/images/staff-sydney.jpg"
              title="Recruiter"
            />
          </EmployeeCards>
        </Card>
        <Card style={{ backgroundColor: "#0069B6" }}>
          <Title>Placement Options</Title>
          <ul>
            <li>Contract</li>
            <li>Vendor Management System (VMS)</li>
            <li>Contract to Hire</li>
            <li>Direct Placement</li>
            <li>Recruiting Managed Services</li>
          </ul>
        </Card>
        {/* <RowCard>
          <StyledLink href="mailto:brousslang@lotustechnical.com">
            Submit a Resumé
          </StyledLink>
          <StyledLink>Current Openings</StyledLink>
        </RowCard> */}
      </Container>
    </Layout>
  );
}
