import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Exhibition from '../Exhibition/exhibition';

const ImagenesBrota = [
   
  
   
   
  
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0745112d-9e71-44a1-ad95-cbf4def85700/Tissue',
      title: 'Chairs',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb65c540-cfac-4be3-4892-9e054002ba00/Tissue',
      title: 'Laptop',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/f192effe-6292-4819-6095-3432b8994a00/Tissue',
      title: 'Doors',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4ec33243-cb91-426d-bb88-1b9850425200/Tissue',
      title: 'Coffee',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/485b0ae9-40dd-435f-1c9a-a01fba7f4200/Tissue',
      title: 'Storage',
    },
 
  ];

  const Samana = [
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/474c370e-2a59-42cf-442f-11b7b2227300/public',
      title: 'Bed',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/df24f2e3-17ae-4e9f-feb2-e61259da2c00/public',
      title: 'Books',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9b53d02c-afe8-4780-167f-4079acadff00/public',
      title: 'Sink',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0e6474d0-cd17-41cc-a7d9-f0fba0a0c500/public',
      title: 'Kitchen',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bade9527-e43c-4643-d5b0-b0cf97b0e200/public',
      title: 'Blinds',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/86ac925e-90f0-4672-5da0-a88c57e46800/public',
      title: 'Chairs',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8fa25ec1-3057-486b-83b8-fd7b5f2fdc00/public',
      title: 'Laptop',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb05308f-3604-441c-2423-446301bdfa00/public',
      title: 'Doors',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7d1d39be-7478-4eb2-d463-bd1ca1e94c00/public',
      title: 'Coffee',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public',
      title: 'Storage',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/69cb4309-b1cf-4226-71e7-d67eae109e00/public',
      title: 'Candle',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/31270291-169b-4114-7b33-d275484be200/public',
      title: 'Coffee table',
    },
  ];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 44,
  overflow:'auto',
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal({open,setOpen}) {
    console.log('Open es : ',open);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
        <Exhibition title="Samana"  itemData={Samana} />
        </Box>
      </Modal>
    </div>
  );
}