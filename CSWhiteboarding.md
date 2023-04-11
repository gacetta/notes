# Algo Interview Strategies

Types of Interview Qs
whiteboarding questions

- Algorithm
- System Design
- Small Application - this if often a take home - vanilla JS or UI library (React)

## Successful Interview Session

It's not (just) about finding the right answer
Assessed on:

- problem solving (how you approach unfamiliar problems)
- technical communication (how you explain your approach)
- engineering approach (debugging, testing, patience)
- soft skills (is this someone I'd like to work with for 8-hours/day?)
- programming experience (JS concepts, data structures, clean code)

What are you really being tested for?

1. How well you handle pressure and "not knowing"
2. The process you undertake when you don't know what the answer immediately is

## The Process

1. understand the prompt - ask questions!
2. draw a _good_ example

- large enough sample
- don't reach for the edge case example
- something that is "not special"

3. sketch and/or pseudocode - start with brute force

- allows you to work faster / clearer communication
- allows you to explain WHY it's not the best solution

4. (Review / Refactor) - either before or after coding
5. Code
6. (Review / Refactor)
7. Test - regardless of whether you're using an IDE!

steps 1-3 should take about 33% of the time

## Understanding the question

- inputs and outputs
- if you don't understand the problem right away, try to identify specific questions you have, and then ask them
- identify key information (typically, everything!)
- Take the interviewers' suggestions
- Remember that this is also a chance for you to assess the people you work with - if people are rude, don't take it personally, these people exist, move on with life

## Sketch / Pseudo-Code

Keep it relatively high level, explain approach and steps using plain English (should be language-agnostic)

- You should be able to communicate your ideas to a C++ dev
- 1. Search array. 2. Find biggest 3. Push onto stack

## Good, Clean Code

- correct (for expected and unexpected inputs)
- efficient (time and space, both asymptotic and practical)
- simple (as little code as appropriate)
- Flexible/Robust (avoid hard-coded values)
- Readable (understandable at a glance)
- Maintainable (adaptable to changes)
- _Modularized_ (separated functionality)
- _Error checks_ (validate inputs)
- _Descriptive variable names_ (abbreviate after first use)

## Things to consider during review

after coding, walk through it and review what's happening

- talk about time-complexity
  - use of complex data structures

## Optimization

- BUD: Bottlenecks, Unnecessary Work, Duplicated Work
  _bottleneck_ is the least efficient moment in your code. EX: if you have a newsted loop, target that and attempt to eliminate it
- DIY
  Take an example, and figure out how you would solve for that example. reverse-engineer
- Simplify & Generalize
  Solve a simplified version of the problem
- Base Case & Build
- Data Structures Brainstorm

## Testing

Test code in this order:

1. Conceptual: walk through your code
2. Unusual / Non-standard code (index not initialized to 0, etc.)
3. Hot spots (base cases, division, etc.)
4. Small test cases
5. Special / Edge cases

## What not to do

1. Don't get frustrated if you don't know the answer. Stay calm and relaxed. Break down the problem into small steps, draw pictures, write pseudo-code, and think through it.
2. Don't be overconfident if you know the answer
3. Don't rush
4. Don't look at the board while you talk (if whiteboarding)

## Using space on the whiteboard

Think ahead.

- start writing in the top left of the board
- don't write too large, but make it legible
- skip a line between lines

## Closing Thoughts

- Technical interviews are often more behavioral and procedural than we think
- Pick a way of solving your problem that gives you the best chance at displaying the required steps AND that you are a great colleague
- Be thorough but also swift - keep the conversation moving and always let your interviewer know what is on your mind

## GREAT INTERVIEW QUESTION

What would you expect to see from me 30 days, 60 days, 90 days after joining?

Engineer - what technical challenges are you facing? What is your operational workflow?
