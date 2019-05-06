const React = require('react');

const MakerTheme = require(`${process.cwd()}/core/MakerTheme`)

class Help extends React.Component {
  render() {
    return (
      <MakerTheme>
        <div>This is the help page</div>
      </MakerTheme>
    );
  }
}

module.exports = Help;
