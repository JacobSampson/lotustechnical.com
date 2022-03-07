import React, { useState } from 'react';
import styled from 'styled-components';

export interface ShowMoreCardProps {
  showMoreLabel: string;

  name: string;
  title?: string;
  cellPhoneNumber: string;
  officePhoneNumber: string;
  email: string;
  linkedInUrl: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
}

const ShowMoreCardSizes = {
  small: '9rem',
  medium: '23rem',
  large: '30rem',
};

const Container = styled.div<{ size: ShowMoreCardProps['size'] }>`
  max-width: ${({ size }) => ShowMoreCardSizes[size]};
  width: 100%;
`;

const BodyBlock = styled.div`
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

  filter: invert(49%) sepia(47%) saturate(581%) hue-rotate(64deg) brightness(96%) contrast(93%);
  color: white;
  user-select: none;
  border-radius: 50%;
  transition: 0.5s;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    filter: invert(33%) sepia(44%) saturate(699%) hue-rotate(63deg) brightness(95%) contrast(85%);
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
  opacity: ${({ active }) => (active ? '100%' : '0%')};
  ${({ active }) => !active && 'pointer-events: none;'}
  color: white;
  background-image: linear-gradient(0deg, rgba(74, 156, 57, 1) 10%, 75%, rgba(74, 156, 57, 0) 90%);
  text-align: center;
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CaptionBlock = styled.div`
  color: white;
  background-color: #4a9b39;
  text-align: center;
  padding: 1rem 0;

  h3 {
    font-style: bold;
    margin: 0;
  }

  h4 {
    font-weight: 500;
  }
`;

const ShowMoreCard: React.FC<ShowMoreCardProps> = ({
  showMoreLabel = 'Contact',

  name,
  title,
  imageUrl,
  size = 'medium',
  children,
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container {...props} size={size}>
      <BodyBlock>
        <EmployeeImage src={imageUrl} />
        <InfoBlock active={active}>{children}</InfoBlock>
        <OpenButton src="/icons/arrow.png" onClick={() => setActive(!active)} active={active} />
      </BodyBlock>
      <CaptionBlock size={size}>
        <h3>{name}</h3>
        {title && <h4>{title}</h4>}
      </CaptionBlock>
    </Container>
  );
};

export default ShowMoreCard;
