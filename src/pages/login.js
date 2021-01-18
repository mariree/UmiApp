import React, { useState } from 'react';
import './login.less';
import { Button, List, InputItem } from 'antd-mobile';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    console.log({ name, password });
  };
  return (
    <div style={{ padding: '15px 0' }}>
      <img className="loginbanner" src={require('@/img/loginpic.jpeg')} />
      <List renderHeader={() => <h5>登录信息</h5>}>
        <InputItem
          value={name}
          clear
          placeholder="请输入用户名"
          onChange={(el) => setName(el)}
        >
          用户名
        </InputItem>
        <InputItem
          value={password}
          clear
          placeholder="请输入密码"
          onChange={(el) => setPassword(el)}
        >
          密码
        </InputItem>
      </List>
      <Button
        style={{ marginTop: '25px' }}
        type="primary"
        onClick={loginSubmit}
      >
        登录
      </Button>
    </div>
  );
};

export default LoginPage;
