function suggestPlace() {
  let mood = document.getElementById("mood").value;
  let result = document.getElementById("result");

  let places = {
    calm: ["كافيه هادي ☕", "مكتبة 📚", "جلسة بحر 🌊"],
    fun: ["ملاهي 🎡", "كوفي مع صديقاتك 🎉", "سينما 🎬"],
    food: ["مطعم برجر 🍔", "بيتزا 🍕", "آيسكريم 🍦"]
  };

  let random = Math.floor(Math.random() * places[mood].length);
  result.innerText = "✨ جربي: " + places[mood][random];
}