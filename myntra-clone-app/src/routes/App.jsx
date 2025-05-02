import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import { Outlet } from "react-router";
import FetchItems from "../components/FetchItems.jsx";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
