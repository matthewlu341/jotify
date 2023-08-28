import './App.css';
import Button from "@mui/material/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Welcome to jotify!</p>
          <Button variant='contained' color = 'success'>Connect to Spotify</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
