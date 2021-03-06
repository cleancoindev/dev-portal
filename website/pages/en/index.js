const React = require('react');
const App = require(`${process.cwd()}/core/App`);
const MakerTheme = require(`${process.cwd()}/core/MakerTheme`)

class Index extends React.Component {
  render() {
    return (
      <MakerTheme>
        <App { ...this.props }/>
      </MakerTheme>
    );
  }
}

module.exports = Index;
