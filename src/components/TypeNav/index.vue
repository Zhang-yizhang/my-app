<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" ref="item">
              <h3
                :class="{hoverClass:currentId == index}"
                @mousemove="onMouseOver(index)"
                @mouseout="onMouseOut()"
              >
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  @click="goSearch"
                >{{c1.categoryName}}</a>
                <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
              </h3>
              <!-- 二三级菜单 -->
              <div class="item-list clearfix" :style="{display:currentId==index?'block':'none'}">
                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        @click="goSearch"
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          @click="goSearch"
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentId: undefined,
      show: true,
    };
  },

  //组件挂载完毕，通知vuex向服务器发送请求
  mounted() {
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      // state参数保存vuex组件数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // onMouseOver(index) {
    //   this.currentId = index;
    // },
    onMouseOver: throttle(function (index) {
      // 三级联动节流
      this.currentId = index;
    }, 50),
    onMouseOut() {
      this.currentId = -1;
    },
    goSearch(event) {
      let ele = event.target;
      console.log("dataset:",ele.dataset);

      let { categoryname, category1id, category2id, category3id } = ele.dataset;

      // 如果具有categoryName的话则为a标签
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          console.log("ronima");
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
    },

    //鼠标移入状态
    mouseEnter() {
      // 如果是非home页面，则show为false
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    mouseLeave() {
      // 如果是非home页面，则show为false
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        // .item:hover{
        //   background: lightblue;
        // }
        .hoverClass {
          background: lightblue;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              cursor: pointer;
              border-bottom: 1px solid #ddd;
            }
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 过度动画效果
    // 进入
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 461px;
      transition: all .5s linear;
    }
  }
}
</style>