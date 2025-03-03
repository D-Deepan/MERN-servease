// corsOptions.js
const allowedOrigins = [
    'http://localhost:3000' // React frontend running locally
     // Your production domain
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request
      } else {
        callback(new Error('Not allowed by CORS')); // Block request
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
    credentials: true, // Enable Access-Control-Allow-Credentials
    optionsSuccessStatus: 204, // Status for preflight
  };
  
  module.exports = corsOptions;
  