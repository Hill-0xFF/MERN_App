import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Slide, { type SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

type TransitionProps = Omit<SlideProps, 'direciton'>;

interface LoadingProps {
  trigger: boolean;
  message?: string;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export const Loading: React.FC<LoadingProps> = ({
  trigger,
  message = 'Carregando...',
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={trigger}
      TransitionComponent={TransitionDown}
    >
      <>
        <CircularProgress />
        <Typography variant="button" ml={2}>
          {message}
        </Typography>
      </>
    </Snackbar>
  );
};

export default Loading;
