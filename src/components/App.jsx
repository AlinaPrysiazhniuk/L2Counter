//import Counter from './Counter/Counter';
import Clock from '../components/Counter/Clock';

export const App = ({ onClick }) => {
  return (
    <>
      {/* <Counter /> */}
      <Clock onClick={onClick} />
    </>
  );
};
