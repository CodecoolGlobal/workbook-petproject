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


def get_question_by_title(raw_input):
    title = '%' + raw_input + '%'
    return data_manager.execute_select('''
        SELECT *
        FROM question
        WHERE question.title ILIKE %(title)s
    ''', {'title': title})


def get_specific_questions(dictionary):
    modules = tuple(dictionary['module_id'])
    categories = tuple(dictionary['category_id'])

    if len(modules) == 0:
        return data_manager.execute_select('''
            SELECT *
            FROM question
            WHERE category_id IN %(categories)s
        ''', {'categories': categories})

    if len(categories) == 0:
        return data_manager.execute_select('''
            SELECT *
            FROM question
            WHERE module_id IN %(modules)s
        ''', {'modules': modules})

    else:
        return data_manager.execute_select('''
            SELECT *
            FROM question
            WHERE module_id IN %(modules)s AND category_id IN %(categories)s
        ''', {'modules': modules,
              'categories': categories})
