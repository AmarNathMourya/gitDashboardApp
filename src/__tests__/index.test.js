import ReactDOM from 'react-dom'

test('renders application root', () => {
  const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.js");
    expect(ReactDOM.render).toBe(ReactDOM.render);
});
