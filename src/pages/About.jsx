import React from 'react';

const About = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">About the AI Trading Agent</h1>
    <p className="text-lg mb-4">The AI Trading Agent is designed to autonomously analyze market data, make investment decisions, and execute trades. It uses large language models (LLMs) for decision-making and continuously monitors market conditions to adjust its strategies.</p>
    <p className="text-lg mb-4">Key Features:</p>
    <ul className="list-disc list-inside">
      <li>Data Gathering from Market Data APIs and Web Scraping</li>
      <li>Decision-Making using LLMs</li>
      <li>Trade Execution with Brokerage APIs</li>
      <li>Performance Monitoring and Logging</li>
      <li>User Interface for Monitoring and Manual Adjustments</li>
    </ul>
  </div>
);

export default About;