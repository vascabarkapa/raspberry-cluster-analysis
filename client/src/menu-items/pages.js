import { ApartmentOutlined, ClusterOutlined, ProfileOutlined, PictureOutlined } from '@ant-design/icons';

// icons
const icons = {
  ApartmentOutlined,
  ClusterOutlined,
  ProfileOutlined,
  PictureOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'cluster',
      title: 'Cluster',
      type: 'item',
      url: '/cluster',
      icon: icons.ApartmentOutlined
    },
    {
      id: 'pictures',
      title: 'Pictures',
      type: 'item',
      url: '/pictures',
      icon: icons.PictureOutlined
    }
  ]
};

export default pages;
