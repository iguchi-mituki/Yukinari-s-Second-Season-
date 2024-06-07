function draw() {
        const array = [];
        array.push(`<a href="../Korakukan/index.html">おおた</a>`);
        array.push(`<a href="../HumanCampusHS/index.html">さとう</a>`);
        array.push(`<a href="../mimasaka/index.html">いぐち</a>`);

        const index = parseInt(Math.random() * array.length);

        const result = ("あなたはつぎに　" + array[index] + "　のページへいきましょう！！");

        document.getElementById("result").innerHTML = result;
      }