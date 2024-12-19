import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const TrustRatingModal = ({open, setOpen}) => {
  const handleClose = () => setOpen(false);
    const marks = [
        {
            value: -10,
            label: '-10',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    return (
      <div>
        <Dialog
            open={open}
            onClose={() => handleClose()}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
            fullWidth={true}
            maxWidth="lg"
        >
          <DialogTitle>신뢰지수 평가하기</DialogTitle>
          <DialogContent>
            <DialogContentText>
              거래는 어땠나요?
            </DialogContentText>
              <Typography gutterBottom>신뢰지수</Typography>
              <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={0}
                  step={1}
                  min={-10}
                  max={10}
                  marks={marks}
              />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="success" onClick={() => handleClose()}>취소</Button>
            <Button variant="contained" color="success" type="submit">평가하기</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
};

export default TrustRatingModal;
