import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'white', 
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  row: any;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, row }) => {
    console.log(row)
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...modalStyle }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Invoice details 
       </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {row && (
            <>
              <p>ID: {row.id}</p>
              <p>Date: {row.date}</p>
              <p>Payee: {row.vendorName}</p>
              <p>Description: {row.description}</p>
              <p>Due Date: {row.dueDate}</p>
              <p>Amount: {row.amount}</p>
              <p>Status: {row.paid ? 'Paid' : 'Not Paid'}</p> 
            </>
          )}
        </Typography>
      </Box>
    </Modal>
  );
};

export default BasicModal;
