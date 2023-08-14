import './App.css';
import React, { useState } from 'react'
import { NavBar, Toast, Swiper, SideBar, TabBar, Badge } from 'antd-mobile'
import {
  AppOutline,
  ExclamationShieldOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import BannerImg from './img/banner.png'
import HotImg from './img/hot.png'
import Food1Img from './img/food1.png'
import Food2Img from './img/food2.png'
import CartImg from './img/cart.png'
import './index.less'
import "normalize.css"

function App() {
  const [activeKey, setActiveKey] = useState('1')

  const tabbars = [
    {
      key: 'home',
      title: '点餐',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '购物车',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'sale',
      title: '餐牌预告',
      icon: <ExclamationShieldOutline />,
    },
    {
      key: '我的',
      title: '我的',
      icon: <UserOutline />,
      badge: Badge.dot,
    },
  ]

  const back = () =>
    Toast.show({
      content: '欢迎进入点餐系统',
      duration: 1000,
    })


  const items = ['', '', '', ''].map((color, index) => (
    <Swiper.Item key={index}>
      <img style={{
        width: '100%'
      }} src={ BannerImg }></img>
    </Swiper.Item>
  ))

  const tabs =  [
    { key: '1', title: '热销' },
    { key: '2', title: '套餐' },
    { key: '3', title: '米饭' },
    { key: '4', title: '烧菜' },
    { key: '5', title: '汤' },
    { key: '6', title: '主食' },
    { key: '7', title: '饮料' },
  ]

  const productName = [
    '小炒黄牛肉',
    '芹菜肉丝炒香干',
    '番茄炒鸡蛋',
    '鸡汤',
    '酸菜鱼',
    '水煮肉片',
    '土豆炒肉片',
    '孜然肉片',
    '宫保鸡丁',
    '麻辣豆腐',
    '香椿炒鸡蛋',
    '豆角炒肉'
  ]
  const productList = productName.map((item, key) => {
    return {
      name: item,
      img: key % 2 === 1 ? Food1Img : Food2Img
    }
  })

  return (
    <div className="App">
      <NavBar onBack={back} style={{
        background: '#F0F0F0',
        fontWeight: 'bold'
      }}>点餐</NavBar>

      <div className='head-card'>
        <Swiper
          style={{
            '--border-radius': '8px',
          }}
          autoplay
          defaultIndex={1}
        >
          {items}
        </Swiper>
      </div>

      <div className='product-box'>
        <SideBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={
              item.key === '1' ? <div>
              <div className='flex-center'>
                <img style={{
                  display: 'block',
                  width: '16px',
                  marginRight: '5px'
                }} src={ HotImg }></img>
                <div>{ item.title }</div>
              </div>
            </div> : item.title
            } />
          ))}
        </SideBar>
        <div className='product-right'>
          <div className='product-title'>热销</div>
          <div className='product-list'>
            {
              productList.map((item, key) => {
                return (
                  <div className='product-item'>
                    <div className='product-item-left'>
                      <img style={{
                        display: 'block',
                        width: '76px',
                        marginRight: '5px'
                      }} src={ item.img }></img>
                      <div className='product-item-left-info'>
                        <div>
                          <div className='product-item-left-info-name'>{ item.name }</div>
                          <div className='product-item-left-info-number'>月售{key + 1}0 赞{key * 5}</div>
                        </div>
                        <div className='product-item-left-info-price'>¥10</div>
                      </div>
                    </div>
                    <div className="cart">
                      <img style={{
                        display: 'block',
                        width: '30px',
                        marginRight: '5px'
                      }} src={ CartImg } onClick = { () =>
                        Toast.show({
                          content: '添加购物车成功'
                        }) }></img>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <TabBar>
        {tabbars.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </div>
  );
}

export default App;
