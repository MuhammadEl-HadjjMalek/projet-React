import bgw_image from "../assets/images/bgw_image.jpg";
import article_image from "../assets/images/article_image.jpg";

export const billData = [{
    _id: 1,
    to: "Muhammad",
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

const infos = [
    {
        _id: 1,
        publisher: "Bi-Gueneu-Woyoff",
        profileImage: bgw_image,
        image: article_image,
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsam.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere  temporibus id non nostrum, porro accusamus deleniti deserunt in, corporis et inventore obcaecati ipsa illum ducimus. In ratione error voluptatem quas voluptatum vero incidunt sit?",
        likeArticles: [],
        favoritePublishers: [],
        rating: 4.5,
        createdAt: "A month ago"
    },
    {
        _id: 2,
        publisher: "Bi-Gueneu-Woyoff",
        profileImage: bgw_image,
        image: article_image,
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsam.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere  temporibus id non nostrum, porro accusamus deleniti deserunt in, corporis et inventore obcaecati ipsa illum ducimus. In ratione error voluptatem quas voluptatum vero incidunt sit?",
        likeArticles: [],
        favoritePublishers: [],
        rating: 4.5,
        createdAt: "A month ago"
    },
    {
        _id: 3,
        publisher: "Bi-Gueneu-Woyoff",
        profileImage: bgw_image,
        image: article_image,
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsam.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere  temporibus id non nostrum, porro accusamus deleniti deserunt in, corporis et inventore obcaecati ipsa illum ducimus. In ratione error voluptatem quas voluptatum vero incidunt sit?",
        likeArticles: [],
        favoritePublishers: [],
        rating: 4.5,
        createdAt: "A month ago"
    }
];

const socials = [
    {
        _id: 1,
        user: {
            phoneNo: "+221 77 483 34 34",
            bill: {
                _id: 1,
                to: "Jonathan M. Ndao",
                from: "Siege Social",
                addressTo: "Castor, rue 1 villa 2",
                addressFrom: "Dakar Plateau",
                agency: "483048snd020",
                consInKw: 33.9,
                cost: 30000,
                deposit: 25000,
                isPaid: false,
                createdAt: "A month ago"
            },
        }
    }
]

const data = {
    billData,
    profile,
    infos,
    socials
};

export default data;