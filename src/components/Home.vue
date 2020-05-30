<template>
  <div class="body" ref="body">
    <!-- 头部 -->
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="河南省金蝉子软件科技有限公司" />
        <h1 class="title">
          <a href="/">河南省金蝉子软件科技有限公司</a>
        </h1>
      </div>
      <!-- 头部导航 -->
      <ul class="navbar"> 
        <li>
          <a  @click.prevent="scrollTo(0)">首页</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 565 : 600)">公司简介</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 975 : 1000)">产品方向</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 1590 : 1620)">经典案例</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 2250 : 2500)">服务流程</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 2850 : 3400)">企业优势</a>
        </li>
        <li>
          <a @click.prevent="scrollTo(isSmall ? 3400 : 3500)">联系我们 18339991428</a>
        </li>
      </ul>
    </div>

    <!-- 内容区 -->
    <div class="main">
      <!-- 轮播图 -->
      <div class="banner">
        <el-carousel height="70vh">
          <el-carousel-item :autoplay="true" class="lunbo-box-item" v-for="(item,index) in bgImgs" :key="index">
            <img :src="item.src" class="lunbotu" alt="轮播图" style="width:100vw;" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 企业简介 -->
      <div class="enterprise inner">
        <h2>企 业 简 介</h2>
        <p>ABOUT US</p>
        <p class="text">
          河南省金蝉子软件科技有限公司是一家互联网软件科技有限公司，成立于2016年位于河南省郑州市，是专业从事
          <span class="red">应用系统开发</span>的高新技术企业 以技术研发为主的技术型科技公司。
          <br />我们是一家
          <span class="red">以技术为核心</span>的软件技术供应商，力求在满足客户需求的情况下，把技术框架搭建做到尽善尽美。
          <br />我们会毫无保留的将我们有价值的
          <span class="red">运营经验、案例、推广方式</span>提供给客户以供参考。
        </p>
      </div>

      <!-- 产品方向 -->
      <div class="direction">
        <div class="inner">
          <h2>产 品 方 向</h2>
          <p>PRODUCT DIRECTION</p>
          <div class="cards">
            <!-- 第一行 -->
            <div class="row-1">
              <div class="card">
                <img src="../assets/icon1.png" alt />
                <div class="text">
                  <h3>电商APP/小程序</h3>
                  <p>电商APP/小程序是基于移动端实现消费者的网上购物，商户之间的网上交易和在线电子支付以及各种商务活动，交易活动，金融活动和相关的...</p>
                </div>
              </div>
              <div class="card">
                <img src="../assets/icon2.png" alt />
                <div class="text">
                  <h3>直播APP/小程序</h3>
                  <p>视频直播APP让全民做主播成为现实。相较于电脑直播来说，视频直播APP更便利。以前人们若想在电脑端直播，需得调视频调麦克...</p>
                </div>
              </div>
              <div class="card">
                <img src="../assets/icon3.png" alt />
                <div class="text">
                  <h3>物联网</h3>
                  <p>物联网是作为继互联网和移动通信之后的又一次信息产业浪潮，由物联网带来的万物互联时代，向我们展现了前所未有的智能化便捷生活...</p>
                </div>
              </div>
            </div>
            <!-- 第二行 -->
            <div class="row-2">
              <div class="card">
                <img src="../assets/icon4.png" alt />
                <div class="text">
                  <h3>教育APP/小程序</h3>
                  <p>如今互联网的发展，已经涵盖到传统的教育行业，加上此次新冠疫情的影响，学生停课，教学学习全部转到线上，也极大地促进了教育软...</p>
                </div>
              </div>
              <div class="card">
                <img src="../assets/icon5.png" alt />
                <div class="text">
                  <h3>社交APP</h3>
                  <p>社交APP是指用户以手机，平板等移动终端为载体，以在线识别用户及交换信息技术为基础，按照流量计费，通过移动网络来实现的社...</p>
                </div>
              </div>
              <div class="card">
                <img src="../assets/icon6.png" alt />
                <div class="text">
                  <h3>同城服务</h3>
                  <p>一个手机同城服务，可以整合本地吃喝玩乐，衣食住行等全部资源于一体，为本地用户提供更加便捷的生活服务，购物需求等...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 经典案例 -->
      <div class="example">
        <div class="inner">
          <h2>经 典 案 例</h2>
          <p>CLASSIC CASES</p>
          <div class="img1-box">
              <img src="../assets/1.png" alt="">
              <img src="../assets/2.png" alt="">
              <img src="../assets/3.png" alt="">
              <img src="../assets/4.png" alt="">
          </div>
          <div class="img2-box">
            <img src="../assets/5.png" alt="">
            <img src="../assets/6.png" alt="">
            <img src="../assets/7.png" alt="">
            <img src="../assets/8.png" alt="">
        </div>   

        </div>
      </div>

      <!-- 服务流程 -->
      <div class="service">
        <div class="inner">
          <h2>服 务 流 程</h2>
          <p>SERVICE PROCESS</p>
          <!-- 轮播指示器 -->
          <div class="cards">
              <div @click="changeStyle(0)" :class="{current:secondIndex==0}">
                  <p class="number">0 1</p>
                  <p class="text">需 求 沟 通</p>
              </div>
              <div @click="changeStyle(1)" :class="{current:secondIndex==1}">
                  <p class="number">0 2</p>
                  <p class="text">方 案 确 认</p>
              </div>              
              <div @click="changeStyle(2)" :class="{current:secondIndex==2}">
                  <p class="number">0 3</p>
                  <p class="text">签 约 立 项</p>
              </div>             
              <div @click="changeStyle(3)" :class="{current:secondIndex==3}">
                  <p class="number">0 4</p>
                  <p class="text">U I 设 计</p>
              </div>              
              <div @click="changeStyle(4)" :class="{current:secondIndex==4}">
                  <p class="number">0 5</p>
                  <p class="text">程 序 开 发</p>
              </div>              
              <div @click="changeStyle(5)" :class="{current:secondIndex==5}">
                  <p class="number">0 6</p>
                  <p class="text">产 品 测 试</p>
              </div>              
              <div @click="changeStyle(6)" :class="{current:secondIndex==6}">
                  <p class="number">0 7</p>
                  <p class="text">上 线 交 付</p>
              </div>              
              <div @click="changeStyle(7)" :class="{current:secondIndex==7}">
                  <p class="number">0 8</p>
                  <p class="text">系 统 维 护</p>
              </div>
           
          </div>
          <!-- 轮播 -->
          <div class="banner-box">
            <el-carousel :autoplay="true" @change="swiperTwo" :interval="3000" indicator-position="none" ref="swiperTow" arrow="never" height="40vh">
              <el-carousel-item class="img-box" v-for="(item,index) in serviceData" :key="index">
                  <div class="box">
                      <div class="msg">
                          <h2>{{ item.title }}</h2>
                          <p class="text-1">{{ item.text1 }}</p>
                          <p class="text-2">{{ item.msg }}</p>
                      </div>
                      <img :src="item.img" alt="">
                  </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>

      <!-- 企业优势 -->
      <div class="advantage">
        <div class="inner">
          <h2>企业优势</h2>
          <p>ENTERPRISE ADVANTAGES</p>
          <div class="column-box">
            <img src="../assets/ys1.jpg" alt="专属客服" />
            <img src="../assets/ys2.jpg" alt="项目保障" />
            <img src="../assets/ys3.jpg" alt="项目维护" />
            <img src="../assets/ys4.jpg" alt="二次开发" />
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <div class="inner">
        <h2>联系我们</h2>
        <div class="msg-box">
          <!-- 公司信息 -->
          <div class="msg">
            <p>
              <span>公司名称</span> : 河南金蝉子软件科技有限公司
            </p>
            <p>
              <span>联 系 人</span> : 金蝉子软件部
            </p>
            <p>
              <span>固定电话</span> : 0371-63696967
            </p>
            <p>
              <span>联系电话</span> : 18339991428(马经理)
            </p>
          </div>
          <div class="msg2">
            <p>
              <span>企业邮箱</span> : vip_jinchanzi@163.com
            </p>
            <p>
              <span>公司地址</span> : 郑州市管城回族区亚太时代广场A座5楼
            </p>
          </div>
          <!-- 二维码 -->
          <div class="code">
            <div class="wx-code">
              <p>二维码</p>
              <img src="../assets/wx.jpg" alt />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed: {

  },
  mounted() {
    setTimeout(this.getScrollTop, 2000);
    
  },
  data() {
    return {
      isSmall: false,
      nowIndex: 0,
      secondIndex: 0,
      bgImgs: [
        { src: require("../assets/bg1.jpg") },
        { src: require("../assets/bg2.png") },
        { src: require("../assets/bg3.jpg") }
      ],
      serviceData: [
          {
              title: "初 步 沟 通",
              text1: "First communication",
              msg: "给在官网的客服留下联系电话后，我们专业的商务会在3分钟内与您取得联系",
              img: require("../assets/初步沟通.png")
          },
                    {
              title: "方 案 确 认",
              text1: "Carding process",
              msg: "“好的公司聊项目”——软件开发并不是有统一规格的商品，靠谱的公司在报价前都会详细的询问客户项目的背景，业务逻辑，商业逻辑，以确保准确的勾勒出用户想要的软件雏形作为准确报价的依据",
              img: require("../assets/方案确认.png")
          },
            {
              title: "签 约 立 项",
              text1: "Sign a contract",
              msg: "如果有幸能为您服务，我们会跟您确定研发的阶段、工期和价格并签订正式合同，合作正式开始！",
              img: require("../assets/签约立项.png")
          },
            {
              title: "U I 设 计",
              text1: "UI design",
              msg: "UI设计是指对软件的人机交互、操作逻辑、界面美观的整体设计。我们的设计师会根据要求制作符合软件主题的设计稿，这一步完成后，您就可以看到有颜色的软件设计图啦",
              img: require("../assets/ui设计.png")
          },
            {
              title: "程 序 开 发",
              text1: "Code development",
              msg: "程序员拿到设计图后会使用开发工具所支持的语言写出源文件，并且在制作时会遵循通用性、可扩充性、稳定性等原则以确保代码质量",
              img: require("../assets/程序开发.png")
          },
            {
              title: "产 品 测 试",
              text1: "software test",
              msg: "为了执行“一次就把事做对”的质量原则，在交付项目之前，我们的测试工程师会使用很多暴力测试来确保交付到客户手中的软件在任何情况下都保持优异的表现",
              img: require("../assets/产品测试.png")
          },
            {
              title: "上 线 交 付",
              text1: "On-line preparation",
              msg: "软件上线之前（通常会提前一个月），我们还会协助您申请服务器、软件著作权、支付账号等必要的资质，确保上线过程顺畅",
              img: require("../assets/上线交付.png")
          },
            {
              title: "系 统 维 护",
              text1: "Free maintenance",
              msg: "我们承诺：所有我们制作的软件皆为终生免费维护，这一条会写在与您签订的合同内，以视为我们对自己开发软件的质量有相当的信心",
              img: require("../assets/系统维护.png")
          },
      ]
    };
  },
  methods:{
      getScrollTop() {
        // 获取滚动条高度
        let body = this.$refs.body;
        var top = Math.floor(body.scrollTop || document.documentElement.scrollTop || window.pageYOffset, window.screen.height, window.screen.availHeight, body.clientHeight)
        console.log(top)
        if(top >= 3200 ) {
            // 不是小屏
            this.isSmall = false;
          } else {
            // 小屏
            this.isSmall = true;
          }
      },
      tab_title(index){
          // 点击添加样式
          this.nowIndex = index;
          this.$refs.carousel.setActiveItem(index);
      },
      Myswiper(index){
        //   console.log(e)
          this.nowIndex = index;
      },
      swiperTwo(index) {
          this.secondIndex = index;
      },
      changeStyle(index) {
          this.secondIndex = index;
          this.$refs.swiperTow.setActiveItem(index);
      },
      // 滚动方法
    scrollTo(result, speed) {
        // 速度
        let speeds = speed ? speed : 1;
        let to = 0;
        let timer = setInterval(() => {
            window.scroll(0, to);
            to += 10;
            if (to > result) {
            clearInterval(timer);
            }
        }, speeds)
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "微软雅黑";
  font-size: 16px;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.inner {
  width: 80vw;
  margin: 0 auto;
}
/* 闪烁动画 */
@keyframes flicker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 头部样式 */
.header {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 10vw;
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.header .logo:hover img {
  animation: flicker 0.8s infinite;
}
.header .logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.header .logo .title {
  display: inline-block;
  font-size: 1.3rem;
  margin-left: 0.7rem;
}
.header .title a {
  display: block;
  color: #000;
  position: relative;
  bottom: 1rem;
  color: rgb(219, 211, 211);
}
.header .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
}
.header .navbar li {
  margin: 0 1rem;
}
.header .navbar li a {
  font-size: 20px;
  color: rgb(219, 211, 211);
  cursor: pointer;
}
.header .navbar li a:hover {
  color: white;
}


/* 内容区 */
/* 轮播图 */
.main .banner {
  height: 650px;;
}


/* 企业简介 */
.main .enterprise h2 {
  font-size: 36px;
  color: #333;
  margin-top: 59px;
  margin-bottom: 5px;
}
.main .enterprise p {
  color: rgb(102, 102, 102);
  font-size: 25px;
  margin-left: 5px;
}
.main .enterprise p.text {
  color: #000;
  margin-left: 0;
  margin-top: 20px;
  font-size: 22px;
  line-height: 1.8em;
  margin-bottom: 78px;
}
.main .enterprise p.text span.red {
  color: red;
}

/* 产品方向 */
.main .direction {
  height: 620px;
  background: url(../assets/d1.jpg) center no-repeat;
}
.main .direction .inner h2 {
  color: #fff;
  padding-top: 60px;
  font-size: 36px;
}
.main .direction .inner p {
  margin-top: 10px;
  color: #fff;
  font-size: 25px;
  margin-bottom: 53px;
}
.direction .inner .cards .row-1,
.direction .inner .cards .row-2 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.direction .inner .cards .row-1 {
  margin-bottom: 30px;
}
.direction .inner .cards .card {
  flex: 1;
  box-sizing: border-box;
  width: 450px;
  height: 152px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  margin-right: 30px;
  border-radius: 6px;
  background: #fff;
  padding: 5px;
  /* align-items: center; */
  transition: all 0.5s;
}
.direction .inner .cards .card:hover {
  transform: translateY(-10px);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
.direction .inner .cards .card .text h3 {
  /* display: inline-block; */
  font-size: 19px;
  color: #7c7c7c;
  margin-top: 30px;
}
.direction .inner .cards .card .text p {
  font-size: 14px;
  color: #7c7c7c;
  text-align: left;
  padding-right: 5px;
  text-overflow: ellipsis;
}

/* 经典案例 */
.main .example h2 {
  font-size: 36px;
  color: #333;
  margin-top: 59px;
}
.main .example p {
  font-size: 25px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 30px;
}
.main .example .img1-box,
.main .example .img2-box {
    display: flex;
    justify-content: space-between;
}
.main .example .img1-box {
    margin-bottom: 50px;
}
.main .example .img1-box img,
.main .example .img2-box img {
    width: 330px;
    height: 270px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    transition: all .5s;
}
.main .example .img1-box img:hover,
.main .example .img2-box img:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
}


/* 服务流程 */
.main .service {
  margin-top: 104px;
  width: 100%;
  height: 720px;
  background: url(../assets/d2.jpg) center center no-repeat;
  overflow: hidden;
}
.main .service .inner h2 {
  font-size: 36px;
  color: #fff;
  margin-top: 59px;
}
.main .service .inner p {
  margin-top: 10px;
  font-size: 25px;
  color: #fff;
  margin-bottom: 40px;
}
.main .service .inner .cards {
    display: flex;
    justify-content: space-between;
}
.main .service .inner .cards div {
    width: 150px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    font-weight: bold;
    cursor: pointer;
}
.main .service .inner .cards div.current .number {
    background: #ff6700;
}
.main .service .inner .cards div.current .text {
    color: #ff6700;
}
.main .service .inner .cards div p {
    text-align: center;
    padding: 0;
    margin: 0;

}
.main .service .inner .cards div p.number {
    font-size: 36px;
    color: #fff;
    background: #8991fb;
}
.main .service .inner .cards div p.text {
    padding: 10px 0;
    font-size: 18px;
    color: #000;
    background: #fff;
}
.main .service .inner .banner-box .box {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.service .inner .banner-box .box .msg {
    width: 700px;
}
.service .inner .banner-box .box .msg h2 {
    font-size: 34px;
}
.service .inner .banner-box .box .msg .text-1 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
}
.service .inner .banner-box .box .msg .text-2 {
    margin-top: 40px;
    font-size: 24px;
}
.service .inner .banner-box .box img {
    width: 600px;
    height: 300px;
}


/* 企业优势 */
.main .advantage {
  width: 100%;
  height: 516px;
}
.main .advantage .inner h2 {
  padding-top: 50px;
  font-size: 36px;
  color: #333;
}
.main .advantage .inner p {
  margin-top: 10px;
  font-size: 25px;
  color: #666;
  margin-bottom: 53px;
}
.main .advantage .inner .column-box {
  display: flex;
  justify-content: space-between;
}
.main .advantage .inner .column-box img {
  width: 300px;
  height: 220px;
  transition: transform 0.8s;
}
.main .advantage .inner .column-box img:hover {
  transform: scale(1.1);
}

/* 页脚 联系我们 */
.footer {
  background: url(../assets/d3.jpg) center center no-repeat;
  width: 100%;
  height: 400px;
  color: #fff;
  overflow: hidden;
}
.footer .inner h2 {
  font-size: 32px;
  margin: 30px 0 20px 0;
  overflow: hidden;
}
.footer .inner h2::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  margin-bottom: -4px;
  margin-right: 15px;
}
.footer .inner h2::after {
  content: "";
  display: inline-block;
  width: 1330px;
  height: 2px;
  background: #fff;
  margin-bottom: 8px;
  margin-left: 20px;
}
.footer .msg-box {
  display: flex;
  justify-content: space-between;
  border: 2px solid rgb(192, 189, 189);
  border-radius: 5px;
  padding: 20px;
}
.footer .msg-box .msg,
.footer .msg-box .msg2 {
  border-radius: 5px;
  padding: 50px 25px;
}

.footer .msg-box .msg p,
.footer .msg-box .msg2 p {
  font-size: 20px;
  line-height: 2em;
}
.footer .msg-box .msg p span,
.footer .msg-box .msg2 p span {
  font-size: 21px;
}

.footer .msg-box .code {
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 80px 50px 0;;
  display: flex;
  justify-content: space-between;
}
.msg-box .code .wx-code p {
  background: url(../assets/wxicon.png) left center no-repeat;
  padding-left: 60px;
  background-size: 40px 40px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.msg-box .code .wx-code img {
  width: 170px;
  height: 170px;
}



/* 小屏幕适配 */
@media only screen and (max-width: 1561px) {
  /* 头部 */
    .header {
        padding: 0.5rem 1vw;
        flex-direction: column;
    }
    .header .logo {
      text-align: center;
    }
    .header .navbar {
      margin-top: -10px;
      justify-content: center;
    }
    .header .navbar li {
        margin: 0 0.8rem;
    }
    /* 轮播 */
    .main .banner img {
      height: 70vh;
    }
    /* 产品方向 */
    .direction .inner .cards .card {
      overflow: hidden;
    }
    .direction .inner .cards .card img {
      width: 10vw;
      height: 10vh;
      margin-top: 20px;
    }
    .direction .inner .cards .card text {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .direction .inner .cards .card .text h3 {
      font-size: 14px;
    }
    .direction .inner .cards .card .text p {
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3;
      max-width: 100px;
      max-height: 50px;
      font-size: 12px;
      text-align: left;
      padding-right: 5px;
      text-overflow: ellipsis;
    }
    /* 经典案例 */
    .main .example .img1-box img,
    .main .example .img2-box img {
        width: 180px;
        height: 150px;
    }

    /* 服务流程 */
    .main .service {
      height: 650px;
    }
    .main .service .inner .cards div {
      width: 120px;
      margin-right: 10px;
    }
    .main .service .inner .cards div p.number {
        font-size: 30px;
    }
    .main .service .inner .cards div p.text {
        font-size: 16px;
    }
    .main .service .inner .banner-box .box {
      margin-right: 10px;
      margin-top: 10px;
      overflow: hidden;
    }
    .service .inner .banner-box .box .msg {
      margin-top: -10px;
        width: 750px;
    }
    .service .inner .banner-box .box .msg h2 {
        font-size: 30px;
    }
    .service .inner .banner-box .box .msg .text-1 {
        margin-top: 10px;
        font-size: 18px;
    }
    .service .inner .banner-box .box .msg .text-2 {
      margin-top: -10px;
      width: 350px;
        font-size: 18px;
    }
    .service .inner .banner-box .box img {
        width: 350px;
        height: 200px;
    }

    /* 企业优势 */
    .main .advantage .inner .column-box img {
    width: 200px;
    height: 150px;
    margin-right: 15px;
    }

    /* 页脚 */
    .footer .inner h2::after {
      width: 570px;
    }
    .footer .msg-box {
      padding: 10px;
    }
    .footer .msg-box .msg,
    .footer .msg-box .msg2 {
      border-radius: 5px;
      padding: 30px 15px;
    }

    .footer .msg-box .msg p,
    .footer .msg-box .msg2 p {
      font-size: 17px;
      line-height: 2em;
    }
    .footer .msg-box .msg p span,
    .footer .msg-box .msg2 p span {
      font-size: 18px;
    }

    .footer .msg-box .code {
      padding: 20px 20px 50px 0;;
    }
    .msg-box .code .wx-code p {
      font-size: 22px;
    }
    .msg-box .code .wx-code img {
      width: 150px;
      height: 150px;
    }

}
</style>


