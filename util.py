from data import queries
MODULS = ['1','2','3']
CATEGORIES = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22']


def new_answer(items):
    answers = queries.get_all_answer()
    answer_id = len(answers) + 1
    question_id = items['question_id']
    category_id= items['category_id']
    module_id = items['module_id']
    answer = items['answer']
    queries.new_answer(answer_id,question_id,category_id,module_id,answer)


def save_edited_answer(edited_answer):
    answer_id = edited_answer["answer_id"]
    answer = edited_answer["answer"]
    queries.edit_answer(answer_id, answer)
