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
      icon: icons.ApartmentOutlined,
      breadcrumbs: false
    },
    {
      id: 'image',
      title: 'Image',
      type: 'item',
      url: '/image',
      icon: icons.PictureOutlined,
      breadcrumbs: false
    }
  ]
};

export default pages;
