require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Securely loaded from .env
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (data.error) {
            return res.status(400).json({ error: data.error.message });
        }

        res.json({ result: data.choices[0].message.content });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});

app.listen(PORT, () => {
    console.log(`Secure proxy server running on http://localhost:${PORT}`);
});