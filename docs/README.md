---
title: Homepage
---

# 编程入门（C/C++）

<small>
Fall 2025, Instructor: Huanchen Zhang
</small>

<!--
!!! note ""

    <span id="ongoing" markdown style="display:none;">
    :fire: Ongoing
    </span>
    <span id="incoming" markdown style="display:none;">
    :alarm_clock: Incoming
    </span>
    <br/>
    <big style="font-size: 2em;"><bold id="hw-title">Assignment 2</bold> &mdash; <span id="rest-time"></span></big><br/>
    <small><span id="time-type">Due time: </span><span id="due-time"></span></small>

<script>
    const schedule = {
        'Homework 0': ['2024/09/15 00:00:00 GMT+08:00', '2024/09/22 23:59:00 GMT+08:00'],
        'Homework 1': ['2024/09/22 00:00:00 GMT+08:00', '2024/10/06 23:59:00 GMT+08:00'],
        'Homework 2': ['2024/10/06 00:00:00 GMT+08:00', '2024/10/20 23:59:00 GMT+08:00'],
        'Homework 3': ['2024/10/21 12:00:00 GMT+08:00', '2024/11/04 23:59:00 GMT+08:00'],
        'Homework 4': ['2024/11/04 12:00:00 GMT+08:00', '2024/11/18 23:59:00 GMT+08:00'],
        'Project 1': ['2024/11/17 23:00:00 GMT+08:00', '2024/12/15 23:59:00 GMT+08:00'],
        'Project 2': ['2024/12/15 23:00:00 GMT+08:00', '2025/01/12 23:59:00 GMT+08:00'],
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
                document.getElementById('time-type').innerHTML = 'Due time: ';
            } else if (state === 'incoming') {
                document.getElementById('incoming').style.display = 'inline';
                document.getElementById('ongoing').style.display = 'none';
                document.getElementById('time-type').innerHTML = 'Release time: ';
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
<td>1</td><td>09/10</td><td>Course Overview & Introduction to C</td><td><time datetime="2024/09/15">09/15</time></td><td markdown>HW0 release</td>
</tr>
<tr>
<td>2</td><td>09/17</td><td>Holiday!⛱️ No Class</td><td><time datetime="2024/09/22">09/22</time></td><td>HW0 <strong>due</strong>, HW1 release</td>
</tr>
<tr>
<td>3</td><td>09/24</td><td>C Basics</td><td></td><td></td>
</tr>
<tr>
<td>4</td><td><span style="color:red">09/29</span></td><td>C Memory</td><td><time datetime="2024/10/06">10/06</time></td><td>HW1 <strong>due</strong>, HW2 release</td>
</tr>
<tr>
<td>5</td><td>10/08</td><td>C Advanced</td><td></td><td></td>
</tr>
<tr>
<td>6</td><td>10/15</td><td>Object-Oriented Programming & C++</td><td><time datetime="2024/10/20">10/20</time></td><td>HW2 <strong>due</strong>, HW3 release</td>
</tr>
<tr markdown>
<td>7</td><td>10/22</td><td>Inheritance & Polymorphism</td><td></td><td></td>
</tr>
<tr>
<td>8</td><td>10/29</td><td>STL & Modern C++</td><td>11/03</td><td>HW3 <strong>due</strong>, HW4 release</td>
</tr>
<tr markdown>
<td>9</td><td>11/05</td><td>C++ Design Patterns</td><td></td><td></td>
</tr>
<tr markdown>
<td>10</td><td>11/12</td><td>Performance Fun!</td><td>11/17</td><td>HW4 <strong>due</strong>, P1 release</td>
</tr>
<tr markdown>
<td><strong>14</strong></td><td></td><td></td><td>12/15</td><td>P1 <strong>due</strong>, P2 release</td>
</tr>
<tr markdown>
<td><strong>18</strong></td><td></td><td></td><td>01/12</td><td markdown>P2 <strong>due</strong></td>
</tr>
</tbody>
</table>
-->

## About

This site would not have been possible without the effort from Prof. Huanchen Zhang, the TA team, the amazing open source projects:

* [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
* [UOJ](https://github.com/vfleaking/uoj) and its [community version](https://github.com/UniversalOJ/UOJ-System)
* Clang/LLD in WebAssembly: [binji/wasm-clang](https://github.com/binji/wasm-clang)
* [Mathjax](https://www.mathjax.org/)
* [Asciinema](https://asciinema.org/)
* [Ace Editor](https://ace.c9.io/)

...and you! Submit bugs, thoughts, advice, to [the issue tracker](https://github.com/Yao-class-cpp-studio/wiki/issues).
Or even better, submit a pull request by clicking the edit:material-file-edit: button on the top right corner of each page.
