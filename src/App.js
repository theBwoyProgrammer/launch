/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from './features/launchesSlice';

function App() {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 15; // Change this value to the number of items you want to display per page

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const filteredLaunches = launches.filter((launch) => launch.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredLaunches.length / itemsPerPage);

  function displayPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredLaunches.slice(startIndex, endIndex);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="search">
          <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
        </div>
        {filteredLaunches.length > 0 ? (
          displayPage(currentPage).map((launch) => (
            <div key={launch.id} className="card-1 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div>
                <img src={launch.links.patch.small} alt={launch.name} />
              </div>
              <div className="bottom-div">
                <h1>{launch.name}</h1>
                <p>{launch.details}</p>
                <span>{launch.date_utc}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No launches found with that name.</p>
        )}
        {filteredLaunches.length > itemsPerPage && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              // eslint-disable-next-line react/button-has-type
              <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
