import { useEffect } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useDashboard } from '../store/hooks/custom/useDashboard';

export const Dashboard = () => {
  console.log('dashboard');
  const { table } = useDashboard();
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
          <DashboardHeader />
          <DashboardTable table={table} />
        </div>
      </div>
    </div>
  );
};
