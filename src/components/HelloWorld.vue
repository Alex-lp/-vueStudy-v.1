<template>
  <div class="hello">
  <p>这是按钮</p>
   <el-row>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" @click="a">危险按钮</el-button>
</el-row>
  </div>
</template>

<script>
import {a} from '@/assets/common/js/a.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    a () {
      a()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './../assets/common/css/a.css';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
