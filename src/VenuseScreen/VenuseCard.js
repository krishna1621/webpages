// MuiCardComponent.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MuiCardComponent = ({ image, title, body, isActive, onClick ,body1}) => {
  return (
    <Card sx={{
      transition: 'transform 0.8s ease-in-out, box-shadow 0.8s ease-in-out',
      transform: isActive ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
      cursor: 'pointer',
      ':hover': {
        boxShadow: 20, // theme.shadows[20]
        transform: 'translateY(-10px) scale(1.05)',
      },


      
    }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent sx={{
        textAlign: "center"
      }} >
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body1}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MuiCardComponent;
