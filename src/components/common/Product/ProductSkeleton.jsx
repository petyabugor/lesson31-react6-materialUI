import React from 'react';
import ContentLoader from 'react-content-loader';
import { Grid } from '@mui/material';

const ProductSkeleton = (props) => (
   <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      md={4}
   >
      <ContentLoader
         speed={2}
         viewBox="0 0 270 350"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         {...props}
      >
         <rect
            x="0"
            y="0"
            rx="0"
            ry="0"
            width="270"
            height="300"
         />
      </ContentLoader>
   </Grid>
);

export default ProductSkeleton;
