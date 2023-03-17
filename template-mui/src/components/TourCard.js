import { Favorite, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import React from 'react'

const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 600,marginBottom:'20px' }}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Perfect place  for a  Trip"
       
      />
      <CardMedia
        component="img"
        height="194"
        image={require('./hd.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color='error'>
          <Favorite />
        </IconButton>
        <IconButton aria-label="share" color='primary'>
          <Share />
        </IconButton>
        <Rating name="simple-controlled"/>
       
      </CardActions>
     
    </Card>
  );
}
  
export default TourCard