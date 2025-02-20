const express = require('express');
const axios = require('axios');
const cors = require('cors');
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS

app.get('/proxy', async (req, res) => {
app.get("/proxy", async (req, res) => {
    try {
        const targetUrl = req.query.url;
        if (!targetUrl) {
            return res.status(400).json({ error: 'URL is required' });
            return res.status(400).json({ error: "URL is required. Please provide a valid URL parameter." });
        }

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
            'Referer': 'https://www.google.com/', // Fake referer
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'DNT': '1', // Do Not Track request header
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",
            "Referer": "https://www.google.com/", // Fake referer
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "DNT": "1", // Do Not Track request header
        };

        let responses = [];
@@ -30,14 +30,14 @@ app.get('/proxy', async (req, res) => {
            headers,
            maxRedirects: 0, // Do not follow redirects, capture Location header
            validateStatus: (status) => status < 400 || status === 403 || status === 301 || status === 302,
            responseType: 'text', // Get response as text (HTML)
            responseType: "text", // Get response as text (HTML)
        });

        // Store initial response headers & HTML
        responses.push({
            status: `HTTP/2 ${firstResponse.status}`,
            headers: firstResponse.headers,
            html: firstResponse.data, // Full HTML content
            html: firstResponse.data || "No HTML content received.",
        });

        // Handle redirects (if Location header exists)
@@ -47,33 +47,33 @@ app.get('/proxy', async (req, res) => {
                    headers,
                    maxRedirects: 0, // Capture redirect response
                    validateStatus: (status) => status < 400 || status === 403,
                    responseType: 'text', // Get HTML content
                    responseType: "text", // Get HTML content
                });

                responses.push({
                    status: `HTTP/2 ${redirectResponse.status}`,
                    status: `HTTP/2 ${redirectResponse.status} (Redirected)`,
                    headers: redirectResponse.headers,
                    html: redirectResponse.data, // Full HTML content
                    html: redirectResponse.data || "No HTML content received after redirection.",
                });
            } catch (redirectError) {
                responses.push({
                    status: 'Redirect Fetch Failed',
                    error: redirectError.message,
                    status: "Redirect Fetch Failed",
                    error: redirectError.message || "Unknown error occurred while following redirect.",
                });
            }
        }

        res.json(responses);
    } catch (error) {
        let errorResponse = {
            status: 'Failed to fetch URL',
            error: error.message,
            status: "Failed to fetch URL",
            error: error.message || "Unknown error occurred.",
        };

        if (error.response) {
            errorResponse.status = `HTTP/2 ${error.response.status}`;
            errorResponse.headers = error.response.headers;
            errorResponse.html = error.response.data || 'No HTML content';
            errorResponse.html = error.response.data || "No HTML content received from the server.";
        }

        res.status(500).json([errorResponse]);