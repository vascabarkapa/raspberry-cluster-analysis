import bcrypt from 'bcrypt';
import {User} from '../models/index.js';

export default async function createAdminIfNotExists() {
  try {
    const admin = await User.findOne({username: 'admin'});

    if (!admin) {
      const adminUser = new User({
        first_name: 'Cloudberry',
        last_name: 'Admin',
        email: 'admin@cloudberry.com',
        username: 'admin',
        password: await bcrypt.hash('admin', 10),
      });

      await adminUser.save();
      console.log('Admin user created:', adminUser);
    }
  } catch (err) {
    console.error('Error checking/managing the admin user:', err);
  }
}