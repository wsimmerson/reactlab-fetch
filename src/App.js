import React from "react";


function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=1");
    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="customer profile image" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
