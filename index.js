

const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BNkyWexuGU9M8dPkptAXOnH_BSuMabWoNZ1lk0hOaTKaFf4-o-1sWB03nL3tPWEJ-4gm4KHdjdTY3dC4hj-tLhI';
const privateVapidKey = 'JlERQcpuarZwuZaTfvKaunGu16x5EAsYssEuSEgFnfA';

webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
  );
  
  // Subscribe Route
  app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
  
    // Send 201 - resource created
    res.status(201).json({});
  
    // Create payload
    const payload = JSON.stringify({ title: "Prueba notificadora" });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });
  
  const port = 5000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));