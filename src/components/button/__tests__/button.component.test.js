import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", async () => {
    const { getByRole, findByRole } = render(<Button />);

    await findByRole("button");

    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: ButtonFace");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle("background-color: ButtonFace");
  });

  test("should be disabled if isLoading is true", () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
