import create from "zustand";

export const useStore = create(
    (set) => ({
        cart: {
            product: []
        },

        addProduct: (data) =>
            set((state) => ({
                cart: {
                    product: [...state.cart.product, data],
                }
            })),
        removeProduct: (index) =>
            set((state) => ({
                cart: {
                    product: state.cart.product.filter((_, id) => id != index)
                }
            })),
        restProduct: () =>
            set((state) => ({
                cart: { product: [] }
            }))
    })
)