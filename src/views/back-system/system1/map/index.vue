<template>
  <Row>
    <Col span="6">
      <Row>
        <Col>
          <Temp1 class="temp1 scroll-middle" title="标题标题标题" />
        </Col>
        <Col>
          <Temp2 class="temp2 scroll-middle" title="标题标题标题" />
        </Col>
        <Col> <Temp3 class="temp3 scroll-middle" title="标题标题标题" /> </Col>
      </Row>
    </Col>

    <Col span="13">
      <Row>
        <Col> <Temp4 class="temp4 scroll-middle" /> </Col>
      </Row>
    </Col>

    <Col span="5">
      <Row>
        <Col> <Temp5 class="temp5 scroll-middle" /> </Col>
        <Col> <Temp6 class="temp6 scroll-middle" title="标题标题标题" /> </Col>
        <Col> <Temp7 class="temp7 scroll-middle" title="标题标题标题" /> </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import Temp1 from "./components/temp1";
import Temp2 from "./components/temp2";
import Temp3 from "./components/temp3";
import Temp4 from "./components/temp4";
import Temp5 from "./components/temp5";
import Temp6 from "./components/temp6";
import Temp7 from "./components/temp7";

export default {
  components: { Temp1, Temp2, Temp3, Temp4, Temp5, Temp6, Temp7 },
};
</script>

<style lang="less" scoped>
.ivu-row {
  margin: -@back-system1-content-box-space;
  .ivu-col {
    padding: @back-system1-content-box-space;

    /deep/ .ivu-card {
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      border: none;
      text-align: left;

      .ivu-card-head {
        text-align: left;
        padding-bottom: 0;
        border: none;
        font-size: 2vh;
        // font-weight: 700;
        font-family: "PingFangTeCuTi";
      }
      .ivu-card-extra {
        line-height: 1;
        a {
          color: #86888c;
          font-size: 1vh;
        }
      }
    }

    .temp1 {
      height: @back-system1-box1-height;
    }
    .temp2 {
      height: @back-system1-box2-height;
    }
    .temp3 {
      height: @back-system1-box3-height;
    }
    .temp4 {
      height: @back-system1-box4-height;
    }
    .temp5 {
      height: @back-system1-box5-height;
    }
    .temp6 {
      height: @back-system1-box6-height;
    }
    .temp7 {
      height: @back-system1-box7-height;
    }
  }
}
</style>