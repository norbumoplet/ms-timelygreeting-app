const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const currentHour = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const hour = new Date(currentHour).getHours();

  let greeting = '';
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  res.send(greeting);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
