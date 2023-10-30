# Advanced Data module

## General SQL

### What are relational databases? Explain the theory behind them!

Relational Databases are systems that store data in tables that are related to each other based on predefined rules.
They follow the principles of the relational model proposed by Edgar F. Codd, ensuring data integrity, accuracy, and
consistency. The relational model is based on the concept of mathematical relation, which is a set of attributes.

### Why SQL is important these days?

SQL (Structured Query Language) is crucial due to its universal adoption in managing and manipulating relational
databases. It remains pivotal for data extraction, transformation, analysis, and other advanced database interactions,
which are essential in today’s data-driven world.

### All the new GUI tools enable me to click a button to write SQL. Why should I spend time learning to write SQL manually?

Knowing how to write SQL manually is imperative. It provides a deeper understanding of database interactions,
facilitates complex queries that GUIs might not support, and is generally more efficient and customizable than relying
solely on GUI tools.

### If SQL is standardized, should you be able to program with SQL on any databases?

While SQL is standardized, variations and extensions exist among different database systems. Some SQL code may not be
portable across all databases due to these differences in syntax, features, and functions supported.

### What makes SQL a non-procedural language?

SQL is non-procedural as it allows users to declare what they want to do without specifying how to do it. It focuses on
the desired result, not the detailed steps to achieve it, in contrast to procedural languages.

### What can you do with SQL?

With SQL, you can create, modify, manage, and query databases. It allows data insertion, update, deletion, and
retrieval, in addition to providing mechanisms for data security, integrity, and transactions management.

---

## DQL

### Do the following statements return the same or different output? Why?

```sql
SELECT *
FROM CHECKS;
select *
from checks;
```

The statements SELECT * FROM CHECKS; and select * from checks; are functionally identical in SQL, as it is typically
case-insensitive in regard to keywords and identifiers, unless quoted.

### The following queries do not work when entered into the command line psql console. Why not?

```sql
Select *
Select *
from checks
Select amount name payee
FROM checks;
```

The given malformed SQL queries lack proper structure, keywords, or have syntax errors, rendering them invalid. Correct
syntax and structure are essential for query execution.

### What shorthand could you use instead of `WHERE a >= 10 AND a <=30`?

The shorthand for WHERE a >= 10 AND a <= 30 is WHERE a BETWEEN 10 AND 30.

### Which function capitalizes the first letter of a character string and makes the rest lowercase?

The INITCAP function can be used to capitalize the first letter of a string and make the rest lowercase.

### Will this query work? Why?

```sql
SELECT COUNT(LASTNAME)
FROM CHARACTERS;
```

The query SELECT COUNT(LASTNAME) FROM CHARACTERS; will work. It counts non-null values in the LASTNAME column.

### Assuming that they are separate columns, which function(s) would splice together FIRSTNAME and LASTNAME?

To concatenate FIRSTNAME and LASTNAME, functions like CONCAT or the || operator can be used, depending on the SQL
dialect.

### Why are so few functions defined in the ANSI standard and so many defined by the individual implementations?

The ANSI standard defines fewer functions to maintain simplicity and universality, leaving room for database vendors to
implement additional functions as per their system’s requirements and capabilities.

### What is the function of the GROUP BY clause?

The GROUP BY clause groups rows returned by a query into summary rows based on the values of one or more columns, often
used with aggregate functions.

### When using the HAVING clause, do you always have to use a GROUP BY also?

The HAVING clause is typically used with GROUP BY to filter groups based on a condition, but some SQL dialects may allow
HAVING without GROUP BY.

### Can you use ORDER BY on a column that is not one of the columns in the SELECT statement?

Yes, you can use ORDER BY on a column not present in the SELECT clause, as long as it is in the table you are querying
from.

---

## Joins

### Explain the different kind of joins! (outer, inner, left, right, natural, etc.)

Joins like INNER, LEFT OUTER, RIGHT OUTER, FULL OUTER, and NATURAL join are used to combine rows from two or more tables
based on related columns. The INNER join returns rows that match in both tables, while the OUTER join returns all rows.

### How many tables can you join on?

There is no strict limit on the number of tables you can join. However, more tables generally mean increased complexity
and potentially decreased performance.

### Would it be fair to say that when tables are joined, they actually become one table?

When tables are joined, they don’t literally become one table but are represented as one result set for the purpose of
the query.

### How many rows would a two-table join produce if one table had 50,000 rows and the other had 100,000?

The number of rows in a two-table join depends on the type of join and the related columns’ matching rows.

### What type of join appears in the following SELECT statement?

```sql
select e.name, e.employee_id, ep.salary
from employee_tbl e,
     employee_pay_tbl ep
where e.employee_id = ep.employee_id;
```

The provided SQL statement represents an old syntax style of INNER JOIN.

### In joining tables are you limited to one-column joins, or can you join on more than one column?

Yes, you can join tables on more than one column.

---

## DML

### Does SQL have a statement for file import/export operations?

Yes, SQL does have statements for file import/export operations,
typically IMPORT/EXPORT or LOAD DATA INFILE/SELECT ... INTO OUTFILE.

### Can you copy data from a table into itself using the INSERT command? You would like to make duplicate copies of all the existing records and change the value of one field.

Yes, you can copy data from a table into itself using the INSERT command with a suitable SELECT subquery.

### What would happen if you issued the following statement?

```sql
DELETE
* FROM COLLECTION;
```

The given SQL statement is invalid, as the DELETE statement does not accept the * wildcard.
The statement DELETE * FROM COLLECTION; would fail due to incorrect syntax. It should be DELETE FROM COLLECTION; to
delete all records from the COLLECTION table.

### Can you remove columns with the ALTER TABLE statement?

Yes, you can remove columns using the ALTER TABLE statement with the DROP COLUMN clause.

### Is the DROP TABLE command functionally equivalent to the DELETE FROM <table_name> command?

DROP TABLE removes the table schema along with its data, whereas DELETE FROM <table_name> only removes the data, leaving
the table schema intact.

### What is the difference between the functionality of the DELETE FROM <table_name> and the TRUNCATE TABLE command?

DELETE FROM <table_name> deletes the data row by row, allowing conditions, while TRUNCATE TABLE removes all rows swiftly
without conditions but maintains the table structure.

### When a table is created, who is the owner?

Typically, the user who creates the table is the owner unless otherwise specified.

### If data in a character column has varying lengths, what is the best choice for the data type?

For character data with varying lengths, using the VARCHAR data type is usually the best choice.
