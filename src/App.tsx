const baseUrl = "https://cookies-back.onrender.com";

const addCookie = async () => {
  const response = await fetch(`${baseUrl}/add-cookie`, {
    credentials: "include",
  });

  const data = await response.json();
  return data;
};

const removeCookie = async () => {
  const response = await fetch(`${baseUrl}/remove-cookie`, {
    credentials: "include",
  });

  const data = await response.json();
  return data;
};

const App = () => {
  const click = async () => {
    const data = await addCookie();
    console.log(data);
  };

  const remove = async () => {
    const data = await removeCookie();
    console.log(data);
  };
  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={click}>Add cookie</button>
      <button onClick={remove}>remove cookies</button>
    </div>
  );
};

export default App;
