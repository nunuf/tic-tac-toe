import { Box, Modal } from '@mui/material';

import './DisplayStatus.css';

interface DisplayStatusProps {
  open: boolean;
  status: string;
  emoji: string;
  onClose: () => void; 
}

const DisplayStatus: React.FC<DisplayStatusProps> = ({ open, status, emoji, onClose}): JSX.Element => {
  return (
    <div className="DisplayStatus">
      <Modal open={open}>
        <Box className="ModalContent">
          <div className='Message'>{status}</div>
          <div className='Emoji'>{emoji}</div>
          <div className="Btn" onClick={() => onClose()}>Play Again</div>
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayStatus;
