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

