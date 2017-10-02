<template>
  <div>
    <section>
      <h2>radio</h2>
      <checkList
        :id="item.id" type="radio"
        :opt-value="item.label"
        v-model="radioChecked"
        :key="item.id"
        v-for="item in radioItems">
        <span :class="{checked: radioChecked.indexOf(item.label) !== -1}">√ {{item.label}}</span>
      </checkList>
    </section>
    <section>
      <h2>checkbox</h2>
      <checkList
        :id="item.id" type="checkbox"
        :opt-value="item.label"
        v-model="checkboxChecked"
        :key="item.id"
        v-for="item in checkboxItems">
        <span :class="{checked: checkboxChecked.indexOf(item.label) !== -1}">√ {{item.label}}</span>
      </checkList>
    </section>
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
        radioItems: [
          {
            label: '男',
            id: 'male'
          },
          {
            label: '女',
            id: 'female'
          }
        ],
        radioChecked:'',
        checkboxItems: [
          {
            label: '苹果',
            id: 'apple'
          },
          {
            label: '雪梨',
            id: 'pear'
          },
          {
            label: '香蕉',
            id: 'bananer'
          }
        ],
        checkboxChecked:[],

      }
    },
    watch: {
      checked(val) {
        console.log(val)
      }
    }
  }
</script>

