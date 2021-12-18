import { cleanup, render, screen } from "@testing-library/react";
import UserDetailComponent from "./UserDetailComponent";

afterEach(() => {
  cleanup();
});

test("should be present in document", () => {
  render(<UserDetailComponent />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toBeInTheDocument();
});

test("should have text content", () => {
  const testData = {
    name: "nikita",
  };
  render(<UserDetailComponent name={testData.name} />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toHaveTextContent("Name:" + testData.name);
  expect(element).toContainHTML("h1");
});
