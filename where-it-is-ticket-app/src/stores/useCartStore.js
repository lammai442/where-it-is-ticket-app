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
	updateQtyToCart: (qty, id) => {
		set((state) => {
			// Om qty är 0 från order-page så filtreras eventet från cart
			if (qty === 0) {
				return {
					cart: state.cart.filter((event) => event.id !== id),
				};
			}
			// Annars körs denna som ändrar värdet eventets qty
			return {
				cart: state.cart.map((event) =>
					event.id === id ? { ...event, qty: qty } : event
				),
			};
		});
	},
	emptyCart: () => set({ cart: [] }),
}));

export default useCartStore;
