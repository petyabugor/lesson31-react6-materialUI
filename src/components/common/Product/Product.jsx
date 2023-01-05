import React from 'react';

import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

const Product = (props) => {
   const items = useSelector((state) => state.products.items);
   const renderList = items.slice(0, 12).map((item) => {
      const { image, title, price, id } = item;
      return (
         <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            md={4}
            key={id}
         >
            <Card
               sx={{
                  height: '100%',
               }}
            >
               <CardMedia
                  component="img"
                  image={image}
                  title="картинка"
                  height="200"
               ></CardMedia>
               <CardContent
                  sx={{
                     height: '100px',
                     display: 'flex',
                     gap: '10px',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                  }}
               >
                  <Typography
                     variant="body1"
                     align="center"
                  >
                     {title}
                  </Typography>
               </CardContent>
               <CardActions
                  sx={{
                     minHeight: '100px',
                     display: 'flex',
                     gap: '10px',

                     justifyContent: 'space-between',
                  }}
               >
                  <Typography variant="body1">{'Ціна: ' + price + '$'} </Typography>
                  <Button
                     variant="outlined"
                     sx={{ borderColor: grey[500] }}
                     onClick={() => props.onAdd(item)}
                  >
                     Купити
                  </Button>
               </CardActions>
            </Card>
         </Grid>
      );
   });
   return <>{renderList}</>;
};

export default Product;
