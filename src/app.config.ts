export default {
  pages: [
    'pages/index/index',
    'pages/profile/index',
    'components/personalAssets/index',
    // 搜索
    'components/search/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#eee',
    navigationBarTitleText: '123',
    navigationBarTextStyle: 'black',
  },
  tabBar:{
    list:[
      {
        "pagePath":"pages/index/index",
        "text":"首页",
        "iconPath":"assets/tabBarIcon/basketball.png",
        "selectedIconPath":"assets/tabBarIcon/basketball.png"
      },
      {
        "pagePath":"pages/profile/index",
        "text":"我的",
        "iconPath":"assets/tabBarIcon/shoes.png",
        "selectedIconPath":"assets/tabBarIcon/shoes.png"
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    // 'selectedIconPath':"true",
    // 'backgroundColor': '#f40',
    'borderStyle': 'white'
  }
}
