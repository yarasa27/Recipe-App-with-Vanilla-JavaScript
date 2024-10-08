/**
 * @license MIT
 * @author codewithsadee <mohammadsadee24@gmail.com>
 * @copyright codewithsadee 2023
 */

"use strict";

const /** {NodeElement} */ $HTML = document.documentElement;
const /** {Boolean} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}