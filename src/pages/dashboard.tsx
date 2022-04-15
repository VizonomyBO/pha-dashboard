import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useModalDispatch, useModalState } from '../store/hooks';
import { useDashboard } from '../store/hooks/custom/useDashboard';
import { authorizationManager } from '../utils/authorizationManager';
import { FormArea } from '../components/FormArea';
import { BUSINESS_DETAILS } from '../constants';
import { FormTabType } from '../@types';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_DETAILS as FormTabType);
  const navigate = useNavigate();
  const { open } = useModalState();
  const { setModal } = useModalDispatch();
  const token = authorizationManager.getToken();
  const {
    table,
    setParams,
    totalElements,
    selectedElements,
    setSelectedElements
  } = useDashboard();

  if (!token) {
    navigate('/login');
  }

  return (
    <>
      {
        open
        && (
        <FormArea
          isModal
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clickProceed={() => {
            setModal({ open: false, type: false });
          }}
        />
        )
      }
      <div className="container">
        <figure className="bgnoise home" />
        <div className="barblue db withmodal" />
        <div className="pagecontainer">
          <DashboardNavbar />
          <div className="dashboard">
            <DashboardHeader setParams={setParams} selectedElements={selectedElements} />
            <DashboardTable
              table={table}
              setParams={setParams}
              totalElements={totalElements}
              selectedElements={selectedElements}
              setSelectedElements={setSelectedElements}
            />
          </div>
        </div>
      </div>
    </>
  );
};
