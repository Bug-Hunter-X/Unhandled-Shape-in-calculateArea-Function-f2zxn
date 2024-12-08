# Unhandled Shape in calculateArea Function
This TypeScript code demonstrates an error where the calculateArea function does not handle the case where the shape is a circle. The function uses a switch statement to calculate the area of different shapes. However, there is no case for the circle shape. Therefore, if the shape is a circle, the function will throw an error. 

## Bug
The bug is in the calculateArea function, where the default case throws an error without handling other shapes such as circle.  The solution should involve adding handling for 'circle' shape, or using a more flexible approach such as polymorphism to handle different shapes.