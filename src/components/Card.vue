<template>
  <div class="card">
      <!-- <Modal id="modalHero" :msg="msg" :description="description"/> -->
    <img :src="item.thumbnail.path+'.'+item.thumbnail.extension" @click="imgClick(item)" />
    <div class="content">
      <h4>
        <b>{{item.name}}</b>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String,
    description: String,
    item: Object,
    show: {
      type: String,
      default: "",
    },
  },
  methods: {
      imgClick(item) {
      this.callModal()
    //   debugger
    //   this.msg = item.name
    //   this.description = item.description
    //   window.location=document.getElementById('linkModal').href;
    },
    callModal() {
        debugger
        this.$emit('callModal', this.item)
    }
  },
  computed: {
    pStyles() {
      return this.show == "show" ? "" : "display:none";
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  width: 300px;
  height: 300px;
  border-radius: 5px 5px 0 0;
}
img:hover {
  opacity: 0.5;
  cursor: pointer;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.content {
  padding-bottom: 0.5px;
}
</style>
