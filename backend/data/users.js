import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Raul Seixas",
        email: "rau@example.com",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "Santos Dummont",
        email: "santos@example.com",
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users