import { AtomHeading as Heading } from 'kheiron-ui';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Active from './Active';

const Business = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/active" element={<Active />} />
      <Route path="/*" element={<Heading variant="h1">Business</Heading>} />
    </Routes>
  );
};

export default Business;
