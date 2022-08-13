import WineModal from './components/WineModal';
import { useState, useEffect } from 'react';

export default function Wine() {
  const [wineApi, setWineApi] = useState(null);
  useEffect(() => {
    if (wineApi) {
      wineApi.loop();
    }
  }, [wineApi]);
  return <WineModal getApi={setWineApi} />;
}
