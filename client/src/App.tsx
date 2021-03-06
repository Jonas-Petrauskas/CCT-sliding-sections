import React from "react";
import "./App.css";
import ListItem from "./Components/ListItem/ListItem";

function App() {
  const [open, setOpen] = React.useState<Function | boolean | number | null>(
    null
  );

  const data = [
    {
      title: "Build test task",
      items: [
        {
          text: "Create repositor",
        },
        {
          text: "Implement designs",
        },
        {
          text: "Implement functionality",
        },
      ],
    },
    {
      title: "Submit your test task",
      items: [
        {
          text: "Open email client",
        },
        {
          text: "Sent link information to",
          email: "careers@cornercasetech.com",
        },
      ],
    },
    {
      title: "Participate in tech interview",
      items: [
        {
          text: "Talk with HR",
        },
        {
          text: "Talk with Tech team",
        },
      ],
    },
    {
      title: "Reciece anster",
      items: [
        {
          text: "Receive answers",
        },
        {
          text: "Start your IT career",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <header className="app-header" data-testid="header">
        <h1>CTT Lab Process</h1>
      </header>
      <div className="app-content" data-testid="content">
        {data.map((dataObject, index) => (
          <ListItem
            key={index}
            listData={dataObject}
            listNumber={index + 1}
            open={open === index}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
