import React from "react";
import App from "../view/App";
import { ThemeProvider } from "styled-components";
import { theme } from "../view/styled/Theme";
import { mount, shallow } from "enzyme";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

const mountWithTheme = (Component, customTheme) => {
  const theme = customTheme;
  return mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
};

describe("App Component", () => {
  test("should mount App component", () => {
    mountWithTheme(<App />, theme);
  });

  test("render component componentDidMount set a right state", () => {
    const component = shallow(<App />);
    expect(component.state().isFirstRender).toEqual(true);
  });

  test("called a renderResquest passing mharsani should return a object", async () => {
    const component = shallow(<App />);
    await component.instance().renderResquest("mharsani");
    expect(component.state().user.name).toEqual("Matheus Harsani");
  });

  test("called a renderResquest passing mharsani should return repos array", async () => {
    const component = shallow(<App />);
    await component.instance().renderResquest("mharsani");
    expect(component.state().repos.data[0].name).toEqual("app-react-git-error");
  });

  test("called a renderResquest passing dadadaczczczdadadad should return a error", async () => {
    const component = shallow(<App />);
    await component.instance().renderResquest("dadadaczczczdadadad");
    expect(component.state().error).toEqual(true);
  });

  test("called a handleSubmite shoud return a state with the same value ", () => {
    const event = {
      preventDefault() {},
      target: {
        inputSearchUser: {
          value: "the-value"
        }
      }
    };
    const component = enzyme.shallow(<App />);
    component.instance().handleSubmite(event);
    expect(component.state().search).toEqual("the-value");
  });
});
