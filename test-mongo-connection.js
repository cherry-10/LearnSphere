const mongoose = require('mongoose');
require('dotenv').config();

console.log('=== MongoDB Connection Test ===');
console.log('Environment Variables Loaded:', Object.keys(process.env).includes('MONGODB_URI'));
console.log('MONGODB_URI:', process.env.MONGODB_URI || '(not set)');
console.log('Current working directory:', process.cwd());

async function testConnection() {
  try {
    console.log('\nAttempting connection with these options:', {
      uri: process.env.MONGODB_URI,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('✅ MongoDB connection successful!');
    console.log('Connected to:', mongoose.connection.host);
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Connection failed:', error.message);
    console.log('\nTroubleshooting Tips:');
    console.log('1. Verify .env file exists in project root');
    console.log('2. Check MONGODB_URI in .env matches Atlas connection string');
    console.log('3. Ensure network access in Atlas dashboard');
    console.log('4. Confirm MongoDB Atlas cluster is running');
    process.exit(1);
  }
}

testConnection();
