---
title: Homepage
---

# 编程入门（C/C++）

<small>
Fall 2022, Instructor: Huanchen Zhang
</small>

:fire: Ongoing<br/>
<big style="font-size: 2em;"><bold>Assignment 2</bold> &mdash; <span id="rest-time"></span></big><br/>
<small>Due time: <span id="due-time"></span>

<script>
    let due_date = new Date('Oct 18, 2022 23:59:00 GMT+08:00');
    window.addEventListener('load', function(){
        document.getElementById('due-time').innerHTML = due_date.toLocaleString();
        function setTime() {
            let diff = due_date.getTime() - (new Date()).getTime();
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
    })
</script>

## Tentative Schedule

<table markdown>
<tbody markdown>
<tr>
<th>Week</th><th>Date</th><th>Contents</th><th>Assignments & Projects</th>
</tr>
<tr markdown>
<td>1</td><td>9/13</td><td>C/C++ Introduction, Editors, IDEs, Version Control, Writing first program, Compiling, Linking, Variables, Datatypes, Arithmetic Operators</td><td markdown>Assignment 1 `due 9/27`</td>
</tr>
<tr>
<td>2</td><td>9/20</td><td>Array, String, Struct, Control Flow (Branching, Loops)</td><td></td>
</tr>
<tr>
<td>3</td><td>9/27</td><td>Pointers, Pointer Arithmetic, Debugging (gdb), Functions and Modular Programming, Variable Scope</td><td></td>
</tr>
<tr markdown>
<td>4</td><td>10/4</td><td>Recursion, Dynamic Memory Allocations, Garbage Collection</td><td markdown>Assignment 2 `due 10/18`</td>
</tr>
<tr>
<td>5</td><td>10/11</td><td>Encapsulation, Object, Class, Constructor, Destructor, Member Function, Overloading</td><td></td>
</tr>
<tr markdown>
<td>6</td><td>10/18</td><td>Recursion, Dynamic Memory Allocations, Garbage Collection</td><td markdown>Assignment 3 `due 11/1`</td>
</tr>
<tr>
<td>7</td><td>10/25</td><td>Inheritance and Polymorphism, Template, STL</td><td></td>
</tr>
<tr markdown>
<td>8</td><td>11/1</td><td>Inheritance and Polymorphism, Template, STL</td><td markdown>Assignment 4 `due 11/15`</td>
</tr>
<tr markdown>
<td>9-15</td><td></td><td>Coding Projects + Discussion Sessions</td><td>Project 1 & 2</td>
</tr>
</tbody>
</table>
