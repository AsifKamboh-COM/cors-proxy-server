const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS

app.get('/proxy', async (req, res) => {
    try {
        const targetUrl = req.query.url;
        if (!targetUrl) {
            return res.status(400).json({ error: 'URL is required' });
        }

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
            'Referer': 'https://www.google.com/', // Fake referer
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'DNT': '1', // Do Not Track request header
        };

        let responses = [];

        // First request to capture headers (including redirects)
        const firstResponse = await axios.get(targetUrl, {
            headers,
            maxRedirects: 0, // Do not follow redirects, capture Location header
            validateStatus: (status) => status < 400 || status === 403 || status === 301 || status === 302,
            responseType: 'text', // Get response as text (HTML)
        });

        // Store initial response headers & HTML
        responses.push({
            status: `HTTP/2 ${firstResponse.status}`,
            headers: firstResponse.headers,
            html: firstResponse.data, // Full HTML content
        });

        // Handle redirects (if Location header exists)
        if (firstResponse.headers.location) {
            try {
                const redirectResponse = await axios.get(firstResponse.headers.location, {
                    headers,
                    maxRedirects: 0, // Capture redirect response
                    validateStatus: (status) => status < 400 || status === 403,
                    responseType: 'text', // Get HTML content
                });

                responses.push({
                    status: `HTTP/2 ${redirectResponse.status}`,
                    headers: redirectResponse.headers,
                    html: redirectResponse.data, // Full HTML content
                });
            } catch (redirectError) {
                responses.push({
                    status: 'Redirect Fetch Failed',
                    error: redirectError.message,
                });
            }
        }

        res.json(responses);
    } catch (error) {
        let errorResponse = {
            status: 'Failed to fetch URL',
            error: error.message,
        };

        if (error.response) {
            errorResponse.status = `HTTP/2 ${error.response.status}`;
            errorResponse.headers = error.response.headers;
            errorResponse.html = error.response.data || 'No HTML content';
        }

        res.status(500).json([errorResponse]);
    }
});

// Start Server
app.listen(PORT, () => console.log(`CORS Proxy running on http://localhost:${PORT}`));
