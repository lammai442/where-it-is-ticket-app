import { create } from "zustand";

const useTicketsStore = create((set) => ({
    tickets: []
    addToTickets:() => set(newTickets) => ({tickets : newTickets})
}))