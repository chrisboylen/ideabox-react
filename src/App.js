import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import UserInput from "./UserInput";
import IdeasContainer from "./IdeasContainer";

const theme = {
  lightgreen: "#6ab65e",
  mediumgreen: "#419334",
  darkgreen: "#0c4e02",
  contgreen: "#6ab65e57",
  bodycolor: "#e6ffe2",
  pink: "#c35218",
  lightpink: "#d66f76"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    background: ${theme.bodycolor};
    border: 1.5rem solid ${theme.pink};
    font-family: 'Lato';
    height: 100vh;
  }
`;

class App extends Component {
  state = {
    ideas: []
  };

  addToIdeas = idea => {
    const newIdea = { ...idea, id: Date.now() };
    const ideas = [newIdea, ...this.state.ideas];

    this.setState({ ideas });
  };

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({ ideas });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <UserInput addToIdeas={this.addToIdeas} />
          <IdeasContainer
            ideas={this.state.ideas}
            removeIdea={this.removeIdea}
          />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
