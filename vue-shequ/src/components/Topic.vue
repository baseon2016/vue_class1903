<template>
  <div class="topic-wrapper">
    <div v-if="topic" class="main">
      <article class="topic panel">
        <div class="article-head">
          <div class="article-head-title">
            <div class="title-text">
              <span
                v-if="topic.good||topic.top"
                class="tab active"
              >{{topic.top?'置顶':topic.good?'精华':''}}</span>
              <span class="title">{{topic.title}}</span>
            </div>
            <span v-if="sessionStorage.getItem('token')" class="collect">加入收藏</span>
          </div>
          <p class="changes">
            <span>
              <b>·</b>
              发布于{{moment(topic.creat_at)}}
            </span>
            <span>
              <b>·</b>
              作者{{topic.author.loginname}}
            </span>
            <span>
              <b>·</b>
              {{topic.visit_count}}次浏览
            </span>
            <span>
              <b>·</b>
              来自{{topic.tab}}
            </span>
          </p>
        </div>
        <div class="article-content" v-html="topic.content">{{topic.content}}</div>
      </article>
      <div class="topic-reply panel">
        <div class="reply-head">
          <span>{{topic.reply_count}} 回复</span>
        </div>
        <ul>
          <li v-for="(item,index) in topic.replies" :key="item.id" class="reply-item">
            <div class="reply-author">
              <img :src="item.author.avatar_url" />
              <div class="user-info">
                <span class="reply-avatar">{{item.author.loginname}}</span>
                <span class="reply-date">{{(index+1)+'楼·'+moment(item.create_at)}}</span>
              </div>
              <div class="user-action">
                <span
                  @click="userUp(item,index)"
                  :class="{'iconfont':true,'icondianzan':true,'up-btn':true,}"
                >{{item.ups.length?item.ups.length:''}}</span>
                <span class="iconfont iconreply reply-btn"></span>
              </div>
            </div>
            <p class="reply-content" v-html="item.content">{{item.content}}</p>
          </li>
        </ul>
      </div>
      <div class="post-reply"></div>
    </div>
    <div v-else>
      <img
        :style="{width:'100%'}"
        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "topic",
  data() {
    return {
      topic: null
    };
  },
  methods: {
    moment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    userUp(item, index) {
      axios
        .post(`https://www.vue-js.com/api/v1/reply/${item.id}/ups`, {
          accesstoken: localStorage.getItem("token")
        })
        .then(res => {
          if (res.data.action === "up") {
            console.log(document.querySelectorAll("reply-item"));
          } else {
          }
          axios
            .get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`)
            .then(res => {
              this.topic = res.data.data;
            });
        });
    }
  },
  created() {
    axios
      .get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`)
      .then(res => {
        this.topic = res.data.data;
        console.log(res.data.data);
      });
  }
};
</script>

<style>
.topic .article-head {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.topic .article-head .article-head-title {
  display: flex;
  align-items: center;
}
.article-head-title .title-text {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 1.3;
  flex-grow: 1;
}

.article-head-title .collect {
  display: inline-block;
  padding: 3px 10px;
  border: 0;
  margin: 0;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 2px;
  box-shadow: none;
  border-radius: 3px;
  line-height: 2;
  color: #fff;
  background-color: #369219;
  flex-grow: 0;
  text-align: right;
}
.article-head-title .collect:hover {
  background-color: #6ba44e;
}
.topic .article-head .changes {
  font-size: 12px;
  color: #838383;
  margin: 0;
}
.topic-reply .reply-head {
  padding: 10px;
  background-color: #f6f6f6;
}
.topic-reply .reply-item:hover .up-btn {
  opacity: 0.4;
}
.topic-reply .reply-author {
  display: flex;
  align-items: flex-start;
}
.topic-reply .reply-author img {
  width: 30px;
  height: 30px;
  display: inline-block;
  flex-shrink: 0;
}
.topic-reply .reply-author .user-info {
  flex-shrink: 0;
  margin-left: 10px;
}
.user-info .reply-avatar {
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.user-info .reply-avatar:hover {
  color: #385f8a;
}
.user-info .reply-date {
  margin-left: 10px;
  font-size: 11px;
  color: #08c;
  cursor: pointer;
}
.user-info .reply-date:hover {
  color: #005580;
  text-decoration: underline;
}
.topic-reply .reply-author .user-action {
  font-size: 15px;
  text-align: right;
  flex-grow: 1;
}
.user-action .up-btn,
.user-action .reply-btn {
  opacity: 0.4;
  cursor: pointer;
}
.user-action .up-btn {
  opacity: 0;
}
.user-action .up-btn.active {
  opacity: 1;
}
</style>
