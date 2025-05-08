import '/src/components/style/sidebar.css';
import { Link } from 'react-scroll';
import { DeploymentUnitOutlined, FundProjectionScreenOutlined, UserOutlined} from '@ant-design/icons';

const article = [
  {
    title: '公司簡介 Introduction',
    icon:  <DeploymentUnitOutlined/>,
    link: 'Introduction'
  
  },
  {
    title: '提供產品 Product',
    icon: <FundProjectionScreenOutlined />,
    link: 'Product'
  },
  {
    title: '實習生 Intern',
    icon:  <UserOutlined />,
    link: 'Intern'
  }
];

function Sidebar() {
  return (
    <ul className="sidebar">
    {article.map((item, index) => (
      <li key={index} className="sidebar-item">
        <Link to={item.link} smooth={true} duration={300}>
          <div className="icon">{item.icon}</div>
        </Link>
      </li>
    ))}
  </ul>
  );
}

export default Sidebar;