// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5009;
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/ecodbcopy', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors()); // Use the cors middleware

const ecoSchema = new mongoose.Schema({
	nameOfProd: String,
	category: String,
	price: Number,
	image: String,
});

const ecoProd = mongoose.model('products', ecoSchema);

// Function to seed initial data into the database
const seedDatabase = async () => {
	try {
		await ecoProd.deleteMany(); // Clear existing data

		const ecoProdss = [
			{ 
				nameOfProd: 'Handwash', 
				category: 'Beauty', 
				price: 199, 
				image: 'https://th.bing.com/th/id/OIP.ARGfUnRBiZSkCboFMBTs5wHaH5?w=177&h=189&c=7&r=0&o=5&pid=1.7'
			},
            { nameOfProd: 'Wooden Comb', category: 'Beauty', price: 100, image: 'https://i.etsystatic.com/16701092/r/il/eada3d/2290549625/il_1588xN.2290549625_550d.jpg'  },
            { nameOfProd: 'Soap Pack of four', category: 'Beauty', price: 1000, image: 'https://australianbotanicalsoap.com/wp-content/uploads/Vegan-Friendly-Superbox-Primary.jpg'  },
            { nameOfProd: 'Bowl', category: 'Home and Kitchen', price: 300, image: 'https://www.ikea.com/in/en/images/products/blanda-matt-serving-bowl-bamboo__0711988_pe728640_s5.jpg?f=xl'  },
            { nameOfProd: 'Napkins', category: 'Home and Kitchen', price: 350, image: 'https://th.bing.com/th?id=OIP.5O45wTzor17ACfe8AxY2YAHaEy&w=310&h=201&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'  },
            { nameOfProd: 'Dishwasher', category: 'Home and Kitchen', price: 450, image: 'https://th.bing.com/th/id/OIP.3OLK6KRbemRemOoPW6EJhQHaHa?rs=1&pid=ImgDetMain' },
            { nameOfProd: 'Recycled Vase', category: 'Recycled Products', price: 2450, image: 'https://i.pinimg.com/originals/5e/91/73/5e9173077d3fe06bad8e2429da4d3328.jpg' },
        
            { nameOfProd: 'Recycled Plant Pot', category: 'Recycled Products', price: 1450, image: 'https://cdn.craftingagreenworld.com/wp-content/uploads/2012/04/PotMaker-review-2-of-2-600x400.jpg' },
        
            { nameOfProd: 'Recycled Tumbler', category: 'Recycled Products', price: 425, image: 'https://cdn.notonthehighstreet.com/fs/de/7c/2fdf-9a0c-4bc1-84a1-eeeea19c03b7/original_recycled-plastic-tumbler.jpg' },
			{ nameOfProd: 'Recycled Lamps', category: 'Recycled Products', price: 1999, image: 'https://th.bing.com/th/id/OIP.0hdWTQoOxHijr0VxGImh4gHaE7?w=277&h=184&c=7&r=0&o=5&pid=1.7'},
        
        
        
        ];
		
		await ecoProd.insertMany(ecoProdss);
		console.log('Database seeded successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	}
};

// Seed the database on server startup
seedDatabase();

app.get('/', (req, res) => {
    res.send('Welcome to the Eco Products API!');
});




// Define API endpoint for fetching all products
app.get('/api/ecoProdss', async (req, res) => {
	try {
		// Fetch all products from the database
		const allecoProds = await ecoProd.find();

		// Send the entire products array as JSON response
		res.json(allecoProds);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
