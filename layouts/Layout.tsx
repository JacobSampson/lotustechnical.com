import Head from "next/head";
import React from "react";
import { HiStar } from "react-icons/hi";
import styled from "styled-components";
import { Aside } from "../components/Aside";
import { NavBar } from "../components/NavBar";

export interface LayoutProps {
  asides?: any;
}

const Body = styled.div`
  margin-left: 25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Footer = ({ ...props }) => {
  return (
    <footer id="footer" {...props}>
      <ul>
        <li>
          <a href="mailto:brousslang@lotustechnical.com">
            E-mail: brousslang@lotustechnical.com
          </a>
        </li>
        <li>
          <a
            href="https://maps.google.com/maps?q=7100 Northland Cirle N, Minneapolis, MN 55428"
            target="_blank"
          >
            Location: 7100 Northland Cir N Suite 105 Minneapolis, MN 55428
          </a>
        </li>
        <li>
          <a href="tel:7633076500">Phone: 763-307-6500 </a>
        </li>
      </ul>
    </footer>
  );
};

const StyledFooter = styled(Footer)`
  background-color: #9fb8ad90;
  /* background-color: #499b3955; */
  padding: 3rem;
  margin-top: auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;

    li {
      margin: 0.5rem 0;
    }
  }

  a {
    transition: all 0.25s;
    opacity: 1;
    color: black;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.4;
  }
`;

const StyledNavBar = styled(NavBar)`
  height: 100vh;
  width: 25rem;
  position: fixed;
  left: 0;
  top: 0;
`;

const Asides = styled.aside`
  display: flex;
  grid-gap: 1em;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screen.medium}) {
    width: calc(100% - 4em);
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    width: 100%;
  }
`;

export const siteTitle = "Lotus Technical";

export const Layout: React.FC<LayoutProps> = ({ asides, children }) => {
  return (
    <>
      <Head>
        <title>Lotus Technical</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Staffing agency for the Minneapolis-St. Paul area"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <StyledNavBar />
      <Body>
        {children}
        <Asides>{asides}</Asides>
        <StyledFooter />
      </Body>
    </>
  );
};

export default Layout;
