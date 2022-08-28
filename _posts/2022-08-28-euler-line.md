---
layout: post
title:  "Euler's Line Theorem...A Proof"
tags: Euler, Euler's Line, Classical Geometery, Geometry, Mathematics, Proof
---

A while ago, after reading coxeter's book "Intoduction to geometry". I tried to find my own proof that in any triangle the center of gravity, the circumcenter and the orthocenter lie on a same line, the so called euler's line. In this article I present the proof I came up with.

Let's consider a triangle $ABC$ not right angled at $A$ nor $C$, denote by $O$ its circumcenter, by $G$ its center of gravity, and by $H$ its orthocenter.

First let's put a cartesian coordinate system such that $O$ is the origin and the X-axis is parallel to $AC$. So that we will, consequently, have that the Y-axis intersect $AC$ perpendicularly in the middle, and thus $x_A = -x_C$ and $y_A = y_C$.
Thus we can easily conclude that

$$\left\{
\begin{array}{c}
x_G = {1\over 3}(x_A + x_B + x_C) = {1 \over 3}x_B\\
y_G = {1\over 3}(y_A + y_B + y_C) ={2\over 3} y_A + {1 \over 3} y_B
\end{array}
\right.$$

If $x_B=x_G=0$ then obviously $x_H=0$ because the Y-axis would be an altitude of the triangle. In this case the euler's line is just the Y-axis.

Now, in the case where $x_G\neq0$, call $H'$ the intersection of $(OG)$ and the altitude of $AC$. As the line $(BH')$ , being perpendicular to the X-axis, is defined by the equation $x = x_B$ , we have

$$\left\{
\begin{array}{c}
x_{H'} = x_B\\
y_{H'}  = ({y_G \over x_G}) \times x_{H'} = 2y_A+y_B
\end{array}
\right.$$

Now, if we can prove that $H'$ lies on the altitude of $AB$, the proof will be complete.
To prove that it suffies to show that the lines $(CH')$ and $(AB)$ are perpendicular, or equivalently that the product of their slopes is equal to $-1$.
This product is

$${y_A - y_B\over x_A - x_B} \times {y_{H'} - y_C \over x_{H'} - x_C} =
{ y_A - y_B \over x_A - x_B} \times { 2y_A+y_B - y_A \over x_B + x_A}
= - {y_A^2 - y_B^2 \over x_B^2 - x_A^2}$$

But as $A$, $B$ and $C$ lie on the same circle centered at the origin, we have

$$R^2 = x_A^2 + y_A^2 = x_B^2+y_B^2  \implies {y_A^2 - y_B^2 \over x_B ^2-x_A^2}=1$$

And thus the proof is complete.

![Euler's Line Theorem](euler_line.svg)

This shows how a right choice of coordinate system can make things obvious.
