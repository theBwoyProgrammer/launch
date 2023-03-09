/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
// import { useEffect, useState } from 'react';
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchLaunches } from './features/launchesSlice';

// function App() {
//   const dispatch = useDispatch();
//   const launches = useSelector((state) => state.launches);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const itemsPerPage = 15;

//   useEffect(() => {
//     dispatch(fetchLaunches());
//   }, [dispatch]);

//   const filteredLaunches = launches.filter((launch) => launch.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   const totalPages = Math.ceil(filteredLaunches.length / itemsPerPage);

//   function displayPage(pageNumber) {
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredLaunches.slice(startIndex, endIndex);
//   }

//   function handlePageChange(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   function handleSearch(event) {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="search">
//           <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
//         </div>
//         {filteredLaunches.length > 0 ? (
//           displayPage(currentPage).map((launch) => (
//             <div key={launch.id} className="card-1 col-xl-4 col-lg-4 col-md-6 col-sm-6">
//               <div>
//                 <img src={launch.links.patch.small} alt={launch.name} />
//               </div>
//               <div className="bottom-div">
//                 <h1>{launch.name}</h1>
//                 <p maxLength={50}>{launch.details}</p>
//                 <span>{launch.date_utc}</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No launches found with that name.</p>
//         )}
//         {filteredLaunches.length > itemsPerPage && (
//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

/* eslint-disable max-len */
// import { useEffect, useState } from 'react';
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchLaunches } from './features/launchesSlice';

// function App() {
//   const dispatch = useDispatch();
//   const launches = useSelector((state) => state.launches);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   // eslint-disable-next-line no-unused-vars
//   const [launchesState, setLaunches] = useState([]);
//   const itemsPerPage = 15;

//   useEffect(() => {
//     dispatch(fetchLaunches());
//   }, [dispatch]);

//   const filteredLaunches = launches.filter((launch) => launch.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   const totalPages = Math.ceil(filteredLaunches.length / itemsPerPage);

//   function displayPage(pageNumber) {
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredLaunches.slice(startIndex, endIndex);
//   }

//   function handlePageChange(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   function handleSearch(event) {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   }

//   function truncateString(str, maxLength) {
//     if (str && str.length > maxLength) {
//       return str.substring(0, maxLength) + '...';
//     } else {
//       return str;
//     }
//   }

//   function toggleDetails(id) {
//     setLaunches((prevLaunches) => prevLaunches.map((launch) => {
//       if (launch.id === id) {
//         return { ...launch, showDetails: !launch.showDetails };
//       }
//       return launch;
//     }));
//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="search">
//           <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
//         </div>
//         {filteredLaunches.length > 0 ? (
//           displayPage(currentPage).map((launch) => (
//             <div key={launch.id} className="card-1 col-xl-4 col-lg-4 col-md-6 col-sm-6">
//               <div>
//                 <img src={launch.links.patch.small} alt={launch.name} />
//               </div>
//               <div className="bottom-div">
//                 <h1>{launch.name}</h1>
//                 {launch && (
//                   <div>
//                     <p>{launch.showDetails ? launch.details : truncateString(launch.details, 100)}</p>
//                     {launch.details && launch.details.length > 100 && (
//                       <button onClick={() => toggleDetails(launch.id)}>
//                         {launch.showDetails ? 'See less' : 'See more'}
//                       </button>
//                     )}
//                   </div>
//                 )}
//                 <span>{launch.date_utc}</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No launches found with that name.</p>
//         )}
//         {filteredLaunches.length > itemsPerPage && (
//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               // eslint-disable-next-line react/button-has-type
//               <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

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
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [selectedDateFilter, setSelectedDateFilter] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('');
  const [isUpcomingFilter, setIsUpcomingFilter] = useState(false);

  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  useEffect(() => {
    const filteredLaunches = launches.filter((launch) => {
    // Filter by name
      if (searchTerm && !launch.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Filter by launch date
      if (selectedDateFilter) {
        const launchDate = new Date(launch.date_utc);
        const filterDate = new Date(selectedDateFilter);
        if (launchDate.getTime() !== filterDate.getTime()) {
          return false;
        }
      }
      // Filter by launch status
      if (selectedStatusFilter) {
        if (launch.success !== selectedStatusFilter) {
          return false;
        }
      }
      // Filter by upcoming
      if (isUpcomingFilter && launch.upcoming !== isUpcomingFilter) {
        return false;
      }
      return true;
    });
    setFilteredLaunches(filteredLaunches);
  }, [launches, searchTerm, selectedDateFilter, selectedStatusFilter, isUpcomingFilter]);

  useEffect(() => {
    setFilteredLaunches(launches.filter((launch) => launch.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [launches, searchTerm]);

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

  function truncateString(str, maxLength) {
    if (str && str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  }

  function toggleDetails(id) {
    setFilteredLaunches((prevLaunches) => prevLaunches.map((launch) => {
      if (launch.id === id) {
        return { ...launch, showDetails: !launch.showDetails };
      }
      return launch;
    }));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="search">
          <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
        </div>

        <div className="filters">
          <button onClick={() => setSelectedDateFilter('')}>All Dates</button>
          <button onClick={() => setSelectedDateFilter(new Date().toISOString())}>Today</button>
          <button onClick={() => setSelectedDateFilter(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())}>Last 7 days</button>
          <button onClick={() => setSelectedDateFilter(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())}>Last 30 days</button>
          <button onClick={() => setSelectedDateFilter(new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString())}>Last 365 days</button>
          <button onClick={() => setSelectedStatusFilter('')}>All Statuses</button>
          <button onClick={() => setSelectedStatusFilter(true)}>Success</button>
          <button onClick={() => setSelectedStatusFilter(false)}>Failure</button>
          <button onClick={() => setIsUpcomingFilter(!isUpcomingFilter)}>{isUpcomingFilter ? 'Hide Upcoming' : 'Show Upcoming'}</button>
        </div>

        <div className="filters">
          {selectedDateFilter && (
          <span>
            Selected Date:
            {' '}
            {new Date(selectedDateFilter).toLocaleDateString()}
          </span>
          )}
          {selectedStatusFilter !== '' && (
          <span>
            Selected Status:
            {' '}
            {selectedStatusFilter ? 'Success' : 'Failure'}
          </span>
          )}
          {isUpcomingFilter && <span>Upcoming Launches Only</span>}
        </div>

        {filteredLaunches.length > 0 ? (
          displayPage(currentPage).map((launch) => (
            <div key={launch.id} className="card-1 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div>
                <img src={launch.links.patch.small} alt={launch.name} />
              </div>
              <div className="bottom-div">
                <h1>{launch.name}</h1>
                {launch && (
                  <div>
                    <p>{launch.showDetails ? launch.details : truncateString(launch.details, 100)}</p>
                    {launch.details && launch.details.length > 100 && (
                      <button onClick={() => toggleDetails(launch.id)}>
                        {launch.showDetails ? 'See less' : 'See more'}
                      </button>
                    )}
                  </div>
                )}
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
