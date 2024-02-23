import type React from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const setup = (ui: React.ReactElement, option?: RenderOptions) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      ...option
    })
  }
}