<template>
  <div class="page_wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': page === pageNumber
            }"
        @click="$emit('changePage', pageNumber)"
    >
      {{pageNumber}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  //todo: свернуть в объект?
  props: {
    totalPages: {
      type: Number,
      require: true,
      default: 0,
    },
    page: {
      type: Number,
      require: true,
      default: 1,
    },
    limit: {
      type: Number,
      require: true,
      default: 5
    },
  }
}
</script>

<style scoped>
.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
}
</style>