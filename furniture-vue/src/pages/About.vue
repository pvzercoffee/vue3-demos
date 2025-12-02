<template>
    <div class="about">
        <div class="about-left"></div>
        <div class="about-right">
            <section>
                <h1>我们的业绩上升情况</h1>
                <div id="chart"></div>
            </section>
            <section>
                <h1>公司简介</h1>
                <p>
                    家纺有限公司现有员工1000余人，客户总额9000万元。下设：纺纱分厂、毛巾分厂、绣花分厂、家纺分厂和进
                    出口公司。先后在韩国、欧洲、日本、美国、澳大利亚、新加坡、中东、非洲等十几个国家和地区建立了稳定的
                    销售网络和分公司。被市政府评为"先进企业""功能企业""外贸出口先进单位"，同时被授予"AAA"级信用企业。
                    公司凭借高素质的人才队伍，先进的工艺和一流、完善的企业管理，赢得了国内外客户的良好赞誉，使得企业
                    很快发展成为集纺、织、印、染、绣花为一体的家纺集团。
                </p>
                <p>
                    公司先后荣获了"中国纺织商标"、"名牌"、"省著名商标"等荣誉称号，公司通过了ISO9001：2000质量体系、
                    ISO14001：2004环境体系、GB/T28001-2001的健康安全管理体系的三重认证。家纺依靠科技进步、倡导
                    绿色消费，让消费者充分体验到高端现代化新带来的无污染力。家纺专业致力于功能性家纺，产品有真丝系列、
                    婚庆系列、时尚系列、手工纺系列、竹纤维系列、彩陶系列、卫浴毛巾系列、碳芯枕芯系列等六大系列近千个花色品牌。
                </p>
            </section>
            <section>
                <h1>企业理念</h1>
                <p>
                    企业理念是企业在持续经营和长期发展过程中，继承企业优良传统，适应时代要求，由企业家积极倡导，全体
                    员工自觉实践，从而形成时代型企业信念。激发企业活力，推动企业生产经营的团体精神和行为规范，按照不
                    同层次划分为精神文化型和组织制度型两类。
                </p>
            </section>

        </div>
        <div class="about-empty"></div>
    </div>
</template>
<script lang="ts" setup >
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(()=>{
  var myChart = echarts.init(document.getElementById('chart'));
  // 绘制图表
  const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 400, 485, 488, 567, 999],
      type: 'line'
    }
  ]
};



  myChart.setOption(option);
});
</script>
<style scoped>
@media (max-width: 768px) {
    .about {
        flex-direction: column;
        height: auto;
    }

}
#chart{
    width: 100%;
    height: 400px;
}
.about{
    width: 100%;
    margin-top: 20px;
    display: flex;
}
.about-left{
    width:280px;
    height: 600px;
    background-image: url('../images/1.jpg');
}
.about-right{
    flex: 1;
    margin: 20px;
    border: 1px solid;
}
.about-right>section>p{
    line-height: 35px;
    margin-bottom: 25px;
    font-weight: 300;
}
.about-empty{
    width: 50px;
}
</style>