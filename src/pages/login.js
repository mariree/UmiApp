import React, { useState } from 'react';
import './login.less';
import { Button, List, InputItem, WhiteSpace } from 'antd-mobile';

const LoginPage = () => {
  const [info, setInfo] = useState({
    type: '0',
    title: '登录信息',
    btn: '登录',
  });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    console.log({ name, password });
  };

  const register = () => {
    setInfo(() => ({
      type: '1',
      title: '注册信息',
      btn: '注册',
    }));
  };
  const backLogin = () => {
    setInfo(() => ({
      type: '0',
      title: '登录信息',
      btn: '登录',
    }));
  };
  return (
    <div style={{ padding: '15px 0' }}>
      <img className="loginbanner" src={require('@/img/loginpic.jpeg')} />
      <List renderHeader={() => <h5>{info.title}</h5>}>
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
        style={{ marginTop: '15px' }}
        type="primary"
        onClick={loginSubmit}
      >
        {info.btn}
      </Button>
      <WhiteSpace></WhiteSpace>
      {info.type == '0' && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="ghost"
            size="small"
            className="am-button-borderfix"
            inline
          >
            忘记密码
          </Button>
          <Button
            type="ghost"
            size="small"
            className="am-button-borderfix"
            icon="check-circle-o"
            inline
            onClick={register}
          >
            前往注册
          </Button>
        </div>
      )}
      {info.type == '1' && (
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button
            type="ghost"
            size="small"
            className="am-button-borderfix"
            icon="check-circle-o"
            inline
            onClick={backLogin}
          >
            返回登录
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
