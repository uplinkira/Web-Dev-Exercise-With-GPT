var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
]; 
// const pacArray = [...] 定义一个包含图像路径的数组。第一个子数组 ["./images/PacMan1.png", "./images/PacMan2.png"] 表示面向右侧（张开和闭合嘴巴）的 Pac-Man，第二个子阵列 ["./images/PacMan3.png", "./images/PacMan4.png"] 表示面向左侧的 Pac-Man。
// const pacArray = [...] defines an array containing paths to images. The first sub-array ["./images/PacMan1.png", "./images/PacMan2.png"] represents Pac-Man facing right (open and closed mouth), and the second sub-array ["./images/PacMan3.png", "./images/PacMan4.png"] represents Pac-Man facing left.


var direction = 0;//0 is to the right and 1 is to the left.
var focus = 0; //is used to toggle between the open and closed mouth


// 图像预加载以避免动画延迟
pacArray.forEach(function(group) {
    group.forEach(function(src) {
      var img = new Image();
      img.src = src;
    });
  });

  

// pacArray is a 2D array where the first dimension (direction) is used to select between two sets of images: one for moving right and one for moving left. pacArray 是一个二维数组，其中第一维 （ direction ） 用于在两组图像之间进行选择：一组用于向右移动，一组用于向左移动。
// pacArray[0] contains image paths for Pac-Man facing right ("./images/PacMan1.png", "./images/PacMan2.png"), alternating between open and closed mouth states. pacArray[0] 包含吃豆人面向右边 （ "./images/PacMan1.png" ， "./images/PacMan2.png" ） 的图像路径，在张开和闭合嘴巴状态之间交替。
// pacArray[1] contains image paths for Pac-Man facing left ("./images/PacMan3.png", "./images/PacMan4.png"), also alternating between open and closed mouth states. pacArray[1] 包含面向左侧 （ "./images/PacMan3.png" ， "./images/PacMan4.png" ） 的吃豆人的图像路径，也在张开和闭合的嘴巴状态之间交替。
// The second dimension (focus) toggles between these two images to simulate Pac-Man opening and closing its mouth.第二个维度 （ focus ） 在这两个图像之间切换，以模拟吃豆人张开和闭上嘴巴。

function Run() {
  let img = document.getElementById("PacMan"); //selects the Pac-Man image element from the DOM using its ID.
  let imgWidth = img.width; //gets the width of the Pac-Man image
  focus = (focus + 1) % 2;//toggles the focus variable between 0 and 1 to switch between open and closed mouth images.
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.transform = `translateX(${pos}px)`;//img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.transform = `translateX(${pos}px)`;
  }
}
//0 is to the right and 1 is to the left.
//The if statement updates the pos variable by adding or subtracting 20 pixels to move Pac-Man left or right, and then updates the style.left property to reposition the image on the page.
// 该 if 语句通过添加或减去 20 个像素来更新 pos 变量以向左或向右移动 Pac-Man，然后更新 style.left 属性以重新定位页面上的图像。
// transform: translateX(npx) 是 CSS 的一种变换方式，用于沿着 X 轴（水平方向）移动元素，其中 n 是移动的像素值。

requestAnimationFrame(Run);
//setInterval(Run, 300);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}
// This function checks whether Pac-Man has hit the boundaries of the page. If moving right (direction == 0) and Pac-Man's right edge (pos + imgWidth) exceeds pageWidth, the direction is changed to left (direction = 1). Conversely, if moving left (direction == 1) and Pac-Man's left edge (pos) is less than 0, the direction is changed to right (direction = 0).此功能检查 Pac-Man 是否已触及页面边界。如果向右移动 （ direction == 0 ） 而吃豆人的右边缘 （ pos + imgWidth ） 超过 pageWidth ，则方向改为左 （ direction = 1 ）。相反，如果向左移动 （ direction == 1 ） 且吃豆人的左边缘 （ pos ） 小于 0，则方向更改为右 （ direction = 0 ）。


module.exports = checkPageBounds;

