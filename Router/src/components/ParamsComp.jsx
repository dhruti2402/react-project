
import { useParams } from 'react-router-dom';

const ParamsComp = () => {
  const { id } = useParams();

  return (
    <div>Params is: {id}</div>
  );
};

export default ParamsComp;
