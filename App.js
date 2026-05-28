const heading = React.createElement("h1", { id: "heading" }, "Hello World from React"); //creates a js object
// {} above is the place where you provide attribute to your tag ie. {'id': 'heading'}
const tag = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", { id: "head1" }, "Im H1"), React.createElement("h2", { id: "head2" }, "Im H2")])], [React.createElement("div", { id: "child2" }, [React.createElement("h1", { id: "head1" }, "Im H1"), React.createElement("h2", { id: "head2" }, "Im H2")])]);
console.log(heading); //object with props and attr

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(tag); //Render method converting the heading object into a h1 tag

// -----

/* 
<div id=parent>
  <div id ='child1'>
    <h1 id='head1'>Im H1</h1>
    <h2 id='head2'>Im H2</h2>
  </div>
  <div id ='child2'>
    <h1 id='head1'>Im H1</h1>
    <h2 id='head2'>Im H2</h2>
  </div>
</div> */
