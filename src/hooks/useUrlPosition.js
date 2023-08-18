import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // this hook getting data from URL
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
