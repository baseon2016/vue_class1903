<template>
  <div>
    <div id="main" style="width: 7.5rem;height:400px;"></div>
    <button @click="add">添加图标内容</button>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "app",
  data() {
    return {
      data: [
        { id: "1", text: "衬衫", val: 300 },
        { id: "2", text: "羊毛衫", val: 400 },
        { id: "3", text: "雪纺衫", val: 500 },
        { id: "4", text: "裤子", val: 600 },
        { id: "5", text: "高跟鞋", val: 700 },
        { id: "6", text: "袜子", val: 800 }
      ]
    };
  },
  methods: {
    initChart(data) {
      const option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {
          extraCssText: "text-align:center"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "middle",
          data: data.map(ele => ele.text)
        },
        // xAxis: {
        //   data: this.data
        // },
        // yAxis: {},
        series: [
          {
            name: "销量",
            type: "pie",
            radius: "30%",
            avoidLabelOverlap: false,
            data: data.map(ele => {
              return { value: ele.val, name: ele.text };
            })
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    },
    add() {
      const newArr = { id: Date.now(), text: "测试添加", val: 1800 };
      this.data.push(newArr);
      this.initChart(this.data);
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("main"), "dark");
    this.initChart(this.data);
  }
};
</script>

<style>
</style>
