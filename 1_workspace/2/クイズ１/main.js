new Vue({
  el: "#quiz",
  data: {
    message: "",
    whatClass: "hidden",
    quizNumber: 0,
    quizes: [
      {
        text: "この星の名前は何でしょう？",
        image: "./images/Ganymede.jpg",
        choices: [
          {
            text: "ゴリアテ",
            isCorrect: false,
            feedback:
              "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
          },
          {
            text: "ゼニガメ",
            isCorrect: false,
            feedback:
              "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
          },
          {
            text: "ガニメデ",
            isCorrect: true,
            feedback: "正解！ガニメデは、木星の第三惑星だよ！",
          },
        ],
      },
      {
        text: "いま、何問目？",
        image: "./images/Two.jpeg",
        choices: [
          {
            text: "１",
            isCorrect: false,
            feedback: "残念！ひとつ少ないよ。",
          },
          {
            text: "２",
            isCorrect: true,
            feedback: "正解！１でも３でもないよ！",
          },
          {
            text: "３",
            isCorrect: false,
            feedback: "残念！ひとつ多いよ。",
          },
        ],
      },
      {
        text: "この城の名前は？",
        image: "./images/Maruoka.png",
        choices: [
          {
            text: "丸岡城",
            isCorrect: true,
            feedback: "正解！どこからどうみても丸岡城だね。",
          },
          {
            text: "丸亀城",
            isCorrect: false,
            feedback: "残念！どこからどうみても丸亀城ではないよ。",
          },
          {
            text: "丸子城",
            isCorrect: false,
            feedback: "残念！どこからどうみても丸子城ではないよ。",
          },
        ],
      },
    ],
  },
  methods: {
    choose: function(choiceNumber) {
      this.message = this.quizes[this.quizNumber].choices[choiceNumber].feedback
      if (
        this.quizes[this.quizNumber].choices[choiceNumber].isCorrect &&
        this.quizNumber < 2
      ) {
        this.whatClass = ""
      }
    },
    nextQuiz: function() {
      this.quizNumber++
      this.message = ""
      this.whatClass = "hidden"
    },
  },
})
