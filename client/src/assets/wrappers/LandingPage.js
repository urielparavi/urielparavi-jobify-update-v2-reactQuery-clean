import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    text-align: justify;
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }

  /* Media query for phone responsiveness */
  @media (max-width: 768px) {
    nav {
      padding: 0 1rem;
    }
    .page {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      padding-top: 1.5rem;
    }
    p {
      font-size: 1rem;
      max-width: 100%;
      margin-bottom: 1rem;
    }
    .btn {
      padding: 0.5rem 1rem;
    }
    .main-img {
      display: block;
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;
