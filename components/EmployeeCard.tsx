import React, { useState } from "react";
import styled from "styled-components";

export interface EmployeeCardProps {
  name: string;
  title?: string;
  cellPhoneNumber: string;
  officePhoneNumber: string;
  email: string;
  linkedInUrl: string;
  imageUrl: string;
  size?: "small" | "medium" | "large";
}

const EmployeeCardSizes = {
  small: "10rem",
  medium: "25rem",
  large: "40rem",
};

const Container = styled.div`
  height: 100%;
`;

const BodyBlock = styled.div<{ size: EmployeeCardProps["size"] }>`
  height: ${({ size }) => EmployeeCardSizes[size]};
  position: relative;
`;

const EmployeeImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

const OpenButton = styled.img<{ active: boolean }>`
  @keyframes bob {
    from {
    }
    to {
      transform: translate(50%, -20%);
    }
  }

  position: absolute;
  width: 25%;
  right: 50%;
  top: 75%;
  z-index: $idx-nav;
  transform: translate(50%, 0%);

  filter: invert(49%) sepia(47%) saturate(581%) hue-rotate(64deg)
    brightness(96%) contrast(93%);
  color: white;
  user-select: none;
  border-radius: 50%;
  transition: 0.5s;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    filter: invert(33%) sepia(44%) saturate(699%) hue-rotate(63deg)
      brightness(95%) contrast(85%);
    cursor: pointer;
  }

  ${({ active }) =>
    active
      ? `
    top: 0%;
    transform: translate(50%, -25%) rotate(180deg);
    width: 18%;

    `
      : `
    animation-name: bob;
  `}
`;

const InfoBlock = styled.div<{ active: boolean }>`
  transition: 0.25s ease-in-out;
  opacity: ${({ active }) => (active ? "100%" : "0%")};
  ${({ active }) => !active && "pointer-events: none;"}
  color: white;
  background-image: linear-gradient(
    0deg,
    rgba(74, 156, 57, 1) 10%,
    75%,
    rgba(74, 156, 57, 0) 90%
  );
  text-align: center;
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const InfoLinkBlock = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: auto;
  margin-bottom: 3rem;

  p {
    margin: 0;
    padding: 0;
    font-size: x-large;
  }
`;

const InfoLink = styled.a`
  text-decoration: none;
  color: white;
  transition: 0.25s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #8dd8f8;
  }
`;

const CaptionBlock = styled.div`
  color: white;
  background-color: #4a9b39;
  text-align: center;
  font-size: xx-large;
  height: 6.5em;
  padding: 1rem 0;

  h3 {
    font-style: bold;
    margin: 0;
  }

  h4 {
    font-weight: 500;
  }
`;

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  title,
  cellPhoneNumber,
  officePhoneNumber,
  email,
  linkedInUrl,
  imageUrl,
  size = "large",
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container {...props}>
      <BodyBlock size={size}>
        <EmployeeImage src={imageUrl} />
        <InfoBlock active={active}>
          <InfoLinkBlock>
            <p>
              Cell:{" "}
              <InfoLink href={`tel:${cellPhoneNumber.replace(/\D+/g, "")}`}>
                {cellPhoneNumber}
              </InfoLink>
            </p>
            <p>
              Office:{" "}
              <InfoLink href={`tel:${officePhoneNumber.replace(/\D+/g, "")}`}>
                {officePhoneNumber}
              </InfoLink>
            </p>
            <p>
              Email: <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
            </p>
            <p>
              <InfoLink href={linkedInUrl}>LinkedIn</InfoLink>
            </p>
          </InfoLinkBlock>
        </InfoBlock>
        <OpenButton
          src="/icons/arrow.png"
          onClick={() => setActive(!active)}
          active={active}
        />
      </BodyBlock>
      <CaptionBlock>
        <h3>{name}</h3>
        {title && <h4>{title}</h4>}
      </CaptionBlock>
    </Container>
  );
};

export default EmployeeCard;
