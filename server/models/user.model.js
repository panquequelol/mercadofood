const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, 'name required'],
		},
		lastName: {
			type: String,
			required: [true, 'last name required'],
		},
		email: {
			type: String,
			required: [true, 'Email required'],
			validate: {
				validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
				message: 'Enter a valid email',
			},
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password required'],
			minlength: [8, 'Password should be at least 8 characters'],
		},
	},
	{ timestamps: true, versionKey: false }
);
// para que no se guarde en la base de datos
UserSchema.virtual('confirmPassword')
	.get(() => this._confirmPassword)
	.set((value) => (this._confirmPassword = value));

// * middleware (algo que se hace entre accion y accion)
// pre corre antes que se valide el UserSchema
UserSchema.pre('validate', (next) => {
	if (this.password !== this.confirmPassword) {
		this.invalidate('confirmPassword', "Passwords don't match");
	}
	next();
});
// antes de guardar user, se encripta la contraseña
UserSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10).then((hash) => {
		this.password = hash;
		next();
	});
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
