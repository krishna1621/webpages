import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import "../styles/Home.css";
import MuiCardComponent from "./VenuseCard";
import { Container } from '@mui/material';
import Arun from"../assest/Arun.jpg"
import Wankhede from "../assest/Wankhede.jpg"
import dy from"../assest/dy.jpg"
import Chennai from"../assest/Chennai.jpg"
import Chinnaswamy from "../assest/Chinnaswamy.jpg"
import Narendra from "../assest/Narendra.jpg"
import eden from"../assest/eden.jpg"


const cards = [
    { id: 1, image: Chennai, title: 'M.A.CHIDAMABARAM STADIUM', body: 'chennai',body1:"view stadium Details" },
    { id: 2, image: eden, title: 'EDEN GARDENS', body: 'kolkatta' ,body1:"view stadium Details" },
    { id: 3, image: Wankhede, title: 'WANKHADE', body: 'mumbai',body1:"view stadium Details"  },
    { id: 4, image:  Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore' ,body1:"view stadium Details" },
    { id: 5, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD' ,body1:"view stadium Details" },
    { id: 6, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT' ,body1:"view stadium Details" },
  
  
  
  
  ];

export const Card = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (id) => {
      setActiveCard(id === activeCard ? null : id);
    };
  
  return (
    <Container  sx={{
        mt:"30px",
      

       
    }}>   
        
        
         <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid key={card.id} item xs={12} sm={6} md={4}>
          <MuiCardComponent  isActive={card.id === activeCard}
              onClick={() => handleCardClick(card.id)}{...card} />
        </Grid>
      ))}
    </Grid>
    </Container>

  )
}
