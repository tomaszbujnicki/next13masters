import type { Cent } from "types";

export const formatMoney = (amount: Cent) => {
	return new Intl.NumberFormat("us-US", {
		style: "currency",
		currency: "USD",
	}).format(amount / 100);
};
