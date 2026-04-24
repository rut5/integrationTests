const createDrink = (type) => {
    const menu = { latte: 45, espresso: 45, cappuccino: 45 };
    return { type, price: menu[type] || null };
};

const prepareOrder = (drink) => {
    console.log(`Preparing ${drink.type}...`);
    return Math.floor(Math.random() * 1000);
};

const processPayment = (ticketNumber, amount) => {
    if (!ticketNumber) throw new Error("No ticket number provided");
    console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
    return true;
};

const orderDrink = (drinkType) => {
    const drink = createDrink(drinkType);
    const ticket = prepareOrder(drink);
    return processPayment(ticket, drink.price);
};

module.exports = { createDrink, prepareOrder, processPayment, orderDrink };