body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e1e2f, #2b2b40);
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  color: gold;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
}

h2 {
  margin-top: 40px;
  color: #ffd700;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

table {
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
  background: #2c2c3a;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #444;
}

th {
  background: #3a3a4f;
  color: #fff;
}

tr:nth-child(even) {
  background: #2a2a3f;
}

tr:hover {
  background: #44445a;
}

tr:first-child td {
  background: #ffd700;
  color: black;
  font-weight: bold;
}

.merito-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.merito-container img {
  max-width: 300px;
  width: 100%;
  border: 2px solid gold;
  border-radius: 10px;
}