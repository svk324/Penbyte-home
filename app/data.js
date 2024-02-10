import React, { useEffect, useState } from "react";

export default function Data() {
  // Create a state variable to store the data
  const [data, setData] = useState([]);

  // Create a function to fetch the data from the JSON file
  const fetchData = async () => {
    // Use the fetch API to get the data from the public folder
    const response = await fetch("/data.json");
    // Parse the response as JSON
    const data = await response.json();
    // Set the data to the state variable
    setData(data);
  };

  // Use the useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Return a JSX element to display the data
  return (
    <div>
      <h1>Data from JSON file</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
