const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Helper: Check if input is a valid URL
function isValidUrl(str) {
  try {
    const parsed = new URL(str);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

// Google Search fallback
function getGoogleSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

// Proxy endpoint
app.get('/proxy', async (req, res) => {
  let target = req.query.url;

  if (!target) {
    return res.status(400).send('Missing "url" query parameter');
  }

  // Handle input that's not a valid URL
  if (!isValidUrl(target)) {
    target = getGoogleSearchUrl(target);
  }

  try {
    const response = await axios.get(target, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0 Safari/537.36',
      },
    });

    res.send(response.data);
  } catch (err) {
    console.error(`Error fetching ${target}:`, err.message);
    res.status(504).send('Failed to fetch the target URL');
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Flight Unblocker proxy running at http://localhost:${PORT}`);
});

