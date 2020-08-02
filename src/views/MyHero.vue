<template>
  <div class="about">
    <Loading :show="show"/>
    <Modal id="modalHero" :msg="msg" :description="description"/>
    <div class="container">
      <div class="img-grid">
        <div v-for="item in results" :key="item.id">
          <Card :item="item" @callModal="childMessage"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Modal from '@/components/Modal.vue'
import Loading from '@/components/Loading.vue'
import Card from '@/components/Card.vue'

export default {
  
  components: {
    Modal,
    Loading,
    Card
  },
  data: () => ({
    name: "MyHero",
    description: "",
    show: "show",
    msg: "",
    nome: "",
    result: {},
    results: [],
    imgPath: String,
  }),
  mounted() {
    setTimeout(() => {  this.fetchApiData(); }, 2000);
  },
  methods: {
    childMessage(item){
      console.log("ChildMessageCalled")
      this.msg = item.name
      this.description = item.description
      window.location=document.getElementById('linkModal').href;
    },
    fetchApiData() {
      this.responseAvailable = false;

      fetch(
        "https://gateway.marvel.com:443/v1/public/characters?" +
          "ts=1596234891&apikey=a73d879757824e0abe6ab19136cb0404&hash=880e904711c1c7d493b1703fa2a2dc02&limit=50",
        {
          method: "GET",
          headers: {
            // "x-rapidapi-host": "jokes-database.p.rapidapi.com",
            // "x-rapidapi-key": this.apiKey,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.clone().json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.result = response.body;
          this.results = response.data.results;
          this.responseAvailable = true;
          this.show = ""
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  border: #fff solid 5px;
  background: #fff;
}

/* CSS Grid*/
.img-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
}
/* Bigger than Phones(tablet) */
@media only screen and (min-width: 750px) {
  .img-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Bigger than Phones(laptop / desktop) */
@media only screen and (min-width: 970px) {
  .img-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>