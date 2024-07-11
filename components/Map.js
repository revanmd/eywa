// components/Map.js
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./LeafletMap'), {
  ssr: false
});

export default Map;