# Workbook - Pet project (7th TW week)
##Web page that helps to study for PA
####Idea
Create a web page that helps to study the questions form the interview work book. It will have two basic feature: 1. __Notebook Feature__: when you can save your answers to questions. 2. __The Test Feature__: user get a random question, and after answering it, the original answer will be shown that was previously saved in the notebook feature. In both features user is able to choose from categories and sub subjects.
####SQL
Tables:
1. Module - table
    * Primary key - id
    * Modules:
        * ProgBasics
        * Web
        * OOP
1. Category - table
    * primary key   - id
    * foreign key   - module_id
    * Categories:
         * Python, Java Script, SQL
         * Computer Science etc...
1. Question - table
    * primary key   - id
    * foreign key   - module_id
                    - category_id
1. Answer - table
    * primary key   - id
    * foreign key   - module_id,
                    - category_id
                    - question_id
    
