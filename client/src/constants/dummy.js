export const billData = [{
        _id: 1,
        to: "Jonathan M. Ndao",
        from: "Siege Social",
        addressTo: "Castor, rue 1 villa 2",
        addressFrom: "Dakar Plateau",
        agency: "483048snd020",
        consumption: 28.4,
        cost: 29000,
        isPaid: true,
    },
    {
        _id: 2,
        to: "Jonathan M. Ndao",
        from: "Siege Social",
        addressTo: "Castor, rue 1 villa 2",
        addressFrom: "Dakar Plateau",
        agency: "483048snd020",
        consumption: 33.9,
        cost: 30000,
        deposit: 25000,
        isPaid: false,
    },
    {
        _id: 3,
        to: "Mouhammad Sagna",
        from: "Parcelle Stx",
        addressTo: "Parcelle",
        addressFrom: "Parcelle",
        agency: "423048snd025",
        consumption: 18.4,
        cost: 19000,
        isPaid: true,
    },
];

export const settings = {
    launchScreen: "Home",
    currency: "USD",
    appearance: "Dark",
    language: "English",
    faceId: true,
}

const data = {
    billData,
    settings,
};

export default data;