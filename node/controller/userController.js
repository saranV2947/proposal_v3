const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../counts.json');

const getalluser = (req, res) => {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const counts = JSON.parse(jsonData);

        res.json(counts);
    } catch (err) {
        console.error("Error reading file:", err);
        res.status(500).send("Error, something went wrong");
    }
};

const addCount = (req, res) => {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const counts = JSON.parse(jsonData);

        const newEntry = {
            count: 1, // Default count value
            datetime: new Date().toISOString() // Auto-generated date & time
        };

        counts.push(newEntry);

        fs.writeFileSync(filePath, JSON.stringify(counts, null, 2), 'utf-8');

        res.status(201).json({ message: "Count added successfully", newEntry });
    } catch (err) {
        console.error("Error writing to file:", err);
        res.status(500).send("Error, something went wrong");
    }
};

const getCountStats = (req, res) => {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const counts = JSON.parse(jsonData);

        const totalcount = counts.length;

        // Get the current date and the past 3 days
        const now = new Date();
        const pastThreeDays = {};

        for (let i = 0; i < 3; i++) {
            const pastDate = new Date();
            pastDate.setDate(now.getDate() - i);
            const dayName = pastDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            pastThreeDays[dayName] = 0;
        }

        // Count occurrences for the past 3 days
        counts.forEach(entry => {
            const entryDate = new Date(entry.datetime);
            const dayName = entryDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

            if (pastThreeDays.hasOwnProperty(dayName)) {
                pastThreeDays[dayName]++;
            }
        });

        // Format the response
        const dateStats = Object.entries(pastThreeDays).map(([day, count]) => ({ [day]: count }));

        res.json({ totalcount, date: dateStats });
    } catch (err) {
        console.error("Error processing data:", err);
        res.status(500).send("Error, something went wrong");
    }
};

module.exports = { getalluser, addCount, getCountStats };
