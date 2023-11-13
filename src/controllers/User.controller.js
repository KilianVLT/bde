const User = require('../models/User');

async function create(body) {
    const user = await User.create({
        name_user: body.name_user,
        surname_user: body.surname_user,
        email_user: body.email_user,
        phone_user: body.phone_user,
        password_user: body.password_user,
        sector_user: body.sector_user,
        year_user: body.year_user,
        is_contributor: body.is_contributor,
        is_member: body.is_member
    })

    console.log(user);
}
