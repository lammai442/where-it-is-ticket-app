import { create } from 'zustand';

const useCartStore = create((set) => ({
	cart: [],
	addToCart: (event) => {
		set((state) => {
			// Kontrollera om eventet redan finns i cart
			const existingEvent = state.cart.find(
				(item) => item.id === event.id
			);

			// Om eventet finns, uppdatera endast qty
			if (existingEvent) {
				return {
					cart: state.cart.map((item) =>
						item.id === event.id
							? { ...item, qty: item.qty + event.qty }
							: item
					),
				};
			} else {
				// Om eventet inte finns i cart, lägg till det med inskickad qty
				return {
					cart: [...state.cart, { ...event, qty: event.qty }],
				};
			}
		});
	},
}));

export default useCartStore;
