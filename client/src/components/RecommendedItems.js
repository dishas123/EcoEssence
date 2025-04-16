import React from 'react';

const RecommendedItems = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ color: '#006d77' }}>Recommended Items Page</h2>
            <p style={{ fontSize: '1.2rem', color: '#023047' }}>Check out our recommended items on the home page!</p>
            <p style={{ fontSize: '1.2rem', color: '#023047' }}>Our recommended bestseller items are:</p>

            {/* Image 1: Recycled Plastic Tumbler */}
            <div style={{ margin: '20px 0' }}>
                <img 
                    src="https://cdn.notonthehighstreet.com/fs/de/7c/2fdf-9a0c-4bc1-84a1-eeeea19c03b7/original_recycled-plastic-tumbler.jpg" 
                    alt="Recycled Plastic Tumbler" 
                    style={{ width: '80%', maxWidth: '500px', borderRadius: '10px' }} 
                />
                <p style={{ fontSize: '1rem', color: '#005f73', fontStyle: 'italic' }}>Recycled Plastic Tumbler</p>
            </div>

            {/* Image 2: Soap Pack of 4 */}
            <div style={{ margin: '20px 0' }}>
                <img 
                    src="https://australianbotanicalsoap.com/wp-content/uploads/Vegan-Friendly-Superbox-Primary.jpg" 
                    alt="Soap Pack of 4" 
                    style={{ width: '80%', maxWidth: '500px', borderRadius: '10px' }} 
                />
                <p style={{ fontSize: '1rem', color: '#005f73', fontStyle: 'italic' }}>Soap Pack of 4</p>
            </div>
        </div>
    );
};

export default RecommendedItems;
