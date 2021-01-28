import React, { useState, useEffect } from 'react';
import { TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import './chatting.less';

const chattingPage = (props) => {
  const [content, setContent] = useState([]);
  const [text, setText] = useState('');
  // const { getFieldProps } = this.props.form;
  useEffect(() => {
    console.log(props);
    setContent(() => [
      {
        id: '0001',
        name: '王小虎',
        image: '4',
        content: '这是王小虎说的话1。',
        time: '2021-01-28 12:25',
      },
      {
        id: '0001',
        name: '王小虎',
        image: '4',
        content: '这是王小虎说的话2。',
        time: '2021-01-28 12:25',
      },
      {
        id: '0001',
        name: '王小虎',
        image: '4',
        content: '这是王小虎说的话3。',
        time: '2021-01-28 12:25',
      },
      {
        id: '0000',
        name: '檀木街',
        image: '6',
        content: '这是檀木街说的话1。',
        time: '2021-01-28 12:25',
      },
    ]);
  }, []);
  return (
    <div>
      <div className="chattingWrap">
        {content.map((item, index) => (
          <div
            className={`chattingItem ${item.id === '0000' ? 'right' : ''}`}
            key={index}
          >
            <img
              src={require('@/img/userImages/user(' + item.image + ').png')}
            />
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      <div className="chatBottom">
        <TextareaItem value={text} rows={4}></TextareaItem>
        <Button type="primary" size="small" inline>
          发送
        </Button>
      </div>
    </div>
  );
};
// textarea受控组件
const ChattingPageWrapper = createForm()(chattingPage);
export default ChattingPageWrapper;
