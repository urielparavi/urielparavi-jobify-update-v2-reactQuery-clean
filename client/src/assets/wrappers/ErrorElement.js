import styled from 'styled-components';

const Wrapper = styled.main`
  margin-top: -10rem;
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: var(--primary-700);
      transform: scale(1.05);
    }
    &:active {
      color: var(--primary-800);
      transform: scale(0.98);
    }
  }
`;

export default Wrapper;
