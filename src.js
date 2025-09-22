import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// ✅ a. Counter using useState
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ✅ b. Fetch data using useEffect
function DataFetcher() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Sample API
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Fetched Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ c. Sharing data using Props
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function ParentComponent() {
  const userName = "React Learner";
  return (
    <div>
      <h3>Props Demo</h3>
      <Greeting name={userName} />
    </div>
  );
}

// ✅ d. Form Implementation
function FormDemo() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${formData.name}, ${formData.email}`);
  };

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// ✅ e. Iterative Rendering using map()
function ItemList() {
  const items = ['React', 'Vue', 'Angular', 'Svelte'];
  return (
    <div>
      <h3>Frameworks List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Main App Component
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>React Concepts Demo</h2>
      <Counter />
      <DataFetcher />
      <ParentComponent />
      <FormDemo />
      <ItemList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));