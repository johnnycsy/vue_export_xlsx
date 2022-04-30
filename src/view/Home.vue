<template name='Home'>
  <div class="home_body">
    <h1>File Export Demo</h1>
    <sapn class="but_main" @click="tapExport()">点击测试导出文件</sapn>
  </div>
</template>

<script>
// import XLSX from "xlsx";
import * as XLSX from "xlsx";
export default {
  name: "Home",
  data() {
    return {
      msg: "hello word",
    };
  },
  created() {},
  methods: {
    tapExport() {
      const val = [];
      val.push([
        "序号",
        "内容",
        "参数",
        "样式",
        "效果",
        "演示",
        "结果",
        "可视",
        "END",
      ]);
      for (let index = 0; index < 10; index++) {
        let arr = [
          index + 1,
          "内容_" + index,
          "参数_" + index,
          "样式_" + index,
          "效果_" + index,
          "演示_" + index,
          "结果_" + index,
          "可视_" + index,
          "END_" + index,
        ];
        val.push(arr);
      }

      const fileName = new Date().getTime() + ".xlsx";
      let workbook = XLSX.utils.book_new(),
        sheet = "Sheet1",
        body = XLSX.utils.aoa_to_sheet(val);
      XLSX.utils.book_append_sheet(workbook, body, sheet);
      XLSX.writeFile(workbook, fileName);
    },
  },
};
</script>

<style scoped>
.home_body {
  margin-top: 5rem;
  text-align: center;
}
.but_main {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem;
  background-color: bisque;
  color: black;
  box-shadow: 0 0 0.01rem 0.1rem black;
  cursor: pointer;
}
.but_main:hover {
  box-shadow: 0 0 0.2rem 0.1rem black;
}
</style>