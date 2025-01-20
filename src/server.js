const app = require("./app");
require("dotenv").config();

// Configure port and run server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
