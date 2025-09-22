import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

// ✅ Class Component: Counter
class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <h3>Class Counter</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// ✅ Functional Component: Counter + Click Handler + Conditional Rendering + String Literals
function FunctionalDemo() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const name = "React Developer";
  const greeting = `Welcome, ${name}!`;

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h3>Functional Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleClick}>Click Me</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setShowMessage(!showMessage)}>
          Toggle Message
        </button>
        {showMessage && <p>This is a conditionally rendered message.</p>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>{greeting}</p>
      </div>
    </div>
  );
}

// ✅ Main App Component
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>React Basics Demo</h2>
      <ClassCounter />
      <FunctionalDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));