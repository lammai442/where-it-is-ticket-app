import { create } from 'zustand';

const useCartStore = create((set) => ({
	cart: [],
	addToCart: (event) => {
		set((state) => {
			// Kontrollera om eventet redan finns i cart
			const existingEvent = state.cart.find(
				(item) => item.id === event.id
			);

			if (existingEvent) {
				// Om eventet finns, uppdatera endast qty
				return {
					cart: state.cart.map((item) =>
						item.id === event.id
							? { ...item, qty: item.qty + event.qty } // Uppdatera qty
							: item
					),
				};
			} else {
				// Om eventet inte finns i cart, lägg till det
				return {
					cart: [...state.cart, { ...event, qty: 1 }], // Lägg till eventet med qty = 1
				};
			}
		});
	},
}));

export default useCartStore;
