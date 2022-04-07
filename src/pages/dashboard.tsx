import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useDashboard } from '../store/hooks/custom/useDashboard';

export const Dashboard = () => {
  const navigate = useNavigate();
  const TOKEN_KEY = 'token';
  const token = localStorage.getItem(TOKEN_KEY);
  const { table } = useDashboard();

  console.log('dashboard');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      console.log(table);
    }
  }, [token, table]);
  return (
    <div className="container">
      {/* <div className="bgwhite" /> */}
      <figure className="bgnoise home" />
      <div className="barblue db" />
      <div className="pagecontainer">
        <DashboardNavbar />
        <div className="dashboard">
          <DashboardHeader />
          <DashboardTable table={table} />
        </div>
      </div>
    </div>
  );
};
