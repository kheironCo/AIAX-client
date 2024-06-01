import { AtomHeading as Heading } from 'kheiron-ui';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';

const Business = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Heading variant="h1">Other</Heading>} />
    </Routes>
  );
};

export default Business;
