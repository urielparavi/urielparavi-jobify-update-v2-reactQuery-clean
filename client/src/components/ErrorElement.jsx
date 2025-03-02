import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorElement';

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <div>
        <h3>there was an error...</h3>
        <p>please try again later!!!</p>
        <Link to="/dashboard">back to dashboard</Link>
      </div>
    </Wrapper>
  );
};
export default ErrorElement;
