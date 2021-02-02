<template>
  <Card class="card">
    <div id="system1-map">
      <div ref="mm" class="map-modal">
        <div class="title">{{ ofcusIconName }}</div>
        <div class="text">
          危险 <span class="num num-yellow">0</span> 警戒<span
            class="num num-red"
            >0</span
          >关注<span class="num num-green">0</span>
        </div>
      </div>
    </div>
    <div class="tools">
      <Select class="select" v-model="selectVal" placeholder="徐州市">
        <Option value="0">徐州市</Option>
      </Select>
      <div class="btns">
        <div class="btns-wrapper">
          <span class="btns-item" style="text-align: right">
            <img
              :src="require('@/assets/back-system/system1/map/tool1.png')"
              alt=""
            />
            <span> 影像 </span>
          </span>
          <div class="divider"></div>
          <span class="btns-item" style="text-align: center">
            <img
              :src="require('@/assets/back-system/system1/map/tool2.png')"
              alt=""
            />
            <span> 图层 </span>
          </span>
          <div class="divider"></div>
          <span class="btns-item" style="text-align: left" @click="show = true">
            <img
              :src="require('@/assets/back-system/system1/map/tool3.png')"
              alt=""
            />
            <span> 工具 </span>
          </span>
        </div>
      </div>
      <div class="tips">
        <div class="tips-wrapper">
          <span class="img-left">
            <img
              :src="require('@/assets/back-system/system1/map/left.png')"
              alt=""
            />
          </span>
          <span class="tips-text">
            <span class="img">
              <img
                :src="require('@/assets/back-system/system1/map/tips-warn.png')"
                alt=""
              />
            </span>
            <span class="text">
              预警信息：<span class="tips-name">徐州市XX水库 </span>
              已超汛限水位；<span class="tips-name">XX站</span
              >水位已超警戒水位。
            </span>
          </span>
          <span class="img-right">
            <img
              :src="require('@/assets/back-system/system1/map/right.png')"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
    <div class="legend">
      <div class="head">
        <span>图例</span>
        <img
          :src="require('@/assets/back-system/system1/map/more.png')"
          alt=""
        />
      </div>
      <div class="body">
        <div class="item" v-for="(item, i) in legends" :key="i">
          <div class="title">{{ item.title }}</div>
          <span class="span" v-for="(l, j) in item.list" :key="j">
            <img
              :src="require(`@/assets/back-system/system1/map/${l.img}s.png`)"
              alt=""
            />
            <span> {{ l.data }} </span>
          </span>
        </div>
      </div>
    </div>

    <Modal v-model="show" title="标题" @on-ok="ok" @on-cancel="cancel">
      <Alert show-icon closable>
        提示：勾选对应的选项导出后文件将保存为Excel格式。
      </Alert>
      <RadioGroup v-model="vertical1" vertical>
        <Radio label="选中">
          <span>选中</span>
        </Radio>
        <Radio label="SaltLakeCity">
          <span>Salt Lake City</span>
        </Radio>
        <Radio label="奥胡斯">
          <span>奥胡斯</span>
        </Radio>
        <Radio label="布里奇数">
          <span>布里奇数</span>
        </Radio>
      </RadioGroup>
      <RadioGroup v-model="vertical2" vertical>
        <Radio label="选中">
          <span>选中</span>
        </Radio>
        <Radio label="天津">
          <span>天津</span>
        </Radio>
        <Radio label="圣克拉拉">
          <span>圣克拉拉</span>
        </Radio>
        <Radio label="奥斯汀">
          <span>奥斯汀</span>
        </Radio>
      </RadioGroup>
      <RadioGroup v-model="vertical3" vertical>
        <Radio label="选中">
          <span>选中</span>
        </Radio>
        <Radio label="哈利法克斯">
          <span>哈利法克斯</span>
        </Radio>
        <Radio label="多伦多">
          <span>多伦多</span>
        </Radio>
        <Radio label="卡诺">
          <span>卡诺</span>
        </Radio>
      </RadioGroup>
      <RadioGroup v-model="vertical4" vertical>
        <Radio label="选中">
          <span>选中</span>
        </Radio>
        <Radio label="迪拜">
          <span>迪拜</span>
        </Radio>
        <Radio label="哈拉雷">
          <span>哈拉雷</span>
        </Radio>
        <Radio label="Hudson">
          <span>Hudson</span>
        </Radio>
      </RadioGroup>
      <RadioGroup v-model="vertical5" vertical>
        <Radio label="选中">
          <span>选中</span>
        </Radio>
        <Radio label="凤凰城">
          <span>凤凰城</span>
        </Radio>
        <Radio label="里昂">
          <span>里昂</span>
        </Radio>
      </RadioGroup>
    </Modal>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      selectVal: "0",
      legends: [
        {
          title: "山洪风险-村庄",
          list: [
            { data: "危险", img: "danger" },
            { data: "警戒", img: "warning" },
            { data: "关注", img: "focus" },
          ],
        },
        {
          title: "雨量站",
          list: [
            { data: "正常", img: "icon-blue1" },
            { data: "准备转移", img: "icon-yellow1" },
            { data: "立即转移", img: "icon-red1" },
          ],
        },
        {
          title: "河道水位",
          list: [
            { data: "正常", img: "icon-blue2" },
            { data: "超警戒", img: "icon-red2" },
            { data: "超保证", img: "icon-yellow2" },
          ],
        },
        {
          title: "水库水位",
          list: [
            { data: "正常", img: "icon-blue3" },
            { data: "超汛限", img: "icon-red3" },
          ],
        },
        {
          title: "视频图像",
          list: [
            { data: "视频", img: "video" },
            { data: "图像", img: "image" },
          ],
        },
      ],
      icons: [
        {
          name: "danger",
          iconName: "危险",
          local: [117.39, 34.3],
          size: [24, 24],
        },
        {
          name: "warning",
          iconName: "警戒",
          local: [117.38, 34.29],
          size: [24, 24],
        },
        {
          name: "focus",
          iconName: "关注",
          local: [117.37, 34.28],
          size: [24, 24],
        },
        {
          name: "icon-blue1",
          iconName: "正常",
          local: [117.36, 34.27],
          size: [20, 28],
        },
        {
          name: "icon-blue2",
          iconName: "准备转移",
          local: [117.35, 34.26],
          size: [20, 28],
        },
        {
          name: "icon-blue3",
          iconName: "立即转移",
          local: [117.34, 34.25],
          size: [20, 28],
        },
        {
          name: "icon-red1",
          iconName: "正常",
          local: [117.33, 34.24],
          size: [20, 28],
        },
        {
          name: "icon-red2",
          iconName: "超警戒",
          local: [117.32, 34.23],
          size: [20, 28],
        },
        {
          name: "icon-red3",
          iconName: "超保证",
          local: [117.31, 34.22],
          size: [20, 28],
        },
        {
          name: "icon-yellow1",
          iconName: "正常",
          local: [117.3, 34.21],
          size: [20, 28],
        },
        {
          name: "icon-yellow2",
          iconName: "超汛限",
          local: [117.29, 34.2],
          size: [20, 28],
        },
        {
          name: "video",
          iconName: "视频",
          local: [117.28, 34.19],
          size: [20, 28],
        },
        {
          name: "image",
          iconName: "图像",
          local: [117.27, 34.18],
          size: [20, 28],
        },
      ],
      ofcusIconName: "",
      show: false,
      vertical1: "",
      vertical2: "",
      vertical3: "",
      vertical4: "",
      vertical5: "",
    };
  },
  methods: {
    initMap() {
      let T = window.T,
        map = null,
        zoom = 12,
        icons = this.icons;
      map = new T.Map("system1-map");
      //设置显示地图的中心点和级别 经度减少，地图向左；纬度减少，地图向下
      map.centerAndZoom(new T.LngLat(117.3, 34.18), zoom);

      for (let item of icons) {
        //创建图片对象
        let icon = new T.Icon({
          iconUrl: require(`@/assets/back-system/system1/map/${item.name}.png`),
          iconSize: new T.Point(item.size[0], item.size[1]),
          // iconAnchor: new T.Point(10, 25),
        });
        //向地图上添加自定义标注 item.local[0] , item.local[1]
        // 随机范围 117.27-117.36 , 34.18-34.27
        let marker = new T.Marker(
          new T.LngLat(
            this.GetRandomNum(117.27, 117.36),
            this.GetRandomNum(34.18, 34.27)
          ),
          {
            icon: icon,
          }
        );
        marker.addEventListener("click", () => {
          this.ofcusIconName = item.iconName;
          marker.openInfoWindow(this.$refs.mm);
        });
        map.addOverLay(marker);
      }
    },
    GetRandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      // console.log(Rand)
      return Min + Rand * Range;
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
  mounted() {
    this.initMap();
    // setTimeout(() => {
    //   this.initMap();
    // }, 2000);
  },
};
</script>

<style lang="less" scoped>
.card {
  position: relative;
  /deep/ .ivu-card-body {
    height: 100%;
    padding: 0;
  }

  .tools {
    height: 10vh;
    width: 100%;
    line-height: 10vh;
    position: absolute;
    top: 0;
    z-index: 999; // 要小于v-modal的1013上下，大于天地图的700
    // padding: 0 5vh;
    text-align: center;

    .select,
    .btns,
    .tips {
      display: inline-block;
      padding: 0 1vh;
    }

    .select {
      width: 20%;
    }

    .btns {
      // width: 30%;
      line-height: 2;
      vertical-align: middle;
      .btns-wrapper {
        background-color: #fff;
        box-shadow: 0px 1px 3px 1px rgba(99, 142, 177, 0.2);
        border-radius: 1px;
        display: inline-block;
        padding: 0 1vh;

        .btns-item {
          display: inline-block;
          cursor: pointer;
          img {
            vertical-align: middle;
          }
        }
        .divider {
          display: inline-block;
          width: 1px;
          height: 2vh;
          border: 1px solid #eeeeee;
          vertical-align: middle;
          margin: 0 1vh;
        }
      }
    }

    .tips {
      width: 50%;
      font-size: 1vh;
      line-height: 1;
      vertical-align: middle;

      .tips-wrapper {
        border: 1px solid #eb8988;
        border-radius: 3px;
        background-color: #fadbdb;
        .img-left,
        .img-right {
          display: inline-block;
          width: 8%;
        }

        .tips-text {
          padding: 0.8vh 0;
          width: 84%;
          display: inline-block;
          background-color: #fee9e9;
          .img {
            vertical-align: bottom;
            width: 8%;
            display: inline-block;
          }
          .text {
            width: 92%;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #702020;
            .tips-name {
              color: #eb8988;
            }
          }
        }
      }
    }
  }

  .legend {
    position: absolute;
    width: 260px;
    // width: 33%;
    // height: 42%;
    bottom: 3vh;
    left: 2vh;
    background-color: #fff;
    box-shadow: 0px 1px 3px 1px rgba(131, 160, 183, 0.32);
    z-index: 999;

    .head {
      font-family: "PingFangTeCuTi";
      line-height: 4vh;
      height: 4vh;
      background-color: #f8f8f8;
      text-align: center;
      position: relative;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        right: 2vh;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .body {
      .item {
        padding: 1vh 2vh;
        .title {
          font-family: "PingFangBold";
        }
        .span {
          font-size: 1vh;
          width: 33%;
          display: inline-block;

          img {
            vertical-align: middle;
          }
        }
      }
    }
  }
}

/deep/ .ivu-modal {
  width: 700px !important;
  .ivu-radio-group {
    vertical-align: top;
    padding: 0 20px;
  }
}

#system1-map {
  height: 100%;

  .map-modal {
    height: 50px;
    width: 150px;
    background-color: #fff;

    .title {
      font-family: "PingFangTeCuTi";
    }

    .text {
      padding: 0.5vh 0;
      font-size: 1vh;
      line-height: 1;
      margin: 1vh 0;

      .num {
        font-size: @back-system1-num-size;
        font-family: "YouSheBiaoTiHei";
        margin: 0 2%;
        &.num-yellow {
          color: @back-system1-yellow;
        }
        &.num-red {
          color: @back-system1-red;
        }
        &.num-green {
          color: @back-system1-green;
        }
      }
    }
  }
}
</style>