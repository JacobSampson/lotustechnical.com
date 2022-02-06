import styled from "styled-components";
import EmployeeCard from "../../components/EmployeeCard";
import { Layout } from "../../layouts/Layout";
import useClients from "../../lib/client/hooks/useClients";

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

const Clients = () => {
  const { employees, title, about, data, isLoading } = useClients();

  return (
    <Layout>
      <Container>
        <Card>
          {title && <Title>{title}</Title>}
          <EmployeeCards>
            {employees.map((employee, index) => (
              <EmployeeCard key={index} {...employee} />
            ))}
          </EmployeeCards>
        </Card>
        <Card style={{ backgroundColor: "#00a5e4" }}>
          {about.map(({ type, text }, index) =>
            type === "paragraph" ? (
              <p key={index}>{text}</p>
            ) : (
              <Title key={index}>{text}</Title>
            )
          )}
        </Card>
      </Container>
    </Layout>
  );
};

export default Clients;
