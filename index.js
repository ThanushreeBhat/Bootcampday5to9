require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ---- AUTH ---- //
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email, password }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'User registered successfully', user: data[0] });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

    if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ message: 'Login successful', user: data });
});

// ---- DESTINATIONS ---- //
app.get('/api/destinations/indian', async (req, res) => {
    const { data, error } = await supabase.from('indian_destinations').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.get('/api/destinations/international', async (req, res) => {
    const { data, error } = await supabase.from('international_destinations').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.get('/api/packages', async (req, res) => {
    const { data, error } = await supabase.from('packages').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// ---- BOOKINGS ---- //
app.post('/api/bookings', async (req, res) => {
    const { user_id, package_id, travel_date, persons } = req.body;
    const { data, error } = await supabase
        .from('bookings')
        .insert([{ user_id, package_id, travel_date, persons }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Booking successful', booking: data[0] });
});

app.get('/api/bookings/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user_id);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// ---- CONTACT / QUOTE ---- //
app.post('/api/quote', async (req, res) => {
    const { name, email, phone, destination, message } = req.body;
    const { data, error } = await supabase
        .from('quotes')
        .insert([{ name, email, phone, destination, message }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Quote request submitted', quote: data[0] });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
