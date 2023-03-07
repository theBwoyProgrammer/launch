import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from './features/launchesSlice';

function App() {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  console.log(launches);

  return (
    <div>
      {launches.map((launch) => (
        <div key={launch.id}>{launch.name}</div>
      ))}
    </div>
  );
}

export default App;
