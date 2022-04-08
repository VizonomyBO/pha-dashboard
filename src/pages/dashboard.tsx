import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useDashboard } from '../store/hooks/custom/useDashboard';
import { loginValidation } from '../utils/loginValidation';

export const Dashboard = () => {
  const navigate = useNavigate();
  const token = loginValidation.getToken();
  const { table, setParams } = useDashboard();

  if (!token) {
    navigate('/login');
  }

  useEffect(() => {
    console.log(table);
  }, [table]);
  return (
    <div className="container">
      {/* <div className="bgwhite" /> */}
      <figure className="bgnoise home" />
      <div className="barblue db" />
      <div className="pagecontainer">
        <DashboardNavbar />
        <div className="dashboard">
          <DashboardHeader setParams={setParams} />
          <DashboardTable table={table} />
        </div>
      </div>
    </div>
  );
};
