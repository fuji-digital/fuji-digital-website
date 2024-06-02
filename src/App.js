import { MaintenancePage } from "./components/MaintenancePage/MaintenancePage";
import { LivePage } from "./components/LivePage/LivePage";

export const App = () => {
  const { REACT_APP_DEV } = process.env;
  const isLive = REACT_APP_DEV;

  return isLive ? <LivePage /> : <MaintenancePage />;
};
