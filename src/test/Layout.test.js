import React from "react";
import renderer from "react-test-renderer";

import { theme } from "../view/styled/Theme";
import {
  Wrapper,
  Row,
  ImageUser,
  CardUser,
  CardContainer,
  Overlay,
  SpinStyle
} from "../view/styled/Layout";

describe("Layout Component", () => {
  test("Wrapper styled component test", () => {
    const tree = renderer.create(<Wrapper theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Row styled component test", () => {
    const tree = renderer.create(<Row theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("CardUser styled component test", () => {
    const tree = renderer.create(<CardUser theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ImageUser styled component test reverse", () => {
    const tree = renderer.create(<ImageUser theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("CardContainer styled component test ", () => {
    const tree = renderer.create(<CardContainer theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Overlay styled component test ", () => {
    const tree = renderer.create(<Overlay theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("SpinStyle styled component", () => {
    const tree = renderer.create(<SpinStyle theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
