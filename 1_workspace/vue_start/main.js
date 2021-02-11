new Vue({
  el: "#app",
  data: {
    message: "",
    tasks: [],
    whatColor: "black",
    text: "赤文字に変更",
  },
  methods: {
    pushTaskList: function() {
      this.tasks.push(this.message)
      this.message = ""
    },
    changeClass: function() {
      if (this.whatColor === "black") {
        this.whatColor = "red"
        this.text = "黒文字に変更"
      } else {
        this.whatColor = "black"
        this.text = "赤文字に変更"
      }
    },
  },
})
