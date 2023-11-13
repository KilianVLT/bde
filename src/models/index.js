const User = require('./User');
const Event = require('./Event');
const db = require('../config/db');

Event.belongsToMany(User, {through: "event_user"})
User.belongsToMany(Event, {through: "event_user"})

db.sync()
