//
// function checkAge() {
//   const inputAge = document.getElementById("age");
//   const ageText = inputAge.value;
//   const errorTag = document.getElementById("error");

//   try {
//     const age = parseInt(ageText); //  purnosonkai rupantor
//     if (isNaN(age)) {
//       // console.log("age not found ", age, ageText);
//       throw "pleace inter number"; //মানে তুমি ম্যানুয়ালি একটা এরর ছুঁড়ে দিচ্ছো যার ভ্যালু "please enter number"।
//     } else if (age < 18) {
//       throw "baccha kaccha dure thako";
//     } else if (age > 30) {
//       throw "murubbi manush aeikhane aishen na";
//     }
//     errorTag.innerHTML = ""; // ✅ যদি কোনো এরর না হয় → পুরোনো এরর মেসেজ মুছে ফেলো0
//   } catch (err) {
//     console.log("error :", err);
//     errorTag.innerHTML = "ERROR :" + err;
//   } finally {
//     //finally হচ্ছে try…catch এর সাথে ব্যবহার করা একটা ব্লক, যেটা সবসময় রান হবে, চাইলেই এরর হোক বা না হোক।

//     console.log("All done inside try catch");
//   }
//   console.log(111);
// }

function checkAge() {
  const inputAge = parseInt(document.getElementById("age").value);
  const errorText = document.getElementById("error");
  try {
    if (isNaN(inputAge)) {
      throw "please inter number";
    } else if (inputAge < 15) {
      throw "baccha kacca dure thako";
    } else if (inputAge > 30) {
      throw "briddo ra aisho na";
    }
    errorText.innerHTML = "";
  } catch (error) {
    console.log("error:", error);
    errorText.innerHTML = "Error : " + error;
  } finally {
    console.log("all done try inside catch");
  }
}
