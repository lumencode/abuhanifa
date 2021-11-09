insert into pathways (name) values ('PathWay #1'), ('PathWay #2');

insert into courses (name, pathway_id) values
('Course #1', 1), ('Course #2', 1), ('Course #3', 2);

insert into chapters (name, course_id) values
('Chapter A', 1), ('Chapter B', 1), ('Chapter #1', 2), ('Chapter #2', 2), ('Chapter #3', 2);

insert into takeaways (content, course_id) values
('The course provides the entire toolbox you need to become a data scientist', 1),
('Impress interviewers by showing an understanding of the data science field', 1),
('Apply your skills to real-life business cases', 3)
;

insert into lessons (name, chapter_id) values
('Preface', 1),
('What is a Domain?', 1),
('What is a Subdomain?', 1),
('What is Domain Driven Design?', 2)
;
