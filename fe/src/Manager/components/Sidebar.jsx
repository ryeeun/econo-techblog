import React, { useState } from 'react';
import '../css/Sidebar.css';
import SidebarItem from './SidebarItem';

import UserSearch from './UserSearch';

const Sidebar = function () {
  const [navArr, setArr] = useState([
    {
      id: 1,
      name: '가입 신청 관리',
      num: 67,
      isSelected: false,
    },
    {
      id: 2,
      name: '전체 회원 관리',
      num: 67,
      isSelected: true,
    },
    {
      id: 3,
      name: '일반 회원 관리',
      num: 67,
      isSelected: false,
    },
    {
      id: 4,
      name: '게스트 회원 관리',
      num: 67,
      isSelected: false,
    },
    {
      id: 5,
      name: '관리자 회원 관리',
      num: 67,
      isSelected: false,
    },
  ]);
  const onClick = (id) => {
    setArr(
      navArr.map((item) => {
        const elem = item;
        if (elem.id === id) {
          elem.isSelected = true;
        } else {
          elem.isSelected = false;
        }
        return elem;
      }),
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar-box">
        <UserSearch />
        <p>Join</p>
        <ul className="sidebar-nav">
          {navArr.map((elem) => (
            <SidebarItem
              key={elem.id}
              id={elem.id}
              name={elem.name}
              num={elem.num}
              isSelected={elem.isSelected}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;