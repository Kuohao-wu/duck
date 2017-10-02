<template>
  <div>
    <ul>
      <li v-for="(item,index) in packageList" :key="index"><router-link :to="item.path">{{item.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import checkList from '@/components/checkList'
  export default {
    components: {
      checkList
    },
    data() {
      return {
        packageList: [
          {
            path: {name: 'checkList'},
            name: 'checkList'
          }
        ]
      }
    }
  }
</script>

