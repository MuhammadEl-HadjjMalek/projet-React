export const billData = [{
        _id: 1,
        to: "Jonathan M. Ndao",
        from: "Siege Social",
        addressTo: "Castor, rue 1 villa 2",
        addressFrom: "Dakar Plateau",
        agency: "483048snd020",
        consInKw: 28.4,
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
        consInKw: 33.9,
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
        consInKw: 18.4,
        cost: 19000,
        isPaid: true,
    },
];

export const profile = {
    email: "thisemail@example.com",
    id: "143480388",
    isVerified: true,
    maxConsInKw: 25.3,
    language: "fr",
    faceID: true,
    secretCode: "0000",
}
const data = {
    billData,
    profile,
};

export default data;