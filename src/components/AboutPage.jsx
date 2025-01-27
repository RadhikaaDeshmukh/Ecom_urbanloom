import React from "react";

const AboutUs = () => {
  return (
    <>
    <br /><br/>
<h1 style={{ textAlign: "center",position: "relative",}}>About Us
<span
    style={{ position: "absolute",bottom: "-20px",left: "50%", transform: "translateX(-50%)", width: "60px", height: "2px", backgroundColor: "skyblue", display: "block", }}/>
</h1>
<br /><br />
<div style={{ display: "flex",justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9"}}>
  <div style={{width: "1000px",padding: "20px",lineHeight: "1.8",fontSize: "16px",color: "#333",textAlign: "justify" }}>
    Today, growing concern over climate change is altering the way we historically thought about lifestyle and leisure.
    With awareness of the negative impact of synthetic fabrics increasing, consumers are searching for ways to reduce
    their environmental footprint and are eager to adopt natural fibers. However, there are still barriers to entry,
    including availability and variety, which leaves consumers with limited choices.
    <br />
    <br />
    Started in 2018, Urbanloom is a homegrown brand that brings high-quality, naturally sourced home furnishing products
    for the Indian consumer. With its foundation in sustainability, Urbanloom makes conscious consumerism stylish and
    functional for everyone. As an inclusive brand, we use both traditional and modern techniques to create unique
    products that are built to last.
    <br />
    <br />
    We have an in-house production unit where we design eco-friendly, skin-friendly, comfortable, stylish, colorful,
    and luxurious ranges of cotton, jute, and denim bean bags, poufs, ottomans, and other home furnishing products.
    Urbanloom is emerging as a prominent eco-conscious brand, which is all set to revamp the home and lifestyle space
    with sustainable alternatives.
    <br />
    <br />
    We supply bean bags to tech start-ups, urban cafes, and spas. For bulk and corporate inquiries, drop an email to{" "}
    <a href="mailto:support@urbanloom.in" style={{ color: "#007BFF" }}>
      support@urbanloom.in</a>{" "} or message us at{" "}
    <a href="https://www.facebook.com/urbanloom" target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF" }}>www.facebook.com/urbanloom</a>.
  </div>
</div>
<br />

<div
  style={{ display: "flex",justifyContent: "space-between", alignItems: "flex-start",  flexWrap: "wrap", gap: "5px", padding: "20px",
marginLeft:"250px",width:'800px',
    
  }}
>
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
  );
};

export default AboutUs;
