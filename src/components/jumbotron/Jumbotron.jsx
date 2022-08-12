import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./jumbotron.css"
import InfoIcon from '@mui/icons-material/Info';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};



BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Jumbotron() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    
      <div>

          <h2 className='mainText'>Simple Facebook Scraper</h2>
          <InfoIcon variant="outlined" onClick={handleClickOpen} className = "iconUi" fontSize="large" color="primary">

          </InfoIcon>
          <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          About Scraper
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           This is a simple scraper that is built using Node js, Express, Puppeteer and MongoDb.
           It works by automating a webbrowser to login as a user and get the data from the requested
           page.  
          </Typography>
          <Typography gutterBottom>
            The web page is built using react and MUI library. It is farily simple and easy to use. 
            A more comprehensive Scraper can be found  at <a href='https://github.com/jemxz/faceboook-scraper-backend.git'>facebook scraper</a>
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog>
        <div className='jumbotron'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/GWBskx4/1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
  
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/k0QJgyq/2.jpg" 
                  alt="Second slide"
                />
              </Carousel.Item>
  
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/4JhDCTT/Final.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
          `</Carousel>
  
             
          </div>
      </div>
      )
}

export default Jumbotron
