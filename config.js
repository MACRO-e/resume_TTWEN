var app = new Vue({
  el: '#page',
  data: {
    网页名称: '温丹的简历',
    姓名: 'Wen Dan',
    号码: '(+86)13576775866',
    邮箱: '13576775866@163.com',
    个人网页: 'www.baidu.com',
    地址: 'Testing',
    职业: 'Finance, Wuhan University',
    头像地址: 'images/wd.jpg',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com'
      },
      {
        类型: 'qq',
        地址: '234'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: 'Hi there',
    关于我内容: 'This is Wendan, nice to meet you! From here, I bet you would find out a different me. I love my life so much.',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: 'Analyst, Chemstry Sector',
        公司名称: 'CICC, Shanghai',
        时间: '2020.6-2020-7',
        介绍: 'I used my VBA skills to develop some macros for the company to analyse the data.'
      },
      {
        职业名称: 'Analyst, Non-Bank Sector',
        公司名称: 'GF Securities, Shanghai ',
        时间: '2020.10 - 2021.2',
        介绍: 'Help to analyse the alpha factor behind each company in the sector.'
      },
      {
        职业名称: 'Quant assistant',
        公司名称: 'Goldman Sachs',
        时间: '2021.6 - 2021.8',
        介绍: 'CTA modeling'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: 'Bachelor',
        学校名称: 'Wuhan University',
        时间: '2018 - Now',
        介绍: 'I looove this place!'
      },
      {
        学段: 'Summer program',
        学校名称: 'Harvard University',
        时间: '2019.6 - 2019.9',
        介绍: 'I learned how to use R'
      },
      {
        学段: 'Exchange Program',
        学校名称: 'Columbia University',
        时间: '2016 - 现在',
        介绍: 'Four class have I taken.'
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的能力: [
      {
        名称: 'Basketball',
        图标: '学校名称',
        介绍: 'Coool！'
      },
      {
        名称: 'Piano',
        图标: '学校名称',
        介绍: 'Started to learn until I learned how to play accordion. It is romantic. '
      },
      {
        名称: 'Accordion',
        图标: '学校名称',
        介绍: 'From learning accordion'
      }
    ],
    /** 我的技能*/    
    我的技能: [
      {
        名称: 'C',
        进度: 100,
      },
      {
        名称: 'R',
        进度: 100
      },
      {
        名称: 'Python',
        进度: 100
      },
      {
        名称: 'Matlab',
        进度: 90
      },
      {
        名称: 'Stata',
        进度: 80
      },
      {
        名称: 'Latex',
        进度: 100
      },
      {
        名称: 'Tableau',
        进度: 100
      },
      {
        名称: 'Payjek',
        进度: 100
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '男朋友强就完事了',
        地址: 'www.baidu.com',
        图片: 'images/1.jpg',
        简介: '新作品'
      },
      {
        名称: '可是温丹失恋了',
        地址: 'www.baidu.com',
        图片: 'images/2.jpg',
        简介: '新作品'
      },
      {
        名称: '温丹没有男朋友怎么办',
        地址: 'www.baidu.com',
        图片: 'images/3.jpg',
        简介: '新作品'
      }, {
        名称: '温丹好好看',
        地址: 'www.baidu.com',
        图片: 'images/4.jpg',
        简介: '新作品'
      }, {
        名称: '这么好看没有男朋友',
        地址: 'www.baidu.com',
        图片: 'images/5.jpg',
        简介: '新作品'
      }, {
        名称: '可是有人还是喜欢温丹',
        地址: 'www.baidu.com',
        图片: 'images/6.jpg',
        简介: '新作品'
      }, {
        名称: '我人傻了',
        地址: 'www.baidu.com',
        图片: 'images/2.jpg',
        简介: '2'
      }, {
        名称: '我爱你',
        地址: 'www.baidu.com',
        图片: 'images/1.jpg',
        简介: '1'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})