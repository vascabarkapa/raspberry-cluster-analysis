import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
  QuestionCircleOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined
    },
    {
      id: 'api-documentation',
      title: 'API Documentation',
      type: 'item',
      url: 'https://github.com/vascabarkapa/raspberry-cluster-analysis/',
      icon: icons.QuestionCircleOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
