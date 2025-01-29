import React from 'react'

const Footer = () => {
  return (
    <>
<div
  style={{ display: "flex",justifyContent: "space-between", alignItems: "flex-start",  flexWrap: "wrap", gap: "5px", padding: "20px",
marginLeft:"250px",width:'800px',}}>
  {/* Column 1 */}
  <div>
    <h3>Quick Links</h3>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Shipping and Delivery</li>
      <li>Cancellations & Refund</li>
      <li>Size Chart & FAQs</li>
    </ul>
  </div>

  {/* Column 2 */}
  <div>
    <h3>Policies</h3>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
      <li>Terms & Condition</li>
      <li>Privacy Policy</li>
      <li>Covid-19 Updates</li>
      <li>Terms of Services</li>
      <li>Refund Policy</li>
    </ul>
  </div>

  {/* Column 3 */}
  <div>
    <h3>Social Media</h3>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
      <li>Facebook</li>
      <li>Pinterest</li>
      <li>Instagram</li>
    </ul>
  </div>

  {/* Column 4 (Footer) */}
  <div style={{ textAlign: "center" }}>
    <p style={{ margin: "5px 0" }}>© 2025, URBANLOOM</p>
    <p style={{ margin: "5px 0" }}>Powered by Shopify</p>
  </div>
</div>
<br /><br />
<div style={{display:'flex',justifyContent:'center', padding:'10px', borderStyle:'dotted', borderColor:'gray'}}>
The Covet.pics gallery embed has not loaded because the embed does not exist. Please verify that the correct Embed ID is being used
</div>

    </>
  )
}

export default Footer