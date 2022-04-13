import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useDashboard } from '../store/hooks/custom/useDashboard';
import { authorizationManager } from '../utils/authorizationManager';

export const Dashboard = () => {
  const navigate = useNavigate();
  const token = authorizationManager.getToken();
  const {
    table, setParams, totalElements, selectedElements, setSelectedElements
  } = useDashboard();

  if (!token) {
    navigate('/login');
  }

  return (
    <div className="container">
      <figure className="bgnoise home" />
      <div className="barblue db" />
      <div className="pagecontainer">
        <DashboardNavbar />
        <div className="dashboard">
          <DashboardHeader setParams={setParams} selectedElements={selectedElements} />
          {/* eslint-disable-next-line */}
          <DashboardTable table={table} setParams={setParams} totalElements={totalElements} selectedElements={selectedElements} setSelectedElements={setSelectedElements} />
        </div>
      </div>
    </div>
  );
};
