<template>
  <div>
    <div>
      <label>
        <input type="checkbox" v-model="dateCheckR.weekday" @change="quickWeekday" />
        工作日|
      </label>
      <label>
        <input type="checkbox" v-model="dateCheckR.weekend" @change="quickWeekend" />
        周末
      </label>
    </div>
    <div>
      <label v-for="(week, index) in weeks" :key="index">
        <input type="checkbox" v-model="week.checked" @change="weekChange(index)" />
        {{ week.name }}|
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DateSort } from './type/type'

const dateCheckR = ref<DateSort>({
  weekday: false,
  weekend: false
})

const weekdays = [0, 1, 2, 3, 4]
const weekends = [5, 6]
const weeks = ref([
  { name: '星期一', checked: false },
  { name: '星期二', checked: false },
  { name: '星期三', checked: false },
  { name: '星期四', checked: false },
  { name: '星期五', checked: false },
  { name: '星期六', checked: false },
  { name: '星期日', checked: false }
])
//快捷选择
function quickWeekday() {
  const isChecked = dateCheckR.value.weekday
  for (const i of weekdays) {
    weeks.value[i].checked = isChecked
  }
  for (const i of weekends) {
    weeks.value[i].checked = false
  }
  dateCheckR.value.weekend = false
}
function quickWeekend() {
  const isChecked = dateCheckR.value.weekend
  for (const i of weekends) {
    weeks.value[i].checked = isChecked
  }
  for (const i of weekdays) {
    weeks.value[i].checked = false
  }
  dateCheckR.value.weekday = false
}

// 单独选择某一天
function weekChange(index: number) {
  const isWeekday = weekdays.includes(index)
  const isWeekend = weekends.includes(index)
  if (isWeekday) {
    const allWeekdaysSelected = weekdays.every(i => weeks.value[i].checked)
    dateCheckR.value.weekday = allWeekdaysSelected
  } else if (isWeekend) {
    const allWeekendsSelected = weekends.every(i => weeks.value[i].checked)
    dateCheckR.value.weekend = allWeekendsSelected
  }
}
</script>
