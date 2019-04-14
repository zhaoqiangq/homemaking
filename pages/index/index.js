//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toView: 'inToView', 
    activeIndex:0,
    inputValue:'',
    datalist:[
      {
        texts:'管道维修',
        inner:[
          {
            uid: 0,
            imgsrc:'../../images/1.png',
            name:'疏通(地漏、便池)',
            price:'80元起/次'
          },
          {
            uid: 0,
            imgsrc: '../../images/2.png',
            name: '疏通(主管道)',
            price: '150元起/次'
          },
          {
            uid: 0,
            imgsrc: '../../images/3.png',
            name: '疏通(下水)',
            price: '80元起/次'
          },
          {
            uid: 0,
            imgsrc: '../../images/4.png',
            name: '安装马桶',
            price: '150元起/套'
          },
          {
            uid: 0,
            imgsrc: '../../images/5.png',
            name: '更换阀门',
            price: '100元起/个'
          },
          {
            uid: 0,
            imgsrc: '../../images/6.png',
            name: '更换水龙头',
            price: '100元起/个'
          },
          {
            uid: 0,
            imgsrc: '../../images/7.png',
            name: '维修管道',
            price: '100元起/次'
          },
          {
            uid: 0,
            imgsrc: '../../images/8.png',
            name: '维修暖气',
            price: '200元起/组'
          },
          {
            uid: 0,
            imgsrc: '../../images/9.png',
            name: '维修电路',
            price: '100元起'
          }
        ]
      },
      {
        texts: '开锁换锁',
        inner: [
          {
            uid: 2,
            imgsrc: '../../images/16.png',
            name: '开锁',
            price: '50元起/次'
          },
          {
            uid: 2,
            imgsrc: '../../images/17.png',
            name: '换锁芯（木门锁芯）',
            price: '80~120元/个'
          },
          {
            uid: 2,
            imgsrc: '../../images/18.png',
            name: '换锁芯（A级锁芯）',
            price: '100~180元/个'
          },
          {
            uid: 2,
            imgsrc: '../../images/19.png',
            name: '换锁芯（B级锁芯）',
            price: '200~360元/个'
          },
          {
            uid: 2,
            imgsrc: '../../images/20.png',
            name: '换锁芯（超C级锁芯）',
            price: '360元起/个'
          },
          {
            uid: 2,
            imgsrc: '../../images/21.png',
            name: '锁体',
            price: '150~240元/个'
          },
          {
            uid: 2,
            imgsrc: '../../images/22.png',
            name: '门把手',
            price: '120~260元/套'
          }
        ]
      },
      {
        texts: '灶具维修',
        inner: [
          {
            uid: 3,
            imgsrc: '../../images/23.png',
            name: '维修',
            price: '50~150元/次'
          },
          {
            uid: 3,
            imgsrc: '../../images/24.png',
            name: '换配件',
            price: '2~120元'
          },
          {
            uid: 3,
            imgsrc: '../../images/25.png',
            name: '煤气灶改天然气',
            price: '50~150元/台'
          },
        ]
      },
      {
        texts: '家电维修',
        inner: [
          {
            uid: 4,
            imgsrc: '../../images/26.png',
            name: '彩电',
            price: '50元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/27.png',
            name: '洗衣机维修及清洗',
            price: '80元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/28.png',
            name: '冰箱维修及清洗',
            price: '30元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/29.png',
            name: '空调维修及清洗',
            price: '30元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/30.png',
            name: '空调拆卸、移机',
            price: '280元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/31.png',
            name: '电脑',
            price: '50元起'
          },
          {
            uid: 4,
            imgsrc: '../../images/10.png',
            name: '薄型油烟机',
            price: '80元起/台'
          },
          {
            uid: 4,
            imgsrc: '../../images/11.png',
            name: '深型中式油烟机',
            price: '100元起/台'
          },
          {
            uid: 4,
            imgsrc: '../../images/12.png',
            name: '欧式油烟机',
            price: '120元起/台'
          },
          {
            uid: 4,
            imgsrc: '../../images/13.png',
            name: '侧吸油烟机',
            price: '150元起/台'
          },
          {
            uid: 4,
            imgsrc: '../../images/14.png',
            name: '集成灶油烟机',
            price: '600元起/台'
          },
          {
            uid: 4,
            imgsrc: '../../images/15.png',
            name: '各种配件',
            price: '5~180元'
          }
        ]
      },
      {
        texts: '家庭保洁',
        inner: [
          {
            uid: 5,
            imgsrc: '../../images/32.png',
            name: '擦玻璃（推拉）',
            price: '20~25元/组'
          },
          {
            uid: 5,
            imgsrc: '../../images/33.png',
            name: '擦玻璃（落地窗）',
            price: '80元起'
          },
          {
            uid: 5,
            imgsrc: '../../images/34.png',
            name: '擦玻璃（飘窗）',
            price: '30元起'
          },
          {
            uid: 5,
            imgsrc: '../../images/53.png',
            name: '擦玻璃（圆弧窗户）',
            price: '30元起'
          },
          {
            uid: 5,
            imgsrc: '../../images/35.png',
            name: '保洁（日常保洁）',
            price: '280元起'
          },
          {
            uid: 5,
            imgsrc: '../../images/36.png',
            name: '保洁（新家开荒）',
            price: '50元起'
          },
          {
            uid: 5,
            imgsrc: '../../images/37.png',
            name: '特殊材质护养',
            price: '面议'
          },
        ]
      },
      {
        texts: '家政服务',
        inner: [
          {
            uid: 6,
            imgsrc: '../../images/38.png',
            name: '服务费',
            price: '500元'
          },
          {
            uid: 6,
            imgsrc: '../../images/39.png',
            name: '管理费',
            price: '50元/月'
          },
          {
            uid: 6,
            imgsrc: '../../images/40.png',
            name: '保姆',
            price: '1500元/起'
          },
          {
            uid: 6,
            imgsrc: '../../images/41.png',
            name: '护工',
            price: '150元起/天'
          },
          {
            uid: 6,
            imgsrc: '../../images/42.png',
            name: '月嫂',
            price: '4800元起'
          },
          {
            uid: 6,
            imgsrc: '../../images/43.png',
            name: '育儿嫂',
            price: '2800元起'
          },
          {
            uid: 6,
            imgsrc: '../../images/44.png',
            name: '搬家',
            price: '500元起/车'
          },
        ]
      },
      {
        texts: '防水堵漏',
        inner: [
          {
            uid: 7,
            imgsrc: '../../images/45.png',
            name: '局部补休',
            price: '300元起'
          },
          {
            uid: 7,
            imgsrc: '../../images/46.png',
            name: '50平米以上',
            price: '25元起/平米'
          }
        ]
      },
      {
        texts: '房屋装修',
        inner: [
          {
            uid: 8,
            imgsrc: '../../images/47.png',
            name: '新家装修',
            price: '面议'
          },
          {
            uid: 8,
            imgsrc: '../../images/48.png',
            name: '旧房翻新',
            price: '面议'
          },
          {
            uid: 8,
            imgsrc: '../../images/49.png',
            name: '滚家、刮家',
            price: '10~20元/平米'
          },
          {
            uid: 9,
            imgsrc: '../../images/58.png',
            name: '门窗定制',
            price: '面议'
          }
        ]
      },
      {
        texts: '环保除虫',
        inner: [
          {
            uid: 9,
            imgsrc: '../../images/50.png',
            name: '甲醛检测',
            price: '10~15元/平米'
          },
          {
            uid: 9,
            imgsrc: '../../images/51.png',
            name: '甲醛治理',
            price: '40~70/平米'
          },
          {
            uid: 9,
            imgsrc: '../../images/52.png',
            name: '灭鼠、灭蟑螂',
            price: '10~15元/平米'
          }
        ]
      }
    ]
  },
  scrollToViewFn: function (e) {
    var _id = e.target.dataset.id;
    this.setData({
      toView: 'inToView' + _id,
      activeIndex: _id
    })

  }, 
  bindKeyInput:function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindSearch:function(){
    var that = this;
    that.data.datalist.filter(function (e,i) { 
      if (e.texts.indexOf(that.data.inputValue) !== -1){
        that.setData({
          toView: 'inToView' + i,
          activeIndex:i
        });
        return false;
      }else{
          e.inner.filter(function(e,i){
            if (e.name.indexOf(that.data.inputValue) != -1) {
              that.setData({
                toView: 'inToView' + e.uid,
                activeIndex: e.uid
              });
              return
            }
          })
      }
    });
  },
  onLoad: function () {

  }
})
