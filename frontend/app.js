function fetchData()
{
  const name = document.getElementById("name").value.toLowerCase();

  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  .then(response => {
    if (!response.ok)
    {
      throw new Error("Could not fetch data");
    }
    return response.json();
  })

  .then(data => {
    try
    {
      // JSON
      console.log(data);
      
      // Front Default
      const frontDefault = data.sprites.front_default;
      const frontDefaultElement = document.getElementById("frontDefault");      
      if (frontDefault) {
        frontDefaultElement.src = frontDefault;
        frontDefaultElement.style.display = "block";
      } else {
        frontDefaultElement.style.display = "none";
      }

      // Back Default
      const backDefault = data.sprites.back_default;
      const backDefaultElement = document.getElementById("backDefault");      
      if (backDefault) {
        backDefaultElement.src = backDefault;
        backDefaultElement.style.display = "block";
      } else {
        backDefaultElement.style.display = "none";
      }

      // Front Female
      const frontFemale = data.sprites.front_female;
      const frontFemaleElement = document.getElementById("frontFemale");      
      if (frontFemale) {
        frontFemaleElement.src = frontFemale;
        frontFemaleElement.style.display = "block";
      } else {
        frontFemaleElement.style.display = "none";
      }

      // Back Female
      const backFemale = data.sprites.back_female;
      const backFemaleElement = document.getElementById("backFemale");      
      if (backFemale) {
        backFemaleElement.src = backFemale;
        backFemaleElement.style.display = "block";
      } else {
        backFemaleElement.style.display = "none";
      }

      // Front Shiny
      const frontShiny = data.sprites.front_shiny;
      const frontShinyElement = document.getElementById("frontShiny");      
      if (frontShiny) {
        frontShinyElement.src = frontShiny;
        frontShinyElement.style.display = "block";
      } else {
        frontShinyElement.style.display = "none";
      }

      // Back Shiny
      const backShiny = data.sprites.back_shiny;
      const backShinyElement = document.getElementById("backShiny");      
      if (backShiny) {
        backShinyElement.src = backShiny;
        backShinyElement.style.display = "block";
      } else {
        backShinyElement.style.display = "none";
      }

      // Front Shiny Female
      const frontShinyFemale = data.sprites.front_shiny_female;
      const frontShinyFemaleElement = document.getElementById("frontShinyFemale");      
      if (frontShinyFemale) {
        frontShinyFemaleElement.src = frontShinyFemale;
        frontShinyFemaleElement.style.display = "block";
      } else {
        frontShinyFemaleElement.style.display = "none";
      }

      // Back Shiny Female
      const backShinyFemale = data.sprites.back_shiny_female;
      const backShinyFemaleElement = document.getElementById("backShinyFemale");      
      if (backShinyFemale) {
        backShinyFemaleElement.src = backShinyFemale;
        backShinyFemaleElement.style.display = "block";
      } else {
        backShinyFemaleElement.style.display = "none";
      }

      // Base Experience
      var baseExperience = data.base_experience;
      document.getElementById("baseExperience").innerHTML = baseExperience;

      // Height
      var height = data.height;
      if (height / 10 != 1)
        document.getElementById("height").innerHTML = height / 10 + " meters";
      else
        document.getElementById("height").innerHTML = height / 10 + " meter";

      // Weight
      var weight = data.weight;
      if (weight / 10 != 1)
        document.getElementById("weight").innerHTML = weight / 10 + " kilograms";
      else
        document.getElementById("weight").innerHTML = weight / 10 + " kilogram";

      // ID
      var id = data.id;
        document.getElementById("id").innerHTML = id;

      // HP
      var hp = data.stats[0].base_stat;
      document.getElementById("hp").innerHTML = hp;

      // Attack
      var attack = data.stats[1].base_stat;
      document.getElementById("attack").innerHTML = attack;

      // Defense
      var defense = data.stats[2].base_stat;
      document.getElementById("defense").innerHTML = defense;

      // Special Attack
      var specialAttack = data.stats[3].base_stat;
      document.getElementById("specialAttack").innerHTML = specialAttack;

      // Special Defense
      var specialDefense = data.stats[4].base_stat;
      document.getElementById("specialDefense").innerHTML = specialDefense;

      // Speed
      var speed = data.stats[5].base_stat;
      document.getElementById("speed").innerHTML = speed;
    }
    catch (error)
    {
      console.error(error)
    }
  })
  .catch(error => console.error(error));
}