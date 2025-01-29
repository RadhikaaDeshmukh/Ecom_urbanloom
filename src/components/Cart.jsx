import React, { useContext } from "react";
import { Drawer, Typography, Box } from "@mui/material";
import { CartContext } from './CartProvider';

const Cart = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(CartContext);

  return (
    <div>
      {/* Drawer component */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 300,
            height: "100%", // Ensures the box takes the full height of the drawer
            backgroundColor: "red", // Background color of the drawer
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Cart Title */}
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white" }} // Adjusted for readability on red
          >
            Your Cart
          </Typography>

          {/* Cart Content */}
          <Typography
            variant="body1"
            color="white" // Adjusted for readability on red
            >
            Your cart is currently empty.
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default Cart;
