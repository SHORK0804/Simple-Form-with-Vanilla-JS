
var ageSelect = document.getElementById("age");

// Tạo các tùy chọn cho tuổi từ 10 đến 100
for (var i = 10; i <= 100; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  ageSelect.appendChild(option);
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn việc gửi form đi

  // Lấy giá trị từ các trường input
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // Lấy giá trị của giới tính
  var gender = "";
  var genderRadios = document.getElementsByName("gender");
  for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      gender = genderRadios[i].value;
      break;
    }
  }

  // Lấy giá trị của sở thích
  var hobbies = [];
  var hobbyCheckboxes = document.getElementsByName("hobby");
  for (var i = 0; i < hobbyCheckboxes.length; i++) {
    if (hobbyCheckboxes[i].checked) {
      hobbies.push(hobbyCheckboxes[i].value);
    }
  }

  // Kiểm tra xem đã chọn ít nhất một checkbox sở thích hay chưa
  if (hobbies.length === 0) {
    alert("Vui lòng chọn ít nhất một sở thích.");
    return;
  }

  // Hiển thị thông tin trong console
  console.log("Họ và tên: " + name);
  console.log("Tuổi: " + age);
  console.log("Giới tính: " + gender);
  console.log("Sở thích: " + hobbies.join(", "));

  // Tạo button chứa họ tên đã nhập
  var button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", function () {
    // Đặt lại giá trị của các trường input trong form đầu tiên
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;

    // Đặt lại giá trị của trường giới tính
    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
      genderRadios[i].checked = (genderRadios[i].value === gender);
    }

    // Lấy tất cả các checkbox sở thích
    var hobbyCheckboxes = document.getElementsByName("hobby");
    // Duyệt qua từng checkbox và kiểm tra xem checkbox đó có trong danh sách sở thích hay không
    for (var i = 0; i < hobbyCheckboxes.length; i++) {
      if (hobbies.includes(hobbyCheckboxes[i].value)) {
        hobbyCheckboxes[i].checked = true;
      } else {
        hobbyCheckboxes[i].checked = false;
      }
    }
  });

  // Thêm button vào ô lưu trữ
  var savedData = document.getElementById("savedData");
  savedData.appendChild(button);

  // Reset form
  document.getElementById("myForm").reset();
});

