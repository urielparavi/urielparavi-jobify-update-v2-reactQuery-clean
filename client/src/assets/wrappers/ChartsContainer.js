import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  button:hover {
    color: var(--primary-700);
    transform: scale(1.05);
    transition: color 0.3s ease, transform 0.2s ease;
  }
  button:active {
    color: var(--primary-800);
    transform: scale(0.98);
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
