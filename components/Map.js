// components/Map.js
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(
  () => import('./LeafletMap'), 
  {
    ssr: false
  }
);

const Map = (props) => {
  return <LeafletMap {...props} />;
};

export default Map;