import "@/assets/CSS/heart.scss";
import { ref } from "vue";
import router from "@/router/index.js";
const isHeartMove = ref(false);
function clickHandle() {
  isHeartMove.value = true;
  router.push({ path: "/home" });
  setTimeout(() => {
    isHeartMove.value = false;
  }, 2200);
}
export { isHeartMove, clickHandle };
