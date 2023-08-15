import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // this to move to specific URL
  // This is also a react-router hook
  const navigate = useNavigate();
  // this hook getting data from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    // By using navigate hook we are moving to form page using URL
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 20 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
