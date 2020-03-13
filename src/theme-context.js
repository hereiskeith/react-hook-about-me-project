import React from 'react';

export const theme = {
  en: {
    phone: 'Phone: ',
    category: 'Category: ',
    level: 'Level: ',
    commentList: 'Comment List: ',
    comment: 'Comment: ',
    submit: 'Submit',
    noteFirstPart: 'You have ',
    noteSecondPart: ' comment',
    noteSecondParts: ' comments',
    tags: ['basketball fan', 'JavaScript'],
    quote: '"Time flies, every second counts"'
  },
  zh: {
    phone: '电话：',
    category: '类别：',
    level: '等级：',
    commentList: '评论列表：',
    comment: '添加评论：',
    submit: '提交',
    noteFirstPart: '你已有',
    noteSecondPart: '条评论',
    noteSecondParts: '条评论',
    tags: ['狂热篮球爱好者', 'JavaScript'],
    quote: '“时光飞逝，珍惜每一秒”'
  },
};

export const ThemeContext = React.createContext(theme.en);
