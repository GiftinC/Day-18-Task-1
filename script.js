document.querySelector("button").addEventListener("click", result)

var container = document.createElement("div");
container.setAttribute("Class", "container");

var row = document.createElement("div");
row.setAttribute("Class", "row");

async function result() {
    row.innerHTML = "";
    try {
        var test = document.getElementById("word").value;
        var data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${test}`);
        var res = await data.json();
        console.log(res);
        var col = document.createElement("div");
        col.setAttribute("Class","column");
        col.innerHTML = `<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header"><b>Result:</b></div>
  <div class="card-body">
    <h5 class="card-title">${res[0].word}</h5>
    <p class="card-text"><b>Meaning-Noun:</b>${res[0].meanings[0].definitions[0].definition}</p>
    <p class="card-text"><b>Meaning-Verb:</b>${res[0].meanings[1].definitions[0].definition}</p>
      <p class="card-text"><b>Meaning-Adjective:</b>${res[0].meanings[2].definitions[0].definition}</p>
  </div>
</div>`
        row.append(col);
        container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error)
    }
}