from data import data_manager


def get_all_modules():
    return data_manager.execute_select('''
        SELECT *
        From module
        ORDER BY module.id;''')


def get_all_categories():
    return data_manager.execute_select('''
        SELECT *
        FROM categories
        ORDER BY categories.id;''')


def get_all_questions():
    return data_manager.execute_select('''
        SELECT *
        FROM question
        ORDER BY question.id;''')


def search_by_modules_and_categories(modules, categories):
    return data_manager.execute_select('''
    SELECT *
    FROM question
    WHERE module_id IN %(modules)s AND category_id IN %(categories)s''', {'modules': modules, 'categories': categories })


def get_question_by_id(id):
    return data_manager.execute_select('''
        SELECT question.title , question.id AS id, question.category_id AS category_id, answer.answer AS answer,
        question.module_id AS module_id
        FROM question
        LEFT JOIN answer on question.id = answer.question_id
        WHERE question.id = %(id)s''',{'id':id})


def new_answer(answer_id, question_id, category_id, module_id, answer):
    return data_manager.execute_dml_statement("""
    INSERT INTO answer(id, answer, module_id, category_id, question_id)
     VALUES (%(answer_id)s, %(answer)s, %(module_id)s, %(category_id)s, %(question_id)s)""",
                                              {'answer_id': answer_id,
                                               'answer': answer,
                                               'module_id': module_id,
                                               'category_id': category_id,
                                               'question_id':question_id})


def get_all_answer():
    return data_manager.execute_select("""SELECT * FROM answer""")

