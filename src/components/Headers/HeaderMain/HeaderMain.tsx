import "./styles.scss";
import IconSVG from "../../Icons/IconSVG";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Menu } from 'antd';
import { type } from "os";
import AccountName from "../AccountName";
import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';

const HeaderMain = () => { 
 
  type MenuProps = {
    label: React.ReactNode;
    key: string;
  };
  type FItemType = {
    label: React.ReactNode;
    key: string;
  };
  
  const items: MenuProps[] = [
    {
      label: <Link to = "/" className="link">Ethreum</Link>,
      key: '0',
    },
    {
      label: <Link to = "/1" className="link">Bitcoint</Link>,
      key: '1',
    },
    {
      label: <Link to = "/2" className="link" >BNB</Link>,
      key: '3',
    },
    {
      label: <Link to = "/3" className="link">page4</Link>,
      key: '4',
    },
    {
      label: <Link to = "/4" className="link">page5</Link>,
      key: '5',
    },
    {
      label: <Link to = "/5" className="link">page6</Link>,
      key: '6',
    },
    {
      label: <Link to = "/6" className="link">page7</Link>,
      key: '7',
    },
    {
      label: <Link to = "/7" className="link">page8</Link>,
      key: '8',
    },
    {
      label: <Link to = "/8" className="link">page9</Link>,
      key: '9',
    },
    {
      label: <Link to = "/9" className="link">page10</Link>,
      key: '10',
    },
    {
      label: <Link to = "/10" className="link">page11</Link>,
      key: '11',
    },
    {
      label: <Link to = "/11" className="link">page12</Link>,
      key: '12',
    },
    {
      label: <Link to = "/12" className="link">page13</Link>,
      key: '13',
    },
    {
      label: <Link to = "/13" className="link">page14</Link>,
      key: '14',
    },
    {
      label: <Link to = "/14" className="link">page15</Link>,
      key: '15',
    },
    {
      label: <Link to = "/15" className="link">page16</Link>,
      key: '16',
    },
    {
      label: <Link to = "/16" className="link">page17</Link>,
      key: '17',
    },
    {
      label: <Link to = "/17" className="link">ZKSync</Link>,
      key: '18',
    }
  ];
  const [currentLabel, setCurrentLabel] = useState(items[0].label);

  
   function handleMenuClick(e:{ key: React.Key }){
    
    // Lấy key từ sự kiện click và tìm kiếm mục tương ứng trong danh sách items
    const key = e.key;
    const selectedItem = items.find((item) => item.key === key);

    // Nếu tìm thấy mục, cập nhật currentLabel
    if (selectedItem) {
       setCurrentLabel(selectedItem.label);
    }
  };
  useEffect(() => {
    // Xử lý khi currentLabel thay đổi, có thể thêm các logic cập nhật khác tại đây
    console.log('Current Label changed:', currentLabel);
  }, [currentLabel]);
  return (
    <header>
      <div className="logo--container">
        <IconSVG iconName="header-main" />
      </div>
      <div className="button--container">
        <div className="button--one">Account</div>
        <div className="button--two">{ 
        <Dropdown overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key} onClick={handleMenuClick}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }trigger={['click']}>
        <a>
      <Space>
        {currentLabel}
        <DownOutlined />
      </Space>
        </a>
      </Dropdown>}</div>
      </div>
    </header>
  );
};

export default HeaderMain;
