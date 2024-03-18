# Advanced PHP

### PHP

#### Who is the creator of PHP?
PHP, originally created in 1994 by Rasmus Lerdorf, started as a simple set of Common Gateway Interface (CGI) binaries written in the C programming language. Initially, it was designed to track visits to his online resume and called "Personal Home Page Tools." Over time, PHP has evolved into a major server-side scripting language for web development.

#### What is new in the latest version of PHP?
PHP 8.1 introduces enums, readonly properties, fibers, and never return type among other features. For instance, enums provide a way to define a set of named, constant values, improving code readability and reliability. Readonly properties ensure that a property once set cannot be changed. Fibers facilitate non-blocking code execution. The never return type indicates that a function either exits or throws an exception, ensuring clearer intent and error handling.

#### What are PSRs? Choose 1 and briefly describe it.
PSRs are PHP Standard Recommendations that aim to standardize programming concepts in PHP. For example, `PSR-4` is an autoloading standard, ensuring a consistent way to load classes from file paths. It simplifies the inclusion of PHP files without the need for require or include statements, associating a specific namespace with a directory structure.

#### What is "dollar-dollar"? Write some examples for how to use it.
The $$ is a variable variable in PHP, where the value of one variable is used as the name of another variable.\
In PHP, the $$ syntax is referred to as a variable variable. It's a unique feature that enables dynamic variable handling, allowing you to create variables using the values of other variables. This feature can be useful in dynamic programming scenarios but should be used judiciously to maintain code readability.

```php
$a = 'hello';
$$a = 'world';
echo "$a ${$a}"; // outputs "hello world"
echo "$a $hello"; // also outputs "hello world"
```

#### What are the different types of arrays you can use in PHP?
In PHP, there are three types of arrays: indexed arrays, associative arrays, and multidimensional arrays.
 - Indexed arrays have numeric indices.
 - Associative arrays have named keys.
 - Multidimensional arrays contain other arrays as values.

```php
$indexedArray = array('apple', 'banana', 'cherry');
$associativeArray = array('color' => 'red', 'taste' => 'sweet');
$multiDimensionalArray = array(
  'fruits' => array('apple', 'banana'),
  'colors' => array('red', 'yellow')
);
```

#### What is a Trait?
Traits are a mechanism for code reuse in single inheritance languages like PHP. A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes. Think of them as a way to include additional functionality in a class without extending another class.

```php
trait Logger {
  public function log($message) {
    echo $message;
  }
}

class Application {
  use Logger;
}

$app = new Application();
$app->log("Starting application.");
```

#### What's the difference between `include()` and `require()`? Tell 1-1 examples for both.
`include()` and `require()` are used to insert the contents of one PHP file into another PHP file before the server executes it. The difference lies in their behavior when the file does not exist: `include()` will emit a warning but the script will continue execution, whereas `require()` will emit a fatal error and halt the script.

Example with `include()`:
```php
include('non_existent_file.php');
echo "This line will still be executed.";
```

Example with `require()`:
```php
require('non_existent_file.php');
echo "This line will never be executed if the file does not exist.";
```

#### What is the difference between `new self` and `new static`?
`new self` refers to the class in which it is written, whereas `new static` refers to the class that is called at runtime. This difference is significant in the context of inheritance.
```php
class A {
  public static function make() {
    return new self();
  }
}

class B extends A {}

$b = B::make(); // returns instance of A
```

In contrast, using `new static`:
```php
class A {
  public static function make() {
    return new static();
  }
}

class B extends A {}

$b = B::make(); // returns instance of B
```

The difference between `new self` and `new static` in PHP is crucial when you're dealing with class inheritance and you want to instantiate an object within a class method.
 - `new self`: When you use `new self` inside a class method, PHP will always create an instance of the class where `new self` is defined, regardless of any inheritance context. This behavior adheres to the class definition at compile time, ignoring the actual runtime class of the object that invoked the method.

 - `new static`: In contrast, `new static` is late static binding. It creates an instance of the class that is being used at runtime, respecting the inheritance chain. So, if you call a method on a subclass, `new static` will return an instance of that subclass, not the base class where the method might be defined.

Example: 
```php
class ParentClass {
    public static function createNew() {
        return new self();
    }

    public static function createNewStatic() {
        return new static();
    }
}

class ChildClass extends ParentClass {}

$instance1 = ChildClass::createNew(); // Returns an instance of ParentClass
$instance2 = ChildClass::createNewStatic(); // Returns an instance of ChildClass
```
In the example above, calling `ChildClass::createNew()` invokes `createNew` on `ChildClass`, but it returns an instance of `ParentClass` because `new self()` within `createNew` refers to `ParentClass` (the class where the method is defined).\
On the other hand, `ChildClass::createNewStatic()` returns an instance of `ChildClass`. This is because `new static()` within `createNewStatic` respects the context of the runtime class, which is `ChildClass`.

#### Explain what superglobals are. Name at least 3 of them.
Superglobals are built-in variables in PHP that are always accessible, regardless of scope. They can be used to access information about the request, response, session, server environment, etc.\
Three examples are:
 - $_GET: An associative array of variables passed to the current script via the URL parameters.
 - $_POST: An associative array of variables passed to the current script via the HTTP POST method.
 - $_SESSION: An associative array containing session variables available to the current script.

#### What are magic methods?
Magic methods in PHP are special methods that start with two underscores (`__`) and serve specific purposes or react to specific events in a class. For instance, `__construct()` is called when a new instance of a class is created, `__destruct()` is invoked when an object is about to be destroyed, and `__call()` is triggered when invoking inaccessible methods in an object context.

#### What are generator functions?
Generators provide an easy way to implement simple iterators. They allow you to iterate over a set of data without needing to create an array in memory, which can be more efficient for large datasets.\
A generator function uses `yield` to pass data back to the caller:

```php
function getNumbers() {
   for ($i = 0; $i < 5; ++$i) {
       yield $i;
   }
}

foreach (getNumbers() as $number) {
    echo $number;
}
```

#### How do you pass an argument to a function by reference?
To pass an argument by reference, you prepend an ampersand (`&`) to the argument in the function definition. This means any changes to the parameter are reflected outside the function.
```php
function addFive(&$value) {
    $value += 5;
}

$num = 2;
addFive($num);
echo $num; // Outputs: 7
```

#### What are the key differences between Errors and Exceptions?
Errors are serious problems that occur at the runtime, such as memory allocation issues, which are not expected to be caught by the script. Exceptions are used for exceptional conditions that a script should catch and handle. While Errors represent a fundamental problem that a script cannot recover from, Exceptions can be handled using try-catch blocks to maintain the application flow.

#### What is the difference between .php and .phar files?
A `.php` file is a standard PHP script. A `.phar` (PHP Archive) file is a packaging format for PHP applications, offering a way to distribute entire PHP applications in a single archive and execute them much like a `.jar` file in Java. It simplifies deployment and distribution.

#### What is the use of `session_start()` and `session_destroy()` functions?
`session_start()` initializes session data, allowing you to store and use information across multiple pages. `session_destroy()` clears the session data and ends the session, useful for logging users out or clearing session data for security reasons.

#### How to terminate the execution of a script in PHP?
You can terminate the execution of a script using `exit()` or `die()`. Both functions halt the script's execution immediately and can optionally output a message before exiting.

#### What is Composer used for? What should you do to make it work? Write some real-life examples.
Composer is a dependency manager for PHP, used to manage PHP libraries on which your project depends.\
To use it:
 - Install Composer globally or locally in your project.
 - Create a `composer.json` file in your project root that describes the project's dependencies.
 - Run `composer install` to install the dependencies.
 - In your PHP scripts, use `require 'vendor/autoload.php';` to autoload the libraries.

A real-life example could be requiring a testing library like PHPUnit:
```php
{
    "require-dev": {
        "phpunit/phpunit": "^9"
    }
}
```
Then, running `composer install` would download PHPUnit and its dependencies into your project, making it available for testing.

#### What does a composer.json file contain?
The `composer.json` file in a PHP project specifies the project's dependencies, autoload configuration, scripts, and other metadata like project description and authors. It tells Composer which libraries are needed and their versions so that Composer can download and manage them for you.

#### What is .htaccess?
`.htaccess` is a configuration file used on web servers running the Apache Web Server software. It allows for decentralized management of web server configuration without altering server configuration files. You can use `.htaccess` for URL rewriting, authentication, directory indexing, error documents, and more, directly within the directory where the `.htaccess` file is placed.


### Laravel

#### What is Laravel? What are its main advantages?
`Laravel` is a free, open-source PHP web application framework designed for the development of web applications following the model–view–controller (MVC) architectural pattern. It provides an expressive and elegant syntax intended to ease and accelerate the web development process.

Main Advantages of Laravel:
1. Eloquent ORM (Object-Relational Mapping):\
Laravel includes a built-in ORM system that makes database interactions more intuitive and secure, reducing the complexity of SQL code.

2. Artisan Console:\
Laravel comes with a built-in command-line tool called Artisan which can be used to automate repetitive and tedious programming tasks.

3. Blade Templating Engine:\
Blade is a powerful templating engine in Laravel that allows developers to use plain PHP code in their views, making them more intuitive and maintainable.

4. Migration System for Databases:\
Laravel's database migration system allows you to version-control your database schema, making it easier to collaborate with others and deploy applications.

5. Authentication and Authorization:\
Laravel provides out-of-the-box configuration for authentication and authorization, significantly reducing the amount of boilerplate code needed.

6. Task Scheduling and Queues:\
Laravel's scheduler allows you to fluently define command schedule within the application itself, and its queue service provides a unified API across a variety of different queue backends.

7. Middleware:\
Offers a convenient mechanism for filtering HTTP requests entering your application, useful for inspecting and filtering HTTP requests before they reach your application.

8. Testing:\
Laravel is built with testing in mind. It supports PHPUnit and provides convenient helper methods allowing for expressive testing of your applications.

#### What is Artisan?
`Artisan` is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. You can use it to perform most of those repetitive and tedious programming tasks that most developers avoid.

 - You can create a controller, model, migration, middleware, or even a new Laravel project using Artisan commands.
 - It can also be used for migrating databases, seeding databases, and even generating basic MVC files for your application.
 - Developers can create custom commands to suit their needs.

#### How to put Laravel applications in maintenance mode?
To put a Laravel application in maintenance mode, you can use the Artisan command:
```bash
php artisan down
```
When in maintenance mode, a custom view will be displayed for all requests into the application, allowing you to make updates or changes.
You can also provide responses for specific requests while in maintenance mode using the secret option to specify a bypass token:
```bash
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
```
To bring the application back online, use:
```bash
php artisan up
```

#### What is the purpose of Middlewares in Laravel?
`Middlewares` in Laravel provide a robust mechanism to filter and inspect HTTP requests entering your application. They can be used to perform a variety of tasks, such as:

 - Authenticating users
 - Sanitizing input data
 - Logging and debugging
 - Redirecting users based on specific criteria
 - Modifying HTTP requests or responses

Middlewares can be assigned to specific routes, making them extremely flexible for managing access and behaviors across different parts of your application.

#### What are service providers in Laravel?
`Service Providers` in Laravel are the central place for all Laravel application bootstrapping. Every Laravel application and Laravel package comes with service providers. They are responsible for:

 - Binding components into the Laravel service container
 - Registering event listeners
 - Adding middleware
 - Registering filters and routes

They essentially dictate how your application is pieced together, making them extremely powerful for configuring services, registering services, and performing core application functions.

#### What are factories in Laravel?
In the context of Laravel, `factories` are used to generate large amounts of database records conveniently. This is particularly useful for testing or seeding your database with initial data. Laravel's factory feature:
 - Defines a model's default state with attribute values to get you started quickly.
 - Allows customization of certain attributes when needed.
 - Works seamlessly with Laravel's ORM, Eloquent, enabling rapid insertion of records into the database.

#### What are facades?
`Facades` in Laravel provide a "static" interface to classes that are available in the application's service container. They serve to provide a simplified, readable syntax while maintaining more testability and flexibility than traditional static methods.

 - Facades allow you to use Laravel features without needing to remember long class names that must be injected or configured manually.
 - Essentially, facades are service container wrappers that provide a terse, memorable syntax that facilitates testing and flexibility.
 - Despite the appearance of being static calls, facades leverage Laravel's service container under the hood, maintaining stateless service management and injectability.


### Object-Relational Mapping

#### What is an ORM? What are the benefits, when to use?


#### What is Eloquent? What are the advantages, limitations?


#### What is the difference between PDO and Eloquent? Which are the advantages and disadvantages of each?


#### What are migrations? Why are they important?


#### What are seeders?


#### Name 3 aggregate methods provided by the query builder in Laravel. What can they do for you?


#### What is a Model Observer?


#### How would you define Eloquent Collections?


#### What are Polymorphic Relationships?

