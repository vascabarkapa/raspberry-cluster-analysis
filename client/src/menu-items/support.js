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
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'api-documentation',
      title: 'API Documentation',
      type: 'item',
      url: '/api-documentation',
      icon: icons.QuestionCircleOutlined,
      breadcrumbs: false
    }
  ]
};

export default support;
