import Head from 'next/head';
import styled from 'styled-components';
import ShowMoreCard from '../../components/ShowMoreCard';
import { Layout } from '../../layouts/Layout';
import PrismicService from '../../lib/client/services/prismic';
import EmployeeModel from '../../lib/core/model/employee';
import CardModel from '../../lib/core/model/card';

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

const ShowMoreCards = styled.div`
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

const JobSeekers = ({ title, about, employees, data }) => {
  return (
    <Layout>
      <Container>
        <Card>
          {title && <Title>{title}</Title>}
          <ShowMoreCards>
            {employees.map((employee, index) => (
              <ShowMoreCard key={index} {...employee} />
            ))}
          </ShowMoreCards>
        </Card>
        <Card style={{ backgroundColor: '#0069B6' }}>
          {about?.length &&
            about.map(({ title, listItems }, index) => (
              <>
                <Title key={`title-${index}`}>{title}</Title>
                <ul key={`list-${index}`}>
                  {listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </>
            ))}
        </Card>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await PrismicService.getSingle('job-seekers-page');

  const employees = (data as any)?.body?.length
    ? (data.body as any[])
        .find(({ slice_type }) => slice_type === 'employees')
        .items.map(EmployeeModel.fromPrismic)
    : [];

  const title = (data as any)?.title?.length ? data.title[0].text : undefined;
  const about = (data as any)?.about?.length ? CardModel.fromPrismicGroup(data.about) : [];

  return {
    props: {
      title,
      about,
      employees,
      data,
    },
  };
}

export default JobSeekers;
