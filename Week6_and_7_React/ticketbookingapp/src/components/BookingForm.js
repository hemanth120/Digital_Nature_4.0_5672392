function BookingForm() {
    return (
        <div>
            <h2>Book Your Flight</h2>
            <form>
                <label>
                    Flight Number:
                    <input type="text" name="flightNumber" />
                </label>
                <br />
                <label>
                    Passenger Name:
                    <input type="text" name="passengerName" />
                </label>
                <br />
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
}

export default BookingForm;