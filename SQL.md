SQL tutorials: https://pgexercises.com/questions/basic/
SQL JOINS visuals: https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins

-------
## IN
-------
The `IN` operator allows you to specify multiple values in a `WHERE` clause. Shorthand for multiple `OR` conditions.

*SYNTAX:*

  SELECT column_name(s)
  FROM table_name
  WHERE column_name IN (value1, value2, ...);

*-or-*

  SELECT column_name(s)
  FROM table_name
  WHERE column_name IN (SELECT STATEMENT);

-------
## CASE
-------
The `CASE` expression goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the `ELSE` clause.

If there is no `ELSE` part and no conditions are true, it returns NULL.

*SYNTAX:*

  CASE
      WHEN condition1 THEN result1
      WHEN condition2 THEN result2
      WHEN conditionN THEN resultN
      ELSE result
  END;

-----------
## DISTINCT
-----------
-----------
## ORDER BY
-----------
-----------
## LIMIT
-----------
-----------
## UNION
-----------
The `UNION` operator is used to combine the result-set of two or more `SELECT` statements.

- Every `SELECT` statement within `UNION` must have the same number of columns
- The columns must also have similar data types
- The columns in every `SELECT` statement must also be in the same order

*SYNTAX:*

  SELECT column_name(s) FROM table1
  UNION
  SELECT column_name(s) FROM table2;

### UNION ALL
The `UNION` operator selects only distinct values by default. To allow duplicate values, use `UNION ALL`:

*SYNTAX:* 

  SELECT column_name(s) FROM table1
  UNION ALL
  SELECT column_name(s) FROM table2;