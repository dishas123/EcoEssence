import React from 'react';

const AboutUs = () => {
    return (
        <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "transparent",  // Keeping original background
            //borderRadius: "10px",
            //boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif",
            color: "black",
            textAlign:"left"
        }}>
            <h2 style={{
                textAlign: "center",
                color: "#004d40",
                fontSize: "2rem",
                marginBottom: "20px"
            }}>
                About Us
            </h2>
            <p style={{
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: "1.6",
                marginBottom: "20px",
                textAlign:"left"

            }}>
                Welcome to our eco-friendly e-commerce platform, where sustainability meets convenience. Our mission is to provide consumers with a one-stop solution for purchasing eco-friendly products while also encouraging a sustainable lifestyle. We believe in the power of conscious shopping, which is why we only offer products that are kind to the planet, from reusable items to zero-waste essentials and much more.
            </p>
            <p style={{
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: "1.6",
                marginBottom: "20px",
                textAlign:"left"
            }}>
                Our website is not just a marketplace – it's a community. We offer several unique features to help promote eco-friendly living:
            </p>
            <ul style={{
                listStyle: "none",
                padding: "0",
                marginBottom: "20px",
                textAlign:"left"
            }}>
                <li style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    padding: "10px",
                    textAlign:"left"
                  //  backgroundColor: "#80deea",  // Soft green for each item
                   // borderRadius: "5px"
                }}>
                    <strong>Blogs:</strong> Read insightful articles on sustainable living, eco-friendly product recommendations, and tips for reducing your carbon footprint.
                </li>
                <li style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    padding: "10px",
                    textAlign:"left"
                  //  backgroundColor: "#80deea",  // Soft green for each item
                   // borderRadius: "5px"
                }}>
                    <strong>Donate:</strong> Contribute to the environment by donating old clothes, electronics, and other items. Together, we can make a significant impact.
                </li>
                <li style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    padding: "10px",
                    textAlign:"left"
                   // backgroundColor: "#80deea",  // Soft green for each item
                   // borderRadius: "5px"
                }}>
                    <strong>Rewards:</strong> Earn rewards when you shop sustainably! Buy eco-friendly items and accumulate points to redeem discounts and other perks.
                </li>
                <li style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    padding: "10px",
                    textAlign:"left"
                   // backgroundColor: "#80deea",  // Soft green for each item
                    //borderRadius: "5px"
                }}>
                    <strong>Activities:</strong> Stay updated with our latest eco-friendly initiatives, workshops, and events happening in your community.
                </li>
            </ul>
            <p style={{
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: "1.6",
                marginBottom: "20px",
                textAlign:"left"
            }}>
                Join us in our mission to create a sustainable future, one eco-friendly product at a time. Whether you're looking to shop, donate, or learn more, we're here to support you on your journey toward a greener, more sustainable world.
            </p>
        </div>
    );
};

export default AboutUs;
