DROP TABLE IF EXISTS module;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS answer;


CREATE TABLE module (
    id          INTEGER PRIMARY KEY NOT NULL,
    name        VARCHAR(200)        NOT NULL
);

CREATE TABLE categories (
    id          INTEGER PRIMARY KEY NOT NULL,
    name        VARCHAR(200)        NOT NULL
);

CREATE TABLE module_categories (
    id          INTEGER PRIMARY KEY NOT NULL,
    module_id   INTEGER             NOT NULL,
    category_id INTEGER             NOT NULL
);

CREATE TABLE question (
    id          INTEGER PRIMARY KEY NOT NULL,
    title       VARCHAR(300)        NOT NULL,
    module_id   INTEGER             NOT NULL,
    category_id INTEGER             NOT NULL
);


CREATE TABLE answer (
    id          INTEGER PRIMARY KEY NOT NULL,
    answer      TEXT,
    module_id   INTEGER             NOT NULL,
    category_id INTEGER             NOT NULL,
    question_id INTEGER             NOT NULL
);
ALTER TABLE ONLY module_categories
    ADD CONSTRAINT fk_module_categories_module_id FOREIGN KEY (module_id) REFERENCES module(id);


ALTER TABLE ONLY module_categories
    ADD CONSTRAINT fk_module_categories_category_id FOREIGN KEY (category_id) REFERENCES categories(id);



ALTER TABLE ONLY question
    ADD CONSTRAINT fk_question_module_id FOREIGN KEY (module_id) REFERENCES module(id);


ALTER TABLE ONLY question
    ADD CONSTRAINT fk_question_category_id FOREIGN KEY (category_id) REFERENCES categories(id);


ALTER TABLE ONLY answer
    ADD CONSTRAINT fk_answer_module_id FOREIGN KEY (module_id) REFERENCES module(id);


ALTER TABLE ONLY answer
    ADD CONSTRAINT fk_answer_category_id FOREIGN KEY (category_id) REFERENCES categories(id);


ALTER TABLE ONLY answer
    ADD CONSTRAINT fk_answer_question_id FOREIGN KEY (question_id) REFERENCES question(id);
