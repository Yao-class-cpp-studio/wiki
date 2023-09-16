---
title: Homepage
---

# 编程入门（C/C++）

<small>
Fall 2023, Instructor: Huanchen Zhang
</small>

!!! note ""

    <span id="ongoing" markdown style="display:none;">
    :fire: Ongoing
    </span>
    <span id="incoming" markdown style="display:none;">
    :alarm_clock: Incoming
    </span>
    <br/>
    <big style="font-size: 2em;"><bold id="hw-title">Assignment 2</bold> &mdash; <span id="rest-time"></span></big><br/>
    <small>Due time: <span id="due-time"></span></small>

<script>
    const schedule = {
        'Assginment 1': ['2023/09/24 23:59:00 GMT+08:00', '2023/10/08 23:59:00 GMT+08:00'],
        'Assginment 2': ['2023/10/08 23:59:00 GMT+08:00', '2023/10/22 23:59:00 GMT+08:00'],
        'Assginment 3': ['2023/10/22 23:59:00 GMT+08:00', '2023/11/05 23:59:00 GMT+08:00'],
        'Assginment 4': ['2023/11/05 23:59:00 GMT+08:00', '2023/11/19 23:59:00 GMT+08:00'],
        'Project 1': ['2023/11/19 23:59:00 GMT+08:00', '2023/12/17 23:59:00 GMT+08:00'],
        'Project 2': ['2023/12/27 23:59:00 GMT+08:00', '2024/01/21 23:59:00 GMT+08:00'],
    };
        function setTime() {
            const cur_date = new Date();
            let due_date = null;
            let title = '';
            let state = 'finished';
            for (let [k, [start, end]] of Object.entries(schedule)) {
                start = new Date(start);
                end = new Date(end);
                if (start < cur_date && cur_date < end) {
                    due_date = end;
                    title = k;
                    state = 'ongoing';
                    break;
                } else if (cur_date > end && (end > due_date || due_date === null)) {
                    title = k;
                    due_date = end;
                } else if (cur_date < start && (start < due_date || due_date === null)) {
                    title = k;
                    due_date = start;
                    state = 'incoming';
                }
            }
            if (state === 'ongoing') {
                document.getElementById('ongoing').style.display = 'inline';
                document.getElementById('incoming').style.display = 'none';
            } else if (state === 'incoming') {
                document.getElementById('incoming').style.display = 'inline';
                document.getElementById('ongoing').style.display = 'none';
            }
            document.getElementById('due-time').innerHTML = due_date.toLocaleString();
            document.getElementById('hw-title').innerHTML = title;
            let diff = due_date.getTime() - cur_date.getTime();
            let str = '';
            if (diff < 0) {
                str = 'Finished';
            } else {
                let s = diff / 1000;
                let m = s / 60;
                let h = m / 60;
                let d = h / 24;
                if (d == 1) {
                    str += '1 day ';
                } else if (d > 1) {
                    str += Math.floor(d) + ' days ';
                }
                str += `${Math.floor(h)%24}h ${Math.floor(m)%60}m ${Math.floor(s)%60}s`;
            }
            let el = document.getElementById('rest-time');
            el.innerHTML = str;
        }
        setTime();
        setInterval(setTime, 500);
</script>

## Tentative Schedule

<table markdown>
<tbody markdown>
<tr>
<th>Week</th><th>Date</th><th>Lecture</th><th>Date</th><th>Homework & Projects</th>
</tr>
<tr markdown>
<td>1</td><td>09/19</td><td>Course Overview & Introduction to C</td><td><time datetime="2023-09-24">09/24</time></td><td markdown>HW1 release</td>
</tr>
<tr>
<td>2</td><td>09/26</td><td>C Basics</td><td></td><td></td>
</tr>
<tr>
<td>3</td><td>10/03</td><td><strong>Holiday⛱️</strong></td><td>10/08</td><td>HW1 <strong>due</strong>, HW2 release</td>
</tr>
<tr markdown>
<td>4</td><td>10/10</td><td>C Memory</td><td></td><td></td>
</tr>
<tr>
<td>5</td><td>10/17</td><td>C Advanced</td><td>10/22</td><td>HW2 <strong>due</strong>, HW3 release</td>
</tr>
<tr markdown>
<td>6</td><td>10/24</td><td>Object-Oriented Programming & C++</td><td></td><td></td>
</tr>
<tr>
<td>7</td><td>10/31</td><td>Inheritance & Polymorphism</td><td>11/05</td><td>HW3 <strong>due</strong>, HW4 release</td>
</tr>
<tr markdown>
<td>8</td><td>11/07</td><td>STL & Modern C++</td><td></td><td></td>
</tr>
<tr markdown>
<td>9</td><td>11/07</td><td>C++ Design Patterns</td><td>11/19</td><td>HW4 <strong>due</strong>, P1 release</td>
</tr>
<tr markdown>
<td>10</td><td>11/14</td><td>Performance Fun!</td><td></td><td></td>
</tr>
<tr markdown>
<td><strong>13</strong></td><td></td><td></td><td>12/17</td><td>P1 <strong>due</strong>, P2 release</td>
</tr>
<tr markdown>
<td><strong>18</strong></td><td></td><td></td><td>01/21</td><td markdown>P2 <strong>due</strong></td>
</tr>
</tbody>
</table>

## About

This site would not have been possible without the effort from Prof. Huanchen Zhang, the TA team, the amazing open source projects:

* [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
* Clang/LLD in WebAssembly: [binji/wasm-clang](https://github.com/binji/wasm-clang)
* [Mathjax](https://www.mathjax.org/)
* [Asciinema](https://asciinema.org/)
* [Ace Editor](https://ace.c9.io/)

...and you! Submit bugs, thoughts, advice, to [the issue tracker](https://github.com/Yao-class-cpp-studio/wiki/issues).
Or even better, submit a pull request by clicking the edit:material-file-edit: button on the top right corner of each page.
