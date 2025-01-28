import React, { useState } from "react";
import { Drawer, Button, Typography, Box } from "@mui/material";

const Cart = () => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    return (
      <div>
        {/* Button to Open the Drawer
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsDrawerOpen(true)}>
          Open Cart
        </Button>
   */}
        {/* Drawer Component */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            sx={{
              width: 300, // Width of the drawer
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Cart Title */}
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Your Cart
            </Typography>
  
            {/* Cart Content */}
            <Typography variant="body1" color="text.secondary">
              Your cart is empty
            </Typography>
          </Box>
        </Drawer>
      </div>



  )
}

export default Cart