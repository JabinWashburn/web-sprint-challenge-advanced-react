import React from "react";
import CheckoutForm from "./CheckoutForm";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)
    const h2 = getByText(/checkout form/i)
    expect(h2).toBeInTheDocument()
})

test("form shows success message on submit with form details", async () => {
    const { getByLabelText, getByTestId, getByText, debug} = render(
      <CheckoutForm />)
      const firstName = getByLabelText(/first name/i);
        await userEvent.type(firstName, "Jabin");
        expect(firstName).toHaveValue("Jabin");
        await userEvent.click(getByText('Checkout'))
        const success = getByTestId("successMessage");
        expect(success).toBeInTheDocument();
        expect(getByText('Jabin')).toBeInTheDocument()
})