import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // 1. Initial State
  constructor(props) {
    super(props);
    // State to track if an error has been caught
    this.state = { hasError: false }; 
  }

  // 2. Lifecycle Method for Fallback UI
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  // 3. Lifecycle Method for Logging
  componentDidCatch(error, errorInfo) {
    // You can log the error to an external service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI (what the user sees when something breaks)
      return (
        <div style={{ padding: '20px', border: '1px solid red', color: 'red' }}>
          <h2>Whoops! Something went wrong here.</h2>
          <p>We are working to fix this. Please try refreshing the page.</p>
        </div>
      );
    }

    // If no error, render the normal content
    return this.props.children; 
  }
}

export default ErrorBoundary;