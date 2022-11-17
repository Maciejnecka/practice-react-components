import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    
    render() {
        return <button>click me ({ this.state.amount })</button>
    }
}

root.render(<Counter />);
