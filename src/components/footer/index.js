import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';
import './footer.css';

const Footer = () => {
  return(
    <div className="footer-icons">
      <a href="https://github.com/karthick3018/wfh-mate">
       <GithubOutlined />
     </a>
     <a href="https://www.linkedin.com/in/karthick-raja-dev/">
     <LinkedinOutlined />
     </a>
     <a href="https://twitter.com/Karthick_R_30">
     <TwitterOutlined />
     </a>
     <a href="https://www.buymeacoffee.com/karthickr30">
     <DollarCircleOutlined />
     </a>
    </div>
  )
}

export default Footer;