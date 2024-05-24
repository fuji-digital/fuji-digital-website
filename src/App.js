import { MaintenancePage } from "./components/MaintenancePage/MaintenancePage";
import { LivePage } from "./components/LivePage/LivePage";

export const App = () => {
  const isLive = false;

  return isLive ? <LivePage /> : <MaintenancePage />;
};
