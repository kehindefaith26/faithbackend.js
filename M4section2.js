//Error Handling in Product Management

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const app = express();
app.use(bodyParser.json());

// Define Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },  // Name should be unique
    price: { type: Number, required: true, min: 0 },  // Price should be a positive number
    category: { type: String, required: true },
    inStock: { type: Boolean, required: true }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Add Product (Create)
app.post('/products', async (req, res) => {
    const { name, price, category, inStock } = req.body;

    // Check if all fields are provided
    if (!name || !price || !category || typeof inStock !== 'boolean') {
        return res.status(400).send({ error: 'Invalid input. All fields are required.' });
    }

    try {
        // Check for duplicate product by name
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(400).send({ error: 'Product with this name already exists.' });
        }

        // Create a new product
        const newProduct = new Product({ name, price, category, inStock });
        await newProduct.save();

        res.status(201).send({ message: 'Product created successfully!', product: newProduct });
    } catch (error) {
        res.status(500).send({ error: 'Error creating product. Please try again later.' });
    }
});

// Get all Products (Read)
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({ products });
    } catch (error) {
        res.status(500).send({ error: 'Error retrieving products.' });
    }
});

// Update Product (Update)
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, category, inStock } = req.body;

    // Check if all fields are provided
    if (!name || !price || !category || typeof inStock !== 'boolean') {
        return res.status(400).send({ error: 'Invalid input. All fields are required.' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, category, inStock }, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ error: 'Product not found.' });
        }
        res.status(200).send({ message: 'Product updated successfully!', product: updatedProduct });
    } catch (error) {
        res.status(500).send({ error: 'Error updating product.' });
    }
});

// Delete Product (Delete)
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send({ error: 'Product not found.' });
        }
        res.status(200).send({ message: 'Product deleted successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Error deleting product.' });
    }
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
