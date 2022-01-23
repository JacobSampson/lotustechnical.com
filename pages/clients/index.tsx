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

  & > p {
    text-align: center;
    font-size: xx-large;
  }
`;

const EmployeeCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 4rem;
`;

export function Clients({ employees = [], raw }) {
  return (
    <Layout>
      <Container>
        <pre>{JSON.stringify(raw)}</pre>
        <Card>
          <Title>Meet Your Account Managers</Title>
          <EmployeeCards>
            {employees.map((employee) => (
              <EmployeeCard {...employee} />
            ))}
          </EmployeeCards>
        </Card>
        <Card style={{ backgroundColor: "#00a5e4" }}>
          <Title>We Partner With You!</Title>
          <p>
            By gaining a deeper understanding of your business and culture we
            help you build a team that lasts. We work closely with you to match
            requirements, qualifications, experiences, team dynamics, and
            personalities to meet the needs of your organization.
          </p>
        </Card>
      </Container>
    </Layout>
  );
}

import * as prismic from "@prismicio/client";

const clientId = "https://lotustechnical.prismic.io/api/v2";
const clientSecret = "e3a310790d8eb401c3e2694f48a8fbb9";
const applicationName = "lotus-technical";
const accessToken =
  "MC5ZZXg3a2hFQUFDd0FBU3Z0.Ju-_ve-_vSHvv70U77-977-977-9XRtVaGwB77-977-9fu-_vTzvv73vv70pfu-_ve-_vTEEJu-_ve-_ve-_vQ";

const endpoint = "https://lotustechnical.prismic.io/api/v2";
const client = prismic.createClient(endpoint, {
  accessToken,
});

export async function getStaticProps() {
  const { data } = await client.getSingle("clients-page");

  const employees = (data.body as any[])
    .find(({ slice_type }) => slice_type === "employees")
    .items.map((employee) => ({
      name: employee["name"][0]?.text || null,
      title: employee["job-title"][0]?.text || null,
      cellPhoneNumber: employee["cell-phone-number"][0]?.text || null,
      officePhoneNumber: employee["office-phone-number"][0]?.text || null,
      email: employee["email"][0]?.text || null,
      linkedInUrl: employee["linkedin-url"]?.url || null,
      imageUrl: employee["image-url"]?.url || null,
    }));

  return {
    props: {
      employees,
      raw: JSON.stringify(data),
    },
  };
}

export default Clients;
