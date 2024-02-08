# Test automation questions

### Testing Basics (ISTQB related)

#### What is the `purpose of testing`? What is not?

**Software testing is a way to assess the quality of the software and to reduce the risk of software failure in
operation.**
\
A **common misperception of testing is that it only consists of running tests**, i.e., executing the software and
checking
the results.
But test execution is only one from the many testing activities.

**The test process also includes activities such as**:

- test planning,
- analyzing,
- designing, and
- implementing tests,
- reporting test progress and results, and
- evaluating the quality of a test object.

**Dynamic Testing:**
Some testing does involve the execution of the component or system being tested; such testing is called **dynamic
testing**.

**Static Testing:**
Other testing does not involve the execution of the component or system being tested; such testing is called **static
testing**.

Another **common misperception of testing is that it focuses entirely on verification of requirements, user stories, or
other specifications**.
While testing does involve checking whether the system meets specified requirements, **it also
involves validation**, which is checking whether the system will meet user and other stakeholder needs in its
operational environment(s).

**Typical Objectives of Testing**:

- To prevent defects by evaluating work products such as requirements, user stories, design, and code
- To verify whether all specified requirements have been fulfilled
- To check whether the test object is complete and validate if it works as the users and other
  stakeholders expect
- To build confidence in the level of quality of the test object
- To find defects and failures by reducing the level of risk of inadequate software quality
- To provide sufficient information to stakeholders to allow them to make informed decisions, especially regarding the
  level of quality of the test object
- To comply with contractual, legal, or regulatory requirements or standards, and/or to verify the test object’s
  compliance with such requirements or standards

#### What is the difference between `Defect, Error, Failure`?

<div style="text-align:center;">
<img src="/docs/advance/error_defect_failure.gif" data-origin="error_defect_failure.gif" alt="error_defect_failure.gif" style="width:40%;">
</div>

1. **Error**: A `mistake in coding` is called an `Error`.
2. **Defect**: An `error found` by a tester is called a `Defect`.
3. **Failure**: The `build does not meet the requirements`, then it is `Failure`.

See for more
details: https://farhan-labib.medium.com/the-confusion-error-vs-fault-vs-bug-vs-defect-vs-failure-c557af04726b

**Errors may occur for many reasons, such as**:

- Time pressure
- Human fallibility
- Inexperienced or insufficiently skilled project participants
- Miscommunication between project participants, including miscommunication about requirements and design
- Complexity of the code, design, architecture, the underlying problem to be solved, and/or the technologies used
- Misunderstandings about intra-system and inter-system interfaces, especially when such intra-system and inter-system
  interactions are large
- New, unfamiliar technologies

#### What are the `seven testing principles`?

![img_38.png](img_38.png)

1. **Testing shows the presence of defects, not their absence** *“We can never say that our system is defect free”* \
   Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the
   probability of undiscovered defects remaining in the software but, even if no defects are found, testing is not a
   proof of correctness.
2. **Exhaustive testing is impossible** *“Impossible to test everything”* \
   Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Rather
   than attempting to test exhaustively, risk analysis, test techniques, and priorities should be used to focus test
   efforts.
3. **Early testing saves time and money** *“We can talk about the Effectiveness of testing”* \
   To find defects early, both static and dynamic test activities should be started as early as possible in the software
   development lifecycle. Early testing is sometimes referred to as a shift left. Testing early in the software
   development lifecycle helps reduce or eliminate costly changes (see section 3.1).
4. **Defects cluster together** *“Small number of modules contain most of the defects”* \
   A small number of modules usually contains most of the defects discovered during pre-release testing, or is
   responsible for most of the operational failures. Predicted defect clusters, and the actual observed defect clusters
   in test or operation, are an important input into a risk analysis used to focus the test effort (as mentioned in
   principle 2).
5. **Beware of the pesticide paradox** *“To detect more defects, we need to change the test data”* \
   If the same tests are repeated over and over again, eventually these tests no longer find any new defects. To detect
   new defects, existing tests and test data may need changing, and new tests may need to be written. (Tests are no
   longer effective at finding defects, just as pesticides are no longer effective at killing insects after a while.) In
   some cases, such as automated regression testing, the pesticide paradox has a beneficial outcome, which is the
   relatively low number of regression defects.
6. **Testing is context dependent** *“Tests are done differently in a different context”* \
   Testing is done differently in different contexts. For example, safety-critical industrial control software is tested
   differently from an e-commerce mobile app. As another example, testing in an Agile project is done differently than
   testing in a sequential software development lifecycle project (see section 2.1).
7. **Absence-of-errors is a fallacy** *“Focus on the business need”* \
   Some organizations expect that testers can run all possible tests and find all possible defects, but principles 2 and
   1, respectively, tell us that this is impossible. Further, it is a fallacy (i.e., a mistaken belief) to expect that
   just finding and fixing a large number of defects will ensure the success of a system. For example, thoroughly
   testing all specified requirements and fixing all defects found could still produce a system that is difficult to
   use, that does not fulfill the users’ needs and expectations, or that is inferior compared to other competing
   systems.

See more details: https://medium.com/@ruwanthiranasinghe1996/7-principles-of-software-testing-25ba867f75ea

#### What is `unit testing`? Who is responsible for write unit tests?

#### What are `Test Levels`, what is the difference between them?

**Test levels are groups of test activities that are organized and managed together.**

**`Test levels:`**

- Component (Unit or Module) testing
- Integration testing
- System testing
- Acceptance testing

**`Test levels are characterized by the following attributes:`**

- Specific objectives
- Test basis, referenced to derive test cases
- Test object (i.e., what is being tested)
- Typical defects and failures
- Specific approaches and responsibilities

<div style="text-align:left;">
<img src="/docs/advance/img_39.png" data-origin="img_39.png" alt="img_39.png" style="width:40%;">
</div>

1. **`Component Testing:`**
    - *Component testing (also known as unit or module testing) focuses on components that are separately testable.*
    - **Objectives of component testing:**
        - Reducing risk
        - Verifying whether the functional and non-functional behaviors of the component are as designed
          and specified
        - Building confidence in the component’s quality
        - Finding defects in the component
        - Preventing defects from escaping to higher test levels
    - **Test basis:**
        - Detailed design
        - Code
        - Data model
        - Component specifications
    - **Test objects:**
        - Components, units or modules
        - Code and data structures
        - Classes
        - Database modules
    - **Typical defects and failures:**
        - Incorrect functionality (e.g., not as described in design specifications)
        - Data flow problems
        - Incorrect code and logic
2. **`Integration Testing:`**
    - *Integration testing focuses on interactions between components or systems.*
    - **Objectives of integration testing:**
        - Reducing risk
        - Verifying whether the functional and non-functional behaviors of the interfaces are as designed
          and specified
        - Building confidence in the quality of the interfaces
        - Finding defects (which may be in the interfaces themselves or within the components or systems)
        - Preventing defects from escaping to higher test levels
    - **Test basis:**
        - Software and system design
        - Sequence diagrams
        - Interface and communication protocol specifications
        - Use cases
        - Architecture at component or system level
        - Workflows
        - External interface definitions
    - **Test objects:**
        - Subsystems
        - Databases
        - Infrastructure
        - Interfaces
        - APIs
        - Microservices
    - **Typical defects and failures:**
        - Incorrect data, missing data, or incorrect data encoding
        - Incorrect sequencing or timing of interface calls
        - Interface mismatch
        - Failures in communication between components
        - Unhandled or improperly handled communication failures between components
        - Incorrect assumptions about the meaning, units, or boundaries of the data being passed between components
        - Failure to comply with mandatory security regulations
3. **`System Testing:`**
    - *System testing focuses on the behavior and capabilities of a whole system or product, often considering the
      end-to-end tasks the system can perform and the non-functional behaviors it exhibits while performing those
      tasks.*
    - **Objectives of system testing:**
        - Reducing risk
        - Verifying whether the functional and non-functional behaviors of the system are as designed and
          specified
        - Validating that the system is complete and will work as expected
        - Building confidence in the quality of the system as a whole
        - Finding defects
        - Preventing defects from escaping to higher test levels or production
    - **Test basis:**
        - System and software requirement specifications (functional and non-functional)
        - Risk analysis reports
        - Use cases
        - Epics and user stories
        - Models of system behavior
        - State diagrams
        - System and user manuals
    - **Test objects:**
        - Applications
        - Hardware/software systems
        - Operating systems
        - System under test (SUT)
        - System configuration and configuration data
    - **Typical defects and failures:**
        - Incorrect calculations
        - Incorrect or unexpected system functional or non-functional behavior
        - Incorrect control and/or data flows within the system
        - Failure to properly and completely carry out end-to-end functional tasks
        - Failure of the system to work properly in the system environment(s)
        - Failure of the system to work as described in system and user manuals
4. **`Acceptance Testing:`**
    - *Acceptance testing, like system testing, typically focuses on the behavior and capabilities of a whole system or
      product.*
    - **Objectives of acceptance testing:**
        - Establishing confidence in the quality of the system as a whole
        - Validating that the system is complete and will work as expected
        - Verifying that functional and non-functional behaviors of the system are as specified
    - **Test basis:**
        - Business processes
        - User or business requirements
        - Regulations, legal contracts and standards
        - Use cases and/or user stories
        - System requirements
        - System or user documentation
        - Installation procedures
        - Risk analysis reports
        - Backup and restore procedures
        - Disaster recovery procedures
        - Non-functional requirements
        - Operations documentation
        - Deployment and installation instructions
        - Performance targets
        - Database packages
        - Security standards or regulations
    - **Test objects:**
        - System under test
        - System configuration and configuration data
        - Business processes for a fully integrated system
        - Recovery systems and hot sites (for business continuity and disaster recovery testing)
        - Operational and maintenance processes
        - Forms
        - Reports
        - Existing and converted production data
    - **Typical defects and failures:**
        - System workflows do not meet business or user requirements
        - Business rules are not implemented correctly
        - System does not satisfy contractual or regulatory requirements
        - Non-functional failures such as security vulnerabilities, inadequate performance efficiency under high
          loads, or improper operation on a supported platform
    - **Common forms of acceptance testing:**
        - **User acceptance testing (UAT)**
        - **Operational acceptance testing (OAT)**
        - **Contractual and regulatory acceptance testing**
        - **Alpha and beta testing**

See more simply: https://medium.com/@sultankocaman/levels-of-testing-b199408f5bf0

#### What is the difference between `verification and validation`?

#### What are `Testing Types`, what is the difference between them?

**A test type is a group of test activities aimed at testing specific characteristics of a software system, or a part of
a
system, based on specific test objectives.**

1. **`Functional Testing:`**
    - Functional testing of a system involves tests that evaluate functions that the system should perform.
    - The functions are “what” the system should do.
    - Functional tests should be performed at all test levels.
    - Functional testing considers the behavior of the software, so black-box techniques may be used to derive test
      conditions and test cases for the functionality of the component or system.
    - The thoroughness of functional testing can be measured through functional coverage.
2. **`Non-functional Testing:`**
    - Non-functional testing of a system evaluates characteristics of systems and software such as usability,
      performance efficiency or security.
    - Non-functional testing is the testing of “how well” the system behaves.
    - Non-functional testing can and often should be performed at all test levels, and done as early as possible.
    - Black-box techniques may be used to derive test conditions and test cases for non-functional testing.
    - It Can be measured through non-functional coverage.
    - Non-functional test design and execution may involve special skills or knowledge. (e.g., Sec. vulnerabilities)
3. **`White-box Testing:`**
    - White-box testing derives tests based on the system’s internal structure or implementation.
    - The thoroughness of white-box testing can be measured through structural coverage.
    - White-box test design and execution may involve special skills or knowledge (e.g., How code built, How data is
      stored)
4. **`Change-related Testing:`**
    - When changes are made to a system, testing should be done to confirm that the functionality is still correct.
        - Confirmation testing: The purpose of a confirmation test is to confirm whether the original defect has been
          successfully fixed.
        - Regression testing: Changes may include changes to the environment, such as a new version of an operating
          system or database management system. Such unintended side effects are called regressions. Regression testing
          involves running tests to detect such unintended side effects.
    - Confirmation testing and regression testing are performed at all test levels.
    - Automation of these tests should start early in the project.

#### What is the difference between `white box, gray box and black box testing`?

1. **Black-box testing:** \
   Black-box test techniques (also called behavioral or behavior-based techniques) are based on an analysis of the
   appropriate test basis (e.g., formal requirements documents, specifications, use cases, user stories, or business
   processes).
    - Test conditions, test cases, and test data are derived from a test basis that may include software requirements,
      specifications, use cases, and user stories
    - Test cases may be used to detect gaps between the requirements and the implementation of the requirements, as well
      as deviations from the requirements
    - Coverage is measured based on the items tested on the test basis and the technique applied to the test basis

2. **White-box testing:** \
   White-box test techniques (also called structural or structure-based techniques) are based on an analysis of the
   architecture, detailed design, internal structure, or the code of the test object.
    - Test conditions, test cases, and test data are derived from a test basis that may include code, software
      architecture, detailed design, or any other source of information regarding the structure of the software
    - Coverage is measured based on the items tested within a selected structure (e.g., the code or interfaces) and the
      technique applied to the test basis
3. **Gray-box testing:** \
   Experience-based test techniques leverage the experience of developers, testers and users to design, implement, and
   execute tests.
    - Test conditions, test cases, and test data are derived from a test basis that may include knowledge and experience
      of testers, developers, users and other stakeholders

#### What is the difference between `UAT (User Acceptance Testing) and System testing`?

1. **`System Testing:`**
    - System testing is like checking if all the parts of a toy work well together before giving it to a child.
    - It tests the entire system or software application to ensure that it meets the specified requirements and
      functions correctly as a whole.
    - Testers simulate real-world scenarios to validate different features and functionalities of the system.
    - System testing is usually done by testers or quality assurance teams before the software is released to users.
2. **`User Acceptance Testing (UAT):`**
    - UAT is like asking the child if they like the toy and if it works the way they want it to.
    - It involves testing the software from the perspective of the end users to ensure that it meets their expectations
      and requirements.
    - Users, or representatives of the users, perform UAT to validate that the software fulfills their needs and is easy
      to use.
    - UAT focuses on user satisfaction, usability, and whether the software meets business objectives.
    - UAT typically occurs towards the end of the development process, after system testing, and before the software is
      deployed to production.

#### Mention the differences between `Regression Testing, Smoke Testing and Retesting`?

#### What is `risk-based testing`, what's the point of it?

**A risk-based approach to testing provides proactive opportunities to reduce the levels of product risk.**
It involves product **risk analysis**, which includes the identification of product risks and the assessment of each
risk’s likelihood and impact.

Risk-based testing draws on the collective knowledge and insight of the project stakeholders to carry out product risk
analysis.
To ensure that the likelihood of a product failure is minimized, risk management activities provide a
**disciplined approach** to:

- **Analyze** (and re-evaluate on a regular basis) what can go wrong (risks)
- **Determine** which risks are important to deal with
- **Implement actions** to mitigate those risks
- **Make contingency plans** to deal with the risks should they become actual events

#### What is the difference between `Static and Dynamic Testing`?

Static testing and dynamic testing can have the same objectives (see section 1.1.1), such as providing an assessment of
the quality of the work products and identifying defects as early as possible.
**Static and dynamic testing complement each other by finding different types of defects.**

- Static testing finds defects in work products directly rather than identifying failures caused by defects when the
  software is run.
- static testing can be used to improve the consistency and internal quality of work products, while dynamic testing
  typically focuses on externally visible behaviors.

**Compared with dynamic testing, typical defects that are easier and cheaper to find and fix through static testing
include:**

- Requirement defects (e.g., inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and redundancies)
- Design defects (e.g., inefficient algorithms or database structures, high coupling, low cohesion)
- Coding defects (e.g., variables with undefined values, variables that are declared but never used,
  unreachable code, duplicate code)
- Deviations from standards (e.g., lack of adherence to coding standards)
- Incorrect interface specifications (e.g., different units of measurement used by the calling system than by the called
  system)
- Security vulnerabilities (e.g., susceptibility to buffer overflows)
- Gaps or inaccuracies in test basis traceability or coverage (e.g., missing tests for an acceptance
  criterion)

#### Compare `V-model, Waterfall, Agile` from testing perspective!

1. **`V-model:`** \
   integrates the test process throughout the development process, implementing the principle of early testing.
   In this model, the execution of tests associated with all test level proceeds sequentially, but in some cases
   overlapping occurs.
2. **`Waterfall:`** \
   the development activities (e.g., requirements analysis, design, coding, testing) are completed one after
   another.
   In this model, test activities only occur after all other development activities have been completed.
3. **`Agile:`** \
   This methodology emphasizes iterative development and collaboration between cross-functional teams.
   Testing in Agile is continuous and integrated throughout the development lifecycle, with frequent feedback loops
   and adaptation to changes.

#### What would you test in case of a simple webshop purchasing function (put items to cart, buy them)? Plan and reason your tests.

### Reporting, Bugs

#### What steps would you follow when you find a defect?

#### Talk about common test reports, and about their details.

#### What does a bug report contain?

#### How would you prioritize a bug?

### Test Automation, Selenium

#### Which testcases should be automated and which shouldn't?

#### Describe a good automated test!

#### What is Selenium, Selenium IDE, Selenium WebDriver?

#### How can be web elements identified?

#### How can you wait for elements, what can go wrong? Collect possible errors and root causes.

#### Compare POM and Keyword Driven Testing!

#### What's the difference between TDD and BDD?

#### What is API testing and why would you use that?

#### What is Data Driven Testing and why is it useful?

#### What are the challenges and best practices with dynamically loading web elements?

#### What are the challenges of Mobile Test Automation?

### Advanced Topics

#### What is the difference between CI and CD?

#### Describe a Continuous Delivery!

#### Compare two popular CI systems, one of them should be Jenkins!

#### What is Docker, why is it useful?

#### Compare two popular Test Automation IDEs, one of them should be the Katalon Studio!
