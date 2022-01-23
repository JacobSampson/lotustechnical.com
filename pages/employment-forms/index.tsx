import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../../layouts/Layout";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 5rem 0 5rem 40%;
  background-color: rgb(0, 30, 50);
  text-align: left;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 0;
`;
const FileCard = styled.a`
  text-decoration: none;
  color: white;
  font-size: x-large;
  transition: 0.25s ease-in-out;
  text-decoration-color: #4a9b3900;

  &:hover {
    text-decoration-color: #4a9b39;
  }
`;
const FileCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0.5rem 0;
  }
`;

export default function EmploymentForms() {
  return (
    <Layout>
      <Container>
        <Title>Employment Forms</Title>
        <FileCardList>
          <li>
            <FileCard href="/documents/W-4.pdf" target="_blank">
              W-4
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/I-9.pdf" target="_blank">
              I-9
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/background-check.pdf" target="_blank">
              Background Check
            </FileCard>
          </li>
          <li>
            <FileCard
              href="/documents/direct-deposit-final.pdf"
              target="_blank"
            >
              Direct Deposit
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/emergency-contact.pdf" target="_blank">
              Emergency Contact
            </FileCard>
          </li>
          <li>
            <FileCard
              href="/documents/employment-verification.pdf"
              target="_blank"
            >
              Employment Eligibility Verification
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/enrollment-form.pdf" target="_blank">
              Enrollment Form
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/insurance-form.pdf" target="_blank">
              Insurance Form
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/memorandum.pdf" target="_blank">
              Memorandum
            </FileCard>
          </li>
          <li>
            <FileCard
              href="/documents/personal-file-access.pdf"
              target="_blank"
            >
              Access to Personal Files and Records
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/nondisclosure.pdf" target="_blank">
              Nondisclosure Agreement
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/payroll.pdf" target="_blank">
              2021 Payroll Schedule
            </FileCard>
          </li>
          <li>
            <FileCard href="/documents/week.pdf" target="_blank">
              Hour Tracking
            </FileCard>
          </li>
        </FileCardList>
      </Container>
    </Layout>
  );
}
