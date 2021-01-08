<template>
  <div>
    <TopSide id="topSide"></TopSide>
    <div class="row">
      <LeftSide id="leftSide" class="col-3"></LeftSide>
      <CenterSide id="centerSide" class="col-6"></CenterSide>
      <RightSide id="rightSide" class="col-3"></RightSide>
    </div>
  </div>
</template>

<script>
import LeftSide from "@/components/dashboard/LeftSide";
import RightSide from "@/components/dashboard/RightSide";
import CenterSide from "@/components/dashboard/CenterSide";
import TopSide from "@/components/dashboard/TopSide";

export default {
  name: "dashboard",

  components: {
    TopSide,
    LeftSide,
    RightSide,
    CenterSide,
  }
}
</script>

<style scoped>

#topSide {
  height: 200px;
  background: blueviolet;
}

.row {
  /*total - top - header*/
  height: calc(100vh - 200px - 44px);
  margin: 0;
}

#leftSide {
  background: #2c3e50;
}

#centerSide {
  background: aqua;
}


</style>