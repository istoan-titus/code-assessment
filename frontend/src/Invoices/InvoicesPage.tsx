/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import EnhancedTable from './EnhancedTable';
import { fetchInvoices, fetchInvoice } from '../api/apiService';
import BasicModal from './BasicModal';

const InvoicesPage: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery('invoices', fetchInvoices);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  const handleOpenModal = async (row: any) => {
    try {
      const rowData = await fetchInvoice(row.id); 
      setSelectedRowData(rowData);
    } catch (error) {
      console.error('Error fetching invoice data:', error);
      setSelectedRowData(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedRowData(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="container">
    
      <div className="main-content">
        <EnhancedTable invoices={data} onRowClick={handleOpenModal} />
        <BasicModal open={selectedRowData !== null} onClose={handleCloseModal} row={selectedRowData} />
      </div>
    </div>
  );
};

export default InvoicesPage;


import './InvoicesPage.css';
