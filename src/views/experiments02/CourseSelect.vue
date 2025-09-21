<template>
  <div class="head">
    <span :style="{ color: totalCredit < fixedCredit ? 'red' : 'green' }">
      {{ totalCredit }}
    </span>
    /{{ fixedCredit }}
  </div>
  <div class="course-select">
    <div class="left">
      <div v-for="(course, index) of courses" :key="index">
        <input type="checkbox" v-model="courseS" :value="course" />
        <label>{{ course.name }}-{{ course.credit }}({{ course.semester }})</label>
      </div>
    </div>
    <div class="right">
      <div v-for="(course, index) of sortedSelectedCoursesR" :key="index">
        {{ course.name }} - {{ course.credit }}({{ course.semester }})
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { listCourses, type Course } from './service/courseService'

const fixedCredit = 17.5
const totalCredit = ref(0)
const courses = listCourses()
const courseS = ref<Course[]>([])
const sortedSelectedCoursesR = ref<Course[]>([])
watch(courseS, newCourses => {
  totalCredit.value = newCourses.reduce((total, course) => {
    return total + course.credit!
  }, 0)
  sortedSelectedCoursesR.value = newCourses.sort((a, b) => {
    return a.semester! - b.semester!
  })
})
</script>
<style>
.course-select {
  display: flex;
  gap: 20px;
}

.left:right {
  width: 50%;
  border: 1px solid red;
  padding: 10px;
  box-sizing: border-box;
}
.head {
  margin-bottom: 20px;
}
</style>
