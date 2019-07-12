<template>
  <div class="create-topic panel">
    <div class="panel-head">
      <span class="panel-head-title">主页</span>
      <span>/发布话题</span>
    </div>
    <div class="create-topic-main">
      <div>
        <select v-model="tab">
          <option value>请选择</option>
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="标题字数10字以上" v-model="title" />
      </div>
      <div>
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  name: "createtopic",
  data() {
    return {
      tab: "",
      content: "",
      title: "",
      // 富文本編輯器的配置 添加刪除某些功能
      editorOption: {}
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          title: this.title,
          content: this.content,
          accesstoken: localStorage.getItem("token")
        })
        .then(res => {
          this.tab = "";
          this.content = "";
          this.title = "";
          this.$router.push(`/topic/${res.data.topic_id}`);
          console.log(res.data);
        });
    },
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      // console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
    },
    //當富文本編輯器輸入內容的話 同步修改 你自己的 data content
    onEditorChange({ quill, html, text }) {
      // console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style>
</style>
