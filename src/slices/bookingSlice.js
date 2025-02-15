import { apiSlice } from "./apiSlice";
const BOOKIN_URL = "/api/bookings";
export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        booking: builder.mutation({
            query: (data) => ({
                url: `${BOOKIN_URL}/`,
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${data.token}`, // Include the token here
                },

            }),
        }),

    }),
});

export const {
    useBookingMutation,
 } = bookingApiSlice;