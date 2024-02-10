// pages/api/getData.js
import fs from 'fs';

export default (req, res) => {
  // Get the file content synchronously (you may want to use asynchronous methods in a real-world scenario)
  const data = fs.readFileSync('./data.json', 'utf-8');
  const jsonData = JSON.parse(data);

  res.status(200).json(jsonData);
};
