import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

export interface NavBarProps {}

const Bar = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content 2fr;
  height: 100%;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    180deg,
    #9fb8ad 15%,
    /*#499b39a0 15%, */ rgb(0, 30, 50) 51%,
    rgb(0, 30, 50) 75%
  );
  box-shadow: -4em 1em 2em 5em rgba(0, 0, 0, 0.35);

  @media screen and (max-width: ${({ theme }) => theme.screen.xsmall}) {
    display: flex;
    justify-content: center;
  }
`;

const ExternalLinks = ({ ...props }) => (
  <div className="nav-external-links" {...props}>
    <ul>
      <li className="color-filter side-bar-button link-info">
        <a href="#footer">
          <img id="icon-info" src="/icons/info.png" />
        </a>
      </li>
    </ul>
    <ul>
      <li className="nav-external-link">
        <div>
          <a href="https://www.facebook.com/LotusTechnical" target="_blank">
            <img src="/icons/facebook-circle.png" />
          </a>
        </div>
      </li>
      <li className="nav-external-link">
        <a href="https://twitter.com/lotustechnical" target="_blank">
          <img src="/icons/twitter-circle.png" />
        </a>
      </li>
      <li className="nav-external-link">
        <a
          href="https://www.linkedin.com/company/lotus-technical"
          target="_blank"
        >
          <img src="/icons/linkedin-circle.png" />
        </a>
      </li>
    </ul>
  </div>
);

const StyledExternalLinks = styled(ExternalLinks)`
  width: 100%;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1%;
    margin-left: 0;
    padding: 0.5% 0;
    width: 100%;

    list-style: none;

    li {
      height: 3em;
    }
  }

  .nav-external-link {
    position: relative;
    margin: 4%;
    width: 10%;
    padding: 0;

    transition: 0.5s;

    a {
      width: 100%;
    }

    img {
      display: relative;
      transition: 0.5s;
      width: 100%;
    }

    &:hover {
      width: 15%;

      img {
        top: 0;
        transform: translateY(-15%);
      }
    }
  }

  .link-info {
    // Used to find filter to adjust color from black: https://codepen.io/sosuke/pen/Pjoqqp
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(44deg)
      brightness(103%) contrast(104%);
    position: relative;
    margin: 4%;
    width: 48%;
    padding: 0;

    transition: 0.5s;

    a {
      width: 100%;
    }

    img {
      display: relative;
      transition: 0.5s;
      width: 100%;
    }

    &:hover {
      width: 55%;

      img {
        top: 0;
        transform: translateY(-3.5%);
      }
    }
  }
`;

const InternalLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const Container = styled.header``;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  padding: 3rem 3rem 1rem 3rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};
  cursor: pointer;
  height: 100%;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;

const StyledInternalLink = styled.div<{ active?: boolean }>`
  height: 100%;
  width: 100%;
  text-decoration: none;
  background-color: rgb(0, 30, 50);
  color: white;
  cursor: pointer;
  font-size: 22px;
  font-weight: 100;
  position: relative;
  text-align: left;
  padding: 0.5rem 3rem;

  transition: 0.25s ease-in-out;

  &:hover {
    filter: brightness(70%);
    cursor: pointer;
    text-decoration: none;
  }

  ${({ active }) => active && `filter: brightness(150%);`}
`;

export const NavBar: React.FC<NavBarProps> = ({ ...props }) => {
  const router = useRouter();

  return (
    <Container {...props}>
      <Bar>
        <Link href="/">
          <StyledLink>
            <StyledImage
              // priority
              src="/images/logo.png"
              height={"100%"}
              width={"100%"}
              alt={"Lotus Technical Logo"}
            />
          </StyledLink>
        </Link>

        <StyledExternalLinks />

        <InternalLinks>
          <Link href="/">
            <StyledInternalLink active={router.pathname === "/"}>
              Home
            </StyledInternalLink>
          </Link>
          <Link href="/clients">
            <StyledInternalLink active={router.pathname === "/clients"}>
              Clients
            </StyledInternalLink>
          </Link>
          <Link href="/job-seekers">
            <StyledInternalLink active={router.pathname === "/job-seekers"}>
              Job Seekers
            </StyledInternalLink>
          </Link>
          <Link href="/employment-forms">
            <StyledInternalLink
              active={router.pathname === "/employment-forms"}
            >
              Employment Forms
            </StyledInternalLink>
          </Link>
          <Link href="/current-openings">
            <StyledInternalLink
              active={router.pathname === "/current-openings"}
            >
              Current Openings
            </StyledInternalLink>
          </Link>

          <Link href="mailto:brousslang@lotustechnical.com">
            <StyledInternalLink>Submit a Resumé</StyledInternalLink>
          </Link>
        </InternalLinks>
      </Bar>
    </Container>
  );
};
