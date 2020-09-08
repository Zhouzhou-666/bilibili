<template>
  <div v-if="model" class="editViews">
    <div style="margin-bottom: 10px"><nav-bar></nav-bar></div>
    <div class="uploadfile">
      <div class="uploadimg"><van-uploader preview-size="100vw" :after-read="afterRead" /></div>
      <edit-banner left="头像">
        <img :src="model.user_img"  slot="right" alt="" v-if="model.user_img">
        <img src="../assets/head_img.jpg"  slot="right" alt="" v-else>
      </edit-banner>
    </div>

    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="UID">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="genderShow = true">
      <a href="javascript:;" slot="right">{{model.gender ? '男' : '女'}}</a>
    </edit-banner>
    <edit-banner left="出生日期"></edit-banner>
    <edit-banner left="个性签名" @bannerClick="textShow = true"></edit-banner>
    <div class="editback" @click="$router.back()">返回个人中心</div>
    <div class="editback" @click="$router.push('/login')">退出登录</div>
    <van-dialog v-model="show"
                title="昵称"
                show-cancel-button
                @confirm="confirmClick"
                @cancel="content = ''"
    >
      <van-field v-model="content"  autofocus />
    </van-dialog>

    <van-dialog
            v-model="textShow"
            title="个签"
            show-cancel-button
            @confirm="textareaClick"
            @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="genderShow" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
  import NavBar from "../components/common/NavBar";
  import EditBanner from "../components/common/editBanner";
  export default {
    name: "edit",
    data(){
      return{
        model:{},
        show:false,
        textShow:false,
        genderShow:false,
        content:'',
        actions: [
          { name: '男',val:1 },
          { name: '女',val:0 },
        ],
      }
    }
    ,
    components:{
      EditBanner,
      NavBar
    },
    methods:{
      async selectUser(){
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0]
      },
      async afterRead(file) {
        const fromdata = new FormData()
        fromdata.append('file',file.file)
        const res =  await this.$http.post('/upload',fromdata)
        console.log(res)
        this.model.user_img = res.data.url
        this.UserUpdate()
        //this.$refs.navbar.NavInit()
      },
      async UserUpdate() {
        const res = await this.$http.post('/update/' + localStorage.getItem('id'),this.model)
        if(res.data.code == 200){
          this.$msg.fail('修改成功')
        }
      },
      confirmClick() {
        this.model.name =  this.content
        this.UserUpdate()
        this.content = ''
      },
      textareaClick() {
        this.model.user_desc = this.content
        this.UserUpdate()
        this.content = ''
      },
      onSelect(data){
        this.model.gender = data.val
        this.UserUpdate()
        this.genderShow = false
      }
    },
    created() {
      this.selectUser()
    },

  }
</script>

<style scoped lang="less">
  .editViews{
    color: #333;
    img{
      width: 46px;
      height: 46px;
      border-radius: 50%;
    }
  }
  .uploadfile{
    overflow: hidden;
    position: relative;
    .uploadimg{
      opacity: 0;
      position: absolute;
    }
  }

  .editback{
    margin-top: 5.556vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    color: #999;
    padding: 4.167vw 0;
    font-size: 4vw;
  }


</style>