import app from './app';
const PORT = process.env.PORT || process.env.API_PORT || 8080;
app.listen(PORT, () => {
   console.log(`Our app is running on port ${PORT}`);
});
